'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Camera, Upload, RotateCcw, Play } from 'lucide-react';
import Link from 'next/link';
import { getThumbnailUrl, formatPlayCount } from '@/lib/utils';
import { incrementPlayCount, getTests } from '@/lib/supabase';
import { Locale } from '@/i18n';
import AdSensePlaceholder, { ADSENSE_CONFIG } from '@/lib/adsense';
import ProductRecommendations from '@/components/ProductRecommendations';
import { searchAliExpressProducts } from '@/lib/aliexpress';
import { HonestFacialEvaluationResult, calculateHonestFacialEvaluationResult } from '@/lib/honestFacialEvaluationData';
import { FaceLoveFortuneTestClientProps } from '@/lib/faceLoveFortuneData';
import { Affect, computeAffectFromLandmarks } from '@/lib/mediapipeAffect';

export default function HonestFacialEvaluationTestClient({ 
  locale, 
  slug, 
  title, 
  description,
  thumbnail,
  playCount = 0,
  similarTests = []
}: FaceLoveFortuneTestClientProps) {
  const t = useTranslations('honestFacialEvaluationTest');
  const tGlobal = useTranslations();
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<HonestFacialEvaluationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [faceDetected, setFaceDetected] = useState(false);
  const [faceQuality, setFaceQuality] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showImageSourceModal, setShowImageSourceModal] = useState(false);
  const [showFaceDetectError, setShowFaceDetectError] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(true);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [aliProducts, setAliProducts] = useState<any[]>([]);
  const [similarTestsState, setSimilarTestsState] = useState<any[]>([]);
  const [popularTestsState, setPopularTestsState] = useState<any[]>([]);
  const [showImagePreview, setShowImagePreview] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // Helper function to generate psychology message (moved before analyzeFace to avoid hook order issues)
  const generateTruePsychologyMessage = (inputEmotions: Record<string, number>) => {
    // 감정별 임계값 설정 (0.2 이상이면 존재하는 것으로 간주)
    const emotionThreshold = 0.2;
    const emotionPresence: Record<string, boolean> = {
      happy: inputEmotions.happy > emotionThreshold,
      sad: inputEmotions.sad > emotionThreshold,
      neutral: inputEmotions.neutral > emotionThreshold,
      angry: inputEmotions.angry > emotionThreshold,
      surprised: inputEmotions.surprised > emotionThreshold,
      fearful: inputEmotions.fearful > emotionThreshold,
      disgusted: inputEmotions.disgusted > emotionThreshold,
      contempt: inputEmotions.contempt > emotionThreshold
    };
    
    // 활성화된 감정의 개수 확인
    const activeEmotions = Object.values(emotionPresence).filter(v => v).length;
    const activeKeys = Object.keys(emotionPresence).filter(k => emotionPresence[k]);
    
    // Emotion labels from translation
    const emotionLabels: Record<string, string> = {
      happy: t('ui.emotion.happy'),
      sad: t('ui.emotion.sad'),
      neutral: t('ui.emotion.neutral'),
      angry: t('ui.emotion.angry'),
      surprised: t('ui.emotion.surprised'),
      fearful: t('ui.emotion.fearful'),
      disgusted: t('ui.emotion.disgusted'),
      contempt: t('ui.emotion.contempt')
    };
    
    // 3개 이상 감정이 활성화된 경우
    if (activeEmotions >= 3) {
      if (locale === 'ko') {
        return "표정을 자세히 보니, 여러 감정들이 동시에 섞여 있네요. 한 가지 감정만으로는 인생을 설명할 수 없습니다. 그 복합적인 마음들이 당신을 더욱 인간답게 만드는 거예요. 완전한 하나의 감정만 존재할 수는 없으니까요.";
      } else if (locale === 'ja') {
        return "表情を詳しく見ると、複数の感情が同時に混ざっています。一つの感情だけでは人生を説明できません。その複合的な心があなたをより人間らしくしています。完全な一つの感情だけが存在することはできないのです。";
      } else if (locale === 'zh-CN') {
        return "仔细看你的表情，多种情绪同时交织在一起。仅凭一种情感无法诠释人生。那些复杂的心绪让你更有人性。完整的单一情绪不可能存在。";
      } else if (locale === 'zh-TW') {
        return "仔細看你的表情，多種情緒同時交織在一起。僅憑一種情感無法詮釋人生。那些複雜的心緒讓你更有人性。完整的單一情緒不可能存在。";
      } else if (locale === 'vi') {
        return "Nhìn vào biểu cảm của bạn, nhiều cảm xúc đan xen cùng lúc. Bạn không thể giải thích cuộc sống chỉ bằng một cảm xúc. Những tâm trí phức tạp đó làm cho bạn trở nên con người hơn. Không thể tồn tại hoàn toàn một cảm xúc duy nhất.";
      } else if (locale === 'id') {
        return "Melihat ekspresi Anda dengan hati-hati, beberapa emosi bercampur bersamaan. Anda tidak bisa menjelaskan kehidupan hanya dengan satu emosi. Pikiran kompleks itu membuat Anda lebih manusia. Tidak mungkin hanya satu emosi yang sempurna.";
      } else {
        return "Looking at your expression carefully, multiple emotions are mixed together at once. You can't explain life with just one emotion. Those complex minds make you more human. It's because one complete emotion cannot exist.";
      }
    }
    
    // 2개 감정 조합 (단순화: 첫 번째 메시지만 반환)
    if (activeEmotions === 2) {
      const [first, second] = activeKeys;
      
      if ((first === 'happy' && second === 'sad') || (first === 'sad' && second === 'happy')) {
        if (locale === 'ko') {
          const messages = [
            "웃고 계시지만... 제 눈에는 다 보입니다. 눈가와 입꼬리의 미묘한 하강만 봐도 당신 마음속 깊은 곳에 자리한 그 슬픔이 느껴집니다.",
            "표면적으로는 밝게 웃고 있지만, 그 안에는 조용한 슬픔이 자리하고 있군요.",
            "행복과 슬픔이 함께 있는 표정이네요. 기쁜 일이 있어도 가끔은 작은 슬픔이 밀려오는 법이죠."
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " 괜찮습니다. 항상 밝을 필요는 없으니까요. 그래도 속마음을 누군가에게 털어놓는 용기를 가져보세요.";
        } else if (locale === 'ja') {
          const messages = [
            "笑っていますが、私の目にはすべてが見えます。目の周りと口元の微妙な下降を見るだけで、心の奥底に位置するその悲しみが感じられます。",
            "表面的には明るく笑っていますが、その中には静かな悲しみが宿っています。",
            "幸せと悲しみが共にある表情ですね。嬉しいことがあっても、時々小さな悲しみが押し寄せるものです。"
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " 大丈夫です。常に明るくある必要はありません。心の内を誰かに打ち明ける勇気を持ってみてください。";
        } else if (locale === 'zh-CN') {
          const messages = [
            "你在微笑，但我全都看见了。光看眼角和嘴角的细微下垂，就能感受到你内心深处的悲伤。",
            "表面上是明朗的笑容，但其中隐藏着静默的悲伤。",
            "表情中有幸福也有悲伤。即使有开心的事，偶尔也会涌来小小的悲伤。"
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " 没关系。不必总是积极。试着鼓起勇气向某人敞开心扉。";
        } else if (locale === 'zh-TW') {
          const messages = [
            "你在微笑，但我全都看見了。光看眼角和嘴角的細微下垂，就能感受到你內心深處的悲傷。",
            "表面上是明朗的笑容，但其中隱藏著靜默的悲傷。",
            "表情中有幸福也有悲傷。即使有開心的事，偶爾也會湧來小小的悲傷。"
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " 沒關係。不必總是積極。試著鼓起勇氣向某人敞開心扉。";
        } else if (locale === 'vi') {
          const messages = [
            "Bạn đang cười, nhưng tôi thấy hết. Chỉ cần nhìn sự hạ xuống tinh tế quanh mắt và khóe miệng, tôi cảm nhận được nỗi buồn sâu trong lòng bạn.",
            "Bề ngoài thì cười rạng rỡ, nhưng bên trong có nỗi buồn yên lặng.",
            "Biểu cảm có cả hạnh phúc và buồn bã. Dù có việc vui, thỉnh thoảng vẫn có nỗi buồn nhỏ ập đến."
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " Không sao cả. Không cần luôn tích cực. Hãy mạnh dạn mở lòng với ai đó.";
        } else if (locale === 'id') {
          const messages = [
            "Anda tersenyum, tapi saya melihat semuanya. Hanya dengan melihat penurunan halus di sekitar mata dan sudut mulut, saya merasakan kesedihan di dasar hati Anda.",
            "Di permukaan tersenyum cerah, tapi di dalamnya ada kesedihan yang tenang.",
            "Ekspresi yang memiliki kebahagiaan dan kesedihan bersamaan. Bahkan jika ada hal yang menyenangkan, terkadang kesedihan kecil datang."
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " Tidak apa-apa. Tidak perlu selalu ceria. Cobalah untuk memiliki keberanian membuka hati kepada seseorang.";
        } else {
          const messages = [
            "You're smiling, but I can see it all. Just by seeing the subtle drop around your eyes and corners of your mouth, I can feel that sadness deep in your heart.",
            "On the surface you're smiling brightly, but inside there's a quiet sadness.",
            "Your expression has both happiness and sadness. Even when there are happy things, sometimes a little sadness comes."
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " It's okay. You don't need to always be bright. Try to have the courage to open your heart to someone.";
        }
      }
      
      if ((first === 'happy' && second === 'neutral') || (first === 'neutral' && second === 'happy')) {
        if (locale === 'ko') {
          const messages = [
            "미묘한 미소를 짓고 계시지만, 동시에 표정의 다른 부분에서 평온함도 느껴집니다.",
            "밝지만 과하지 않은 미소가 느껴집니다.",
            "표정에서 행복과 평온이 고르게 섞여 있네요."
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " 행복과 평온이 함께 자리하는 마음이지요. 때로는 그런 조화가 가장 아름다운 거예요.";
        } else if (locale === 'ja') {
          const messages = [
            "微妙な微笑みを浮かべていますが、同時に表情の他の部分から平穏さも感じられます。",
            "明るいけれど過度でない微笑みが感じられます。",
            "表情から幸せと平穏が均等に混ざっています。"
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " 幸せと平穏が共に宿る心ですね。時にはそんな調和が最も美しいのです。";
        } else if (locale === 'zh-CN') {
          const messages = [
            "你脸上有微妙的笑容，同时表情的其他部分也流露出平静。",
            "有明亮但不张扬的微笑。",
            "表情中幸福与平静均匀地交融。"
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " 这是幸福与平静共存的心境。有时这种和谐最美。";
        } else if (locale === 'zh-TW') {
          const messages = [
            "你臉上有微妙的笑容，同時表情的其他部分也流露出平靜。",
            "有明亮但不張揚的微笑。",
            "表情中幸福與平靜均勻地交融。"
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " 這是幸福與平靜共存的心境。有時這種和諧最美。";
        } else if (locale === 'vi') {
          const messages = [
            "Một nụ cười tinh tế xuất hiện, đồng thời sự bình yên cũng được cảm nhận ở các phần khác của biểu cảm.",
            "Có một nụ cười tươi sáng nhưng không quá mức.",
            "Trong biểu cảm có sự trộn lẫn đều của hạnh phúc và bình yên."
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " Đó là tâm trí có cả hạnh phúc và bình yên. Đôi khi sự hài hòa đó là đẹp nhất.";
        } else if (locale === 'id') {
          const messages = [
            "Senyum halus muncul, sementara ketenangan juga terasa di bagian lain ekspresi.",
            "Ada senyuman cerah tapi tidak berlebihan.",
            "Dalam ekspresi ada campuran seimbang dari kebahagiaan dan ketenangan."
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " Itu adalah pikiran yang memiliki kebahagiaan dan ketenangan bersama. Kadang harmoni seperti itu adalah yang paling indah.";
        } else {
          const messages = [
            "A subtle smile appears, while calmness is also felt in other parts of the expression.",
            "There's a bright but not excessive smile.",
            "In the expression there's an even mix of happiness and calm."
          ];
          return messages[Math.floor(Math.random() * messages.length)] + " It's a mind that has both happiness and peace. Sometimes such harmony is the most beautiful.";
        }
      }
      
      // Other combinations - return generic message
      if (locale === 'ko') {
        return `표정에서 ${emotionLabels[first]}과 ${emotionLabels[second]}의 미묘한 공존을 느낍니다. 한 가지 감정만 존재하지 않는 게 인간입니다.`;
      } else if (locale === 'ja') {
        return `表情から${emotionLabels[first]}と${emotionLabels[second]}の微妙な共存を感じます。一つの感情だけが存在しないのが人間です。`;
      } else if (locale === 'zh-CN') {
        return `你的表情中能感受到${emotionLabels[first]}与${emotionLabels[second]}的微妙共存。人类不会只存在一种情感。`;
      } else if (locale === 'zh-TW') {
        return `你的表情中能感受到${emotionLabels[first]}與${emotionLabels[second]}的微妙共存。人類不會只存在一種情感。`;
      } else if (locale === 'vi') {
        return `Tôi có thể cảm nhận sự cùng tồn tại tinh tế của ${emotionLabels[first]} và ${emotionLabels[second]} trong biểu cảm của bạn. Con người không thể chỉ tồn tại với một cảm xúc.`;
      } else if (locale === 'id') {
        return `Saya dapat merasakan keberadaan halus dari ${emotionLabels[first]} dan ${emotionLabels[second]} dalam ekspresi Anda. Manusia adalah tidak hanya memiliki satu emosi.`;
      } else {
        return `I can sense the subtle coexistence of ${emotionLabels[first]} and ${emotionLabels[second]} in your expression. It is human to not exist with just one emotion.`;
      }
    }
    
    // 1개 감정만 활성화된 경우
    if (activeEmotions === 1) {
      const emotion = activeKeys[0];
      
      if (emotion === 'happy') {
        if (locale === 'ko') {
          const messages = [
            "웃고 계시지만, 눈빛 어딘가에 걱정의 그림자가 보여요. 마음 한구석에 응어리가 있으시군요. 그 응어리를 풀기 위해 매일 작은 것이라도 자신에게 상을 주세요. 새로운 취미를 시작하거나 친구들에게 감사 인사를 전하는 것도 좋은 방법이에요. 누적된 스트레스를 조금씩 풀어가는 것이 중요합니다.",
            "밝은 미소 뒤에는 쓸쓸함이 숨어 있네요. 당신의 웃음은 결코 가볍지 않아요. 혼자만의 시간을 허용하고, 그 쓸쓸함을 인정해보세요. 일기를 쓰거나 산책하면서 자신의 감정을 들여다보는 시간을 가져보세요. 외로움은 인간이 느낄 수 있는 가장 자연스러운 감정 중 하나입니다.",
            "행복한 표정이지만, 마음 한편에는 근심이 자리하고 있네요. 웃고 있어도 걱정은 있으시군요. 그 근심을 나누는 사람이 필요합니다. 주변에 신뢰할 수 있는 사람이 있다면 하루에 하나씩이라도 털어놓아보세요. 혼자 감당하려 하지 마세요. 무게를 나눠질수록 가벼워집니다.",
            "환하게 웃고 있지만, 눈 한구석에 피로가 보여요. 마음에 무거운 짐이 있으시군요. 이제 휴식을 허용하세요. 하루에 30분이라도 아무것도 하지 않는 시간을 만들어보세요. 무언가를 해야 한다는 강박에서 벗어나 단순히 존재하는 것만으로도 충분하다는 걸 기억하세요.",
            "밝은 표정 뒤에는 숨겨진 고민이 있는 것 같아요. 당신의 미소는 복잡한 이야기를 담고 있네요. 그 이야기를 글로 써보세요. 뇌는 쓰는 행위를 통해 생각을 정리하고 해결책을 찾습니다. 매일 10분씩이라도 자유롭게 글을 써보세요. 새로운 관점을 얻을 수 있을 거예요.",
            "웃고 계시지만, 마음 한편에는 응어리가 보여요. 누구에게도 말할 수 없는 걱정이 있으시군요. 말할 수 없는 일이라면, 적어보세요. 언젠가 말할 준비가 되기 전까지는 괜찮습니다. 우선 자신에게 솔직해지세요. 가면을 벗고 진짜 자신을 돌아보는 용기가 필요해요.",
            "밝게 웃고 있지만, 눈가에 약간의 피로가 느껴져요. 행복한 것 같지만 마음 한편엔 고민이 있으시군요. 슬로우 다운해보세요. 모든 일을 빠르게 처리하려 하지 마세요. 차근차근, 하나씩 해결해나가면 됩니다. 완벽하지 않아도 괜찮아요. 과정이 더 중요합니다.",
            "웃음 뒤에는 쓸쓸함이 숨어 있네요. 완전히 행복한 사람은 이 세상에 없으니까요. 그 쓸쓸함과 함께하는 방법을 배워보세요. 모든 감정은 때를 만나 사라집니다. 그 감정이 당신을 지배하게 하지 말고, 당신이 감정을 관찰하는 관찰자가 되세요. 마음챙김 명상도 도움이 될 거예요.",
            "미소 지으시지만, 마음 한구석에 근심이 보여요. 무엇인가에 대해 걱정하고 계시군요. 걱정하는 것 자체보다는 그 걱정이 실제로 일어날 가능성이 얼마나 되는지 평가해보세요. 대부분의 걱정은 실제로 일어나지 않습니다. 준비는 하되, 걱정은 과도하게 하지 마세요.",
            "밝게 웃고 계시지만, 제 눈에는 다 보여요. 당신 마음속 깊은 곳에 자리한 그 쓸쓸함이 느껴집니다. 감정을 없애려 하지 마세요. 대신 그것을 이해하고 공감해주세요. '오늘 힘들었구나, 피곤했구나'라고 자신을 위로하는 시간을 가져보세요. 자기 자신과의 대화는 가장 치유적입니다.",
            "웃고 있지만, 눈빛에는 걱정이 담겨 있네요. 행복한 것 같지만 마음 한편에 고민이 있으시군요. 미래에 대한 불안보다는 현재에 집중해보세요. 오늘 하루를 잘 보내는 것에 집중하면 내일은 스스로 맞아떨어집니다. 작은 성공들을 축하하며 힘을 얻으세요.",
            "밝은 표정 뒤에는 피로와 걱정이 숨어 있어요. 당신의 웃음은 무겁게 느껴지네요. 무게감을 덜어내려면, 매일 한 가지씩 버려야 할 것을 찾아보세요. 불필요한 약속, 과도한 기대, 완벽주의자 같은 태도. 이런 것들을 하나씩 제거하면 마음이 가벼워질 거예요.",
            "웃고 계시지만, 마음 한편에는 응어리가 자리하고 있군요. 밝은 표정 뒤에는 복잡한 감정이 있으시네요. 그 복잡함을 간단하게 만들려 하지 마세요. 사람의 마음은 원래 복잡한 거예요. 대신 그 각각의 감정에 이름을 붙여보세요. '지금 나는 슬프고, 불안하고, 약간 화가 나네'라고 인정하면 해결책이 보일 거예요.",
            "환하게 웃고 있지만, 눈가의 미세한 변화에서 걱정이 보여요. 행복해 보이지만 마음 한구석에 근심이 있으시군요. 누군가를 위해 웃는 것이 아니라, 진짜로 행복할 때 웃어보세요. 가짜 웃음보다는 작은 진실한 미소가 더 치유적입니다. 자신에게 진실해지세요.",
            "밝은 미소를 짓고 계시지만, 제 눈에는 당신의 마음속을 다 꿰뚫어 보입니다. 응어리와 걱정이 섞여 있네요. 감정은 참을 수 있는 게 아닙니다. 흘려보내야 해요. 눈물이 난다면 흘리세요. 분노가 난다면 샤워를 하거나 운동을 하세요. 감정의 물결은 지나가게 내버려두세요.",
            "웃고 계시지만, 눈빛 어딘가에 쓸쓸함이 흐르고 있어요. 행복한 것 같지만 마음 한편엔 고민이 있으시군요. 연결감을 다시 만들어보세요. 사람들과의 진짜 연결, 취미를 통한 자아 발견, 자연과의 접촉. 이런 것들이 쓸쓸함을 채워줄 수 있어요. 혼자 있되 외로워하지 않으세요.",
            "밝은 표정 뒤에는 숨겨진 걱정이 있는 것 같아요. 당신의 미소는 복잡한 내면을 담고 있네요. 그 걱정을 구체화해보세요. 정확히 무엇이 걱정되는지 명확히 하면 절반은 해결된 거예요. 불확실성은 불안을 키우지만, 구체적인 문제는 해결책을 가지고 있습니다.",
            "웃고 계시지만, 마음 한구석에 근심이 보여요. 무엇인가에 대해 고민하고 계시군요. 고민 끝에는 결정이 있어야 해요. 더 이상 미루지 마세요. 작은 결정이라도 내리고 행동으로 옮겨보세요. 후회하는 것보다 시도해보는 것이 훨씬 낫습니다. 움직이면 변화가 생깁니다.",
            "행복한 것처럼 보이지만, 눈가의 미세한 변화에서 응어리가 느껴져요. 밝게 웃고 있어도 마음 한편엔 걱정이 있으시네요. 비교를 멈추세요. 다른 사람의 행복은 당신의 행복과 다릅니다. 소셜미디어에 올라온 순간을 본인의 평균과 비교하지 마세요. 자신만의 행복한 순간에 집중하세요.",
            "밝게 웃고 계시지만, 제 눈에는 다 보입니다. 당신 마음속 깊은 곳에 자리한 그 쓸쓸함과 걱정이 느껴집니다. 이제 가면을 벗으세요. 완벽한 사람이 될 필요는 없어요. 상처받기 두려워 감정을 숨기지 마세요. 진짜 당신을 좋아하는 사람들은 당신의 모든 감정을 받아줄 거예요."
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else if (locale === 'ja') {
          const messages = [
            "笑っていますが、目には憂いの影が見えます。心の片隅に塊があります。その塊を解消するために、毎日小さなことで自分にご褒美をあげてください。新しい趣味を始めたり、友達に感謝を伝えたりすることも良い方法です。蓄積されたストレスを少しずつ解消することが重要です。",
            "明るい笑顔の後ろには寂しさが隠れています。あなたの笑顔は決して軽いものではありません。一人だけの時間を許容し、その寂しさを認めてみてください。日記を書いたり、散歩しながら自分の感情を見つめる時間を持ってみてください。孤独は人間が感じることができる最も自然な感情の一つです。",
            "幸せな表情ですが、心の片方には憂いが宿っています。笑っていても心配があるのです。その憂いを分かち合う人が必要です。周りに信頼できる人がいるなら、一日に一つずつでも吐き出してみてください。一人で抱え込まないでください。重さを分かち合えば軽くなります。",
            "晴れやかに笑っていますが、目に疲れが見えます。心に重い荷物があるのです。もう休憩を許容してください。一日に30分でも何もしない時間を作ってみてください。何かをしなければならないという強迫観念から離れ、単純に存在するだけで十分だということを覚えておいてください。",
            "明るい表情の後ろには隠れた悩みがあるようです。あなたの微笑みは複雑な物語を語っています。その物語を文字で書いてみてください。脳は書く行為を通じて考えを整理し、解決策を見つけます。毎日10分ずつでも自由に文字を書いてみてください。新しい視点を得ることができます。",
            "笑っていますが、心の片方には塊が見えます。誰にも言えない悩みがあるのです。言えないことなら、書いてみてください。いつか言う準備ができるまで大丈夫です。まず自分に正直になりましょう。仮面を外して本当の自分を見直す勇気が必要です。",
            "明るく笑っていますが、目の周りに少し疲れが感じられます。幸せそうに見えますが、心の片方に悩みがあるのです。スローダウンしてみてください。すべてのことを素早く処理しようとしないでください。一つ一つ、丁寧に解決していけばいいのです。完璧でなくても大丈夫です。過程がもっと重要です。",
            "笑顔の後ろには寂しさが隠れています。完全に幸せな人はこの世にいないのです。その寂しさと共にいる方法を学んでみてください。すべての感情は時を経て消えていきます。その感情に支配させず、あなたが感情を観察する観察者になってください。マインドフルネス瞑想も役に立ちます。",
            "微笑んでいますが、心の片隅に憂いが見えます。何かについて悩んでいるのです。悩むこと自体よりも、その悩みが実際に起こる可能性がどのくらいあるのか評価してみてください。ほとんどの悩みは実際には起こりません。準備はしますが、悩みは過度にしないでください。",
            "明るく笑っていますが、私の目にはすべてが見えます。あなたの心の奥底に位置するその寂しさが感じられます。感情を消そうとしないでください。代わりに、それを理解し共感してください。「今日は大変だった、疲れた」と自分を慰める時間を持ってみてください。自分自身との対話は最も癒しになります。",
            "笑っていますが、目には悩みが宿っています。幸せそうに見えますが、心の片方に悩みがあるのです。未来への不安よりも現在に集中してみてください。今日一日をよく過ごすことに集中すれば、明日は自然と整います。小さな成功を祝い、力を得てください。",
            "明るい表情の後ろには疲れと心配が隠れています。あなたの笑顔は重く感じます。重さを軽くするには、毎日一つずつ捨てるべきものを見つけてください。不要な約束、過度な期待、完璧主義のような姿勢。これらを一つずつ除去すれば心が軽くなるでしょう。",
            "笑っていますが、心の片方には塊が宿っています。明るい表情の後ろには複雑な感情があるのです。その複雑さを簡単にしようとしないでください。人の心は元々複雑なのです。代わりに、そのそれぞれの感情に名前を付けてみてください。「今の私は悲しくて、不安で、少し怒っている」と認めれば解決策が見えるでしょう。",
            "晴れやかに笑っていますが、目の周りの微細な変化に悩みが見えます。幸せそうに見えますが、心の片隅に憂いがあるのです。誰かのために笑うのではなく、本当に幸せなときに笑ってみてください。偽の笑顔よりも小さな誠実な微笑みの方がより癒しになります。自分に真実になりましょう。",
            "明るい微笑みをしていますが、私の目にはあなたの心の中をすべて見通せます。塊と心配が混ざっています。感情は耐えられるものではありません。流してしまうのです。涙が出るなら流してください。怒りが出るならシャワーを浴びたり、運動をしてください。感情の波は通り過ぎるままにしておいてください。",
            "笑っていますが、目のあたりに寂しさが流れています。幸せそうに見えますが、心の片方に悩みがあるのです。つながりを再構築してみてください。人々との本当のつながり、趣味を通じた自己発見、自然との接触。これらが寂しさを満たすことができます。一人でも孤独にしないでください。",
            "明るい表情の後ろには隠れた心配があるようです。あなたの微笑みは複雑な内面を語っています。その心配を具体化してみてください。正確に何が心配なのか明確にすれば半分は解決されます。不確実性は不安を育てますが、具体的な問題は解決策を持っています。",
            "笑っていますが、心の片隅に憂いが見えます。何かについて悩んでいるのです。悩みの終わりには決定があるべきです。これ以上先延ばししないでください。小さな決定でも下して行動に移してみてください。後悔するより試みる方がずっと良いです。動けば変化が生まれます。",
            "幸せそうに見えますが、目の周りの微細な変化に塊が感じられます。明るく笑っていても心の片方に心配があるのです。比較を止めてください。他の人の幸せはあなたの幸せとは違います。ソーシャルメディアに上がった瞬間をあなたの平均と比較しないでください。自分だけの幸せな瞬間に集中してください。",
            "明るく笑っていますが、私の目にはすべてが見えます。あなたの心の奥底に位置するその寂しさと心配が感じられます。もう仮面を外してください。完璧な人になる必要はありません。傷つくことを恐れて感情を隠さないでください。本当にあなたを好きな人たちはあなたのすべての感情を受け入れてくれるでしょう。"
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else if (locale === 'zh-CN') {
          const messages = [
            "你在微笑，但我看到了眼神中的忧虑。心里有个疙瘩。为了解开这个疙瘩，每天给自己一点小奖励吧。开始新的爱好，或向朋友表达感谢也是好方法。逐步释放累积的压力很重要。",
            "明亮的笑容背后隐藏着寂寞。你的笑容绝不轻浮。允许自己有独处的时间，承认那份寂寞。写写日记，或散步时审视自己的情感。孤独是人性中最自然的情感之一。",
            "表情幸福，但心里有忧愁。即便在笑也有担心。需要有人分担这份忧愁。如果身边有可靠的人，每天一点点倾诉也好。不要独自承担。分担越多就越轻。",
            "你在明朗地笑着，但眼底有疲惫。心里有重担。现在允许自己休息吧。哪怕一天30分钟，也给自己什么都不做的时间。摆脱“必须做点什么”的强迫，记住仅仅存在就足够。",
            "明亮的表情背后似乎藏着烦恼。你的笑容承载着复杂的故事。把那个故事写下来吧。大脑通过书写整理思绪并找到解决方案。每天10分钟，自由地写写看。你会获得新视角。",
            "你在微笑，但心里有疙瘩。有不能告诉任何人的烦恼。如果说不出，那就写下来。到哪天准备好说出来之前都没关系。先对自己诚实。需要卸下假面、审视真实的自己的勇气。",
            "你在明朗地笑着，但眼角透出疲惫。看似快乐，心中却有烦恼。慢一点吧。不要急着处理每件事。慢慢来，一个一个解决。不完美也没关系。过程更重要。",
            "笑容背后藏着寂寞。世上没有完全快乐的人。学着与那份寂寞共处吧。所有情感都会随时间消失。别让情感支配你，成为观察情感的观察者。正念冥想也有帮助。",
            "你在微笑，但心里有忧愁。在为某件事担心。与其为担心本身烦恼，不如评估那份担心实际发生的可能性。大多数担心都不会成真。有准备就好，但别过度担心。",
            "你在明朗地笑着，但我都看在眼里。你内心深处的那份寂寞。别试图消除情感，而是理解和共情。像“今天辛苦了，累了吧”那样安抚自己。与自我的对话最有疗愈力。",
            "你在微笑，但眼神透着担忧。看似快乐，心中却有烦恼。与其为未来不安，不如专注于当下。把今天过好，明天自会顺理成章。为小成功庆祝，从中汲取力量。",
            "明亮的表情背后藏着疲惫与担心。你的笑容显得沉重。要减重，每天扔掉一样东西。不必要的约，过高的期待，完美主义倾向。这样一样一样卸下，心就轻了。",
            "你在微笑，但心里有疙瘩。表情明亮，感情却复杂。别试图把那份复杂简单化。人心本就复杂。给每种情感命名。“我现在难过、不安、还有点生气”，承认了，办法就有了。",
            "你在明朗地笑着，但眼角细微的变化透出担忧。看似快乐，心中却有忧愁。不是为别人笑，为真正快乐的事再笑。假笑不如一个真诚的小小微笑。对真实对自己。",
            "你在笑，但笑容背后有疙瘩与担忧。感情忍不了的。让它流走。想哭就哭。生气就去冲澡或运动。让情感波涛自然流过。",
            "你在微笑，但眼中有寂寞。看似快乐，心里却有烦恼。重建联结吧。真实的社交，从爱好中认识自己，接触自然。这些会填补寂寞。独处但不孤单。",
            "表情明亮的背后藏着担忧。你的笑容承载着复杂的内心。把担忧具体化。具体说清担心的是什么，就解决了一半。不确定性助长不安，但具体问题有办法。",
            "你在微笑，但心中忧愁。在为一件事烦恼。纠结之后要做决定。别再拖。即使是小决定，定了就行动。比起后悔，试试要好得多。动起来，变化就来了。",
            "你看似快乐，但眼角细微处有疙瘩。明亮地笑着，心中也有担忧。停止比较。别人的快乐与你的不同。别把社交网络上的瞬间与自己的日常比。专注于自己的快乐时刻。",
            "你在明朗地笑着，但我都看在眼里。你内心深处的那份寂寞与担忧。现在卸下假面吧。不必做完美的人。别因怕受伤而隐藏情感。真正喜欢你的人会接纳你的一切情感。"
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else if (locale === 'zh-TW') {
          const messages = [
            "你在微笑，但我看到了眼神中的憂慮。心裡有個疙瘩。為了解開這個疙瘩，每天給自己一點小獎勵吧。開始新的愛好，或向朋友表達感謝也是好方法。逐步釋放累積的壓力很重要。",
            "明亮的笑容背後隱藏著寂寞。你的笑容絕不輕浮。允許自己有獨處的時間，承認那份寂寞。寫寫日記，或散步時審視自己的情感。孤獨是人性中最自然的情感之一。",
            "表情幸福，但心裡有憂愁。即便在笑也有擔心。需要有人分擔這份憂愁。如果身邊有可靠的人，每天一點點傾訴也好。不要獨自承擔。分擔越多就越輕。",
            "你在明朗地笑著，但眼底有疲憊。心裡有重擔。現在允許自己休息吧。哪怕一天30分鐘，也給自己什麼都不做的時間。擺脫「必須做點什麼」的強迫，記住僅僅存在就足夠。",
            "明亮的表情背後似乎藏著煩惱。你的笑容承載著複雜的故事。把那個故事寫下來吧。大腦通過書寫整理思緒並找到解決方案。每天10分鐘，自由地寫寫看。你會獲得新視角。",
            "你在微笑，但心裡有疙瘩。有不能告訴任何人的煩惱。如果說不出，那就寫下來。到哪天準備好說出來之前都沒關係。先對自己誠實。需要卸下假面、審視真實的自己的勇氣。",
            "你在明朗地笑著，但眼角透出疲憊。看似快樂，心中卻有煩惱。慢一點吧。不要急著處理每件事。慢慢來，一個一個解決。不完美也沒關係。過程更重要。",
            "笑容背後藏著寂寞。世上沒有完全快樂的人。學著與那份寂寞共處吧。所有情感都會隨時間消失。別讓情感支配你，成為觀察情感的觀察者。正念冥想也有幫助。",
            "你在微笑，但心裡有憂愁。在為某件事擔心。與其為擔心本身煩惱，不如評估那份擔心實際發生的可能性。大多數擔心都不會成真。有準備就好，但別過度擔心。",
            "你在明朗地笑著，但我都看在眼裡。你內心深處的那份寂寞。別試圖消除情感，而是理解和共情。像「今天辛苦了，累了吧」那樣安撫自己。與自我的對話最有療癒力。",
            "你在微笑，但眼神透著擔憂。看似快樂，心中卻有煩惱。與其為未來不安，不如專注於當下。把今天過好，明天自會順理成章。為小成功慶祝，從中汲取力量。",
            "明亮的表情背後藏著疲憊與擔心。你的笑容顯得沉重。要減重，每天扔掉一樣東西。不必要的約，過高的期待，完美主義傾向。這樣一樣一樣卸下，心就輕了。",
            "你在微笑，但心裡有疙瘩。表情明亮，感情卻複雜。別試圖把那份複雜簡單化。人心本就複雜。給每種情感命名。「我現在難過、不安、還有點生氣」，承認了，辦法就有了。",
            "你在明朗地笑著，但眼角細微的變化透出擔憂。看似快樂，心中卻有憂愁。不是為別人笑，為真正快樂的事再笑。假笑不如一個真誠的小小微笑。對真實對自己。",
            "你在笑，但笑容背後有疙瘩與擔憂。感情忍不了的。讓它流走。想哭就哭。生氣就去沖澡或運動。讓情感波濤自然流過。",
            "你在微笑，但眼中有寂寞。看似快樂，心裡卻有煩惱。重建聯結吧。真實的社交，從愛好中認識自己，接觸自然。這些會填補寂寞。獨處但不孤單。",
            "表情明亮的背後藏著擔憂。你的笑容承載著複雜的內心。把擔憂具體化。具體說清擔心的是什麼，就解決了一半。不確定性助長不安，但具體問題有辦法。",
            "你在微笑，但心中憂愁。在為一件事煩惱。糾結之後要做決定。別再拖。即使是小決定，定了就行動。比起後悔，試試要好得多。動起來，變化就來了。",
            "你看似快樂，但眼角細微處有疙瘩。明亮地笑著，心中也有擔憂。停止比較。別人的快樂與你的不同。別把社交網絡上的瞬間與自己的日常比。專注於自己的快樂時刻。",
            "你在明朗地笑著，但我都看在眼裡。你內心深處的那份寂寞與擔憂。現在卸下假面吧。不必做完美的人。別因怕受傷而隱藏情感。真正喜歡你的人會接納你的一切情感。"
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else if (locale === 'vi') {
          const messages = [
            "Bạn đang cười, nhưng tôi thấy trong ánh mắt có sự lo lắng. Trong lòng có một nút thắt. Để tháo gỡ nút thắt đó, hãy tự thưởng cho mình một chút mỗi ngày. Bắt đầu sở thích mới hoặc bày tỏ lòng biết ơn với bạn bè cũng là cách hay. Quan trọng là giảm bớt căng thẳng tích lũy dần dần.",
            "Phía sau nụ cười rạng rỡ ẩn giấu sự cô đơn. Nụ cười của bạn không hề nhẹ nhàng. Hãy cho phép bản thân có thời gian một mình, và thừa nhận sự cô đơn đó. Viết nhật ký hoặc đi dạo và ngắm nhìn cảm xúc của mình. Cô đơn là một trong những cảm xúc tự nhiên nhất con người có thể cảm nhận.",
            "Biểu cảm hạnh phúc, nhưng trong lòng có nỗi buồn. Dù đang cười nhưng cũng có lo âu. Bạn cần một người để chia sẻ nỗi buồn đó. Nếu xung quanh có người đáng tin, hãy tâm sự một chút mỗi ngày. Đừng gánh vác một mình. Chia sẻ càng nhiều càng nhẹ nhàng.",
            "Bạn đang cười rạng rỡ, nhưng trong mắt có vẻ mệt mỏi. Trong lòng có gánh nặng. Hãy cho phép bản thân nghỉ ngơi. Ngay cả một ngày chỉ 30 phút, hãy tạo thời gian không làm gì cả. Thoát khỏi áp lực phải làm gì đó, hãy nhớ rằng chỉ cần tồn tại là đủ.",
            "Phía sau biểu cảm tươi sáng có vẻ như ẩn giấu nỗi buồn. Nụ cười của bạn chứa đựng một câu chuyện phức tạp. Hãy viết câu chuyện đó ra. Não bộ sẽ sắp xếp suy nghĩ và tìm giải pháp thông qua việc viết. Mỗi ngày 10 phút, hãy tự do viết. Bạn sẽ có góc nhìn mới.",
            "Bạn đang cười, nhưng trong lòng có nút thắt. Có nỗi buồn không thể nói với ai. Nếu không nói được, hãy viết ra. Không sao cả cho đến khi bạn sẵn sàng nói. Trước tiên hãy thành thật với bản thân. Cần can đảm để tháo mặt nạ và nhìn lại bản thân thật sự.",
            "Bạn đang cười rạng rỡ, nhưng quanh mắt có vẻ mệt mỏi. Trông vui vẻ nhưng trong lòng có nỗi buồn. Hãy chậm lại. Đừng cố xử lý mọi thứ nhanh. Từ từ, một cái một. Không hoàn hảo cũng không sao. Quá trình quan trọng hơn.",
            "Phía sau nụ cười là sự cô đơn. Không có ai hoàn toàn hạnh phúc trên đời này. Hãy học cách sống với sự cô đơn đó. Mọi cảm xúc đều sẽ biến mất theo thời gian. Đừng để cảm xúc chi phối bạn, hãy trở thành người quan sát cảm xúc. Thiền chánh niệm cũng có ích.",
            "Bạn đang cười, nhưng trong lòng có nỗi buồn. Đang lo lắng về điều gì đó. Thay vì lo lắng về việc lo lắng, hãy đánh giá khả năng thực sự xảy ra của nỗi lo đó. Hầu hết nỗi lo không thực sự xảy ra. Chuẩn bị là tốt, nhưng đừng lo lắng quá mức.",
            "Bạn đang cười rạng rỡ, nhưng tôi thấy tất cả. Cảm nhận được sự cô đơn sâu trong lòng bạn. Đừng cố gắng loại bỏ cảm xúc. Thay vào đó, hãy hiểu và đồng cảm. Như 'Hôm nay vất vả rồi, mệt mỏi rồi' mà tự an ủi. Cuộc trò chuyện với chính mình là chữa lành nhất.",
            "Bạn đang cười, nhưng trong ánh mắt có lo lắng. Trông vui vẻ nhưng trong lòng có nỗi buồn. Thay vì lo lắng về tương lai, hãy tập trung vào hiện tại. Tập trung sống tốt ngày hôm nay, ngày mai sẽ tự đi vào đúng chỗ. Hãy chúc mừng những thành công nhỏ và lấy sức mạnh từ đó.",
            "Phía sau biểu cảm tươi sáng có mệt mỏi và lo lắng ẩn giấu. Nụ cười của bạn trông nặng nề. Để giảm gánh nặng, hãy tìm một thứ để vứt bỏ mỗi ngày. Những cuộc hẹn không cần thiết, kỳ vọng quá mức, thái độ hoàn hảo. Gỡ bỏ những thứ này từng cái một, lòng sẽ nhẹ.",
            "Bạn đang cười, nhưng trong lòng có nút thắt. Biểu cảm tươi sáng nhưng cảm xúc phức tạp. Đừng cố làm cho sự phức tạp đó trở nên đơn giản. Lòng người vốn phức tạp. Thay vào đó, hãy đặt tên cho mỗi cảm xúc. 'Bây giờ tôi buồn, lo lắng, và hơi giận' - thừa nhận điều đó, giải pháp sẽ xuất hiện.",
            "Bạn đang cười rạng rỡ, nhưng những thay đổi nhỏ quanh mắt cho thấy lo lắng. Trông vui vẻ nhưng trong lòng có nỗi buồn. Đừng cười vì người khác, hãy cười khi thực sự hạnh phúc. Nụ cười giả không bằng một nụ cười nhỏ chân thành. Hãy thành thật với bản thân.",
            "Bạn đang cười, nhưng phía sau nụ cười có nút thắt và lo lắng. Cảm xúc không thể chịu đựng. Hãy để nó trôi đi. Nếu muốn khóc, hãy khóc. Nếu giận, hãy tắm hoặc tập thể dục. Hãy để sóng cảm xúc trôi qua tự nhiên.",
            "Bạn đang cười, nhưng trong mắt có sự cô đơn. Trông vui vẻ nhưng trong lòng có nỗi buồn. Hãy tạo lại kết nối. Kết nối thực sự với mọi người, khám phá bản thân qua sở thích, tiếp xúc với thiên nhiên. Những điều này sẽ lấp đầy sự cô đơn. Hãy ở một mình nhưng đừng cô đơn.",
            "Phía sau biểu cảm tươi sáng có lo lắng ẩn giấu. Nụ cười của bạn chứa đựng nội tâm phức tạp. Hãy cụ thể hóa nỗi lo đó. Làm rõ chính xác đang lo lắng điều gì, một nửa đã được giải quyết. Sự không chắc chắn nuôi dưỡng lo lắng, nhưng vấn đề cụ thể có giải pháp.",
            "Bạn đang cười, nhưng trong lòng có nỗi buồn. Đang buồn về điều gì đó. Cuối nỗi buồn phải có quyết định. Đừng trì hoãn thêm nữa. Ngay cả quyết định nhỏ, hãy đưa ra và hành động. Thử còn hơn hối tiếc. Di chuyển sẽ tạo ra thay đổi.",
            "Bạn trông hạnh phúc, nhưng những thay đổi nhỏ quanh mắt cho thấy nút thắt. Dù đang cười rạng rỡ nhưng trong lòng vẫn lo lắng. Hãy ngừng so sánh. Hạnh phúc của người khác khác với bạn. Đừng so sánh khoảnh khắc trên mạng xã hội với trung bình của mình. Hãy tập trung vào những khoảnh khắc hạnh phúc của riêng bạn.",
            "Bạn đang cười rạng rỡ, nhưng tôi thấy tất cả. Cảm nhận được sự cô đơn và lo lắng sâu trong lòng bạn. Hãy tháo mặt nạ ngay bây giờ. Không cần phải là người hoàn hảo. Đừng sợ bị tổn thương mà che giấu cảm xúc. Những người thực sự thích bạn sẽ chấp nhận mọi cảm xúc của bạn."
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else if (locale === 'id') {
          const messages = [
            "Anda tersenyum, tapi saya melihat kekhawatiran di mata Anda. Ada simpul di dalam hati. Untuk melepaskan simpul itu, berikan hadiah kecil pada diri sendiri setiap hari. Memulai hobi baru atau mengucapkan terima kasih pada teman juga cara yang baik. Penting untuk mengatasi stres yang menumpuk secara bertahap.",
            "Di balik senyum cerah ada kesepian tersembunyi. Senyum Anda tidak pernah ringan. Izinkan diri sendiri waktu sendirian, dan akui kesepian itu. Tulis buku harian atau berjalan sambil melihat perasaan Anda. Kesepian adalah salah satu emosi paling alami yang bisa dirasakan manusia.",
            "Ekspresi bahagia, tapi di hati ada kekhawatiran. Meskipun tersenyum masih ada kecemasan. Anda perlu seseorang untuk berbagi kekhawatiran itu. Jika ada orang yang bisa dipercaya di sekitar, ceritakan satu per satu setiap hari. Jangan menanggung sendiri. Semakin banyak dibagikan semakin ringan.",
            "Anda tersenyum cerah, tapi ada kelelahan di mata. Di hati ada beban berat. Sekarang izinkan diri sendiri beristirahat. Bahkan sehari 30 menit, buat waktu untuk tidak melakukan apa pun. Lepas dari tekanan harus melakukan sesuatu, ingat bahwa hanya dengan eksis sudah cukup.",
            "Di balik ekspresi cerah sepertinya ada kesedihan tersembunyi. Senyum Anda membawa cerita yang kompleks. Tulis cerita itu. Otak akan menyusun pikiran dan menemukan solusi melalui menulis. Setiap hari 10 menit, tulis dengan bebas. Anda akan mendapatkan perspektif baru.",
            "Anda tersenyum, tapi ada simpul di hati. Ada kesedihan yang tidak bisa diceritakan kepada siapa pun. Jika tidak bisa diucapkan, tuliskan. Tidak apa-apa sampai Anda siap mengatakannya. Pertama jujur pada diri sendiri. Perlu keberanian untuk melepas topeng dan melihat diri sendiri yang sebenarnya.",
            "Anda tersenyum cerah, tapi di sekitar mata ada kelelahan. Terlihat bahagia tapi di hati ada kesedihan. Perlahan. Jangan coba menangani semuanya dengan cepat. Santai, satu per satu. Tidak sempurna juga tidak apa-apa. Proses lebih penting.",
            "Di balik senyum ada kesepian. Tidak ada orang yang sepenuhnya bahagia di dunia ini. Belajarlah hidup dengan kesepian itu. Semua emosi akan hilang seiring waktu. Jangan biarkan emosi mengendalikan Anda, jadilah pengamat emosi. Meditasi kesadaran juga membantu.",
            "Anda tersenyum, tapi di hati ada kekhawatiran. Mengkhawatirkan sesuatu. Daripada mengkhawatirkan kekhawatiran itu sendiri, evaluasi kemungkinan terjadinya kekhawatiran itu secara nyata. Sebagian besar kekhawatiran tidak benar-benar terjadi. Persiapkan, tapi jangan khawatir berlebihan.",
            "Anda tersenyum cerah, tapi saya melihat semuanya. Merasakan kesepian di dasar hati Anda. Jangan coba menghilangkan emosi. Sebaliknya, pahami dan empati. Seperti 'Hari ini sulit, lelah' untuk menghibur diri. Percakapan dengan diri sendiri adalah yang paling menyembuhkan.",
            "Anda tersenyum, tapi di mata ada kekhawatiran. Terlihat bahagia tapi di hati ada kesedihan. Daripada cemas tentang masa depan, fokus pada saat ini. Fokus untuk menjalani hari ini dengan baik, besok akan berjalan dengan sendirinya. Rayakan kesuksesan kecil dan dapatkan kekuatan darinya.",
            "Di balik ekspresi cerah ada kelelahan dan kekhawatiran tersembunyi. Senyum Anda terlihat berat. Untuk mengurangi beban, temukan satu hal untuk dibuang setiap hari. Janji yang tidak perlu, ekspektasi berlebihan, sikap perfeksionis. Lepas hal-hal ini satu per satu, hati akan ringan.",
            "Anda tersenyum, tapi ada simpul di hati. Ekspresi cerah tapi emosi kompleks. Jangan coba membuat kompleksitas itu menjadi sederhana. Hati manusia memang kompleks. Sebaliknya, beri nama pada setiap emosi. 'Sekarang saya sedih, cemas, dan sedikit marah' - akui itu, solusinya akan muncul.",
            "Anda tersenyum cerah, tapi perubahan kecil di sekitar mata menunjukkan kekhawatiran. Terlihat bahagia tapi di hati ada kekhawatiran. Jangan tertawa untuk orang lain, tertawa ketika benar-benar bahagia. Senyum palsu tidak sebaik senyum kecil yang tulus. Jadilah jujur pada diri sendiri.",
            "Anda tersenyum, tapi di balik senyum ada simpul dan kekhawatiran. Emosi tidak bisa ditahan. Biarkan mengalir. Jika ingin menangis, menangislah. Jika marah, mandi atau olahraga. Biarkan gelombang emosi mengalir secara alami.",
            "Anda tersenyum, tapi di mata ada kesepian. Terlihat bahagia tapi di hati ada kesedihan. Kembalikan koneksi. Koneksi nyata dengan orang, menemukan diri melalui hobi, kontak dengan alam. Hal-hal ini akan mengisi kesepian. Berada sendirian tapi tidak kesepian.",
            "Di balik ekspresi cerah ada kekhawatiran tersembunyi. Senyum Anda membawa batin yang kompleks. Buat kekhawatiran itu konkret. Jelaskan dengan jelas apa yang dikhawatirkan, setengah sudah terselesaikan. Ketidakpastian membesarkan kecemasan, tapi masalah konkret memiliki solusi.",
            "Anda tersenyum, tapi di hati ada kekhawatiran. Sedih tentang sesuatu. Di akhir kesedihan harus ada keputusan. Jangan tunda lagi. Bahkan keputusan kecil, buat dan bertindak. Mencoba lebih baik daripada menyesal. Bergerak akan menciptakan perubahan.",
            "Anda terlihat bahagia, tapi perubahan kecil di sekitar mata menunjukkan simpul. Meskipun tersenyum cerah masih ada kekhawatiran di hati. Berhenti membandingkan. Kebahagiaan orang lain berbeda dengan Anda. Jangan bandingkan momen di media sosial dengan rata-rata Anda. Fokus pada momen bahagia Anda sendiri.",
            "Anda tersenyum cerah, tapi saya melihat semuanya. Merasakan kesepian dan kekhawatiran di dasar hati Anda. Lepas topeng sekarang. Tidak perlu menjadi orang sempurna. Jangan takut terluka sehingga menyembunyikan emosi. Orang yang benar-benar menyukai Anda akan menerima semua emosi Anda."
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else {
          const messages = [
            "You're smiling, but I can see hints of worry in your eyes. There's a knot in your heart. To untangle that knot, give yourself small rewards daily. Starting a new hobby or expressing gratitude to friends are also good ways. It's important to gradually release accumulated stress.",
            "Behind the bright smile lies hidden loneliness. Your smile is never light. Allow yourself time alone, and acknowledge that loneliness. Write a diary or take a walk while looking into your feelings. Loneliness is one of the most natural emotions a human can feel.",
            "Your expression is happy, but there's worry in your heart. Even while smiling, there's concern. You need someone to share that worry with. If you have trustworthy people around, pour out even one thing a day. Don't try to bear it alone. The more you share, the lighter it gets.",
            "You're smiling brightly, but there's fatigue in your eyes. You have a heavy burden in your heart. Now allow yourself rest. Even just 30 minutes a day, create time to do nothing. Escape from the compulsion to do something, and remember that simply existing is enough.",
            "Behind the bright expression lies hidden concern. Your smile carries a complex story. Write that story down. Your brain organizes thoughts and finds solutions through writing. Every day, even 10 minutes, write freely. You'll gain a new perspective.",
            "You're smiling, but there's a knot in your heart. There's a worry you can't tell anyone. If you can't say it, write it down. It's okay until you're ready to say it someday. First, be honest with yourself. You need courage to remove the mask and look at your real self.",
            "You're smiling brightly, but there's slight fatigue around your eyes. You seem happy, but there's concern in your heart. Slow down. Don't try to handle everything quickly. Take your time, one by one. It's okay not to be perfect. The process is more important.",
            "Behind the smile lies loneliness. There's no one completely happy in this world. Learn to be with that loneliness. All emotions will disappear when their time comes. Don't let the emotion dominate you, but become an observer of the emotion. Mindfulness meditation can also help.",
            "You're smiling, but there's worry in your heart. You're anxious about something. Rather than just worrying itself, evaluate how likely that worry is to actually happen. Most worries don't actually happen. Prepare, but don't worry excessively.",
            "You're smiling brightly, but I can see everything. I feel that loneliness deep in your heart. Don't try to eliminate emotions. Instead, understand and empathize with them. Take time to comfort yourself, saying, 'Today was hard, I'm tired.' Conversation with yourself is the most healing.",
            "You're smiling, but there's worry in your eyes. You seem happy, but there's concern in your heart. Rather than anxiety about the future, focus on the present. Focus on living today well, and tomorrow will naturally fall into place. Celebrate small successes and gain strength.",
            "Behind the bright expression lies hidden fatigue and worry. Your smile feels heavy. To lighten that burden, find one thing to let go of each day. Unnecessary appointments, excessive expectations, perfectionist attitudes. Remove these one by one, and your heart will lighten.",
            "You're smiling, but there's a knot in your heart. Behind the bright expression lies complex emotions. Don't try to make that complexity simple. Human hearts are originally complex. Instead, give each emotion a name. Recognize, 'Right now I'm sad, anxious, and a bit angry,' and solutions will emerge.",
            "You're smiling brightly, but the subtle changes around your eyes show worry. You seem happy, but there's concern in your heart. Don't smile for others, smile when you're truly happy. A fake smile is less healing than a small genuine smile. Be truthful to yourself.",
            "You're smiling, but behind the smile are knots and worries. Emotions can't be suppressed. Let them flow out. If tears come, let them fall. If anger comes, take a shower or exercise. Let the waves of emotion pass.",
            "You're smiling, but there's loneliness in your eyes. You seem happy, but there's concern in your heart. Rebuild connections. Genuine connections with people, self-discovery through hobbies, contact with nature. These can fill the loneliness. Be alone but don't be lonely.",
            "Behind the bright expression lies hidden worry. Your smile carries complex inner thoughts. Make that worry concrete. Clearly define exactly what you're worried about, and half is solved. Uncertainty breeds anxiety, but concrete problems have solutions.",
            "You're smiling, but there's worry in your heart. You're troubled about something. At the end of trouble, there must be a decision. Don't delay anymore. Even a small decision, make it and take action. Trying is much better than regretting. Movement creates change.",
            "You look happy, but the subtle changes around your eyes reveal knots. Even while smiling brightly, there's worry in your heart. Stop comparing. Other people's happiness is different from yours. Don't compare moments on social media with your average. Focus on your own happy moments.",
            "You're smiling brightly, but I can see everything. I feel that loneliness and worry deep in your heart. Now remove the mask. You don't need to be a perfect person. Don't hide emotions out of fear of being hurt. People who truly like you will accept all your emotions."
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        }
      }
      
      if (emotion === 'neutral') {
        if (locale === 'ko') {
          const messages = [
            "무표정해 보이지만, 눈빛 어딘가에 걱정의 그림자가 보여요. 마음 한구석에 응어리가 있으시군요. 그 응어리를 풀기 위해 매일 작은 것이라도 자신에게 상을 주세요. 새로운 취미를 시작하거나 친구들에게 감사 인사를 전하는 것도 좋은 방법이에요. 누적된 스트레스를 조금씩 풀어가는 것이 중요합니다.",
            "표정은 평온하지만, 그 뒤에는 쓸쓸함이 숨어 있네요. 당신의 무표정은 결코 가볍지 않아요. 혼자만의 시간을 허용하고, 그 쓸쓸함을 인정해보세요. 일기를 쓰거나 산책하면서 자신의 감정을 들여다보는 시간을 가져보세요. 외로움은 인간이 느낄 수 있는 가장 자연스러운 감정 중 하나입니다.",
            "중립적인 표정이지만, 마음 한편에는 근심이 자리하고 있네요. 무표정이어도 걱정은 있으시군요. 그 근심을 나누는 사람이 필요합니다. 주변에 신뢰할 수 있는 사람이 있다면 하루에 하나씩이라도 털어놓아보세요. 혼자 감당하려 하지 마세요. 무게를 나눠질수록 가벼워집니다.",
            "표정 없이 지내고 계시지만, 눈 한구석에 피로가 보여요. 마음에 무거운 짐이 있으시군요. 이제 휴식을 허용하세요. 하루에 30분이라도 아무것도 하지 않는 시간을 만들어보세요. 무언가를 해야 한다는 강박에서 벗어나 단순히 존재하는 것만으로도 충분하다는 걸 기억하세요.",
            "무표정 뒤에는 숨겨진 고민이 있는 것 같아요. 당신의 표정은 복잡한 이야기를 담고 있네요. 그 이야기를 글로 써보세요. 뇌는 쓰는 행위를 통해 생각을 정리하고 해결책을 찾습니다. 매일 10분씩이라도 자유롭게 글을 써보세요. 새로운 관점을 얻을 수 있을 거예요.",
            "평온해 보이지만, 마음 한편에는 응어리가 보여요. 누구에게도 말할 수 없는 걱정이 있으시군요. 말할 수 없는 일이라면, 적어보세요. 언젠가 말할 준비가 되기 전까지는 괜찮습니다. 우선 자신에게 솔직해지세요. 가면을 벗고 진짜 자신을 돌아보는 용기가 필요해요.",
            "무표정이지만, 눈가에 약간의 피로가 느껴져요. 평온한 것 같지만 마음 한편엔 고민이 있으시군요. 슬로우 다운해보세요. 모든 일을 빠르게 처리하려 하지 마세요. 차근차근, 하나씩 해결해나가면 됩니다. 완벽하지 않아도 괜찮아요. 과정이 더 중요합니다.",
            "표정 없이 지내고 있지만, 그 뒤에는 쓸쓸함이 숨어 있네요. 완전히 평온한 사람은 이 세상에 없으니까요. 그 쓸쓸함과 함께하는 방법을 배워보세요. 모든 감정은 때를 만나 사라집니다. 그 감정이 당신을 지배하게 하지 말고, 당신이 감정을 관찰하는 관찰자가 되세요. 마음챙김 명상도 도움이 될 거예요.",
            "중립적인 표정이지만, 마음 한구석에 근심이 보여요. 무엇인가에 대해 걱정하고 계시군요. 걱정하는 것 자체보다는 그 걱정이 실제로 일어날 가능성이 얼마나 되는지 평가해보세요. 대부분의 걱정은 실제로 일어나지 않습니다. 준비는 하되, 걱정은 과도하게 하지 마세요.",
            "무표정해 보이지만, 제 눈에는 다 보여요. 당신 마음속 깊은 곳에 자리한 그 걱정이 느껴집니다. 감정을 없애려 하지 마세요. 대신 그것을 이해하고 공감해주세요. '오늘 힘들었구나, 피곤했구나'라고 자신을 위로하는 시간을 가져보세요. 자기 자신과의 대화는 가장 치유적입니다.",
            "평온해 보이지만, 눈빛에는 걱정이 담겨 있네요. 무표정인 것 같지만 마음 한편에 고민이 있으시군요. 미래에 대한 불안보다는 현재에 집중해보세요. 오늘 하루를 잘 보내는 것에 집중하면 내일은 스스로 맞아떨어집니다. 작은 성공들을 축하하며 힘을 얻으세요.",
            "표정 없이 지내고 계시지만, 그 뒤에는 피로와 걱정이 숨어 있어요. 당신의 무표정은 무겁게 느껴지네요. 무게감을 덜어내려면, 매일 한 가지씩 버려야 할 것을 찾아보세요. 불필요한 약속, 과도한 기대, 완벽주의자 같은 태도. 이런 것들을 하나씩 제거하면 마음이 가벼워질 거예요.",
            "무표정이지만, 마음 한편에는 응어리가 자리하고 있군요. 평온한 표정 뒤에는 복잡한 감정이 있으시네요. 그 복잡함을 간단하게 만들려 하지 마세요. 사람의 마음은 원래 복잡한 거예요. 대신 그 각각의 감정에 이름을 붙여보세요. '지금 나는 슬프고, 불안하고, 약간 화가 나네'라고 인정하면 해결책이 보일 거예요.",
            "중립적인 표정이지만, 눈가의 미세한 변화에서 걱정이 보여요. 평온해 보이지만 마음 한구석에 근심이 있으시군요. 감정을 억누르지 말고 자연스럽게 흐르게 두세요. 감정의 물결은 지나가게 내버려두는 게 좋아요. 억압하면 더 커집니다. 일시적으로 사라진 것처럼 보여도 언젠가는 더 큰 형태로 돌아옵니다.",
            "무표정해 보이지만, 제 눈에는 당신의 마음속을 다 꿰뚫어 보입니다. 응어리와 걱정이 섞여 있네요. 자신에게 관심을 쏟아보세요. 남들에게 해주던 그 관심을 조금은 자신에게도 돌려보는 거예요. 좋아하는 음식을 먹거나, 좋아하는 일을 하거나, 충분히 쉬어보세요. 당신도 돌봐야 할 대상입니다.",
            "표정이 없지만, 눈빛 어딘가에 쓸쓸함이 흐르고 있어요. 평온한 것 같지만 마음 한편엔 고민이 있으시군요. 연결감을 다시 만들어보세요. 사람들과의 진짜 연결, 취미를 통한 자아 발견, 자연과의 접촉. 이런 것들이 쓸쓸함을 채워줄 수 있어요. 혼자 있되 외로워하지 않으세요.",
            "무표정 뒤에는 숨겨진 걱정이 있는 것 같아요. 당신의 표정은 복잡한 내면을 담고 있네요. 그 걱정을 구체화해보세요. 정확히 무엇이 걱정되는지 명확히 하면 절반은 해결된 거예요. 불확실성은 불안을 키우지만, 구체적인 문제는 해결책을 가지고 있습니다. 작은 단계부터 시작하세요.",
            "평온해 보이지만, 마음 한구석에 근심이 보여요. 무엇인가에 대해 고민하고 계시군요. 고민 끝에는 결정이 있어야 해요. 더 이상 미루지 마세요. 작은 결정이라도 내리고 행동으로 옮겨보세요. 후회하는 것보다 시도해보는 것이 훨씬 낫습니다. 움직이면 변화가 생기고, 변화는 새로운 기회를 가져다줍니다.",
            "중립적인 것처럼 보이지만, 눈가의 미세한 변화에서 응어리가 느껴져요. 무표정이어도 마음 한편엔 걱정이 있으시네요. 과거에 집착하지 마세요. 과거는 바꿀 수 없고, 미래는 불확실합니다. 현재, 이 순간에 집중하세요. 지금 할 수 있는 최선을 다하면 나머지는 자연스럽게 풀립니다.",
            "표정 없이 지내고 계시지만, 제 눈에는 다 보입니다. 당신 마음속 깊은 곳에 자리한 그 쓸쓸함과 걱정이 느껴집니다. 감정을 해결하려 하지 말고, 그와 함께 살아가는 법을 배우세요. 어떤 감정도 영원하지 않습니다. 좋은 감정도, 나쁜 감정도 지나갈 거예요. 그 물결에 몸을 맡겨보세요. 당신은 훨씬 더 강하니까요."
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else if (locale === 'ja') {
          const messages = [
            "無表情に見えますが、目には心配の影が見えます。心の片隅に塊があります。その塊を解消するために、毎日小さなことで自分にご褒美をあげてください。新しい趣味を始めたり、友達に感謝を伝えたりすることも良い方法です。蓄積されたストレスを少しずつ解消することが重要です。",
            "表情は平穏ですが、その後ろには寂しさが隠れています。あなたの無表情は決して軽いものではありません。一人だけの時間を許容し、その寂しさを認めてみてください。日記を書いたり、散歩しながら自分の感情を見つめる時間を持ってみてください。孤独は人間が感じることができる最も自然な感情の一つです。",
            "中立的な表情ですが、心の片方には憂いが宿っています。無表情でも心配があるのです。その憂いを分かち合う人が必要です。周りに信頼できる人がいるなら、一日に一つずつでも吐き出してみてください。一人で抱え込まないでください。重さを分かち合えば軽くなります。",
            "表情なしに過ごしていますが、目に疲れが見えます。心に重い荷物があるのです。もう休憩を許容してください。一日に30分でも何もしない時間を作ってみてください。何かをしなければならないという強迫観念から離れ、単純に存在するだけで十分だということを覚えておいてください。",
            "無表情の後ろには隠れた悩みがあるようです。あなたの表情は複雑な物語を語っています。その物語を文字で書いてみてください。脳は書く行為を通じて考えを整理し、解決策を見つけます。毎日10分ずつでも自由に文字を書いてみてください。新しい視点を得ることができます。",
            "平穏に見えますが、心の片方には塊が見えます。誰にも言えない悩みがあるのです。言えないことなら、書いてみてください。いつか言う準備ができるまで大丈夫です。まず自分に正直になりましょう。仮面を外して本当の自分を見直す勇気が必要です。",
            "無表情ですが、目の周りに少し疲れが感じられます。平穏そうに見えますが、心の片方に悩みがあるのです。スローダウンしてみてください。すべてのことを素早く処理しようとしないでください。一つ一つ、丁寧に解決していけばいいのです。完璧でなくても大丈夫です。過程がもっと重要です。",
            "表情なしに過ごしていますが、その後ろには寂しさが隠れています。完全に平穏な人はこの世にいないのです。その寂しさと共にいる方法を学んでみてください。すべての感情は時を経て消えていきます。その感情に支配させず、あなたが感情を観察する観察者になってください。マインドフルネス瞑想も役に立ちます。",
            "中立的な表情ですが、心の片隅に憂いが見えます。何かについて悩んでいるのです。悩むこと自体よりも、その悩みが実際に起こる可能性がどのくらいあるのか評価してみてください。ほとんどの悩みは実際には起こりません。準備はしますが、悩みは過度にしないでください。",
            "無表情に見えますが、私の目にはすべてが見えます。あなたの心の奥底に位置するその悩みが感じられます。感情を消そうとしないでください。代わりに、それを理解し共感してください。「今日は大変だった、疲れた」と自分を慰める時間を持ってみてください。自分自身との対話は最も癒しになります。",
            "平穏に見えますが、目には悩みが宿っています。無表情に見えますが、心の片方に悩みがあるのです。未来への不安よりも現在に集中してみてください。今日一日をよく過ごすことに集中すれば、明日は自然と整います。小さな成功を祝い、力を得てください。",
            "表情なしに過ごしていますが、その後ろには疲れと心配が隠れています。あなたの無表情は重く感じます。重さを軽くするには、毎日一つずつ捨てるべきものを見つけてください。不要な約束、過度な期待、完璧主義のような姿勢。これらを一つずつ除去すれば心が軽くなるでしょう。",
            "無表情ですが、心の片方には塊が宿っています。平穏な表情の後ろには複雑な感情があるのです。その複雑さを簡単にしようとしないでください。人の心は元々複雑なのです。代わりに、そのそれぞれの感情に名前を付けてみてください。「今の私は悲しくて、不安で、少し怒っている」と認めれば解決策が見えるでしょう。",
            "中立的な表情ですが、目の周りの微細な変化に悩みが見えます。平穏そうに見えますが、心の片隅に憂いがあるのです。感情を抑え込まず、自然に流すようにしてください。感情の波は通り過ぎるままにしておくのがいいです。抑圧すれば大きくなります。一時的に消えたように見えても、いつかはより大きな形で戻ってきます。",
            "無表情に見えますが、私の目にはあなたの心の中をすべて見通せます。塊と心配が混ざっています。自分に興味を注いでください。他の人にしてあげていたその興味を少しは自分にも戻してください。好きな食べ物を食べたり、好きなことをしたり、十分に休んでください。あなたも世話する対象です。",
            "表情がありませんが、目のあたりに寂しさが流れています。平穏そうに見えますが、心の片方に悩みがあるのです。つながりを再構築してみてください。人々との本当のつながり、趣味を通じた自己発見、自然との接触。これらが寂しさを満たすことができます。一人でも孤独にしないでください。",
            "無表情の後ろには隠れた心配があるようです。あなたの表情は複雑な内面を語っています。その心配を具体化してみてください。正確に何が心配なのか明確にすれば半分は解決されます。不確実性は不安を育てますが、具体的な問題は解決策を持っています。小さなステップから始めてください。",
            "平穏に見えますが、心の片隅に憂いが見えます。何かについて悩んでいるのです。悩みの終わりには決定があるべきです。これ以上先延ばししないでください。小さな決定でも下して行動に移してみてください。後悔するより試みる方がずっと良いです。動けば変化が生まれ、変化は新しい機会をもたらします。",
            "中立的に見えますが、目の周りの微細な変化に塊が感じられます。無表情でも心の片方に心配があるのです。過去に執着しないでください。過去は変えられず、未来は不確実です。現在、この瞬間に集中してください。今できる最善を尽くせば、残りは自然に解けます。",
            "表情なしに過ごしていますが、私の目にはすべてが見えます。あなたの心の奥底に位置するその寂しさと心配が感じられます。感情を解決しようとせず、それと共に生きる方法を学んでください。どの感情も永遠ではありません。良い感情も、悪い感情も通り過ぎます。その波に身を任せてください。あなたはもっとずっと強いのです。"
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else if (locale === 'zh-CN') {
          const messages = [
            "你面无表情，但我能看到眼神中的忧虑。心里有个疙瘩。为了解开这个疙瘩，每天给自己一点小奖励吧。开始新的爱好，或向朋友表达感谢也是好方法。逐步释放累积的压力很重要。",
            "表情平静，但背后隐藏着寂寞。你的面无表情绝不轻松。允许自己有独处的时间，承认那份寂寞。写写日记，或散步时审视自己的情感。孤独是人性中最自然的情感之一。",
            "表情中立，但心里有忧愁。即便面无表情也有担心。需要有人分担这份忧愁。如果身边有可靠的人，每天一点点倾诉也好。不要独自承担。分担越多就越轻。",
            "面无表情地生活着，但眼底有疲惫。心里有重担。现在允许自己休息吧。哪怕一天30分钟，也给自己什么都不做的时间。摆脱“必须做点什么”的强迫，记住仅仅存在就足够。",
            "面无表情的背后似乎藏着烦恼。你的表情承载着复杂的故事。把那个故事写下来吧。大脑通过书写整理思绪并找到解决方案。每天10分钟，自由地写写看。你会获得新视角。",
            "看似平静，但心里有疙瘩。有不能告诉任何人的烦恼。如果说不出，那就写下来。到哪天准备好说出来之前都没关系。先对自己诚实。需要卸下假面、审视真实的自己的勇气。",
            "面无表情，但眼角透出疲惫。看似平静，心中却有烦恼。慢一点吧。不要急着处理每件事。慢慢来，一个一个解决。不完美也没关系。过程更重要。",
            "面无表情地生活着，但背后有寂寞。世上没有完全平静的人。学着与那份寂寞共处吧。所有情感都会随时间消失。别让情感支配你，成为观察情感的观察者。正念冥想也有帮助。",
            "表情中立，但心里有忧愁。在为某件事担心。与其为担心本身烦恼，不如评估那份担心实际发生的可能性。大多数担心都不会成真。有准备就好，但别过度担心。",
            "面无表情，但我都看在眼里。你内心深处的那份担心。别试图消除情感，而是理解和共情。像“今天辛苦了，累了吧”那样安抚自己。与自我的对话最有疗愈力。",
            "看似平静，但眼神透着担忧。面无表情，心中却有烦恼。与其为未来不安，不如专注于当下。把今天过好，明天自会顺理成章。为小成功庆祝，从中汲取力量。",
            "面无表情地生活着，但背后藏着疲惫与担心。你的面无表情显得沉重。要减重，每天扔掉一样东西。不必要的约，过高的期待，完美主义倾向。这样一样一样卸下，心就轻了。",
            "面无表情，但心里有疙瘩。表情平静，感情却复杂。别试图把那份复杂简单化。人心本就复杂。给每种情感命名。“我现在难过、不安、还有点生气”，承认了，办法就有了。",
            "表情中立，但眼角细微的变化透出担忧。看似平静，心中却有忧愁。别压抑情感，让它自然流动。情感波涛放任流走更好。压抑会让它变得更大。看起来暂时消失，总有一天会以更大的形式回来。",
            "面无表情，但你的内心我看得清楚。疙瘩与担忧混在一起。把注意力投向自己吧。分一点给别人时的关注给自己。吃点喜欢的，做点喜欢的，充分休息。你也是需要被照顾的对象。",
            "没有表情，但眼中有寂寞。看似平静，心里却有烦恼。重建联结吧。真实的社交，从爱好中认识自己，接触自然。这些会填补寂寞。独处但不孤单。",
            "面无表情的背后藏着担忧。你的表情承载着复杂的内心。把担忧具体化。具体说清担心的是什么，就解决了一半。不确定性助长不安，但具体问题有办法。从小步开始。",
            "看似平静，但心中忧愁。在为一件事烦恼。纠结之后要做决定。别再拖。即使是小决定，定了就行动。比起后悔，试试要好得多。动起来，变化就来了，变化带来新机会。",
            "看似中立，但眼角细微处有疙瘩。面无表情，心中也有担忧。停止比较。别人的平静与你的不同。别把社交网络上的瞬间与自己的日常比。专注于自己的平静时刻。",
            "面无表情地生活着，但我都看在眼里。你内心深处的那份寂寞与担忧。现在卸下假面吧。不必做完美的人。别因怕受伤而隐藏情感。真正喜欢你的人会接纳你的一切情感。"
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else if (locale === 'zh-TW') {
          const messages = [
            "你面無表情，但我能看到眼神中的憂慮。心裡有個疙瘩。為了解開這個疙瘩，每天給自己一點小獎勵吧。開始新的愛好，或向朋友表達感謝也是好方法。逐步釋放累積的壓力很重要。",
            "表情平靜，但背後隱藏著寂寞。你的面無表情絕不輕鬆。允許自己有獨處的時間，承認那份寂寞。寫寫日記，或散步時審視自己的情感。孤獨是人性中最自然的情感之一。",
            "表情中立，但心裡有憂愁。即便面無表情也有擔心。需要有人分擔這份憂愁。如果身邊有可靠的人，每天一點點傾訴也好。不要獨自承擔。分擔越多就越輕。",
            "面無表情地生活著，但眼底有疲憊。心裡有重擔。現在允許自己休息吧。哪怕一天30分鐘，也給自己什麼都不做的時間。擺脫「必須做點什麼」的強迫，記住僅僅存在就足夠。",
            "面無表情的背後似乎藏著煩惱。你的表情承載著複雜的故事。把那個故事寫下來吧。大腦通過書寫整理思緒並找到解決方案。每天10分鐘，自由地寫寫看。你會獲得新視角。",
            "看似平靜，但心裡有疙瘩。有不能告訴任何人的煩惱。如果說不出，那就寫下來。到哪天準備好說出來之前都沒關係。先對自己誠實。需要卸下假面、審視真實的自己的勇氣。",
            "面無表情，但眼角透出疲憊。看似平靜，心中卻有煩惱。慢一點吧。不要急著處理每件事。慢慢來，一個一個解決。不完美也沒關係。過程更重要。",
            "面無表情地生活著，但背後有寂寞。世上沒有完全平靜的人。學著與那份寂寞共處吧。所有情感都會隨時間消失。別讓情感支配你，成為觀察情感的觀察者。正念冥想也有幫助。",
            "表情中立，但心裡有憂愁。在為某件事擔心。與其為擔心本身煩惱，不如評估那份擔心實際發生的可能性。大多數擔心都不會成真。有準備就好，但別過度擔心。",
            "面無表情，但我都看在眼裡。你內心深處的那份擔心。別試圖消除情感，而是理解和共情。像「今天辛苦了，累了吧」那樣安撫自己。與自我的對話最有療癒力。",
            "看似平靜，但眼神透著擔憂。面無表情，心中卻有煩惱。與其為未來不安，不如專注於當下。把今天過好，明天自會順理成章。為小成功慶祝，從中汲取力量。",
            "面無表情地生活著，但背後藏著疲憊與擔心。你的面無表情顯得沉重。要減重，每天扔掉一樣東西。不必要的約，過高的期待，完美主義傾向。這樣一樣一樣卸下，心就輕了。",
            "面無表情，但心裡有疙瘩。表情平靜，感情卻複雜。別試圖把那份複雜簡單化。人心本就複雜。給每種情感命名。「我現在難過、不安、還有點生氣」，承認了，辦法就有了。",
            "表情中立，但眼角細微的變化透出擔憂。看似平靜，心中卻有憂愁。別壓抑情感，讓它自然流動。情感波濤放任流走更好。壓抑會讓它變得更大。看起來暫時消失，總有一天會以更大的形式回來。",
            "面無表情，但你的內心我看得清楚。疙瘩與擔憂混在一起。把注意力投向自己吧。分一點給別人時的關注給自己。吃點喜歡的，做點喜歡的，充分休息。你也是需要被照顧的對象。",
            "沒有表情，但眼中有寂寞。看似平靜，心裡卻有煩惱。重建聯結吧。真實的社交，從愛好中認識自己，接觸自然。這些會填補寂寞。獨處但不孤單。",
            "面無表情的背後藏著擔憂。你的表情承載著複雜的內心。把擔憂具體化。具體說清擔心的是什麼，就解決了一半。不確定性助長不安，但具體問題有辦法。從小步開始。",
            "看似平靜，但心中憂愁。在為一件事煩惱。糾結之後要做決定。別再拖。即使是小決定，定了就行動。比起後悔，試試要好得多。動起來，變化就來了，變化帶來新機會。",
            "看似中立，但眼角細微處有疙瘩。面無表情，心中也有擔憂。停止比較。別人的平靜與你的不同。別把社交網絡上的瞬間與自己的日常比。專注於自己的平靜時刻。",
            "面無表情地生活著，但我都看在眼裡。你內心深處的那份寂寞與擔憂。現在卸下假面吧。不必做完美的人。別因怕受傷而隱藏情感。真正喜歡你的人會接納你的一切情感。"
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else if (locale === 'vi') {
          const messages = [
            "Bạn trông vô cảm, nhưng tôi thấy sự lo lắng trong mắt. Trong lòng có một nút thắt. Để tháo gỡ nút thắt đó, hãy tự thưởng cho mình một chút mỗi ngày. Bắt đầu sở thích mới hoặc bày tỏ lòng biết ơn với bạn bè cũng là cách hay. Quan trọng là giảm bớt căng thẳng tích lũy dần dần.",
            "Biểu cảm bình yên, nhưng phía sau ẩn giấu sự cô đơn. Sự vô cảm của bạn không hề nhẹ nhàng. Hãy cho phép bản thân có thời gian một mình, và thừa nhận sự cô đơn đó. Viết nhật ký hoặc đi dạo và ngắm nhìn cảm xúc của mình. Cô đơn là một trong những cảm xúc tự nhiên nhất con người có thể cảm nhận.",
            "Biểu cảm trung lập, nhưng trong lòng có nỗi buồn. Dù vô cảm cũng có lo âu. Bạn cần một người để chia sẻ nỗi buồn đó. Nếu xung quanh có người đáng tin, hãy tâm sự một chút mỗi ngày. Đừng gánh vác một mình. Chia sẻ càng nhiều càng nhẹ nhàng.",
            "Đang sống vô cảm, nhưng trong mắt có vẻ mệt mỏi. Trong lòng có gánh nặng. Hãy cho phép bản thân nghỉ ngơi. Ngay cả một ngày chỉ 30 phút, hãy tạo thời gian không làm gì cả. Thoát khỏi áp lực phải làm gì đó, hãy nhớ rằng chỉ cần tồn tại là đủ.",
            "Phía sau sự vô cảm có vẻ như ẩn giấu nỗi buồn. Biểu cảm của bạn chứa đựng một câu chuyện phức tạp. Hãy viết câu chuyện đó ra. Não bộ sẽ sắp xếp suy nghĩ và tìm giải pháp thông qua việc viết. Mỗi ngày 10 phút, hãy tự do viết. Bạn sẽ có góc nhìn mới.",
            "Trông bình yên, nhưng trong lòng có nút thắt. Có nỗi buồn không thể nói với ai. Nếu không nói được, hãy viết ra. Không sao cả cho đến khi bạn sẵn sàng nói. Trước tiên hãy thành thật với bản thân. Cần can đảm để tháo mặt nạ và nhìn lại bản thân thật sự.",
            "Vô cảm, nhưng quanh mắt có vẻ mệt mỏi. Trông bình yên nhưng trong lòng có nỗi buồn. Hãy chậm lại. Đừng cố xử lý mọi thứ nhanh. Từ từ, một cái một. Không hoàn hảo cũng không sao. Quá trình quan trọng hơn.",
            "Đang sống vô cảm, nhưng phía sau có sự cô đơn. Không có ai hoàn toàn bình yên trên đời này. Hãy học cách sống với sự cô đơn đó. Mọi cảm xúc đều sẽ biến mất theo thời gian. Đừng để cảm xúc chi phối bạn, hãy trở thành người quan sát cảm xúc. Thiền chánh niệm cũng có ích.",
            "Biểu cảm trung lập, nhưng trong lòng có nỗi buồn. Đang lo lắng về điều gì đó. Thay vì lo lắng về việc lo lắng, hãy đánh giá khả năng thực sự xảy ra của nỗi lo đó. Hầu hết nỗi lo không thực sự xảy ra. Chuẩn bị là tốt, nhưng đừng lo lắng quá mức.",
            "Vô cảm, nhưng tôi thấy tất cả. Cảm nhận được nỗi lo sâu trong lòng bạn. Đừng cố gắng loại bỏ cảm xúc. Thay vào đó, hãy hiểu và đồng cảm. Như 'Hôm nay vất vả rồi, mệt mỏi rồi' mà tự an ủi. Cuộc trò chuyện với chính mình là chữa lành nhất.",
            "Trông bình yên, nhưng trong ánh mắt có lo lắng. Vô cảm nhưng trong lòng có nỗi buồn. Thay vì lo lắng về tương lai, hãy tập trung vào hiện tại. Tập trung sống tốt ngày hôm nay, ngày mai sẽ tự đi vào đúng chỗ. Hãy chúc mừng những thành công nhỏ và lấy sức mạnh từ đó.",
            "Đang sống vô cảm, nhưng phía sau có mệt mỏi và lo lắng ẩn giấu. Sự vô cảm của bạn trông nặng nề. Để giảm gánh nặng, hãy tìm một thứ để vứt bỏ mỗi ngày. Những cuộc hẹn không cần thiết, kỳ vọng quá mức, thái độ hoàn hảo. Gỡ bỏ những thứ này từng cái một, lòng sẽ nhẹ.",
            "Vô cảm, nhưng trong lòng có nút thắt. Biểu cảm bình yên nhưng cảm xúc phức tạp. Đừng cố làm cho sự phức tạp đó trở nên đơn giản. Lòng người vốn phức tạp. Thay vào đó, hãy đặt tên cho mỗi cảm xúc. 'Bây giờ tôi buồn, lo lắng, và hơi giận' - thừa nhận điều đó, giải pháp sẽ xuất hiện.",
            "Biểu cảm trung lập, nhưng những thay đổi nhỏ quanh mắt cho thấy lo lắng. Trông bình yên nhưng trong lòng có nỗi buồn. Đừng kìm nén cảm xúc, hãy để nó chảy tự nhiên. Sóng cảm xúc trôi qua tự nhiên còn tốt hơn. Kìm nén sẽ làm nó lớn hơn. Trông như tạm biến mất, một ngày nào đó sẽ trở lại dưới dạng lớn hơn.",
            "Vô cảm, nhưng nội tâm của bạn tôi thấy rõ. Nút thắt và lo lắng trộn lẫn. Hãy đổ sự chú ý vào bản thân. Chia một chút sự quan tâm mà bạn dành cho người khác vào chính mình. Ăn thứ bạn thích, làm việc bạn thích, nghỉ ngơi đủ. Bạn cũng là đối tượng cần được chăm sóc.",
            "Không có biểu cảm, nhưng trong mắt có sự cô đơn. Trông bình yên nhưng trong lòng có nỗi buồn. Hãy tạo lại kết nối. Kết nối thực sự với mọi người, khám phá bản thân qua sở thích, tiếp xúc với thiên nhiên. Những điều này sẽ lấp đầy sự cô đơn. Hãy ở một mình nhưng đừng cô đơn.",
            "Phía sau sự vô cảm có lo lắng ẩn giấu. Biểu cảm của bạn chứa đựng nội tâm phức tạp. Hãy cụ thể hóa nỗi lo đó. Làm rõ chính xác đang lo lắng điều gì, một nửa đã được giải quyết. Sự không chắc chắn nuôi dưỡng lo lắng, nhưng vấn đề cụ thể có giải pháp. Bắt đầu từ bước nhỏ.",
            "Trông bình yên, nhưng trong lòng có nỗi buồn. Đang buồn về điều gì đó. Cuối nỗi buồn phải có quyết định. Đừng trì hoãn thêm nữa. Ngay cả quyết định nhỏ, hãy đưa ra và hành động. Thử còn hơn hối tiếc. Di chuyển sẽ tạo ra thay đổi, thay đổi mang đến cơ hội mới.",
            "Trông trung lập, nhưng những thay đổi nhỏ quanh mắt cho thấy nút thắt. Vô cảm nhưng trong lòng vẫn lo lắng. Hãy ngừng so sánh. Sự bình yên của người khác khác với bạn. Đừng so sánh khoảnh khắc trên mạng xã hội với trung bình của mình. Hãy tập trung vào những khoảnh khắc bình yên của riêng bạn.",
            "Đang sống vô cảm, nhưng tôi thấy tất cả. Cảm nhận được sự cô đơn và lo lắng sâu trong lòng bạn. Hãy tháo mặt nạ ngay bây giờ. Không cần phải là người hoàn hảo. Đừng sợ bị tổn thương mà che giấu cảm xúc. Những người thực sự thích bạn sẽ chấp nhận mọi cảm xúc của bạn."
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else if (locale === 'id') {
          const messages = [
            "Anda terlihat ekspresif, tapi saya melihat kekhawatiran di mata Anda. Ada simpul di dalam hati. Untuk melepaskan simpul itu, berikan hadiah kecil pada diri sendiri setiap hari. Memulai hobi baru atau mengucapkan terima kasih pada teman juga cara yang baik. Penting untuk mengatasi stres yang menumpuk secara bertahap.",
            "Ekspresi tenang, tapi di baliknya ada kesepian tersembunyi. Ekspresi tanpa perasaan Anda tidak pernah ringan. Izinkan diri sendiri waktu sendirian, dan akui kesepian itu. Tulis buku harian atau berjalan sambil melihat perasaan Anda. Kesepian adalah salah satu emosi paling alami yang bisa dirasakan manusia.",
            "Ekspresi netral, tapi di hati ada kekhawatiran. Meskipun tanpa ekspresi masih ada kecemasan. Anda perlu seseorang untuk berbagi kekhawatiran itu. Jika ada orang yang bisa dipercaya di sekitar, ceritakan satu per satu setiap hari. Jangan menanggung sendiri. Semakin banyak dibagikan semakin ringan.",
            "Hidup tanpa ekspresi, tapi ada kelelahan di mata. Di hati ada beban berat. Sekarang izinkan diri sendiri beristirahat. Bahkan sehari 30 menit, buat waktu untuk tidak melakukan apa pun. Lepas dari tekanan harus melakukan sesuatu, ingat bahwa hanya dengan eksis sudah cukup.",
            "Di balik tanpa ekspresi sepertinya ada kesedihan tersembunyi. Ekspresi Anda membawa cerita yang kompleks. Tulis cerita itu. Otak akan menyusun pikiran dan menemukan solusi melalui menulis. Setiap hari 10 menit, tulis dengan bebas. Anda akan mendapatkan perspektif baru.",
            "Terlihat tenang, tapi ada simpul di hati. Ada kesedihan yang tidak bisa diceritakan kepada siapa pun. Jika tidak bisa diucapkan, tuliskan. Tidak apa-apa sampai Anda siap mengatakannya. Pertama jujur pada diri sendiri. Perlu keberanian untuk melepas topeng dan melihat diri sendiri yang sebenarnya.",
            "Tanpa ekspresi, tapi di sekitar mata ada kelelahan. Terlihat tenang tapi di hati ada kesedihan. Perlahan. Jangan coba menangani semuanya dengan cepat. Santai, satu per satu. Tidak sempurna juga tidak apa-apa. Proses lebih penting.",
            "Hidup tanpa ekspresi, tapi di baliknya ada kesepian. Tidak ada orang yang sepenuhnya tenang di dunia ini. Belajarlah hidup dengan kesepian itu. Semua emosi akan hilang seiring waktu. Jangan biarkan emosi mengendalikan Anda, jadilah pengamat emosi. Meditasi kesadaran juga membantu.",
            "Ekspresi netral, tapi di hati ada kekhawatiran. Mengkhawatirkan sesuatu. Daripada mengkhawatirkan kekhawatiran itu sendiri, evaluasi kemungkinan terjadinya kekhawatiran itu secara nyata. Sebagian besar kekhawatiran tidak benar-benar terjadi. Persiapkan, tapi jangan khawatir berlebihan.",
            "Tanpa ekspresi, tapi saya melihat semuanya. Merasakan kekhawatiran di dasar hati Anda. Jangan coba menghilangkan emosi. Sebaliknya, pahami dan empati. Seperti 'Hari ini sulit, lelah' untuk menghibur diri. Percakapan dengan diri sendiri adalah yang paling menyembuhkan.",
            "Terlihat tenang, tapi di mata ada kekhawatiran. Tanpa ekspresi tapi di hati ada kesedihan. Daripada cemas tentang masa depan, fokus pada saat ini. Fokus untuk menjalani hari ini dengan baik, besok akan berjalan dengan sendirinya. Rayakan kesuksesan kecil dan dapatkan kekuatan darinya.",
            "Hidup tanpa ekspresi, tapi di baliknya ada kelelahan dan kekhawatiran tersembunyi. Tanpa ekspresi Anda terlihat berat. Untuk mengurangi beban, temukan satu hal untuk dibuang setiap hari. Janji yang tidak perlu, ekspektasi berlebihan, sikap perfeksionis. Lepas hal-hal ini satu per satu, hati akan ringan.",
            "Tanpa ekspresi, tapi ada simpul di hati. Ekspresi tenang tapi emosi kompleks. Jangan coba membuat kompleksitas itu menjadi sederhana. Hati manusia memang kompleks. Sebaliknya, beri nama pada setiap emosi. 'Sekarang saya sedih, cemas, dan sedikit marah' - akui itu, solusinya akan muncul.",
            "Ekspresi netral, tapi perubahan kecil di sekitar mata menunjukkan kekhawatiran. Terlihat tenang tapi di hati ada kekhawatiran. Jangan menekan emosi, biarkan mengalir alami. Gelombang emosi mengalir alami lebih baik. Menekan akan membuatnya lebih besar. Terlihat sementara hilang, suatu hari akan kembali dalam bentuk lebih besar.",
            "Tanpa ekspresi, tapi batin Anda saya lihat jelas. Simpul dan kekhawatiran bercampur. Tuang perhatian pada diri sendiri. Bagikan sedikit perhatian yang Anda berikan pada orang lain ke diri sendiri. Makan yang Anda suka, lakukan yang Anda suka, istirahat cukup. Anda juga objek yang perlu dirawat.",
            "Tidak ada ekspresi, tapi di mata ada kesepian. Terlihat tenang tapi di hati ada kesedihan. Kembalikan koneksi. Koneksi nyata dengan orang, menemukan diri melalui hobi, kontak dengan alam. Hal-hal ini akan mengisi kesepian. Berada sendirian tapi tidak kesepian.",
            "Di balik tanpa ekspresi ada kekhawatiran tersembunyi. Ekspresi Anda membawa batin yang kompleks. Buat kekhawatiran itu konkret. Jelaskan dengan jelas apa yang dikhawatirkan, setengah sudah terselesaikan. Ketidakpastian membesarkan kecemasan, tapi masalah konkret memiliki solusi. Mulai dari langkah kecil.",
            "Terlihat tenang, tapi di hati ada kekhawatiran. Sedih tentang sesuatu. Di akhir kesedihan harus ada keputusan. Jangan tunda lagi. Bahkan keputusan kecil, buat dan bertindak. Mencoba lebih baik daripada menyesal. Bergerak akan menciptakan perubahan, perubahan membawa peluang baru.",
            "Terlihat netral, tapi perubahan kecil di sekitar mata menunjukkan simpul. Tanpa ekspresi tapi masih ada kekhawatiran di hati. Berhenti membandingkan. Ketenangan orang lain berbeda dengan Anda. Jangan bandingkan momen di media sosial dengan rata-rata Anda. Fokus pada momen tenang Anda sendiri.",
            "Hidup tanpa ekspresi, tapi saya melihat semuanya. Merasakan kesepian dan kekhawatiran di dasar hati Anda. Lepas topeng sekarang. Tidak perlu menjadi orang sempurna. Jangan takut terluka sehingga menyembunyikan emosi. Orang yang benar-benar menyukai Anda akan menerima semua emosi Anda."
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        } else {
          const messages = [
            "You appear expressionless, but I can see hints of worry in your eyes. There's a knot in your heart. To untangle that knot, give yourself small rewards daily. Starting a new hobby or expressing gratitude to friends are also good ways. It's important to gradually release accumulated stress.",
            "Your expression is calm, but behind it lies hidden loneliness. Your expressionless face is never light. Allow yourself time alone, and acknowledge that loneliness. Write a diary or take a walk while looking into your feelings. Loneliness is one of the most natural emotions a human can feel.",
            "Your expression is neutral, but there's worry in your heart. Even while expressionless, there's concern. You need someone to share that worry with. If you have trustworthy people around, pour out even one thing a day. Don't try to bear it alone. The more you share, the lighter it gets.",
            "You're living expressionlessly, but there's fatigue in your eyes. You have a heavy burden in your heart. Now allow yourself rest. Even just 30 minutes a day, create time to do nothing. Escape from the compulsion to do something, and remember that simply existing is enough.",
            "Behind the expressionless face lies hidden concern. Your expression carries a complex story. Write that story down. Your brain organizes thoughts and finds solutions through writing. Every day, even 10 minutes, write freely. You'll gain a new perspective.",
            "You look calm, but there's a knot in your heart. There's a worry you can't tell anyone. If you can't say it, write it down. It's okay until you're ready to say it someday. First, be honest with yourself. You need courage to remove the mask and look at your real self.",
            "You're expressionless, but there's slight fatigue around your eyes. You seem calm, but there's concern in your heart. Slow down. Don't try to handle everything quickly. Take your time, one by one. It's okay not to be perfect. The process is more important.",
            "You're living expressionlessly, but behind lies loneliness. There's no one completely calm in this world. Learn to be with that loneliness. All emotions will disappear when their time comes. Don't let the emotion dominate you, but become an observer of the emotion. Mindfulness meditation can also help.",
            "Your expression is neutral, but there's worry in your heart. You're anxious about something. Rather than just worrying itself, evaluate how likely that worry is to actually happen. Most worries don't actually happen. Prepare, but don't worry excessively.",
            "You're expressionless, but I can see everything. I feel that worry deep in your heart. Don't try to eliminate emotions. Instead, understand and empathize with them. Take time to comfort yourself, saying, 'Today was hard, I'm tired.' Conversation with yourself is the most healing.",
            "You look calm, but there's worry in your eyes. You're expressionless but there's concern in your heart. Rather than anxiety about the future, focus on the present. Focus on living today well, and tomorrow will naturally fall into place. Celebrate small successes and gain strength.",
            "You're living expressionlessly, but behind lies hidden fatigue and worry. Your expressionless face feels heavy. To lighten that burden, find one thing to let go of each day. Unnecessary appointments, excessive expectations, perfectionist attitudes. Remove these one by one, and your heart will lighten.",
            "You're expressionless, but there's a knot in your heart. Behind the calm expression lies complex emotions. Don't try to make that complexity simple. Human hearts are originally complex. Instead, give each emotion a name. Recognize, 'Right now I'm sad, anxious, and a bit angry,' and solutions will emerge.",
            "Your expression is neutral, but the subtle changes around your eyes show worry. You seem calm, but there's concern in your heart. Don't suppress emotions, let them flow naturally. Letting emotional waves pass is better. Suppressing makes them bigger. They look temporarily gone, but someday they'll return in a larger form.",
            "You're expressionless, but I can see your inner self clearly. Knots and worries are mixed. Pour attention into yourself. Give a little of that attention you gave others back to yourself. Eat what you like, do what you like, rest enough. You're also someone who needs to be cared for.",
            "You have no expression, but there's loneliness in your eyes. You seem calm, but there's concern in your heart. Rebuild connections. Genuine connections with people, self-discovery through hobbies, contact with nature. These can fill the loneliness. Be alone but don't be lonely.",
            "Behind the expressionless face lies hidden worry. Your expression carries complex inner thoughts. Make that worry concrete. Clearly define exactly what you're worried about, and half is solved. Uncertainty breeds anxiety, but concrete problems have solutions. Start with small steps.",
            "You look calm, but there's worry in your heart. You're troubled about something. At the end of trouble, there must be a decision. Don't delay anymore. Even a small decision, make it and take action. Trying is much better than regretting. Movement creates change, and change brings new opportunities.",
            "You look neutral, but the subtle changes around your eyes reveal knots. Even while expressionless, there's worry in your heart. Stop comparing. Other people's calm is different from yours. Don't compare moments on social media with your average. Focus on your own calm moments.",
            "You're living expressionlessly, but I can see everything. I feel that loneliness and worry deep in your heart. Now remove the mask. You don't need to be a perfect person. Don't hide emotions out of fear of being hurt. People who truly like you will accept all your emotions."
          ];
          return messages[Math.floor(Math.random() * messages.length)];
        }
      }
      
      if (locale === 'ko') {
        return `표정에서 ${emotionLabels[emotion]}을 느낍니다. 그런 감정이 당신의 지금을 설명하고 있군요. 감정은 흐르는 것이라 언젠가는 변할 겁니다.`;
      } else if (locale === 'ja') {
        return `表情から${emotionLabels[emotion]}を感じます。そのような感情があなたの今を説明しています。感情は流れるものなので、いつか変わるでしょう。`;
      } else if (locale === 'zh-CN') {
        return `我能感受到你表情中的${emotionLabels[emotion]}。那种情绪在描述你的当下。情绪会流动，总有一天会改变。`;
      } else if (locale === 'zh-TW') {
        return `我能感受到你表情中的${emotionLabels[emotion]}。那種情緒在描述你的當下。情緒會流動，總有一天會改變。`;
      } else if (locale === 'vi') {
        return `Tôi có thể cảm nhận ${emotionLabels[emotion]} trong biểu cảm của bạn. Cảm xúc đó đang mô tả hiện tại của bạn. Cảm xúc là dòng chảy, nên chúng sẽ thay đổi một ngày nào đó.`;
      } else if (locale === 'id') {
        return `Saya dapat merasakan ${emotionLabels[emotion]} dalam ekspresi Anda. Emosi itu menggambarkan keadaan Anda sekarang. Emosi adalah aliran, jadi mereka akan berubah suatu hari nanti.`;
      } else {
        return `I can sense ${emotionLabels[emotion]} in your expression. That emotion is describing your present. Emotions are flowing, so they will change someday.`;
      }
    }
    
    // 기본 메시지
    if (locale === 'ko') {
      return "표정만 봐도 알겠습니다. 마음 한편에 아직 정리하지 못한 무언가가 있으시군요. 아마도 누군가, 혹은 무언가에 대한 미련일까요? 그런 당신이 인간적이고 좋습니다.";
    } else if (locale === 'ja') {
      return "表情だけでもわかります。心の片方にまだ整理できていない何かがあります。おそらく誰か、または何かへの未練でしょうか？そんなあなたが人間的で素晴らしいです。";
    } else if (locale === 'zh-CN') {
      return "光看表情我就明白了。心里还有未整理好的东西。也许是对某人或某事的留恋吧？这样的你具有人性，很好。";
    } else if (locale === 'zh-TW') {
      return "光看表情我就明白了。心裡還有未整理好的東西。也許是對某人或某事的留戀吧？這樣的你具有人性，很好。";
    } else if (locale === 'vi') {
      return "Chỉ cần nhìn biểu cảm tôi đã hiểu rồi. Trong lòng bạn còn có điều gì đó chưa được sắp xếp. Có lẽ là luyến tiếc ai đó hoặc điều gì đó? Bạn như vậy rất con người và tốt.";
    } else if (locale === 'id') {
      return "Hanya dengan melihat ekspresi sudah jelas. Ada sesuatu di hati yang belum Anda atur. Mungkin perasaan terhadap seseorang atau sesuatu? Anda yang demikian sangat manusiawi dan baik.";
    } else {
      return "I can tell just by looking at your expression. There's something in your heart that you haven't sorted out yet. Perhaps it's an attachment to someone or something? Such you is human and good.";
    }
  };

  // 알리익스프레스 상품 미리 로드 (시작 화면용 - 일반 추천)
  useEffect(() => {
    if (locale !== 'ko' && !started && aliProducts.length === 0) {
      const loadProducts = async () => {
        try {
          const products = await searchAliExpressProducts('Beauty, Cosmetics, Gift', 4, locale);
          setAliProducts(products);
        } catch (error) {
          console.error('상품 로드 실패:', error);
        }
      };
      loadProducts();
    }
  }, [locale, started, aliProducts.length]);

  // 유사한 테스트와 인기 테스트 로드 (시작 화면용)
  useEffect(() => {
    if (!started && similarTests.length === 0) {
      const loadTests = async () => {
        try {
          const allTests = await getTests();
          const currentTest = allTests.find((t: any) => t.slug === slug);
          
          if (!currentTest) {
            const latestTests = allTests
              .filter((t: any) => t.slug !== slug)
              .slice(0, 5)
              .map((t: any) => ({
                id: t.id,
                slug: t.slug,
                title: typeof t.title === 'string' ? t.title : (t.title[locale] || t.title.ko),
                thumbnail: t.thumbnail,
                playCount: t.play_count
              }));
            
            setSimilarTestsState(latestTests);
            return;
          }

          const currentTestTags = typeof currentTest.tags === 'object' && !Array.isArray(currentTest.tags)
            ? currentTest.tags[locale] || currentTest.tags.ko || []
            : currentTest.tags || [];

          const similarTestsList = allTests
            .filter((t: any) => t.slug !== slug)
            .filter((t: any) => {
              const otherTestTags = typeof t.tags === 'object' && !Array.isArray(t.tags)
                ? t.tags[locale] || t.tags.ko || []
                : t.tags || [];
              
              return Array.isArray(currentTestTags) && Array.isArray(otherTestTags) &&
                currentTestTags.some((tag: string) => otherTestTags.includes(tag));
            })
            .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .slice(0, 5)
            .map((t: any) => ({
              id: t.id,
              slug: t.slug,
              title: typeof t.title === 'string' ? t.title : (t.title[locale] || t.title.ko),
              thumbnail: t.thumbnail,
              playCount: t.play_count
            }));

          setSimilarTestsState(similarTestsList);
        } catch (error) {
          console.error('테스트 로드 실패:', error);
        }
      };

      loadTests();
    }
  }, [slug, locale, similarTests, started]);

  // 유사한 테스트와 인기 테스트 로드 (결과 화면용)
  useEffect(() => {
    if (showResult) {
      const loadTests = async () => {
        try {
          const similarResponse = await fetch(`/api/tests/similar?excludeSlug=${slug}&locale=${locale}&tags=얼굴`);
          if (similarResponse.ok) {
            const similarData = await similarResponse.json();
            setSimilarTestsState(similarData.tests || []);
          }

          const popularResponse = await fetch(`/api/tests/popular?locale=${locale}`);
          if (popularResponse.ok) {
            const popularData = await popularResponse.json();
            setPopularTestsState(popularData.tests || []);
          }
        } catch (error) {
          console.error('테스트 로드 실패:', error);
        }
      };
      loadTests();
    }
  }, [showResult, slug, locale]);

  useEffect(() => {
    if (showLoadingSpinner) {
      const timer = setTimeout(() => {
        setShowLoadingSpinner(false);
        setShowResultPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoadingSpinner]);

  const handleStartTest = async () => {
    setStarted(true);
    await incrementPlayCount(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageSourceSelect = (source: 'camera' | 'gallery') => {
    setShowImageSourceModal(false);
    if (source === 'camera') {
      // 모바일에서는 capture 속성이 있는 input을 클릭하여 네이티브 카메라 앱 열기
      if (isMobile) {
        cameraInputRef.current?.click();
      } else {
        startFrontCameraAndCapture();
      }
    } else {
      fileInputRef.current?.click();
    }
  };

  // 전면 카메라로 한 프레임 캡처 후 분석
  const startFrontCameraAndCapture = async () => {
    try {
      let stream: MediaStream | null = null;

      if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const front = devices.find(d => d.kind === 'videoinput' && /front|user|앞|전면/i.test(d.label || ''));
        if (front && front.deviceId) {
          try {
            stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: front.deviceId }, width: { ideal: 640 }, height: { ideal: 480 } } });
          } catch {}
        }
      }

      if (!stream) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'user' }, width: { ideal: 640 }, height: { ideal: 480 } } });
        } catch {}
      }

      if (!stream) {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } } });
      }

      if (!stream) {
        setError(t('alerts.cameraError'));
        return;
      }

      // 후면 감지 시 재시도
      const picked = stream.getVideoTracks()[0];
      const s = picked.getSettings();
      const lbl = (picked.label || '').toLowerCase();
      const looksBack = /back|rear|environment|world/.test(lbl) || /environment/i.test(String(s.facingMode || ''));
      if (looksBack) {
        picked.stop();
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: { advanced: [{ facingMode: 'user' }], width: { ideal: 640 }, height: { ideal: 480 } } });
        } catch {}
      }

      // 비디오에 연결하여 한 프레임 캡처
      if (videoRef.current && canvasRef.current && stream) {
        videoRef.current.srcObject = stream;
        await new Promise(res => {
          const v = videoRef.current!;
          v.onloadedmetadata = () => res(null);
        });
        const v = videoRef.current;
        const c = canvasRef.current;
        const ctx = c.getContext('2d');
        if (ctx) {
          c.width = v.videoWidth || 640;
          c.height = v.videoHeight || 480;
          ctx.drawImage(v, 0, 0, c.width, c.height);
          const imgData = c.toDataURL('image/jpeg');
          capturePhotoFromImage(imgData);
        }
        // 스트림 종료
        stream.getTracks().forEach(t => t.stop());
        videoRef.current.srcObject = null;
      }
    } catch (e) {
      console.error('카메라 캡처 실패:', e);
      setError(t('alerts.cameraError'));
    }
  };

  const capturePhotoFromImage = (imageData: string) => {
    setCapturedImage(imageData);
    setShowImagePreview(true);
    analyzeFace(imageData);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        capturePhotoFromImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeFace = async (imageData: string) => {
    setIsAnalyzing(true);
    setError(null);
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    try {
      // MediaPipe FaceLandmarker for detailed 468 landmarks analysis
      const vision = await import('@mediapipe/tasks-vision');
      const filesetResolver = await (vision as any).FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
      );

      const landmarker = await (vision as any).FaceLandmarker.createFromOptions(filesetResolver, {
        baseOptions: {
          modelAssetPath:
            'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
          delegate: 'CPU',
        },
        numFaces: 1,
        runningMode: 'IMAGE',
        outputFaceBlendshapes: true,  // Facial action units 활성화
        outputFacialTransformationMatrixes: false,
        minFaceDetectionConfidence: 0.5,
        minFacePresenceConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      const img = document.createElement('img');
      img.crossOrigin = 'anonymous';
      img.src = imageData;

      await new Promise<void>((res, rej) => {
        img.onload = () => res();
        img.onerror = rej;
      });

      const detectionResult = await landmarker.detect(img as any);
      const landmarks = detectionResult?.faceLandmarks?.[0];
      const blendshapes = detectionResult?.faceBlendshapes?.[0]?.categories || [];

      if (landmarks && landmarks.length > 0) {
        // Analyze emotions from MediaPipe blendshapes (if available) or landmarks
        const emotions = blendshapes.length > 0 
          ? analyzeEmotionsFromBlendshapes(blendshapes) 
          : analyzeEmotionsFromLandmarks(landmarks);
        
        // Success: use detected face with emotion analysis
        setFaceDetected(true);
        setFaceQuality(75);
        
        // Calculate honest facial evaluation result
        const evaluationResult = calculateHonestFacialEvaluationResult(landmarks, emotions, blendshapes);
        
        setResult(evaluationResult);
        setShowLoadingSpinner(true);
      } else {
        // Face not detected
        setFaceDetected(false);
        setFaceQuality(0);
        setShowFaceDetectError(true);
        setIsAnalyzing(false);
      }
    } catch (error) {
      console.error('MediaPipe 분석 오류:', error);
      setFaceDetected(false);
      setFaceQuality(0);
      setShowFaceDetectError(true);
      setIsAnalyzing(false);
    }
  };

  // Analyze emotions from MediaPipe blendshapes (facial action units)
  const analyzeEmotionsFromBlendshapes = (blendshapes: Array<{categoryName: string, score: number}>): Record<string, number> => {
    const scores: Record<string, number> = {};
    let jawOpen = 0;
    let browDown = 0;
    let browInnerUp = 0;
    let mouthFrown = 0;
    let mouthSmile = 0;
    
    // Map MediaPipe blendshapes to emotions
    for (const blend of blendshapes) {
      const name = blend.categoryName.toLowerCase();
      
      // Happy indicators
      if (name.includes('smile') || name.includes('mouthsmile')) {
        const smileScore = blend.score;
        scores.happy = (scores.happy || 0) + smileScore;
        mouthSmile = Math.max(mouthSmile, smileScore);
      }
      
      // Sad indicators
      if (name.includes('frown') || name.includes('mouthfrown')) {
        const frownScore = blend.score;
        scores.sad = (scores.sad || 0) + frownScore;
        mouthFrown = Math.max(mouthFrown, frownScore);
      }
      
      // Jaw open - can indicate surprised OR angry (if combined with browDown)
      if (name.includes('jawopen')) {
        jawOpen = blend.score;
        if (blend.score > 0.3) {
          scores.surprised = (scores.surprised || 0) + blend.score * 0.5; // Lower weight initially
      }
      }
      
      // Mouth close/jaw clench - anger indicator
      if (name.includes('mouthclose') || name.includes('jawclench')) {
        scores.angry = (scores.angry || 0) + blend.score;
      }
      
      // Eyebrow up - surprised/fearful (but check if browDown is also present)
      if (name.includes('browinnerup')) {
        browInnerUp = blend.score;
        scores.surprised = (scores.surprised || 0) + blend.score * 0.7; // Lower weight initially
        scores.fearful = (scores.fearful || 0) + blend.score * 0.5;
      }
      
      // Eyebrow down - ANGRY indicator (strong signal)
      if (name.includes('browdownleft') || name.includes('browdownright')) {
        const browScore = blend.score;
        scores.angry = (scores.angry || 0) + browScore * 2.0; // Higher weight for anger (increased from 1.5)
        browDown = Math.max(browDown, browScore);
      }
      
      // Nose sneer - disgust
      if (name.includes('nosesneerleft') || name.includes('nosesneerright')) {
        scores.disgusted = (scores.disgusted || 0) + blend.score;
      }
      
      // Mouth roll/lip suck - contempt
      if (name.includes('mouthroll') || name.includes('lipsuck')) {
        scores.contempt = (scores.contempt || 0) + blend.score;
      }
    }
    
    // CRITICAL: If browDown is present (even slightly), prioritize angry over surprised
    // 화난 표정에서도 browInnerUp이 나올 수 있지만, browDown이 있으면 angry가 더 중요
    if (browDown > 0.1) {
      // browDown이 있으면 surprised 점수 감소
      if (browInnerUp > 0.2) {
        // browInnerUp과 browDown이 동시에 있으면 -> browDown이 더 중요하므로 angry
        scores.angry = (scores.angry || 0) + browInnerUp * 0.8; // browInnerUp도 angry에 기여
        scores.surprised = Math.max(0, (scores.surprised || 0) - browInnerUp * 0.6); // surprised 감소
        scores.fearful = Math.max(0, (scores.fearful || 0) - browInnerUp * 0.3); // fearful도 감소
      }
    }
    
    // IMPORTANT: If jawOpen is high AND browDown is present (or even mouthFrown), it's likely ANGRY (shouting)
    if (jawOpen > 0.3 && (browDown > 0.1 || mouthFrown > 0.2)) {
      scores.angry = (scores.angry || 0) + jawOpen * 1.5; // Strong angry signal (increased from 1.2)
      scores.surprised = Math.max(0, (scores.surprised || 0) - jawOpen * 0.7); // Reduce surprised more (increased from 0.5)
    }
    
    // If jawOpen is high but browDown is very low, but mouthFrown is high -> still likely angry
    if (jawOpen > 0.3 && browDown < 0.1 && mouthFrown > 0.3) {
      scores.angry = (scores.angry || 0) + jawOpen * 1.0;
      scores.surprised = Math.max(0, (scores.surprised || 0) - jawOpen * 0.5);
    }
    
    // If mouthFrown is high with browDown, it's likely angry/sad mix, but prioritize angry
    if (mouthFrown > 0.3 && browDown > 0.1) {
      scores.angry = (scores.angry || 0) + mouthFrown * 1.0; // Increased from 0.8
    }
    
    // If mouthSmile is very low and browDown is high, reduce happy score
    if (mouthSmile < 0.1 && browDown > 0.2) {
      scores.happy = Math.max(0, (scores.happy || 0) * 0.2); // More reduction (from 0.3 to 0.2)
    }
    
    // Normalize scores first (before calculating neutral)
    const normalizedScores = {
      happy: Math.min(1, scores.happy || 0),
      sad: Math.min(1, scores.sad || 0),
      angry: Math.min(1, scores.angry || 0),
      surprised: Math.min(1, scores.surprised || 0),
      fearful: Math.min(1, scores.fearful || 0),
      disgusted: Math.min(1, scores.disgusted || 0),
      contempt: Math.min(1, scores.contempt || 0)
    };
    
    // Calculate neutral based on normalized scores
    // If any emotion is strong (>0.3), reduce neutral significantly
    const maxEmotion = Math.max(...Object.values(normalizedScores));
    const emotionSum = Object.values(normalizedScores).reduce((a, b) => a + b, 0);
    
    // Neutral should be low when strong emotions are present
    let neutralScore = 0;
    if (maxEmotion < 0.2 && emotionSum < 0.5) {
      // Only high neutral when all emotions are very weak
      neutralScore = Math.max(0, 0.7 - emotionSum * 0.5);
    } else if (maxEmotion < 0.4) {
      // Medium emotions present
      neutralScore = Math.max(0, 0.4 - emotionSum * 0.3);
    } else {
      // Strong emotions present - neutral should be very low
      neutralScore = Math.max(0, 0.2 - (maxEmotion - 0.4) * 0.5);
    }
    
    // Return normalized emotions
    const emotions = {
      ...normalizedScores,
      neutral: neutralScore
    };
    
    return emotions;
  };

  // Analyze emotions from MediaPipe 468 landmarks (fallback method)
  const analyzeEmotionsFromLandmarks = (landmarks: Array<{x: number, y: number, z: number}>): Record<string, number> => {
    if (!landmarks || landmarks.length < 468) {
      return { happy: 0, sad: 0, neutral: 0.7, angry: 0, surprised: 0, fearful: 0, disgusted: 0, contempt: 0 };
    }

    // Left mouth corner (61), Right mouth corner (291)
    const leftMouth = landmarks[61] || { x: 0, y: 0, z: 0 };
    const rightMouth = landmarks[291] || { x: 0, y: 0, z: 0 };
    const mouthCenter = landmarks[13] || { x: 0, y: 0, z: 0 };
    
    // Mouth width (happiness indicator) - normalize to 0-1 range based on typical values
    const mouthWidth = Math.abs(rightMouth.x - leftMouth.x);
    
    // Mouth corners vs center Y position (smile/frown)
    const leftMouthY = leftMouth.y;
    const rightMouthY = rightMouth.y;
    const mouthCenterY = mouthCenter.y;
    const avgMouthY = (leftMouthY + rightMouthY) / 2;
    const mouthCurve = mouthCenterY - avgMouthY; // negative = smile, positive = frown
    
    // Left eyebrow inner (276), Right eyebrow inner (46), Left eyebrow outer (38), Right eyebrow outer (289)
    const leftEyebrowInner = landmarks[276] || { x: 0, y: 0, z: 0 };
    const rightEyebrowInner = landmarks[46] || { x: 0, y: 0, z: 0 };
    const leftEyebrowOuter = landmarks[38] || { x: 0, y: 0, z: 0 };
    const rightEyebrowOuter = landmarks[289] || { x: 0, y: 0, z: 0 };
    
    // Eyebrow position (anger/surprise)
    const avgEyebrowInnerY = (leftEyebrowInner.y + rightEyebrowInner.y) / 2;
    const avgEyebrowOuterY = (leftEyebrowOuter.y + rightEyebrowOuter.y) / 2;
    const eyebrowAngle = avgEyebrowOuterY - avgEyebrowInnerY;
    
    // Eye openness indicators
    // Left eye top (159), Left eye bottom (145), Right eye top (386), Right eye bottom (374)
    const leftEyeTop = landmarks[159] || { x: 0, y: 0, z: 0 };
    const leftEyeBottom = landmarks[145] || { x: 0, y: 0, z: 0 };
    const rightEyeTop = landmarks[386] || { x: 0, y: 0, z: 0 };
    const rightEyeBottom = landmarks[374] || { x: 0, y: 0, z: 0 };
    
    const leftEyeOpen = Math.abs(leftEyeBottom.y - leftEyeTop.y);
    const rightEyeOpen = Math.abs(rightEyeBottom.y - rightEyeTop.y);
    const avgEyeOpen = (leftEyeOpen + rightEyeOpen) / 2;
    
    // Nostril/nose area (disgust)
    const noseTip = landmarks[4] || { x: 0, y: 0, z: 0 };
    const leftNostril = landmarks[48] || { x: 0, y: 0, z: 0 };
    const rightNostril = landmarks[278] || { x: 0, y: 0, z: 0 };
    
    // Calculate base scores (0-1 range)
    // Happy: smile indicators (negative mouth curve, wide mouth)
    const happyScore = Math.max(0, -mouthCurve * 30); // negative curve = smile
    
    // Sad: frown indicators (positive mouth curve, downturned eyebrows)
    const sadScore = Math.max(0, mouthCurve * 25);
    
    // Neutral: low variation in all features
    const mouthNeutrality = 1 - Math.abs(mouthCurve) * 40;
    const eyebrowNeutrality = 1 - Math.abs(eyebrowAngle) * 20;
    const eyeNeutrality = 1 - Math.abs(avgEyeOpen - 0.015) * 50;
    const neutralScore = (mouthNeutrality + eyebrowNeutrality + eyeNeutrality) / 3;
    
    // Angry: furrowed brows (negative eyebrow angle), tense eyebrows
    const angryBrowScore = Math.max(0, -eyebrowAngle * 15); // negative angle = furrowed (reduced sensitivity)
    const angryEyebrowPosScore = Math.max(0, (avgEyebrowInnerY - 0.35) * 8); // higher threshold
    const angryScore = (angryBrowScore + angryEyebrowPosScore) / 2;
    
    // Surprised: raised eyebrows, wide eyes (need BOTH indicators strong)
    const surprisedEyebrowScore = Math.max(0, eyebrowAngle * 15); // positive angle = raised (reduced sensitivity)
    const surprisedEyeScore = Math.max(0, (avgEyeOpen - 0.025) * 30); // higher threshold for eye openness
    // Require BOTH eyebrow and eye indicators to be significant
    const surprisedScore = eyebrowAngle > 0.03 && avgEyeOpen > 0.03 ? (surprisedEyebrowScore + surprisedEyeScore) / 2 : Math.min(surprisedEyebrowScore, surprisedEyeScore) * 0.3;
    
    // Fearful: slightly wide eyes, slightly raised inner brows
    const fearfulEyeScore = Math.max(0, (avgEyeOpen - 0.018) * 30);
    const fearfulBrowScore = Math.max(0, (avgEyebrowInnerY - 0.28) * 8);
    const fearfulScore = (fearfulEyeScore + fearfulBrowScore) / 2;
    
    // Disgusted: nose wrinkles (z-depth variation)
    const disgustedScore = Math.max(0, (noseTip.z - 0.012) * 30);
    
    // Contempt: asymmetric mouth
    const contemptScore = Math.max(0, Math.abs(leftMouthY - rightMouthY) * 30);
    
    // Raw emotion scores
    const rawEmotions = {
      happy: happyScore,
      sad: sadScore,
      neutral: neutralScore,
      angry: angryScore,
      surprised: surprisedScore,
      fearful: fearfulScore,
      disgusted: disgustedScore,
      contempt: contemptScore
    };
    
    // Clamp all scores to 0-1 range
    const emotions = {
      happy: Math.min(1, Math.max(0, rawEmotions.happy)),
      sad: Math.min(1, Math.max(0, rawEmotions.sad)),
      neutral: Math.min(1, Math.max(0, rawEmotions.neutral)),
      angry: Math.min(1, Math.max(0, rawEmotions.angry)),
      surprised: Math.min(1, Math.max(0, rawEmotions.surprised)),
      fearful: Math.min(1, Math.max(0, rawEmotions.fearful)),
      disgusted: Math.min(1, Math.max(0, rawEmotions.disgusted)),
      contempt: Math.min(1, Math.max(0, rawEmotions.contempt))
    };
    
    // Check if face is very neutral (more sensitive detection)
    const totalVariation = Math.abs(mouthCurve) + Math.abs(eyebrowAngle) + Math.abs(avgEyeOpen - 0.015);
    if (totalVariation < 0.08) {
      // Very neutral face - emphasize neutral state strongly
      emotions.neutral = 0.75 + Math.random() * 0.2;
      emotions.happy = 0.08 + Math.random() * 0.08;
      emotions.sad = Math.random() * 0.03;
      emotions.angry = 0;
      emotions.surprised = 0;
      emotions.fearful = Math.random() * 0.02;
      emotions.disgusted = 0;
      emotions.contempt = 0;
    }
    
    // Apply higher threshold to reduce false positives
    const threshold = 0.25;
    for (const key in emotions) {
      if (key !== 'neutral' && emotions[key as keyof typeof emotions] < threshold) {
        emotions[key as keyof typeof emotions] = 0;
      }
    }
    
    return emotions;
  };

  const handleShowResult = () => {
    setShowResultPopup(false);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  const handleRetry = () => {
    setCapturedImage(null);
    setFaceDetected(false);
    setFaceQuality(0);
    setResult(null);
    setShowResult(false);
    setShowLoadingSpinner(false);
    setShowResultPopup(false);
    setError(null);
    setIsAnalyzing(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`https://myquizoasis.com${window.location.pathname}`);
    alert(t('alerts.linkCopied'));
  };

  const shareToKakao = () => {
    if (typeof window === 'undefined') return;
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert(t('alerts.kakaoInit'));
      return;
    }
    const currentUrl = `https://myquizoasis.com${window.location.pathname}`;
    const thumbnailUrl = getThumbnailUrl(thumbnail || '');
    const shareDescription = result 
      ? t('shareMessages.default', { score: result.firstImpressionScore })
      : description;
    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: shareDescription,
          imageUrl: thumbnailUrl,
          link: { mobileWebUrl: currentUrl, webUrl: currentUrl },
        },
        buttons: [{ title: t('ui.startTest'), link: { mobileWebUrl: currentUrl, webUrl: currentUrl } }],
      });
    } catch (error) {
      alert(t('alerts.kakaoError'));
    }
  };

  const shareToTelegram = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const shareText = result ? t('shareMessages.telegram', { score: result.firstImpressionScore }) : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const shareToWeChat = async () => {
    const url = `https://myquizoasis.com${window.location.pathname}`;
    const shareText = result ? t('shareMessages.wechat', { score: result.firstImpressionScore }) : title;
    const shareMessage = `${shareText}\n\n${url}`;
    try {
      await navigator.clipboard.writeText(shareMessage);
      alert(t('alerts.wechatCopy'));
    } catch (error) {
      alert(t('alerts.shareFailed'));
    }
  };

  const shareToLine = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const shareText = result ? t('shareMessages.line', { score: result.firstImpressionScore }) : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://social-plugins.line.me/lineit/page?url=${url}&text=${text}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const url = encodeURIComponent(`https://myquizoasis.com${window.location.pathname}`);
    const shareText = result ? t('shareMessages.whatsapp', { score: result.firstImpressionScore }) : title;
    const text = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  };

  // No need for resultData useMemo - result already has all data we need

  // 로딩 스피너, 결과 팝업, 결과 화면, 진행 화면, 시작 화면 — 연애운 테스트와 동일 UI
  if (showLoadingSpinner) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="mb-8 w-full max-w-[680px]">
          <AdSensePlaceholder 
            slot={ADSENSE_CONFIG.SLOTS.LOADING_TOP}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label="AdSense 광고 영역 (로딩 스피너 상단)"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700 flex items-center justify-center">
            {t('ui.analyzing').replace('...', '')}
            <span className="ml-1 inline-flex">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '200ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '400ms' }}>.</span>
            </span>
          </p>
        </div>
        <div className="mt-8 w-full max-w-[680px]">
          <AdSensePlaceholder 
            slot={ADSENSE_CONFIG.SLOTS.LOADING_BOTTOM}
            style={{ width: '100%', height: '250px' }}
            className="mx-auto"
            label="AdSense 광고 영역 (로딩 스피너 하단)"
          />
        </div>
      </div>
    );
  }

  if (showResultPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 {t('ui.testCompleted')}</h2>
          <div className="mb-6">
            {locale === 'ko' ? (
              <div>
                <p className="text-xs text-gray-500 text-center mb-3">쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>
                <div className="flex justify-center">
                  <iframe src="https://ads-partners.coupang.com/widgets.html?id=923499&template=carousel&trackingCode=AF6775264&subId=&width=300&height=250&tsource=" width="300" height="250" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url" />
                </div>
              </div>
            ) : aliProducts.length > 0 ? (
              <div className="max-w-sm mx-auto">
                <ProductRecommendations products={aliProducts.slice(0, 3)} title="" locale={locale} />
              </div>
            ) : (
              <div className="flex justify-center">
                <a href="https://s.click.aliexpress.com/e/_c4VOb3UR?bz=300*250" target="_blank" rel="noopener noreferrer">
                  <img src="https://ae01.alicdn.com/kf/S3619e57974f148d087c950fe497cdf55q/300x250.jpg" alt="AliExpress" className="rounded-lg" style={{ maxWidth: '300px', height: 'auto' }} />
                </a>
              </div>
            )}
          </div>
          <button onClick={handleShowResult} className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl text-xl font-bold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg">{t('ui.viewResults')}</button>
        </div>
      </div>
    );
  }

  if (showResult && result) {
    const localeKey = locale as keyof typeof result.attractiveFeatures;
    const attractiveFeatures = result.attractiveFeatures[localeKey] || result.attractiveFeatures.ko;
    const improvementSuggestions = result.improvementSuggestions[localeKey] || result.improvementSuggestions.ko;
    const summary = result.summary[localeKey] || result.summary.ko;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div>
            {/* 당신의 결과는 섹션 */}
            <div className="text-center mb-3 bg-white rounded-2xl shadow-lg p-4 md:p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{t('ui.yourResult')}</h2>
              <p className="text-base text-gray-600 mb-1">{summary}</p>
            </div>
            
            {/* 이성이 보는 첫인상 점수 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-4 text-left">💕 {t('ui.oppositeGenderScore')}</h3>
              <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-200">
                <div className="text-4xl font-bold text-pink-600">
                  {result.oppositeGenderScore}{t('ui.points')}
                    </div>
                    </div>
                  </div>
            
            {/* 동성이 보는 첫인상 점수 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-4 text-left">👥 {t('ui.sameGenderScore')}</h3>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <div className="text-4xl font-bold text-blue-600">
                  {result.sameGenderScore}{t('ui.points')}
                </div>
              </div>
            </div>
            
            {/* 얼굴 특징 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-4 text-left">👤 {t('ui.facialFeatures')}</h3>
              <ul className="space-y-1">
                {result.appearance.facialFeatures[localeKey].map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 매력적인 부분 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-3">
              <h3 className="text-base font-bold text-gray-800 mb-4 text-left">✨ {t('ui.attractiveFeatures')}</h3>
              <ul className="space-y-1">
                {attractiveFeatures.slice(0, 6).map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 mb-6 px-4">
              <button
                onClick={() => {
                  const shareText = t('shareMessages.default', { score: result.firstImpressionScore });
                  const url = `https://myquizoasis.com${window.location.pathname}`;
                  const shareMessage = `${shareText}\n\n${url}`;
                  if (navigator.share) {
                    navigator.share({ title: title, text: shareMessage, url });
                  } else {
                    navigator.clipboard.writeText(shareMessage);
                    alert(t('alerts.linkCopied'));
                  }
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-3"
              >
                {t('ui.shareResult')}
              </button>
            </div>
            <div className="my-6 px-4">
              <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.RESULT_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label="AdSense 광고 영역 (결과-다시하기 사이)" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 px-4">
              <button onClick={handleRetry} className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-400 transition-all shadow-md">{t('ui.retake')}</button>
              <Link href={`/${locale}`} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-center shadow-md">{t('ui.otherTests')}</Link>
            </div>
            <div className="mt-8 mb-8 text-center px-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">{t('ui.shareResultWithFriends')}</h2>
              <div className="flex justify-center gap-2">
                <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" /></button>
                <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" /></button>
              </div>
            </div>
            {similarTestsState && similarTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">{t('ui.similarTests')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {similarTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image src={getThumbnailUrl(test.thumbnail)} alt={typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw" />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">{typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}</h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount, locale as Locale)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {popularTestsState && popularTestsState.length > 0 && (
              <div className="mb-8 pb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">{tGlobal('recommendations.popularTestsTop5')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-5 gap-4">
                  {popularTestsState.slice(0, 5).map((test) => (
                    <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                        <div className="relative aspect-video">
                          <Image src={getThumbnailUrl(test.thumbnail)} alt={typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw" />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-end gap-3">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">{typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}</h3>
                            <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                              <Play size={14} />
                              <span>{formatPlayCount(test.playCount, locale as Locale)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  if (started && !showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{t('ui.faceReadingTitle')}</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{t('ui.faceReadingDescription')}</p>
          </div>
          <div className="mb-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-dashed border-purple-300">
                <div className="text-center">
                  {!showImagePreview || !capturedImage ? (
                    <>
                      <div className="mb-6"><Camera className="w-16 h-16 mx-auto text-purple-500" /></div>
                      <div className="mb-6"><div className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center"><span className="text-gray-500 text-sm">{t('ui.selectPhotoPlaceholder')}</span></div></div>
                      <button onClick={() => { if (isMobile) { setShowImageSourceModal(true); } else { fileInputRef.current?.click(); } }} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                        <Upload className="w-5 h-5 mr-2" />{t('ui.selectPhoto')}
                      </button>
                    </>
                  ) : (
                    <div className="mb-6">
                      <p className="mb-4 text-center font-bold text-gray-700 flex items-center justify-center">{t('ui.proceedingWithPhoto')}<span className="ml-1 inline-flex"><span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span><span className="animate-bounce" style={{ animationDelay: '200ms' }}>.</span><span className="animate-bounce" style={{ animationDelay: '400ms' }}>.</span></span></p>
                      <div className="flex items-center justify-center">
                        <img src={capturedImage} alt={t('ui.selectedPhoto')} className="w-full max-w-full h-auto rounded-lg object-contain" style={{ maxHeight: '600px' }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-6">
            <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.PROGRESS_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label="AdSense 광고 영역 (진행 화면)" />
          </div>
          <div className="mt-8 mb-8 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{t('ui.shareWithFriends')}</h2>
            <div className="flex justify-center gap-2">
              <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" /></button>
            </div>
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
          <input ref={cameraInputRef} type="file" accept="image/*" capture="user" onChange={handleFileSelect} className="hidden" />
        </div>

        {showFaceDetectError && (
          <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-orange-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 mx-4 max-w-md w-full">
              {/* 바운싱 애니메이션이 있는 경고 아이콘 (연애운 UI 동일) */}
              <div className="flex justify-center mb-6">
                <div className="animate-bounce">
                  <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                {t('ui.faceNotDetected')}
              </h2>
              <p className="text-gray-600 text-center mb-6">
                {t('ui.faceNotDetectedDescription')}
              </p>

              {/* 팁 섹션 (체크 아이콘 포함) */}
              <div className="bg-white rounded-xl border-2 border-gray-100 p-4 mb-6">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                  <h3 className="font-bold text-gray-800">{t('ui.tips')}</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('ui.tipCenter')}
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('ui.tipLighting')}
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('ui.tipNoObstruction')}
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('ui.tipClear')}
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setShowFaceDetectError(false);
                  setCapturedImage(null);
                  setShowImagePreview(false);
                  setError(null);
                  setIsAnalyzing(false);
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                {t('ui.selectPhotoAgain')}
              </button>
            </div>
          </div>
        )}

        {showImageSourceModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 mx-4 max-w-sm w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{t('ui.selectPhotoMethod')}</h3>
              <div className="border-b border-gray-200 mb-6"></div>
              <div className="space-y-4">
                <button onClick={() => handleImageSourceSelect('camera')} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                  <Camera className="w-5 h-5 mr-2" />
                  {t('ui.takePhoto')}
                </button>
                <button onClick={() => handleImageSourceSelect('gallery')} className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                  <Upload className="w-5 h-5 mr-2" />
                  {t('ui.selectFromGallery')}
                </button>
                <button onClick={() => setShowImageSourceModal(false)} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-full transition-all duration-200">
                  {t('ui.cancel')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // 시작 화면
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full overflow-hidden mb-3" style={{ aspectRatio: '680/384' }}>
          <Image src={getThumbnailUrl(thumbnail || 'Facial_Psychological_State.jpg')} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 800px" priority />
        </div>
        <div className="px-4">
          <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h1>
          <div className="my-6">
            <AdSensePlaceholder slot={ADSENSE_CONFIG.SLOTS.START_SCREEN} style={{ width: '100%', height: '250px' }} className="mx-auto" label="AdSense 광고 영역 (타이틀-설명 사이)" />
          </div>
          <div className="text-gray-600 mb-6 leading-relaxed text-center space-y-4">
            <p className="font-bold text-gray-700">{t('startMessage.line1')}</p>
            <p>{t('startMessage.line2')}</p>
            <p>{t('startMessage.line3')}</p>
            <p>{t('startMessage.line4')}</p>
            <p className="whitespace-pre-line">{t('startMessage.line5')}</p>
            <p>{t('startMessage.line6')}</p>
          </div>
          <div className="flex justify-center mb-4">
            <button onClick={handleStartTest} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">{t('ui.startTest')}</button>
          </div>
          <p className="text-sm font-bold text-center mb-6" style={{ color: '#669df6' }}>{t('ui.totalParticipants', { count: formatPlayCount(playCount, locale as Locale) })}</p>
          <div className="max-w-[680px] mx-auto mb-6">
            {locale === 'ko' ? (
              <iframe src="https://ads-partners.coupang.com/widgets.html?id=925074&template=carousel&trackingCode=AF6775264&subId=&width=680&height=140&tsource=" width="680" height="140" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url" className="w-full" />
            ) : aliProducts.length > 0 ? (
              <div className="max-w-sm mx-auto"><ProductRecommendations products={aliProducts.slice(0, 3)} title="" locale={locale} /></div>
            ) : (
              <div className="flex justify-center">
                <a href="https://s.click.aliexpress.com/e/_c4VOb3UR?bz=300*250" target="_parent">
                  <Image width={300} height={250} src="https://ae01.alicdn.com/kf/S3619e57974f148d087c950fe497cdf55q/300x250.jpg" alt="AliExpress" style={{ maxWidth: '300px', height: 'auto' }} />
                </a>
              </div>
            )}
          </div>
          <div className="mb-8 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{t('ui.shareWithFriends')}</h2>
            <div className="flex justify-center gap-2">
              <button onClick={copyLink} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/link.jpeg" alt={t('ui.linkCopy')} width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToKakao} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/kakao.jpeg" alt={t('ui.kakao')} width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToTelegram} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/telegram.jpeg" alt={t('ui.telegram')} width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToWeChat} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/wechat.jpeg" alt={t('ui.wechat')} width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToLine} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/line.jpeg" alt={t('ui.line')} width={46} height={46} className="rounded-lg" /></button>
              <button onClick={shareToWhatsApp} className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform"><Image src="/icons/whatsapp.jpeg" alt={t('ui.whatsapp')} width={46} height={46} className="rounded-lg" /></button>
            </div>
          </div>

          {similarTestsState.length > 0 && (
            <div className="mb-8 pb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {tGlobal('recommendations.similarTests') || '유사한 다른 테스트'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {similarTestsState.map((test) => (
                  <Link key={test.id} href={`/${locale}/test/${test.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={getThumbnailUrl(test.thumbnail)}
                          alt={typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-end gap-3">
                          <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                            {typeof test.title === 'string' ? test.title : (test.title as any)?.[locale] || (test.title as any)?.ko || 'Test'}
                          </h3>
                          <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                            <Play size={14} />
                            <span>{formatPlayCount(test.playCount, locale as Locale)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
