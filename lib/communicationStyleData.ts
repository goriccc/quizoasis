export interface CommunicationStyleQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    a: Record<string, string>;
    b: Record<string, string>;
    c: Record<string, string>;
    d: Record<string, string>;
  };
}

export interface CommunicationStyleResult {
  type: number;
  emoji: string;
  title: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  description: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  characteristics: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  strengths: {
    ko: string[];
    en: string[];
    ja: string[];
    'zh-CN': string[];
    'zh-TW': string[];
    vi: string[];
    id: string[];
  };
  weaknesses: {
    ko: string[];
    en: string[];
    ja: string[];
    'zh-CN': string[];
    'zh-TW': string[];
    vi: string[];
    id: string[];
  };
  suitableSituations: {
    ko: string[];
    en: string[];
    ja: string[];
    'zh-CN': string[];
    'zh-TW': string[];
    vi: string[];
    id: string[];
  };
  advice: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  bestMatch: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  goodMatch: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  carefulMatch: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  difficultMatch: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
}

export const communicationStyleQuestions: CommunicationStyleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "동료의 아이디어가 마음에 안 들 때?",
      en: "When you don't like a colleague's idea?",
      ja: "同僚のアイデアが気に入らない時？",
      'zh-CN': "不喜欢同事的想法时？",
      'zh-TW': "不喜歡同事的想法時？",
      vi: "Khi không thích ý tưởng của đồng nghiệp?",
      id: "Ketika Anda tidak menyukai ide rekan kerja?"
    },
    options: {
      a: {
        ko: "\"그건 좀 아닌 것 같은데요. 이유는...\"",
        en: "\"That doesn't seem right. The reason is...\"",
        ja: "「それはちょっと違うと思います。理由は...」",
        'zh-CN': "「那个不太对。原因是...」",
        'zh-TW': "「那個不太對。原因是...」",
        vi: "\"Điều đó không đúng lắm. Lý do là...\"",
        id: "\"Itu tidak terlihat benar. Alasannya adalah...\""
      },
      b: {
        ko: "\"좋은데, 이 부분은 조금 다르게 해볼까요?\"",
        en: "\"Good, but shall we try this part a bit differently?\"",
        ja: "「いいですね、この部分は少し違う風にやってみましょうか？」",
        'zh-CN': "「不错，这部分能不能换个方式？」",
        'zh-TW': "「不錯，這部分能不能換個方式？」",
        vi: "\"Tốt, nhưng phần này chúng ta thử cách khác được không?\"",
        id: "\"Bagus, tapi apakah kita bisa mencoba bagian ini sedikit berbeda?\""
      },
      c: {
        ko: "\"고생했는데 미안하지만 다시 생각해봐야 할 것 같아\"",
        en: "\"Sorry for your effort, but I think we need to rethink this\"",
        ja: "「頑張ってくれたのに申し訳ないけど、もう一度考え直した方がいいと思う」",
        'zh-CN': "「辛苦你了但我觉得需要重新考虑」",
        'zh-TW': "「辛苦你了但我覺得需要重新考慮」",
        vi: "\"Cảm ơn bạn đã cố gắng nhưng tôi nghĩ cần suy nghĩ lại\"",
        id: "\"Maaf atas usaha Anda, tapi saya pikir kita perlu memikirkan kembali ini\""
      },
      d: {
        ko: "\"데이터로 보면 효율이 낮을 것 같습니다\"",
        en: "\"According to the data, efficiency seems low\"",
        ja: "「データで見ると効率が低いようです」",
        'zh-CN': "「从数据看效率似乎较低」",
        'zh-TW': "「從數據看效率似乎較低」",
        vi: "\"Theo dữ liệu, hiệu quả có vẻ thấp\"",
        id: "\"Menurut data, efisiensi tampaknya rendah\""
      }
    }
  },
  {
    id: 2,
    question: {
      ko: "친구가 고민을 털어놓을 때?",
      en: "When a friend confides their worries?",
      ja: "友達が悩みを打ち明ける時？",
      'zh-CN': "朋友倾诉烦恼时？",
      'zh-TW': "朋友傾訴煩惱時？",
      vi: "Khi bạn bè giãi bày lo lắng?",
      id: "Ketika teman menceritakan kekhawatiran mereka?"
    },
    options: {
      a: {
        ko: "\"그래서 어떻게 할 거야?\" 해결책 물음",
        en: "\"So what are you going to do?\" Ask for solutions",
        ja: "「それでどうするつもり？」解決策を聞く",
        'zh-CN': "「那你打算怎么办？」询问解决方案",
        'zh-TW': "「那你打算怎麼辦？」詢問解決方案",
        vi: "\"Vậy bạn định làm gì?\" Hỏi giải pháp",
        id: "\"Jadi apa yang akan kamu lakukan?\" Tanyakan solusi"
      },
      b: {
        ko: "\"힘들었겠다. 내가 뭘 도와줄까?\"",
        en: "\"It must have been hard. What can I do to help?\"",
        ja: "「大変だったでしょう。私が何か手伝えることはある？」",
        'zh-CN': "「一定很辛苦。我能怎么帮你？」",
        'zh-TW': "「一定很辛苦。我能怎麼幫你？」",
        vi: "\"Chắc bạn rất vất vả. Tôi có thể giúp gì?\"",
        id: "\"Pasti sulit. Apa yang bisa saya bantu?\""
      },
      c: {
        ko: "\"많이 속상했겠다... 괜찮아?\" 감정 공감",
        en: "\"You must have been really upset... Are you okay?\" Emotional empathy",
        ja: "「かなり傷ついたでしょう...大丈夫？」感情共感",
        'zh-CN': "「一定很难过...你还好吗？」情感共鸣",
        'zh-TW': "「一定很難過...你還好嗎？」情感共鳴",
        vi: "\"Chắc bạn rất buồn... Bạn ổn chứ?\" Đồng cảm cảm xúc",
        id: "\"Kamu pasti sangat sedih... Apakah kamu baik-baik saja?\" Empati emosional"
      },
      d: {
        ko: "\"상황이 어떻게 된 건지 좀 더 설명해줄래?\"",
        en: "\"Can you explain more about how the situation developed?\"",
        ja: "「状況がどうなったかもっと説明してくれる？」",
        'zh-CN': "「能详细说明一下情况吗？」",
        'zh-TW': "「能詳細說明一下情況嗎？」",
        vi: "\"Bạn có thể giải thích thêm về tình huống không?\"",
        id: "\"Bisakah kamu menjelaskan lebih detail tentang bagaimana situasinya berkembang?\""
      }
    }
  },
  {
    id: 3,
    question: {
      ko: "회의에서 당신의 발언 스타일은?",
      en: "Your speaking style in meetings?",
      ja: "会議でのあなたの発言スタイルは？",
      'zh-CN': "你在会议中的发言风格？",
      'zh-TW': "你在會議中的發言風格？",
      vi: "Phong cách phát biểu của bạn trong cuộc họp?",
      id: "Gaya berbicara Anda dalam rapat?"
    },
    options: {
      a: {
        ko: "\"제 의견은 명확합니다. 이렇게 해야 합니다\"",
        en: "\"My opinion is clear. We should do it this way\"",
        ja: "「私の意見は明確です。このようにすべきです」",
        'zh-CN': "「我的意见很明确。应该这样做」",
        'zh-TW': "「我的意見很明確。應該這樣做」",
        vi: "\"Ý kiến của tôi rõ ràng. Chúng ta nên làm như vậy\"",
        id: "\"Pendapat saya jelas. Kita harus melakukannya dengan cara ini\""
      },
      b: {
        ko: "\"혹시 이런 방법은 어떨까요?\"",
        en: "\"What do you think about this approach?\"",
        ja: "「もしかしてこんな方法はどうでしょうか？」",
        'zh-CN': "「这样做好吗？」",
        'zh-TW': "「這樣做好嗎？」",
        vi: "\"Bạn nghĩ cách này sao?\"",
        id: "\"Bagaimana pendapat Anda tentang pendekatan ini?\""
      },
      c: {
        ko: "\"다들 어떻게 생각하시나요? 저는...\"",
        en: "\"What do you all think? I think...\"",
        ja: "「皆さんはどう思いますか？私は...」",
        'zh-CN': "「大家怎么看？我觉得...」",
        'zh-TW': "「大家怎麼看？我覺得...」",
        vi: "\"Mọi người nghĩ sao? Tôi nghĩ...\"",
        id: "\"Apa yang kalian pikirkan? Saya pikir...\""
      },
      d: {
        ko: "\"근거를 보면 이런 방향이 맞습니다\"",
        en: "\"Based on the evidence, this direction is correct\"",
        ja: "「根拠を見ると、この方向が正しいです」",
        'zh-CN': "「基于依据，这个方向是正确的」",
        'zh-TW': "「基於依據，這個方向是正確的」",
        vi: "\"Dựa trên căn cứ, hướng này đúng\"",
        id: "\"Berdasarkan bukti, arah ini benar\""
      }
    }
  },
  {
    id: 4,
    question: {
      ko: "부탁을 거절해야 할 때?",
      en: "When you need to refuse a request?",
      ja: "頼みを断らなければならない時？",
      'zh-CN': "需要拒绝请求时？",
      'zh-TW': "需要拒絕請求時？",
      vi: "Khi cần từ chối yêu cầu?",
      id: "Ketika Anda perlu menolak permintaan?"
    },
    options: {
      a: {
        ko: "\"미안하지만 그건 못 해줘\"",
        en: "\"Sorry, but I can't do that\"",
        ja: "「申し訳ないけど、それはできません」",
        'zh-CN': "「抱歉我做不到」",
        'zh-TW': "「抱歉我做不到」",
        vi: "\"Xin lỗi nhưng tôi không thể làm được\"",
        id: "\"Maaf, tapi saya tidak bisa melakukan itu\""
      },
      b: {
        ko: "\"지금은 어려울 것 같아. 다음에는...\"",
        en: "\"It seems difficult right now. Next time...\"",
        ja: "「今は難しいと思います。今度は...」",
        'zh-CN': "「现在有点困难。下次...」",
        'zh-TW': "「現在有點困難。下次...」",
        vi: "\"Bây giờ có vẻ khó. Lần sau...\"",
        id: "\"Sepertinya sulit sekarang. Lain kali...\""
      },
      c: {
        ko: "\"정말 미안해. 도와주고 싶은데 상황이...\"",
        en: "\"I'm really sorry. I want to help but the situation...\"",
        ja: "「本当にごめんなさい。手伝いたいのですが状況が...」",
        'zh-CN': "「真的很抱歉。我想帮忙但情况...」",
        'zh-TW': "「真的很抱歉。我想幫忙但情況...」",
        vi: "\"Thực sự xin lỗi. Tôi muốn giúp nhưng tình huống...\"",
        id: "\"Saya benar-benar minta maaf. Saya ingin membantu tapi situasinya...\""
      },
      d: {
        ko: "\"현실적으로 불가능해. 왜냐하면...\"",
        en: "\"Realistically impossible. Because...\"",
        ja: "「現実的に不可能です。なぜなら...」",
        'zh-CN': "「实际上不可能。因为...」",
        'zh-TW': "「實際上不可能。因為...」",
        vi: "\"Thực tế không thể. Vì...\"",
        id: "\"Secara realistis tidak mungkin. Karena...\""
      }
    }
  },
  {
    id: 5,
    question: {
      ko: "대화 중 당신이 주로 하는 것은?",
      en: "What do you mainly do during conversations?",
      ja: "会話中に主にすることは？",
      'zh-CN': "你说话时主要做什么？",
      'zh-TW': "你說話時主要做什麼？",
      vi: "Bạn chủ yếu làm gì trong cuộc trò chuyện?",
      id: "Apa yang terutama Anda lakukan selama percakapan?"
    },
    options: {
      a: {
        ko: "내 의견 명확히 전달하기",
        en: "Clearly convey my opinion",
        ja: "自分の意見を明確に伝える",
        'zh-CN': "明确传达我的意见",
        'zh-TW': "明確傳達我的意見",
        vi: "Truyền đạt ý kiến rõ ràng",
        id: "Menyampaikan pendapat saya dengan jelas"
      },
      b: {
        ko: "상대 기분 살피며 말하기",
        en: "Speak while checking the other's mood",
        ja: "相手の気分を見ながら話す",
        'zh-CN': "观察对方情绪说话",
        'zh-TW': "觀察對方情緒說話",
        vi: "Nói chuyện theo tâm trạng đối phương",
        id: "Berbicara sambil memperhatikan suasana hati lawan"
      },
      c: {
        ko: "감정과 공감 나누기",
        en: "Share emotions and empathy",
        ja: "感情と共感を共有する",
        'zh-CN': "分享情感和共鸣",
        'zh-TW': "分享情感和共鳴",
        vi: "Chia sẻ cảm xúc và đồng cảm",
        id: "Berbagi emosi dan empati"
      },
      d: {
        ko: "사실과 정보 교환하기",
        en: "Exchange facts and information",
        ja: "事実と情報を交換する",
        'zh-CN': "交换事实和信息",
        'zh-TW': "交換事實和信息",
        vi: "Trao đổi sự thật và thông tin",
        id: "Bertukar fakta dan informasi"
      }
    }
  },
  {
    id: 6,
    question: {
      ko: "누군가 실수했을 때 어떻게 말하나요?",
      en: "How do you speak when someone makes a mistake?",
      ja: "誰かが間違いをした時どう言いますか？",
      'zh-CN': "有人犯错时你会怎么说？",
      'zh-TW': "有人犯錯時你會怎麼說？",
      vi: "Bạn nói thế nào khi ai đó mắc lỗi?",
      id: "Bagaimana Anda berbicara ketika seseorang membuat kesalahan?"
    },
    options: {
      a: {
        ko: "\"왜 그렇게 했어? 이건 잘못됐어\"",
        en: "\"Why did you do that? This is wrong\"",
        ja: "「なぜそうしたの？これは間違っている」",
        'zh-CN': "「为什么那样做？这是错的」",
        'zh-TW': "「為什麼那樣做？這是錯的」",
        vi: "\"Sao bạn làm vậy? Điều này sai\"",
        id: "\"Kenapa kamu melakukan itu? Ini salah\""
      },
      b: {
        ko: "\"실수할 수 있지. 다음엔 이렇게 해보자\"",
        en: "\"Mistakes happen. Let's try this way next time\"",
        ja: "「間違いはあるもの。次はこうしてみよう」",
        'zh-CN': "「会犯错的。下次试试这样做」",
        'zh-TW': "「會犯錯的。下次試試這樣做」",
        vi: "\"Ai chẳng mắc lỗi. Lần sau thử cách này\"",
        id: "\"Kesalahan bisa terjadi. Mari coba cara ini lain kali\""
      },
      c: {
        ko: "\"괜찮아, 누구나 실수하니까. 많이 속상하지?\"",
        en: "\"It's okay, everyone makes mistakes. Are you very upset?\"",
        ja: "「大丈夫、誰でも間違えるから。すごく落ち込んでる？」",
        'zh-CN': "「没关系，谁都会犯错。很难过吧？」",
        'zh-TW': "「沒關係，誰都會犯錯。很難過吧？」",
        vi: "\"Không sao, ai cũng mắc lỗi. Bạn có buồn không?\"",
        id: "\"Tidak apa-apa, semua orang membuat kesalahan. Apakah kamu sangat kesal?\""
      },
      d: {
        ko: "\"과정을 분석해보니 여기서 문제가 생겼네\"",
        en: "\"Analyzing the process, the problem occurred here\"",
        ja: "「プロセスを分析すると、ここで問題が発生したね」",
        'zh-CN': "「分析过程后，问题出在这里」",
        'zh-TW': "「分析過程後，問題出在這裡」",
        vi: "\"Phân tích quá trình, vấn đề xảy ra ở đây\"",
        id: "\"Menganalisis prosesnya, masalah terjadi di sini\""
      }
    }
  },
  {
    id: 7,
    question: {
      ko: "의견 충돌 시 당신의 방식은?",
      en: "Your approach when opinions clash?",
      ja: "意見が衝突した時のあなたの方法は？",
      'zh-CN': "意见冲突时你的处理方式？",
      'zh-TW': "意見衝突時你的處理方式？",
      vi: "Cách bạn xử lý khi ý kiến xung đột?",
      id: "Pendekatan Anda ketika pendapat bentrok?"
    },
    options: {
      a: {
        ko: "내 의견을 강하게 주장함",
        en: "Strongly assert my opinion",
        ja: "自分の意見を強く主張する",
        'zh-CN': "强烈坚持我的意见",
        'zh-TW': "強烈堅持我的意見",
        vi: "Khẳng định mạnh mẽ ý kiến của mình",
        id: "Sangat menegaskan pendapat saya"
      },
      b: {
        ko: "타협점 찾으려 노력함",
        en: "Try to find a compromise",
        ja: "妥協点を見つけようとする",
        'zh-CN': "努力寻找折中点",
        'zh-TW': "努力尋找折中點",
        vi: "Cố gắng tìm điểm thỏa hiệp",
        id: "Mencoba menemukan kompromi"
      },
      c: {
        ko: "상대 감정 먼저 이해하려 함",
        en: "Try to understand the other's feelings first",
        ja: "相手の感情をまず理解しようとする",
        'zh-CN': "先理解对方的情绪",
        'zh-TW': "先理解對方的情緒",
        vi: "Cố hiểu cảm xúc đối phương trước",
        id: "Mencoba memahami perasaan lawan terlebih dahulu"
      },
      d: {
        ko: "논리적 근거로 설득함",
        en: "Persuade with logical evidence",
        ja: "論理的な根拠で説得する",
        'zh-CN': "用逻辑依据说服",
        'zh-TW': "用邏輯依據說服",
        vi: "Thuyết phục bằng bằng chứng logic",
        id: "Meyakinkan dengan bukti logis"
      }
    }
  },
  {
    id: 8,
    question: {
      ko: "칭찬할 때 어떻게 말하나요?",
      en: "How do you speak when praising?",
      ja: "褒める時どう言いますか？",
      'zh-CN': "表扬时你会怎么说？",
      'zh-TW': "表揚時你會怎麼說？",
      vi: "Bạn nói thế nào khi khen ngợi?",
      id: "Bagaimana Anda berbicara saat memuji?"
    },
    options: {
      a: {
        ko: "\"진짜 잘했어! 최고야\"",
        en: "\"You did really well! You're the best\"",
        ja: "「本当によくやった！最高だよ」",
        'zh-CN': "「做得好！你是最棒的」",
        'zh-TW': "「做得好！你是最棒的」",
        vi: "\"Làm tốt lắm! Bạn là nhất\"",
        id: "\"Kamu melakukannya dengan sangat baik! Kamu yang terbaik\""
      },
      b: {
        ko: "\"정말 수고했어. 고마워\"",
        en: "\"You really worked hard. Thank you\"",
        ja: "「本当にお疲れ様。ありがとう」",
        'zh-CN': "「辛苦了。谢谢」",
        'zh-TW': "「辛苦了。謝謝」",
        vi: "\"Bạn thực sự đã cố gắng. Cảm ơn\"",
        id: "\"Kamu benar-benar bekerja keras. Terima kasih\""
      },
      c: {
        ko: "\"너무 자랑스러워! 정말 대단해\"",
        en: "\"I'm so proud! You're really amazing\"",
        ja: "「とっても誇らしい！本当にすごい」",
        'zh-CN': "「太骄傲了！真的很厉害」",
        'zh-TW': "「太驕傲了！真的很厲害」",
        vi: "\"Tự hào quá! Thật tuyệt vời\"",
        id: "\"Saya sangat bangga! Kamu benar-benar luar biasa\""
      },
      d: {
        ko: "\"이 부분이 특히 효과적이었어\"",
        en: "\"This part was particularly effective\"",
        ja: "「この部分が特に効果的だった」",
        'zh-CN': "「这部分特别有效」",
        'zh-TW': "「這部分特別有效」",
        vi: "\"Phần này đặc biệt hiệu quả\"",
        id: "\"Bagian ini sangat efektif\""
      }
    }
  },
  {
    id: 9,
    question: {
      ko: "대화의 목적은 주로?",
      en: "What is the main purpose of conversation?",
      ja: "会話の目的は主に？",
      'zh-CN': "对话的主要目的是？",
      'zh-TW': "對話的主要目的是？",
      vi: "Mục đích chính của cuộc trò chuyện là gì?",
      id: "Apa tujuan utama percakapan?"
    },
    options: {
      a: {
        ko: "의사 결정과 결론 도출",
        en: "Decision making and reaching conclusions",
        ja: "意思決定と結論の導出",
        'zh-CN': "决策和得出结论",
        'zh-TW': "決策和得出結論",
        vi: "Ra quyết định và đưa ra kết luận",
        id: "Pengambilan keputusan dan mencapai kesimpulan"
      },
      b: {
        ko: "관계 유지와 화합",
        en: "Maintaining relationships and harmony",
        ja: "関係維持と調和",
        'zh-CN': "维持关系和和谐",
        'zh-TW': "維持關係和和諧",
        vi: "Duy trì mối quan hệ và hòa hợp",
        id: "Mempertahankan hubungan dan harmoni"
      },
      c: {
        ko: "감정 교류와 위로",
        en: "Emotional exchange and comfort",
        ja: "感情交流と慰め",
        'zh-CN': "情感交流和安慰",
        'zh-TW': "情感交流和安慰",
        vi: "Trao đổi cảm xúc và an ủi",
        id: "Pertukaran emosional dan kenyamanan"
      },
      d: {
        ko: "정보 교환과 이해",
        en: "Information exchange and understanding",
        ja: "情報交換と理解",
        'zh-CN': "信息交换和理解",
        'zh-TW': "信息交換和理解",
        vi: "Trao đổi thông tin và hiểu biết",
        id: "Pertukaran informasi dan pemahaman"
      }
    }
  },
  {
    id: 10,
    question: {
      ko: "설명할 때 당신의 스타일은?",
      en: "Your style when explaining?",
      ja: "説明する時のあなたのスタイルは？",
      'zh-CN': "你解释时的风格？",
      'zh-TW': "你解釋時的風格？",
      vi: "Phong cách của bạn khi giải thích?",
      id: "意思 Anda ketika menjelaskan?"
    },
    options: {
      a: {
        ko: "핵심만 짧고 명확하게",
        en: "Short and clear, only the essentials",
        ja: "核心だけを短く明確に",
        'zh-CN': "简短明确只说重点",
        'zh-TW': "簡短明確只說重點",
        vi: "Ngắn gọn và rõ ràng, chỉ điểm chính",
        id: "Singkat dan jelas, hanya poin penting"
      },
      b: {
        ko: "상대 이해도 확인하며 천천히",
        en: "Slowly while checking the other's understanding",
        ja: "相手の理解度を確認しながらゆっくり",
        'zh-CN': "慢慢来同时确认对方理解",
        'zh-TW': "慢慢來同時確認對方理解",
        vi: "Từ từ và kiểm tra sự hiểu của đối phương",
        id: "Perlahan sambil memeriksa pemahaman lawan"
      },
      c: {
        ko: "예시와 비유로 쉽고 공감 가게",
        en: "Easy and empathetic with examples and analogies",
        ja: "例と比喩で簡単に共感できるように",
        'zh-CN': "用例子和比喻易于理解和共鸣",
        'zh-TW': "用例子和比喻易於理解和共鳴",
        vi: "Dễ hiểu và đồng cảm với ví dụ và phép so sánh",
        id: "Mudah dan empatik dengan contoh dan analogi"
      },
      d: {
        ko: "체계적이고 논리적으로",
        en: "Systematic and logical",
        ja: "体系的で論理的に",
        'zh-CN': "系统化和逻辑化",
        'zh-TW': "系統化和邏輯化",
        vi: "Có hệ thống và logic",
        id: "Sistematis dan logis"
      }
    }
  },
  {
    id: 11,
    question: {
      ko: "SNS나 메시지를 보낼 때?",
      en: "When sending SNS or messages?",
      ja: "SNSやメッセージを送る時？",
      'zh-CN': "发送SNS或消息时？",
      'zh-TW': "發送SNS或消息時？",
      vi: "Khi gửi SNS hoặc tin nhắn?",
      id: "Ketika mengirim SNS atau pesan?"
    },
    options: {
      a: {
        ko: "간결하고 직설적으로",
        en: "Concise and direct",
        ja: "簡潔で直接的に",
        'zh-CN': "简洁直接",
        'zh-TW': "簡潔直接",
        vi: "Ngắn gọn và trực tiếp",
        id: "Ringkas dan langsung"
      },
      b: {
        ko: "이모티콘으로 분위기 부드럽게",
        en: "Gently with emojis for atmosphere",
        ja: "絵文字で雰囲気を柔らかく",
        'zh-CN': "用表情让气氛柔和",
        'zh-TW': "用表情讓氣氛柔和",
        vi: "Nhẹ nhàng với emoji tạo không khí",
        id: "Lembut dengan emoji untuk suasana"
      },
      c: {
        ko: "감정 표현 풍부하게",
        en: "Rich in emotional expression",
        ja: "感情表現豊かに",
        'zh-CN': "情感表达丰富",
        'zh-TW': "情感表達豐富",
        vi: "Biểu đạt cảm xúc phong phú",
        id: "Kaya ekspresi emosional"
      },
      d: {
        ko: "필요한 정보 정확하게",
        en: "Accurately with necessary information",
        ja: "必要な情報を正確に",
        'zh-CN': "准确传达必要信息",
        'zh-TW': "準確傳達必要信息",
        vi: "Thông tin cần thiết chính xác",
        id: "Akurat dengan informasi yang diperlukan"
      }
    }
  },
  {
    id: 12,
    question: {
      ko: "사람들이 당신의 말하기에 대해 뭐라고 할까요?",
      en: "What would people say about your speaking?",
      ja: "人々はあなたの話し方について何と言うでしょうか？",
      'zh-CN': "人们会如何评价你的说话方式？",
      'zh-TW': "人們會如何評價你的說話方式？",
      vi: "Mọi người sẽ nói gì về cách nói của bạn?",
      id: "Apa yang akan orang katakan tentang cara berbicara Anda?"
    },
    options: {
      a: {
        ko: "\"시원시원하고 명확해\"",
        en: "\"Refreshing and clear\"",
        ja: "「さっぱりしていて明確だ」",
        'zh-CN': "「爽快明确」",
        'zh-TW': "「爽快明確」",
        vi: "\"Mát mẻ và rõ ràng\"",
        id: "\"Menyegarkan dan jelas\""
      },
      b: {
        ko: "\"배려심 있고 부드러워\"",
        en: "\"Considerate and gentle\"",
        ja: "「思いやりがあって優しい」",
        'zh-CN': "「体贴温柔」",
        'zh-TW': "「體貼溫柔」",
        vi: "\"Quan tâm và dịu dàng\"",
        id: "\"Penuh pertimbangan dan lembut\""
      },
      c: {
        ko: "\"따뜻하고 공감 잘해\"",
        en: "\"Warm and empathetic\"",
        ja: "「温かくて共感がうまい」",
        'zh-CN': "「温暖善于共鸣」",
        'zh-TW': "「溫暖善於共鳴」",
        vi: "\"Ấm áp và đồng cảm tốt\"",
        id: "\"Hangat dan empatik\""
      },
      d: {
        ko: "\"논리적이고 정확해\"",
        en: "\"Logical and accurate\"",
        ja: "「論理的で正確だ」",
        'zh-CN': "「逻辑精确」",
        'zh-TW': "「邏輯精確」",
        vi: "\"Logic và chính xác\"",
        id: "\"Logis dan akurat\""
      }
    }
  }
];

