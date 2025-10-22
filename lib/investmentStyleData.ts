export interface InvestmentStyleQuestion {
  id: number;
  question: Record<string, string>;
  options: Array<{
    text: Record<string, string>;
    scores: Record<string, number>;
  }>;
}

export interface InvestmentStyleResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  longDescription: Record<string, string>;
  pros: Array<Record<string, string>>;
  cons: Array<Record<string, string>>;
  advice: Record<string, string>;
  recommendedInvestments: Record<string, string>;
  compatibleTypes: Array<Record<string, string>>;
  carefulTypes: Array<Record<string, string>>;
}

// 질문 데이터
export const investmentStyleQuestions: InvestmentStyleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "갑자기 1000만원이 생긴다면?",
      en: "If you suddenly had 10 million won?",
      ja: "突然1000万ウォンができたら？",
      "zh-CN": "如果突然有1000万韩元？",
      "zh-TW": "如果突然有1000萬韓元？",
      vi: "Nếu đột nhiên có 10 triệu won?",
      id: "Jika tiba-tiba mendapat 10 juta won?"
    },
    options: [
      {
        text: {
          ko: "고수익 투자 상품에 바로 투자",
          en: "Invest immediately in high-yield products",
          ja: "高収益投資商品にすぐ投資",
          "zh-CN": "立即投资高收益产品",
          "zh-TW": "立即投資高收益產品",
          vi: "Đầu tư ngay vào sản phẩm lợi nhuận cao",
          id: "Investasi langsung ke produk investasi berpenghasilan tinggi"
        },
        scores: { Type1: 8, Type5: 2 }
      },
      {
        text: {
          ko: "안전한 예금이나 적금에 보관",
          en: "Keep in safe deposits or savings",
          ja: "安全な預金や積立に保管",
          "zh-CN": "存放在安全的存款或储蓄中",
          "zh-TW": "存放在安全的存款或儲蓄中",
          vi: "Gửi vào tiết kiệm hoặc gửi tiết kiệm an toàn",
          id: "Simpan di deposito atau tabungan yang aman"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "절반은 저축, 절반은 투자",
          en: "Half savings, half investment",
          ja: "半分は貯蓄、半分は投資",
          "zh-CN": "一半储蓄，一半投资",
          "zh-TW": "一半儲蓄，一半投資",
          vi: "Một nửa tiết kiệm, một nửa đầu tư",
          id: "Setengah tabungan, setengah investasi"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "부동산이나 실물 자산 검토",
          en: "Review real estate or tangible assets",
          ja: "不動産や実物資産を検討",
          "zh-CN": "考虑房地产或实物资产",
          "zh-TW": "考慮房地產或實物資產",
          vi: "Xem xét bất động sản hoặc tài sản hữu hình",
          id: "Tinjau real estate atau aset berwujud"
        },
        scores: { Type4: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "투자에 대한 당신의 생각은?",
      en: "What do you think about investment?",
      ja: "投資についてあなたの考えは？",
      "zh-CN": "你对投资的看法是什么？",
      "zh-TW": "你對投資的看法是什麼？",
      vi: "Bạn nghĩ gì về đầu tư?",
      id: "Apa pendapat Anda tentang investasi?"
    },
    options: [
      {
        text: {
          ko: "위험해도 높은 수익이 중요",
          en: "High returns are important even if risky",
          ja: "リスクがあっても高収益が重要",
          "zh-CN": "即使有风险，高收益也很重要",
          "zh-TW": "即使有風險，高收益也很重要",
          vi: "Lợi nhuận cao quan trọng dù có rủi ro",
          id: "Keuntungan tinggi penting meski berisiko"
        },
        scores: { Type1: 3, Type5: 2 }
      },
      {
        text: {
          ko: "손실은 절대 안 됨, 원금 보장 우선",
          en: "No losses allowed, principal protection first",
          ja: "損失は絶対ダメ、元本保証優先",
          "zh-CN": "绝对不能有损失，本金保障优先",
          "zh-TW": "絕對不能有損失，本金保障優先",
          vi: "Không được có lỗ, bảo vệ vốn gốc ưu tiên",
          id: "Tidak boleh rugi, perlindungan pokok prioritas"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "적당한 위험과 적당한 수익",
          en: "Moderate risk and moderate returns",
          ja: "適度なリスクと適度な収益",
          "zh-CN": "适度的风险和适度的收益",
          "zh-TW": "適度的風險和適度的收益",
          vi: "Rủi ro vừa phải và lợi nhuận vừa phải",
          id: "Risiko sedang dan keuntungan sedang"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "장기적으로 가치 상승하는 것",
          en: "Long-term value appreciation",
          ja: "長期的に価値上昇するもの",
          "zh-CN": "长期价值上升的东西",
          "zh-TW": "長期價值上升的東西",
          vi: "Thứ tăng giá trị dài hạn",
          id: "Yang naik nilai jangka panjang"
        },
        scores: { Type4: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "주식 투자를 한다면?",
      en: "If you invest in stocks?",
      ja: "株式投資をするなら？",
      "zh-CN": "如果进行股票投资？",
      "zh-TW": "如果進行股票投資？",
      vi: "Nếu đầu tư cổ phiếu?",
      id: "Jika berinvestasi saham?"
    },
    options: [
      {
        text: {
          ko: "단기 급등주로 큰 수익 노림",
          en: "Aim for big profits with short-term surge stocks",
          ja: "短期急騰株で大きな利益を狙う",
          "zh-CN": "通过短期暴涨股获得大收益",
          "zh-TW": "通過短期暴漲股獲得大收益",
          vi: "Nhắm lợi nhuận lớn với cổ phiếu tăng mạnh ngắn hạn",
          id: "Mengincar keuntungan besar dengan saham melonjak jangka pendek"
        },
        scores: { Type5: 8, Type1: 2 }
      },
      {
        text: {
          ko: "안정적 배당주 위주",
          en: "Focus on stable dividend stocks",
          ja: "安定した配当株中心",
          "zh-CN": "以稳定分红股为主",
          "zh-TW": "以穩定分紅股為主",
          vi: "Tập trung vào cổ phiếu cổ tức ổn định",
          id: "Fokus pada saham dividen yang stabil"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "성장주와 가치주 적절히 분산",
          en: "Appropriately diversify growth and value stocks",
          ja: "成長株とバリュー株を適切に分散",
          "zh-CN": "适当分散成长股和价值股",
          "zh-TW": "適當分散成長股和價值股",
          vi: "Phân tán thích hợp cổ phiếu tăng trưởng và giá trị",
          id: "Diversifikasi dengan tepat saham pertumbuhan dan nilai"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "주식보다는 부동산이 나음",
          en: "Real estate is better than stocks",
          ja: "株式より不動産の方が良い",
          "zh-CN": "房地产比股票更好",
          "zh-TW": "房地產比股票更好",
          vi: "Bất động sản tốt hơn cổ phiếu",
          id: "Real estate lebih baik dari saham"
        },
        scores: { Type4: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "월급을 받으면 가장 먼저?",
      en: "When you receive your salary, what do you do first?",
      ja: "給料をもらったら最初に？",
      "zh-CN": "拿到工资后首先做什么？",
      "zh-TW": "拿到工資後首先做什麼？",
      vi: "Khi nhận lương, bạn làm gì đầu tiên?",
      id: "Ketika menerima gaji, apa yang pertama kali dilakukan?"
    },
    options: [
      {
        text: {
          ko: "투자 기회 찾아보기",
          en: "Look for investment opportunities",
          ja: "投資機会を探す",
          "zh-CN": "寻找投资机会",
          "zh-TW": "尋找投資機會",
          vi: "Tìm kiếm cơ hội đầu tư",
          id: "Mencari peluang investasi"
        },
        scores: { Type1: 8, Type5: 2 }
      },
      {
        text: {
          ko: "저축 계좌에 이체",
          en: "Transfer to savings account",
          ja: "貯蓄口座に振込",
          "zh-CN": "转入储蓄账户",
          "zh-TW": "轉入儲蓄賬戶",
          vi: "Chuyển vào tài khoản tiết kiệm",
          id: "Transfer ke rekening tabungan"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "생활비 제외하고 저축과 투자",
          en: "Save and invest after living expenses",
          ja: "生活費を除いて貯蓄と投資",
          "zh-CN": "扣除生活费后储蓄和投资",
          "zh-TW": "扣除生活費後儲蓄和投資",
          vi: "Tiết kiệm và đầu tư sau khi trừ chi phí sinh hoạt",
          id: "Tabung dan investasi setelah biaya hidup"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "필요한 것부터 구매",
          en: "Buy what you need first",
          ja: "必要なものから購入",
          "zh-CN": "先买需要的东西",
          "zh-TW": "先買需要的東西",
          vi: "Mua những thứ cần thiết trước",
          id: "Beli yang dibutuhkan dulu"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "재테크 공부에 대해?",
      en: "About studying financial management?",
      ja: "資産運用の勉強について？",
      "zh-CN": "关于理财学习？",
      "zh-TW": "關於理財學習？",
      vi: "Về việc học quản lý tài chính?",
      id: "Tentang belajar manajemen keuangan?"
    },
    options: [
      {
        text: {
          ko: "투자 정보와 트렌드 매일 체크",
          en: "Check investment info and trends daily",
          ja: "投資情報とトレンドを毎日チェック",
          "zh-CN": "每天查看投资信息和趋势",
          "zh-TW": "每天查看投資信息和趨勢",
          vi: "Kiểm tra thông tin đầu tư và xu hướng hàng ngày",
          id: "Cek info investasi dan tren setiap hari"
        },
        scores: { Type5: 8, Type1: 2 }
      },
      {
        text: {
          ko: "안전한 상품 위주로만 알아봄",
          en: "Only learn about safe products",
          ja: "安全な商品中心にだけ知る",
          "zh-CN": "只了解安全产品",
          "zh-TW": "只了解安全產品",
          vi: "Chỉ tìm hiểu về sản phẩm an toàn",
          id: "Hanya belajar tentang produk aman"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "필요한 만큼만 공부",
          en: "Study only as much as needed",
          ja: "必要な分だけ勉強",
          "zh-CN": "只学习需要的部分",
          "zh-TW": "只學習需要的部分",
          vi: "Chỉ học những gì cần thiết",
          id: "Belajar hanya seperlunya"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "별로 관심 없음",
          en: "Not really interested",
          ja: "あまり興味ない",
          "zh-CN": "不太感兴趣",
          "zh-TW": "不太感興趣",
          vi: "Không thực sự quan tâm",
          id: "Tidak terlalu tertarik"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "금융 상품 선택 기준은?",
      en: "What are your criteria for choosing financial products?",
      ja: "金融商品選択の基準は？",
      "zh-CN": "选择金融产品的标准是什么？",
      "zh-TW": "選擇金融產品的標準是什麼？",
      vi: "Tiêu chí chọn sản phẩm tài chính là gì?",
      id: "Kriteria memilih produk keuangan?"
    },
    options: [
      {
        text: {
          ko: "수익률이 가장 중요",
          en: "Return rate is most important",
          ja: "収益率が最も重要",
          "zh-CN": "收益率最重要",
          "zh-TW": "收益率最重要",
          vi: "Tỷ suất lợi nhuận quan trọng nhất",
          id: "Tingkat pengembalian paling penting"
        },
        scores: { Type1: 3, Type5: 2 }
      },
      {
        text: {
          ko: "안전성과 원금 보장",
          en: "Safety and principal guarantee",
          ja: "安全性と元本保証",
          "zh-CN": "安全性和本金保障",
          "zh-TW": "安全性和本金保障",
          vi: "An toàn và bảo đảm vốn gốc",
          id: "Keamanan dan jaminan pokok"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "수익률과 안전성 균형",
          en: "Balance of return and safety",
          ja: "収益率と安全性のバランス",
          "zh-CN": "收益率和安全性平衡",
          "zh-TW": "收益率和安全性平衡",
          vi: "Cân bằng giữa lợi nhuận và an toàn",
          id: "Keseimbangan return dan keamanan"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "실물 자산 선호",
          en: "Prefer tangible assets",
          ja: "実物資産を好む",
          "zh-CN": "偏好实物资产",
          "zh-TW": "偏好實物資產",
          vi: "Ưu tiên tài sản hữu hình",
          id: "Lebih suka aset berwujud"
        },
        scores: { Type4: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "경제 뉴스를 보는 빈도는?",
      en: "How often do you watch economic news?",
      ja: "経済ニュースを見る頻度は？",
      "zh-CN": "你看经济新闻的频率是？",
      "zh-TW": "你看經濟新聞的頻率是？",
      vi: "Tần suất xem tin tức kinh tế?",
      id: "Seberapa sering menonton berita ekonomi?"
    },
    options: [
      {
        text: {
          ko: "매일 여러 번 확인",
          en: "Check several times daily",
          ja: "毎日何度も確認",
          "zh-CN": "每天查看多次",
          "zh-TW": "每天查看多次",
          vi: "Kiểm tra nhiều lần mỗi ngày",
          id: "Cek beberapa kali setiap hari"
        },
        scores: { Type5: 8, Type1: 2 }
      },
      {
        text: {
          ko: "가끔 중요한 뉴스만",
          en: "Occasionally only important news",
          ja: "たまに重要なニュースだけ",
          "zh-CN": "偶尔只看重要新闻",
          "zh-TW": "偶爾只看重要新聞",
          vi: "Thỉnh thoảng chỉ tin tức quan trọng",
          id: "Kadang-kadang hanya berita penting"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "일주일에 몇 번 정도",
          en: "A few times a week",
          ja: "週に何回か程度",
          "zh-CN": "一周几次",
          "zh-TW": "一週幾次",
          vi: "Vài lần một tuần",
          id: "Beberapa kali seminggu"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "거의 안 봄",
          en: "Hardly ever watch",
          ja: "ほとんど見ない",
          "zh-CN": "几乎不看",
          "zh-TW": "幾乎不看",
          vi: "Hầu như không xem",
          id: "Hampir tidak pernah menonton"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "주변에서 투자로 큰돈 벌었다는 얘기를 들으면?",
      en: "When you hear someone made big money from investment?",
      ja: "周りで投資で大金を稼いだ話を聞いたら？",
      "zh-CN": "听到周围有人通过投资赚大钱时？",
      "zh-TW": "聽到周圍有人通過投資賺大錢時？",
      vi: "Khi nghe ai đó kiếm tiền lớn từ đầu tư?",
      id: "Ketika mendengar seseorang mendapat uang besar dari investasi?"
    },
    options: [
      {
        text: {
          ko: "\"나도 해야지!\" 즉시 관심",
          en: "\"I should do it too!\" Immediate interest",
          ja: "「私もやらなきゃ！」即座に興味",
          "zh-CN": "\"我也要做！\"立即感兴趣",
          "zh-TW": "\"我也要做！\"立即感興趣",
          vi: "\"Tôi cũng nên làm!\" Quan tâm ngay lập tức",
          id: "\"Saya juga harus!\" Langsung tertarik"
        },
        scores: { Type1: 8, Type5: 2 }
      },
      {
        text: {
          ko: "\"위험할 것 같은데...\" 신중",
          en: "\"Seems risky...\" Cautious",
          ja: "「危険そう...」慎重",
          "zh-CN": "\"似乎有风险...\"谨慎",
          "zh-TW": "\"似乎有風險...\"謹慎",
          vi: "\"Có vẻ rủi ro...\" Thận trọng",
          id: "\"Sepertinya berisiko...\" Hati-hati"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"어떻게 했는지 알아보자\" 정보 수집",
          en: "\"Let me find out how they did it\" Gather info",
          ja: "「どうやったか調べよう」情報収集",
          "zh-CN": "\"了解一下他们是怎么做的\"收集信息",
          "zh-TW": "\"了解一下他們是怎麼做的\"收集信息",
          vi: "\"Tìm hiểu xem họ làm thế nào\" Thu thập thông tin",
          id: "\"Cari tahu bagaimana mereka melakukannya\" Kumpulkan info"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"운이 좋았네\" 별 관심 없음",
          en: "\"They were lucky\" Not interested",
          ja: "「運が良かったね」あまり興味なし",
          "zh-CN": "\"他们运气好\"不太感兴趣",
          "zh-TW": "\"他們運氣好\"不太感興趣",
          vi: "\"Họ may mắn\" Không quan tâm",
          id: "\"Mereka beruntung\" Tidak tertarik"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "은퇴 후를 위한 준비는?",
      en: "Preparation for retirement?",
      ja: "退職後の準備は？",
      "zh-CN": "为退休后的准备？",
      "zh-TW": "為退休後的準備？",
      vi: "Chuẩn bị cho tuổi già?",
      id: "Persiapan untuk pensiun?"
    },
    options: [
      {
        text: {
          ko: "공격적 투자로 자산 증식",
          en: "Aggressive investment for asset growth",
          ja: "積極的投資で資産増殖",
          "zh-CN": "通过积极投资增加资产",
          "zh-TW": "通過積極投資增加資產",
          vi: "Đầu tư tích cực để tăng tài sản",
          id: "Investasi agresif untuk pertumbuhan aset"
        },
        scores: { Type1: 3, Type5: 2 }
      },
      {
        text: {
          ko: "꾸준한 저축과 연금",
          en: "Steady savings and pension",
          ja: "着実な貯蓄と年金",
          "zh-CN": "稳定的储蓄和养老金",
          "zh-TW": "穩定的儲蓄和養老金",
          vi: "Tiết kiệm đều đặn và lương hưu",
          id: "Tabungan dan pensiun yang stabil"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "다양한 방법으로 분산 준비",
          en: "Diversified preparation with various methods",
          ja: "様々な方法で分散準備",
          "zh-CN": "用各种方法分散准备",
          "zh-TW": "用各種方法分散準備",
          vi: "Chuẩn bị đa dạng bằng nhiều phương pháp",
          id: "Persiapan terdiversifikasi dengan berbagai metode"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "아직 생각 안 해봄",
          en: "Haven't thought about it yet",
          ja: "まだ考えていない",
          "zh-CN": "还没想过",
          "zh-TW": "還沒想過",
          vi: "Chưa nghĩ đến",
          id: "Belum memikirkannya"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "자산 관리에서 가장 중요한 것은?",
      en: "What's most important in asset management?",
      ja: "資産管理で最も重要なことは？",
      "zh-CN": "资产管理中最重要的什么？",
      "zh-TW": "資產管理中最重要的什麼？",
      vi: "Điều quan trọng nhất trong quản lý tài sản?",
      id: "Apa yang paling penting dalam manajemen aset?"
    },
    options: [
      {
        text: {
          ko: "높은 수익률",
          en: "High return rate",
          ja: "高い収益率",
          "zh-CN": "高收益率",
          "zh-TW": "高收益率",
          vi: "Tỷ suất lợi nhuận cao",
          id: "Tingkat pengembalian tinggi"
        },
        scores: { Type1: 8, Type5: 2 }
      },
      {
        text: {
          ko: "안전성과 안정성",
          en: "Safety and stability",
          ja: "安全性と安定性",
          "zh-CN": "安全性和稳定性",
          "zh-TW": "安全性和穩定性",
          vi: "An toàn và ổn định",
          id: "Keamanan dan stabilitas"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "균형잡힌 포트폴리오",
          en: "Balanced portfolio",
          ja: "バランスの取れたポートフォリオ",
          "zh-CN": "平衡的投资组合",
          "zh-TW": "平衡的投資組合",
          vi: "Danh mục đầu tư cân bằng",
          id: "Portfolio yang seimbang"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "지금 당장의 만족",
          en: "Immediate satisfaction",
          ja: "今すぐの満足",
          "zh-CN": "当下的满足",
          "zh-TW": "當下的滿足",
          vi: "Sự hài lòng ngay lập tức",
          id: "Kepuasan langsung"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "코인이나 신기술 투자에 대해?",
      en: "About investing in coins or new technology?",
      ja: "コインや新技術投資について？",
      "zh-CN": "关于投资加密货币或新技术？",
      "zh-TW": "關於投資加密貨幣或新技術？",
      vi: "Về đầu tư tiền điện tử hoặc công nghệ mới?",
      id: "Tentang investasi koin atau teknologi baru?"
    },
    options: [
      {
        text: {
          ko: "기회다! 적극 투자",
          en: "It's an opportunity! Active investment",
          ja: "チャンスだ！積極投資",
          "zh-CN": "这是机会！积极投资",
          "zh-TW": "這是機會！積極投資",
          vi: "Đây là cơ hội! Đầu tư tích cực",
          id: "Ini kesempatan! Investasi aktif"
        },
        scores: { Type5: 8, Type1: 2 }
      },
      {
        text: {
          ko: "너무 위험해서 절대 안 함",
          en: "Too risky, absolutely won't do it",
          ja: "危険すぎて絶対やらない",
          "zh-CN": "太危险，绝对不会做",
          "zh-TW": "太危險，絕對不會做",
          vi: "Quá rủi ro, tuyệt đối không làm",
          id: "Terlalu berisiko, tidak akan melakukannya"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "소액으로 테스트해볼 수 있음",
          en: "Can test with small amount",
          ja: "少額でテストできる",
          "zh-CN": "可以用小额测试",
          "zh-TW": "可以用小額測試",
          vi: "Có thể thử nghiệm với số tiền nhỏ",
          id: "Bisa test dengan jumlah kecil"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "잘 모르겠고 관심 없음",
          en: "Don't know and not interested",
          ja: "よく分からないし興味ない",
          "zh-CN": "不太了解也不感兴趣",
          "zh-TW": "不太了解也不感興趣",
          vi: "Không biết và không quan tâm",
          id: "Tidak tahu dan tidak tertarik"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "이상적인 재무 상태는?",
      en: "What's your ideal financial state?",
      ja: "理想的な財務状態は？",
      "zh-CN": "理想的财务状况是什么？",
      "zh-TW": "理想的財務狀況是什麼？",
      vi: "Tình trạng tài chính lý tưởng là gì?",
      id: "Kondisi keuangan ideal seperti apa?"
    },
    options: [
      {
        text: {
          ko: "투자로 큰 부자 되기",
          en: "Become rich through investment",
          ja: "投資で大金持ちになる",
          "zh-CN": "通过投资成为大富翁",
          "zh-TW": "通過投資成為大富翁",
          vi: "Trở nên giàu có thông qua đầu tư",
          id: "Menjadi kaya melalui investasi"
        },
        scores: { Type1: 3, Type5: 2 }
      },
      {
        text: {
          ko: "빚 없이 안정적인 생활",
          en: "Stable life without debt",
          ja: "借金なしの安定した生活",
          "zh-CN": "无债务的稳定生活",
          "zh-TW": "無債務的穩定生活",
          vi: "Cuộc sống ổn định không nợ nần",
          id: "Hidup stabil tanpa hutang"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "꾸준히 자산 증식하기",
          en: "Continuously grow assets",
          ja: "着実に資産を増やす",
          "zh-CN": "持续增长资产",
          "zh-TW": "持續增長資產",
          vi: "Liên tục tăng tài sản",
          id: "Terus menumbuhkan aset"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "돈 걱정 없이 즐기기",
          en: "Enjoy without money worries",
          ja: "お金の心配なく楽しむ",
          "zh-CN": "无忧无虑地享受",
          "zh-TW": "無憂無慮地享受",
          vi: "Tận hưởng mà không lo lắng về tiền bạc",
          id: "Menikmati tanpa khawatir uang"
        },
        scores: { Type6: 3 }
      }
    ]
  }
];

// 결과 데이터 통합
import { investmentStyleResultsPart2 } from './investmentStyleResults';

export const investmentStyleResults: InvestmentStyleResult[] = [
  {
    type: "Type1",
    emoji: "📈",
    title: {
      ko: "공격적 투자가형",
      en: "Aggressive Investor",
      ja: "積極的投資家型",
      "zh-CN": "激进投资者型",
      "zh-TW": "激進投資者型",
      vi: "Nhà đầu tư tích cực",
      id: "Investor Agresif"
    },
    shortDescription: {
      ko: "고위험 고수익! 과감한 투자로 부를 추구하는 모험가",
      en: "High risk, high return! An adventurous wealth seeker through bold investment",
      ja: "ハイリスク・ハイリターン！大胆な投資で富を追求する冒険家",
      "zh-CN": "高风险高收益！通过大胆投资追求财富的冒险家",
      "zh-TW": "高風險高收益！通過大膽投資追求財富的冒險家",
      vi: "Rủi ro cao, lợi nhuận cao! Nhà thám hiểm theo đuổi sự giàu có thông qua đầu tư táo bạo",
      id: "Risiko tinggi, keuntungan tinggi! Petualang yang mengejar kekayaan melalui investasi berani"
    },
    longDescription: {
      ko: "높은 수익을 위해 위험을 감수합니다. 주식, 코인, 선물 등 고수익 투자를 선호하며 시장 동향을 예민하게 체크합니다. 단기간에 큰 수익을 낼 수 있지만 손실 위험도 큽니다. 투자에 대한 열정과 공부가 필수입니다.",
      en: "Takes risks for high returns. Prefers high-yield investments like stocks, coins, futures, and keenly monitors market trends. Can achieve big profits in short periods but also faces high loss risks. Passion and study in investment are essential.",
      ja: "高い収益のためにリスクを取ります。株式、コイン、先物などの高収益投資を好み、市場動向を敏感にチェックします。短期間で大きな収益を得られますが、損失リスクも高いです。投資への情熱と勉強が必須です。",
      "zh-CN": "为了高收益而承担风险。偏好股票、加密货币、期货等高收益投资，敏锐地关注市场动向。可以在短期内获得大收益，但损失风险也很高。对投资的热情和学习是必需的。",
      "zh-TW": "為了高收益而承擔風險。偏好股票、加密貨幣、期貨等高收益投資，敏銳地關注市場動向。可以在短期內獲得大收益，但損失風險也很高。對投資的熱情和學習是必需的。",
      vi: "Chấp nhận rủi ro để có lợi nhuận cao. Ưa thích các khoản đầu tư lợi nhuận cao như cổ phiếu, tiền điện tử, tương lai và theo dõi sát sao xu hướng thị trường. Có thể đạt lợi nhuận lớn trong thời gian ngắn nhưng cũng đối mặt với rủi ro mất mát cao. Niềm đam mê và học hỏi về đầu tư là điều cần thiết.",
      id: "Mengambil risiko untuk keuntungan tinggi. Menyukai investasi berpenghasilan tinggi seperti saham, koin, futures, dan memantau tren pasar dengan cermat. Dapat mencapai keuntungan besar dalam waktu singkat tetapi juga menghadapi risiko kerugian tinggi. Gairah dan pembelajaran dalam investasi sangat penting."
    },
    pros: [
      {
        ko: "높은 수익 가능",
        en: "High profit potential",
        ja: "高い収益可能性",
        "zh-CN": "高收益可能性",
        "zh-TW": "高收益可能性",
        vi: "Tiềm năng lợi nhuận cao",
        id: "Potensi keuntungan tinggi"
      },
      {
        ko: "빠른 자산 증식",
        en: "Rapid asset growth",
        ja: "迅速な資産増殖",
        "zh-CN": "快速资产增长",
        "zh-TW": "快速資產增長",
        vi: "Tăng trưởng tài sản nhanh",
        id: "Pertumbuhan aset cepat"
      },
      {
        ko: "시장 감각",
        en: "Market sense",
        ja: "市場感覚",
        "zh-CN": "市场感觉",
        "zh-TW": "市場感覺",
        vi: "Cảm giác thị trường",
        id: "Naluri pasar"
      }
    ],
    cons: [
      {
        ko: "높은 손실 위험",
        en: "High loss risk",
        ja: "高い損失リスク",
        "zh-CN": "高损失风险",
        "zh-TW": "高損失風險",
        vi: "Rủi ro mất mát cao",
        id: "Risiko kerugian tinggi"
      },
      {
        ko: "스트레스",
        en: "Stress",
        ja: "ストレス",
        "zh-CN": "压力",
        "zh-TW": "壓力",
        vi: "Căng thẳng",
        id: "Stres"
      },
      {
        ko: "원금 손실 가능",
        en: "Possible principal loss",
        ja: "元本損失の可能性",
        "zh-CN": "可能损失本金",
        "zh-TW": "可能損失本金",
        vi: "Có thể mất vốn gốc",
        id: "Kemungkinan kehilangan pokok"
      }
    ],
    advice: {
      ko: "분산 투자와 리스크 관리가 필수입니다. 잃어도 괜찮은 돈으로만 투자하세요!",
      en: "Diversification and risk management are essential. Only invest money you can afford to lose!",
      ja: "分散投資とリスク管理が必須です。失っても大丈夫なお金だけで投資してください！",
      "zh-CN": "分散投资和风险管理是必需的。只用你能承受损失的钱投资！",
      "zh-TW": "分散投資和風險管理是必需的。只用你能承受損失的錢投資！",
      vi: "Đa dạng hóa đầu tư và quản lý rủi ro là điều cần thiết. Chỉ đầu tư số tiền bạn có thể chấp nhận mất!",
      id: "Diversifikasi dan manajemen risiko sangat penting. Hanya investasi uang yang bisa Anda tanggung kehilangannya!"
    },
    recommendedInvestments: {
      ko: "성장주, 코인, 선물, 레버리지 상품",
      en: "Growth stocks, coins, futures, leverage products",
      ja: "成長株、コイン、先物、レバレッジ商品",
      "zh-CN": "成长股、加密货币、期货、杠杆产品",
      "zh-TW": "成長股、加密貨幣、期貨、槓桿產品",
      vi: "Cổ phiếu tăng trưởng, tiền điện tử, tương lai, sản phẩm đòn bẩy",
      id: "Saham pertumbuhan, koin, futures, produk leverage"
    },
    compatibleTypes: [
      {
        ko: "Type 3 (균형형) - 공격과 수비 조합",
        en: "Type 3 (Balanced) - Attack and defense combination",
        ja: "Type 3（バランス型）- 攻撃と守備の組み合わせ",
        "zh-CN": "Type 3（平衡型）- 攻守结合",
        "zh-TW": "Type 3（平衡型）- 攻守結合",
        vi: "Type 3 (Cân bằng) - Kết hợp tấn công và phòng thủ",
        id: "Type 3 (Seimbang) - Kombinasi serangan dan pertahanan"
      }
    ],
    carefulTypes: [
      {
        ko: "Type 2 (저축형) - 가치관 충돌",
        en: "Type 2 (Savings) - Value conflict",
        ja: "Type 2（貯蓄型）- 価値観の衝突",
        "zh-CN": "Type 2（储蓄型）- 价值观冲突",
        "zh-TW": "Type 2（儲蓄型）- 價值觀衝突",
        vi: "Type 2 (Tiết kiệm) - Xung đột giá trị",
        id: "Type 2 (Tabungan) - Konflik nilai"
      }
    ]
  },
  ...investmentStyleResultsPart2
];

// 결과 계산 함수
export function calculateInvestmentStyleResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
  answers.forEach(answer => {
    // answer가 객체이고 scores 속성을 가지고 있는 경우 (새로운 형식)
    if (answer.scores) {
      Object.keys(answer.scores).forEach(type => {
        scores[type as keyof typeof scores] += answer.scores[type];
      });
    } else {
      // 기존 형식 호환성 유지
      Object.keys(answer).forEach(type => {
        scores[type as keyof typeof scores] += answer[type];
      });
    }
  });
  
  // 최고 점수 찾기
  let maxScore = 0;
  let resultType = 'Type1';
  
  Object.keys(scores).forEach(type => {
    if (scores[type as keyof typeof scores] > maxScore) {
      maxScore = scores[type as keyof typeof scores];
      resultType = type;
    }
  });
  
  return resultType;
}