export const communicationStyleResults: CommunicationStyleResult[] = [
  {
    type: 1,
    emoji: "🎯",
    title: {
      ko: "직설적 소통형",
      en: "Direct Communicator",
      ja: "直接的コミュニケーター型",
      'zh-CN': "直接沟通型",
      'zh-TW': "直接溝通型",
      vi: "Giao Tiếp Trực Tiếp",
      id: "Komunikator Langsung"
    },
    description: {
      ko: "말을 에둘러 하지 않고 핵심을 바로 전달합니다. 솔직하고 명확해서 오해가 적고, 빠른 의사결정이 가능합니다. 효율적이고 시원시원하지만 때로는 무뚝뚝하거나 배려 없어 보일 수 있습니다. 비즈니스에서 강점이 있지만 친밀한 관계에서는 부드러움이 필요합니다.",
      en: "You deliver the message directly without beating around the bush. You're honest and clear, leading to fewer misunderstandings and quick decisions. Efficient and refreshing, but sometimes may seem blunt or inconsiderate. Strong in business but gentleness is needed in intimate relationships.",
      ja: "回りくどく言わず、核心をすぐに伝えます。正直で明確なので誤解が少なく、迅速な意思決定が可能です。効率的でさっぱりしていますが、時にはぶっきらぼうだったり配慮がないように見えることがあります。ビジネスでは強みがありますが、親密な関係では優しさが必要です。",
      'zh-CN': "说话不拐弯抹角，直接传达要点。诚实明确，误解少，能快速决策。高效爽快，但有时显得生硬或不体贴。商业上强势，但在亲密关系中需要温柔。",
      'zh-TW': "說話不拐彎抹角，直接傳達要點。誠實明確，誤解少，能快速決策。高效爽快，但有時顯得生硬或不體貼。商業上強勢，但在親密關係中需要溫柔。",
      vi: "Bạn truyền đạt trực tiếp không vòng vo. Thành thật và rõ ràng, ít hiểu lầm, quyết định nhanh. Hiệu quả và mát mẻ nhưng đôi khi có vẻ thô lỗ hoặc thiếu quan tâm. Mạnh trong kinh doanh nhưng cần dịu dàng trong mối quan hệ thân mật.",
      id: "Anda menyampaikan pesan secara langsung tanpa bertele-tele. Anda jujur dan jelas, menyebabkan lebih sedikit kesalahpahaman dan keputusan cepat. Efisien dan menyegarkan, tetapi kadang-kadang mungkin tampak blak-blakan atau tidak mempertimbangkan. Kuat dalam bisnis tetapi kelembutan diperlukan dalam hubungan intim."
    },
    characteristics: {
      ko: "단도직입적, 명확함, 솔직함",
      en: "Straightforward, clear, honest",
      ja: "単刀直入的、明確、正直",
      'zh-CN': "单刀直入、明确、诚实",
      'zh-TW': "單刀直入、明確、誠實",
      vi: "Thẳng thắn, rõ ràng, thành thật",
      id: "Langsung, jelas, jujur"
    },
    strengths: {
      ko: ["명확함", "효율성", "결단력", "신뢰"],
      en: ["Clarity", "Efficiency", "Decision-making", "Trust"],
      ja: ["明確さ", "効率性", "決断力", "信頼"],
      'zh-CN': ["明确", "效率", "决断力", "信任"],
      'zh-TW': ["明確", "效率", "決斷力", "信任"],
      vi: ["Rõ ràng", "Hiệu quả", "Quyết đoán", "Tin cậy"],
      id: ["Kejelasan", "Efisiensi", "Keputusan", "Kepercayaan"]
    },
    weaknesses: {
      ko: ["무뚝뚝함", "상처 줄 수 있음", "경직됨"],
      en: ["Bluntness", "Can hurt", "Rigidity"],
      ja: ["ぶっきらぼう", "傷つける可能性", "硬直"],
      'zh-CN': ["生硬", "可能伤人", "死板"],
      'zh-TW': ["生硬", "可能傷人", "死板"],
      vi: ["Thô lỗ", "Có thể làm tổn thương", "Cứng nhắc"],
      id: ["Kekasaran", "Dapat menyakiti", "Kekakuan"]
    },
    suitableSituations: {
      ko: ["업무", "위기관리", "의사결정"],
      en: ["Work", "Crisis management", "Decision making"],
      ja: ["業務", "危機管理", "意思決定"],
      'zh-CN': ["工作", "危机管理", "决策"],
      'zh-TW': ["工作", "危機管理", "決策"],
      vi: ["Công việc", "Quản lý khủng hoảng", "Ra quyết định"],
      id: ["Pekerjaan", "Manajemen krisis", "Pengambilan keputusan"]
    },
    advice: {
      ko: "명확함은 좋지만 전달 방식의 부드러움도 중요해요. \"무엇을\"보다 \"어떻게\"가 관계를 결정합니다!",
      en: "Clarity is good, but gentleness in delivery is also important. \"How\" rather than \"what\" determines relationships!",
      ja: "明確さは良いですが、伝え方の優しさも重要です。「何を」より「どのように」が関係を決定します！",
      'zh-CN': "明确很好，但表达方式的温柔也很重要。「怎么」比「什么」更能决定关系！",
      'zh-TW': "明確很好，但表達方式的溫柔也很重要。「怎麼」比「什麼」更能決定關係！",
      vi: "Rõ ràng là tốt, nhưng sự dịu dàng trong cách truyền đạt cũng quan trọng. \"Như thế nào\" quan trọng hơn \"cái gì\" trong mối quan hệ!",
      id: "Kejelasan itu baik, tetapi kelembutan dalam penyampaian juga penting. \"Bagaimana\" daripada \"apa\" yang menentukan hubungan!"
    },
    bestMatch: {
      ko: "🎯 직설적 소통형 - 명확한 소통으로 효율적",
      en: "🎯 Direct Communicator - Efficient with clear communication",
      ja: "🎯 直接的コミュニケーター型 - 明確なコミュニケーションで効率的",
      'zh-CN': "🎯 直接沟通型 - 高效清晰的沟通",
      'zh-TW': "🎯 直接溝通型 - 高效清晰的溝通",
      vi: "🎯 Giao Tiếp Trực Tiếp - Hiệu quả với giao tiếp rõ ràng",
      id: "🎯 Komunikator Langsung - Efisien dengan komunikasi yang jelas"
    },
    goodMatch: {
      ko: "🧠 논리적 분석형 - 사실 기반 대화",
      en: "🧠 Logical Analysis Type - Fact-based conversation",
      ja: "🧠 論理的分析型 - 事実に基づく会話",
      'zh-CN': "🧠 逻辑分析型 - 基于事实的对话",
      'zh-TW': "🧠 邏輯分析型 - 基於事實的對話",
      vi: "🧠 Phân Tích Logic - Cuộc trò chuyện dựa trên sự thật",
      id: "🧠 Tipe Analisis Logis - Percakapan berbasis fakta"
    },
    carefulMatch: {
      ko: "⚠️ 🌸 간접적 배려형 - 직설 vs 배려 충돌",
      en: "⚠️ 🌸 Indirect Caring Type - Direct vs considerate conflict",
      ja: "⚠️ 🌸 間接的配慮型 - 直接と配慮の衝突",
      'zh-CN': "⚠️ 🌸 间接体贴型 - 直接与体贴的冲突",
      'zh-TW': "⚠️ 🌸 間接體貼型 - 直接與體貼的衝突",
      vi: "⚠️ 🌸 Gián Tiếp Quan Tâm - Xung đột trực tiếp vs quan tâm",
      id: "⚠️ 🌸 Tipe Tidak Langsung yang Peduli - Konflik langsung vs pertimbangan"
    },
    difficultMatch: {
      ko: "❌ 💗 감성적 공감형 - 냉정함 vs 따뜻함",
      en: "❌ 💗 Emotional Empathy Type - Coldness vs warmth",
      ja: "❌ 💗 感情的共感型 - 冷たさと温かさ",
      'zh-CN': "❌ 💗 感性共鸣型 - 冷漠vs温暖",
      'zh-TW': "❌ 💗 感性共鳴型 - 冷漠vs溫暖",
      vi: "❌ 💗 Đồng Cảm Cảm Xúc - Lạnh lùng vs ấm áp",
      id: "❌ 💗 Tipe Empati Emosional - Kedinginan vs kehangatan"
    }
  },
  {
    type: 2,
    emoji: "🌸",
    title: {
      ko: "간접적 배려형",
      en: "Indirect Caring Type",
      ja: "間接的配慮型",
      'zh-CN': "间接体贴型",
      'zh-TW': "間接體貼型",
      vi: "Gián Tiếp Quan Tâm",
      id: "Tipe Tidak Langsung yang Peduli"
    },
    description: {
      ko: "상대방의 기분을 먼저 생각하며 조심스럽게 말합니다. 에둘러 표현하고 쿠션어를 많이 사용합니다. 관계를 중시하고 갈등을 피하려 노력합니다. 다정하고 배려심 있지만 의도가 불분명하거나 우유부단해 보일 수 있습니다. 때로는 명확한 의사 표현이 필요합니다.",
      en: "You speak carefully, thinking of the other's feelings first. You express indirectly and use many cushioning words. You value relationships and try to avoid conflict. Kind and considerate, but may seem unclear or indecisive. Sometimes clear expression of intent is needed.",
      ja: "相手の気分をまず考えて慎重に話します。回りくどく表現し、クッション言葉を多く使います。関係を重視し、対立を避けようとします。親切で思いやりがありますが、意図が不明確だったり優柔不断に見えることがあります。時には明確な意思表示が必要です。",
      'zh-CN': "优先考虑对方情绪，谨慎说话。表达绕弯，多用缓冲词。重视关系，努力避免冲突。亲切体贴，但可能显得意图不清或优柔寡断。有时需要明确表达意图。",
      'zh-TW': "優先考慮對方情緒，謹慎說話。表達繞彎，多用緩衝詞。重視關係，努力避免衝突。親切體貼，但可能顯得意圖不清或優柔寡斷。有時需要明確表達意圖。",
      vi: "Bạn nói cẩn thận, nghĩ đến cảm xúc đối phương trước. Diễn đạt gián tiếp và dùng nhiều từ đệm. Coi trọng mối quan hệ và tránh xung đột. Tốt bụng và quan tâm nhưng có thể mơ hồ hoặc do dự. Đôi khi cần thể hiện ý định rõ ràng.",
      id: "Anda berbicara dengan hati-hati, memikirkan perasaan lawan terlebih dahulu. Anda mengekspresikan secara tidak langsung dan menggunakan banyak kata penyangga. Anda menghargai hubungan dan mencoba menghindari konflik. Baik dan penuh pertimbangan, tetapi mungkin tampak tidak jelas atau ragu-ragu. Kadang-kadang ekspresi yang jelas dari niat diperlukan."
    },
    characteristics: {
      ko: "부드러움, 배려심, 갈등 회피",
      en: "Gentleness, consideration, conflict avoidance",
      ja: "優しさ、配慮、対立回避",
      'zh-CN': "温柔、体贴、避免冲突",
      'zh-TW': "溫柔、體貼、避免衝突",
      vi: "Dịu dàng, quan tâm, tránh xung đột",
      id: "Kelembutan, pertimbangan, penghindaran konflik"
    },
    strengths: {
      ko: ["배려심", "부드러움", "관계 유지", "갈등 회피"],
      en: ["Consideration", "Gentleness", "Relationship maintenance", "Conflict avoidance"],
      ja: ["配慮", "優しさ", "関係維持", "対立回避"],
      'zh-CN': ["体贴", "温柔", "维持关系", "避免冲突"],
      'zh-TW': ["體貼", "溫柔", "維持關係", "避免衝突"],
      vi: ["Quan tâm", "Dịu dàng", "Duy trì mối quan hệ", "Tránh xung đột"],
      id: ["Pertimbangan", "Kelembutan", "Pemeliharaan hubungan", "Penghindaran konflik"]
    },
    weaknesses: {
      ko: ["불명확함", "우유부단", "의도 파악 어려움"],
      en: ["Unclear", "Indecisive", "Hard to understand intent"],
      ja: ["不明確", "優柔不断", "意図の把握が困難"],
      'zh-CN': ["不明确", "优柔寡断", "难以理解意图"],
      'zh-TW': ["不明確", "優柔寡斷", "難以理解意圖"],
      vi: ["Không rõ ràng", "Do dự", "Khó hiểu ý định"],
      id: ["Tidak jelas", "Ragu-ragu", "Sulit memahami niat"]
    },
    suitableSituations: {
      ko: ["친밀한 관계", "갈등 상황", "감정 케어"],
      en: ["Intimate relationships", "Conflict situations", "Emotional care"],
      ja: ["親密な関係", "対立状況", "感情ケア"],
      'zh-CN': ["亲密关系", "冲突情况", "情感关怀"],
      'zh-TW': ["親密關係", "衝突情況", "情感關懷"],
      vi: ["Mối quan hệ thân mật", "Tình huống xung đột", "Chăm sóc cảm xúc"],
      id: ["Hubungan intim", "Situasi konflik", "Perawatan emosional"]
    },
    advice: {
      ko: "배려는 좋지만 때로는 명확함이 진짜 배려예요. 중요한 건 분명하게 말해도 괜찮아요!",
      en: "Consideration is good, but sometimes clarity is true consideration. It's okay to say important things clearly!",
      ja: "配慮は良いですが、時には明確さが本当の配慮です。重要なことははっきり言っても大丈夫です！",
      'zh-CN': "体贴很好，但有时明确才是真正的体贴。重要的事情说得清楚也可以！",
      'zh-TW': "體貼很好，但有時明確才是真正的體貼。重要的事情說得清楚也可以！",
      vi: "Quan tâm là tốt, nhưng đôi khi rõ ràng mới là quan tâm thật sự. Nói rõ những điều quan trọng cũng được!",
      id: "Pertimbangan itu baik, tetapi kadang-kadang kejelasan adalah pertimbangan yang benar. Tidak apa-apa untuk mengatakan hal-hal penting dengan jelas!"
    },
    bestMatch: {
      ko: "🌸 간접적 배려형 - 서로 배려하는 편안한 관계",
      en: "🌸 Indirect Caring Type - Comfortable relationship with mutual consideration",
      ja: "🌸 間接的配慮型 - お互いに配慮し合う心地よい関係",
      'zh-CN': "🌸 间接体贴型 - 相互体贴的舒适关系",
      'zh-TW': "🌸 間接體貼型 - 相互體貼的舒適關係",
      vi: "🌸 Gián Tiếp Quan Tâm - Mối quan hệ thoải mái cùng quan tâm",
      id: "🌸 Tipe Tidak Langsung yang Peduli - Hubungan nyaman dengan pertimbangan timbal balik"
    },
    goodMatch: {
      ko: "💗 감성적 공감형 - 따뜻하고 부드러운 소통",
      en: "💗 Emotional Empathy Type - Warm and gentle communication",
      ja: "💗 感情的共感型 - 温かくて優しいコミュニケーション",
      'zh-CN': "💗 感性共鸣型 - 温暖温柔的沟通",
      'zh-TW': "💗 感性共鳴型 - 溫暖溫柔的溝通",
      vi: "💗 Đồng Cảm Cảm Xúc - Giao tiếp ấm áp và dịu dàng",
      id: "💗 Tipe Empati Emosional - Komunikasi hangat dan lembut"
    },
    carefulMatch: {
      ko: "⚠️ 🎯 직설적 소통형 - 답답함 느낄 수 있음",
      en: "⚠️ 🎯 Direct Communicator - May feel frustrating",
      ja: "⚠️ 🎯 直接的コミュニケーター型 - イライラを感じる可能性",
      'zh-CN': "⚠️ 🎯 直接沟通型 - 可能感到烦闷",
      'zh-TW': "⚠️ 🎯 直接溝通型 - 可能感到煩悶",
      vi: "⚠️ 🎯 Giao Tiếp Trực Tiếp - Có thể cảm thấy khó chịu",
      id: "⚠️ 🎯 Komunikator Langsung - Mungkin merasa frustrasi"
    },
    difficultMatch: {
      ko: "❌ 🧠 논리적 분석형 - 정확함 vs 불명확함",
      en: "❌ 🧠 Logical Analysis Type - Accuracy vs unclear",
      ja: "❌ 🧠 論理的分析型 - 正確さと不明確さ",
      'zh-CN': "❌ 🧠 逻辑分析型 - 精确vs不明确",
      'zh-TW': "❌ 🧠 邏輯分析型 - 精確vs不明確",
      vi: "❌ 🧠 Phân Tích Logic - Chính xác vs không rõ ràng",
      id: "❌ 🧠 Tipe Analisis Logis - Akurasi vs tidak jelas"
    }
  },
  {
    type: 3,
    emoji: "💗",
    title: {
      ko: "감성적 공감형",
      en: "Emotional Empathy Type",
      ja: "感情的共感型",
      'zh-CN': "感性共鸣型",
      'zh-TW': "感性共鳴型",
      vi: "Đồng Cảm Cảm Xúc",
      id: "Tipe Empati Emosional"
    },
    description: {
      ko: "감정과 공감을 중시하며 대화합니다. 상대의 기분을 깊이 이해하고 감정적으로 교류합니다. 따뜻하고 위로를 잘하며 진심이 느껴집니다. 친밀한 관계 형성에 탁월하지만 논리나 효율성이 부족할 수 있습니다. 업무에서는 감정과 이성의 균형이 필요합니다.",
      en: "You converse valuing emotions and empathy. You deeply understand the other's feelings and exchange emotionally. Warm and good at comforting, genuine feeling comes through. Excellent at forming intimate relationships but may lack logic or efficiency. In work, balance between emotion and reason is needed.",
      ja: "感情と共感を重視して会話します。相手の気分を深く理解し、感情的に関わります。温かく慰めが上手で、真心が感じられます。親密な関係の形成に優れていますが、論理や効率性が不足することがあります。仕事では感情と理性のバランスが必要です。",
      'zh-CN': "对话时重视情感和共鸣。深入理解对方感受并进行情感交流。温暖，善于安慰，真诚自然。擅长建立亲密关系，但可能缺乏逻辑或效率。工作中需要情感与理性的平衡。",
      'zh-TW': "對話時重視情感和共鳴。深入理解對方感受並進行情感交流。溫暖，善於安慰，真誠自然。擅長建立親密關係，但可能缺乏邏輯或效率。工作中需要情感與理性的平衡。",
      vi: "Bạn trò chuyện coi trọng cảm xúc và đồng cảm. Bạn hiểu sâu cảm xúc đối phương và trao đổi cảm xúc. Ấm áp và an ủi tốt, chân thành. Xuất sắc trong việc tạo mối quan hệ thân mật nhưng có thể thiếu logic hoặc hiệu quả. Trong công việc cần cân bằng cảm xúc và lý trí.",
      id: "Anda berbicara dengan menghargai emosi dan empati. Anda memahami perasaan lawan secara mendalam dan bertukar secara emosional. Hangat dan pandai menghibur, perasaan tulus terasa. Sangat baik dalam membentuk hubungan intim tetapi mungkin kurang logika atau efisiensi. Di tempat kerja, keseimbangan antara emosi dan akal diperlukan."
    },
    characteristics: {
      ko: "감정 중심, 공감력, 따뜻함",
      en: "Emotion-centered, empathy, warmth",
      ja: "感情中心、共感力、温かさ",
      'zh-CN': "情感中心、共鸣力、温暖",
      'zh-TW': "情感中心、共鳴力、溫暖",
      vi: "Trọng cảm xúc, đồng cảm, ấm áp",
      id: "Berpusat emosi, empati, kehangatan"
    },
    strengths: {
      ko: ["공감력", "따뜻함", "위로", "진심"],
      en: ["Empathy", "Warmth", "Comfort", "Sincerity"],
      ja: ["共感力", "温かさ", "慰め", "真心"],
      'zh-CN': ["共鸣力", "温暖", "安慰", "真诚"],
      'zh-TW': ["共鳴力", "溫暖", "安慰", "真誠"],
      vi: ["Đồng cảm", "Ấm áp", "An ủi", "Chân thành"],
      id: ["Empati", "Kehangatan", "Kenyamanan", "Ketulusan"]
    },
    weaknesses: {
      ko: ["논리 부족", "감정 과잉", "효율성 낮음"],
      en: ["Lack of logic", "Emotional excess", "Low efficiency"],
      ja: ["論理不足", "感情過剰", "効率性低下"],
      'zh-CN': ["缺乏逻辑", "情感过度", "效率低"],
      'zh-TW': ["缺乏邏輯", "情感過度", "效率低"],
      vi: ["Thiếu logic", "Cảm xúc quá mức", "Hiệu quả thấp"],
      id: ["Kurang logika", "Kelebihan emosional", "Efisiensi rendah"]
    },
    suitableSituations: {
      ko: ["위로", "친밀한 대화", "관계 형성"],
      en: ["Comfort", "Intimate conversation", "Relationship building"],
      ja: ["慰め", "親密な会話", "関係構築"],
      'zh-CN': ["安慰", "亲密对话", "关系建立"],
      'zh-TW': ["安慰", "親密對話", "關係建立"],
      vi: ["An ủi", "Cuộc trò chuyện thân mật", "Xây dựng mối quan hệ"],
      id: ["Kenyamanan", "Percakapan intim", "Pembangunan hubungan"]
    },
    advice: {
      ko: "공감도 중요하지만 때로는 해결책도 필요해요. 감정과 논리의 균형을 찾아보세요!",
      en: "Empathy is important, but sometimes solutions are also needed. Find the balance between emotion and logic!",
      ja: "共感も重要ですが、時には解決策も必要です。感情と論理のバランスを見つけてください！",
      'zh-CN': "共鸣很重要，但有时也需要解决方案。找到情感与逻辑的平衡！",
      'zh-TW': "共鳴很重要，但有時也需要解決方案。找到情感與邏輯的平衡！",
      vi: "Đồng cảm quan trọng, nhưng đôi khi cũng cần giải pháp. Tìm cân bằng giữa cảm xúc và logic!",
      id: "Empati itu penting, tetapi kadang-kadang solusi juga diperlukan. Temukan keseimbangan antara emosi dan logika!"
    },
    bestMatch: {
      ko: "💗 감성적 공감형 - 깊은 감정 교류",
      en: "💗 Emotional Empathy Type - Deep emotional exchange",
      ja: "💗 感情的共感型 - 深い感情交流",
      'zh-CN': "💗 感性共鸣型 - 深层情感交流",
      'zh-TW': "💗 感性共鳴型 - 深層情感交流",
      vi: "💗 Đồng Cảm Cảm Xúc - Trao đổi cảm xúc sâu sắc",
      id: "💗 Tipe Empati Emosional - Pertukaran emosional yang mendalam"
    },
    goodMatch: {
      ko: "🌸 간접적 배려형 - 따뜻하고 부드러운 소통",
      en: "🌸 Indirect Caring Type - Warm and gentle communication",
      ja: "🌸 間接的配慮型 - 温かくて優しいコミュニケーション",
      'zh-CN': "🌸 间接体贴型 - 温暖温柔的沟通",
      'zh-TW': "🌸 間接體貼型 - 溫暖溫柔的溝通",
      vi: "🌸 Gián Tiếp Quan Tâm - Giao tiếp ấm áp và dịu dàng",
      id: "🌸 Tipe Tidak Langsung yang Peduli - Komunikasi hangat dan lembut"
    },
    carefulMatch: {
      ko: "⚠️ 🧠 논리적 분석형 - 감정 vs 이성",
      en: "⚠️ 🧠 Logical Analysis Type - Emotion vs reason",
      ja: "⚠️ 🧠 論理的分析型 - 感情と理性",
      'zh-CN': "⚠️ 🧠 逻辑分析型 - 情感vs理性",
      'zh-TW': "⚠️ 🧠 邏輯分析型 - 情感vs理性",
      vi: "⚠️ 🧠 Phân Tích Logic - Cảm xúc vs lý trí",
      id: "⚠️ 🧠 Tipe Analisis Logis - Emosi vs akal"
    },
    difficultMatch: {
      ko: "❌ 🎯 직설적 소통형 - 냉정함에 상처받기 쉬움",
      en: "❌ 🎯 Direct Communicator - Easily hurt by coldness",
      ja: "❌ 🎯 直接的コミュニケーター型 - 冷たさに傷つきやすい",
      'zh-CN': "❌ 🎯 直接沟通型 - 容易因冷漠受伤",
      'zh-TW': "❌ 🎯 直接溝通型 - 容易因冷漠受傷",
      vi: "❌ 🎯 Giao Tiếp Trực Tiếp - Dễ bị tổn thương bởi sự lạnh lùng",
      id: "❌ 🎯 Komunikator Langsung - Mudah terluka oleh kedinginan"
    }
  },
  {
    type: 4,
    emoji: "🧠",
    title: {
      ko: "논리적 분석형",
      en: "Logical Analysis Type",
      ja: "論理的分析型",
      'zh-CN': "逻辑分析型",
      'zh-TW': "邏輯分析型",
      vi: "Phân Tích Logic",
      id: "Tipe Analisis Logis"
    },
    description: {
      ko: "사실과 논리를 중시하며 체계적으로 말합니다. 근거를 제시하고 분석적으로 설명합니다. 정확하고 신뢰감 있으며 오류가 적습니다. 업무 능력이 뛰어나지만 감정 교류가 부족하고 차갑게 느껴질 수 있습니다. 인간적인 면을 더하면 완벽한 소통자가 될 수 있습니다.",
      en: "You speak systematically, valuing facts and logic. You present evidence and explain analytically. Accurate and trustworthy with few errors. Excellent work ability but may lack emotional exchange and feel cold. Adding humanity could make you a perfect communicator.",
      ja: "事実と論理を重視して体系的に話します。根拠を示し、分析的に説明します。正確で信頼感があり、誤りが少ないです。業務能力に優れていますが、感情交流が不足していて冷たく感じられることがあります。人間的な面を加えれば完璧なコミュニケーターになれます。",
      'zh-CN': "说话系统化，重视事实和逻辑。提供依据并进行分析解释。准确可信，错误少。工作能力强，但可能缺乏情感交流并给人冷漠感。增加人情味可成为更完善的沟通者。",
      'zh-TW': "說話系統化，重視事實和邏輯。提供依據並進行分析解釋。準確可信，錯誤少。工作能力強，但可能缺乏情感交流並給人冷漠感。增加人情味可成為更完善的溝通者。",
      vi: "Bạn nói có hệ thống, coi trọng sự thật và logic. Đưa ra bằng chứng và giải thích phân tích. Chính xác và đáng tin, ít sai sót. Khả năng làm việc xuất sắc nhưng có thể thiếu trao đổi cảm xúc và cảm thấy lạnh lùng. Thêm tính người sẽ trở thành người giao tiếp hoàn hảo.",
      id: "Anda berbicara secara sistematis, menghargai fakta dan logika. Anda menyajikan bukti dan menjelaskan secara analitis. Akurat dan dapat dipercaya dengan sedikit kesalahan. Kemampuan kerja yang sangat baik tetapi mungkin kurang pertukaran emosional dan terasa dingin. Menambahkan sisi manusiawi dapat membuat Anda menjadi komunikator yang sempurna."
    },
    characteristics: {
      ko: "체계적, 논리적, 정확함",
      en: "Systematic, logical, accurate",
      ja: "体系的、論理的、正確",
      'zh-CN': "系统性、逻辑性、准确",
      'zh-TW': "系統性、邏輯性、準確",
      vi: "Có hệ thống, logic, chính xác",
      id: "Sistematis, logis, akurat"
    },
    strengths: {
      ko: ["정확함", "논리성", "신뢰", "체계성"],
      en: ["Accuracy", "Logic", "Trust", "Systematic"],
      ja: ["正確さ", "論理性", "信頼", "体系性"],
      'zh-CN': ["准确", "逻辑性", "信任", "系统性"],
      'zh-TW': ["準確", "邏輯性", "信任", "系統性"],
      vi: ["Chính xác", "Logic", "Tin cậy", "Có hệ thống"],
      id: ["Akurasi", "Logika", "Kepercayaan", "Sistematis"]
    },
    weaknesses: {
      ko: ["감정 부족", "차갑게 느껴짐", "딱딱함"],
      en: ["Lack of emotion", "Feels cold", "Stiffness"],
      ja: ["感情不足", "冷たく感じられる", "硬さ"],
      'zh-CN': ["缺乏情感", "感觉冷漠", "死板"],
      'zh-TW': ["缺乏情感", "感覺冷漠", "死板"],
      vi: ["Thiếu cảm xúc", "Cảm thấy lạnh lùng", "Cứng nhắc"],
      id: ["Kurang emosi", "Terasa dingin", "Kekakuan"]
    },
    suitableSituations: {
      ko: ["업무", "발표", "설명", "분석"],
      en: ["Work", "Presentation", "Explanation", "Analysis"],
      ja: ["業務", "発表", "説明", "分析"],
      'zh-CN': ["工作", "汇报", "说明", "分析"],
      'zh-TW': ["工作", "匯報", "說明", "分析"],
      vi: ["Công việc", "Thuyết trình", "Giải thích", "Phân tích"],
      id: ["Pekerjaan", "Presentasi", "Penjelasan", "Analisis"]
    },
    advice: {
      ko: "논리도 중요하지만 사람은 감정으로 움직여요. 가끔은 공감 한마디가 긴 설명보다 효과적입니다!",
      en: "Logic is important, but people are moved by emotions. Sometimes a word of empathy is more effective than a long explanation!",
      ja: "論理も重要ですが、人は感情で動きます。時には共感の一言が長い説明よりも効果的です！",
      'zh-CN': "逻辑很重要，但人是感性的。有时一句共鸣比长篇大论更有效！",
      'zh-TW': "邏輯很重要，但人是感性的。有時一句共鳴比長篇大論更有效！",
      vi: "Logic quan trọng, nhưng con người hành động theo cảm xúc. Đôi khi một lời đồng cảm hiệu quả hơn giải thích dài!",
      id: "Logika itu penting, tetapi orang digerakkan oleh emosi. Kadang-kadang kata empati lebih efektif daripada penjelasan panjang!"
    },
    bestMatch: {
      ko: "🧠 논리적 분석형 - 효율적이고 명확한 소통",
      en: "🧠 Logical Analysis Type - Efficient and clear communication",
      ja: "🧠 論理的分析型 - 効率的で明確なコミュニケーション",
      'zh-CN': "🧠 逻辑分析型 - 高效清晰的沟通",
      'zh-TW': "🧠 邏輯分析型 - 高效清晰的溝通",
      vi: "🧠 Phân Tích Logic - Giao tiếp hiệu quả và rõ ràng",
      id: "🧠 Tipe Analisis Logis - Komunikasi efisien dan jelas"
    },
    goodMatch: {
      ko: "🎯 직설적 소통형 - 사실 기반 대화",
      en: "🎯 Direct Communicator - Fact-based conversation",
      ja: "🎯 直接的コミュニケーター型 - 事実に基づく会話",
      'zh-CN': "🎯 直接沟通型 - 基于事实的对话",
      'zh-TW': "🎯 直接溝通型 - 基於事實的對話",
      vi: "🎯 Giao Tiếp Trực Tiếp - Cuộc trò chuyện dựa trên sự thật",
      id: "🎯 Komunikator Langsung - Percakapan berbasis fakta"
    },
    carefulMatch: {
      ko: "⚠️ 🌸 간접적 배려형 - 정확함 vs 불명확함",
      en: "⚠️ 🌸 Indirect Caring Type - Accuracy vs unclear",
      ja: "⚠️ 🌸 間接的配慮型 - 正確さと不明確さ",
      'zh-CN': "⚠️ 🌸 间接体贴型 - 精确vs不明确",
      'zh-TW': "⚠️ 🌸 間接體貼型 - 精確vs不明確",
      vi: "⚠️ 🌸 Gián Tiếp Quan Tâm - Chính xác vs không rõ ràng",
      id: "⚠️ 🌸 Tipe Tidak Langsung yang Peduli - Akurasi vs tidak jelas"
    },
    difficultMatch: {
      ko: "❌ 💗 감성적 공감형 - 차갑게 느껴질 수 있음",
      en: "❌ 💗 Emotional Empathy Type - May feel cold",
      ja: "❌ 💗 感情的共感型 - 冷たく感じられる可能性",
      'zh-CN': "❌ 💗 感性共鸣型 - 可能感到冷漠",
      'zh-TW': "❌ 💗 感性共鳴型 - 可能感到冷漠",
      vi: "❌ 💗 Đồng Cảm Cảm Xúc - Có thể cảm thấy lạnh lùng",
      id: "❌ 💗 Tipe Empati Emosional - Mungkin merasa dingin"
    }
  }
];

export function calculateCommunicationStyleResult(answers: string[]): number {
  const scores = [0, 0, 0, 0]; // Type 1, 2, 3, 4
  
  answers.forEach((answer, index) => {
    if (answer === 'a') scores[0] += 3; // Type 1
    else if (answer === 'b') scores[1] += 3; // Type 2
    else if (answer === 'c') scores[2] += 3; // Type 3
    else if (answer === 'd') scores[3] += 3; // Type 4
  });
  
  // 최고 점수 타입 찾기
  let maxScore = Math.max(...scores);
  let resultType = scores.indexOf(maxScore) + 1;
  
  // 동점 처리: Q10-Q12의 선택을 우선 반영
  if (scores.filter(s => s === maxScore).length > 1) {
    for (let i = 9; i < answers.length; i++) {
      if (answers[i] === 'a' && scores[0] === maxScore) { resultType = 1; break; }
      if (answers[i] === 'b' && scores[1] === maxScore) { resultType = 2; break; }
      if (answers[i] === 'c' && scores[2] === maxScore) { resultType = 3; break; }
      if (answers[i] === 'd' && scores[3] === maxScore) { resultType = 4; break; }
    }
  }
  
  return resultType;
}

