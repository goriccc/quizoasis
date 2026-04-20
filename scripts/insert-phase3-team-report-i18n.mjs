/**
 * One-off merge: phase3TeamWorkChemistryTest.roleLabels + report into messages/*.json
 * Run: node scripts/insert-phase3-team-report-i18n.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const messagesDir = path.join(root, 'messages');

const roleLabels = {
  ko: {
    visionary: '비전 제시자',
    executor: '실행가',
    coordinator: '조율자',
    analyst: '분석가',
    creator: '크리에이터',
    supporter: '서포터',
  },
  en: {
    visionary: 'Visionary',
    executor: 'Executor',
    coordinator: 'Coordinator',
    analyst: 'Analyst',
    creator: 'Creator',
    supporter: 'Supporter',
  },
  ja: {
    visionary: 'ビジョナリー',
    executor: 'エグゼキューター',
    coordinator: 'コーディネーター',
    analyst: 'アナリスト',
    creator: 'クリエイター',
    supporter: 'サポーター',
  },
  'zh-CN': {
    visionary: '愿景提出者',
    executor: '执行者',
    coordinator: '协调者',
    analyst: '分析者',
    creator: '创造者',
    supporter: '支持者',
  },
  'zh-TW': {
    visionary: '願景提出者',
    executor: '執行者',
    coordinator: '協調者',
    analyst: '分析者',
    creator: '創造者',
    supporter: '支持者',
  },
  id: {
    visionary: 'Perumus visi',
    executor: 'Pelaksana',
    coordinator: 'Koordinator',
    analyst: 'Analis',
    creator: 'Kreator',
    supporter: 'Supporter',
  },
  vi: {
    visionary: 'Người định hướng',
    executor: 'Người thực thi',
    coordinator: 'Người điều phối',
    analyst: 'Nhà phân tích',
    creator: 'Người sáng tạo',
    supporter: 'Người hỗ trợ',
  },
};

function reportBlock(locale) {
  const R = {
    ko: {
      synergy: {
        visionary_executor: {
          title: '✨ 드림 콤보 발동',
          body:
            '방향을 그리는 사람과 실행하는 사람이 한 팀에 있습니다.\n\n이 팀은 목표를 정하고 실제로 달성하는 완성형 팀에 가깝습니다.\n\n주의: 실행 속도가 빨라지면서 세부 검증이 생략될 수 있으니 분석가 역할이 있다면 더욱 강력해집니다.',
        },
        coordinator_analyst: {
          title: '✨ 밸런스 콤보 발동',
          body:
            '감성과 논리가 균형 잡힌 팀입니다. 의사결정이 한쪽으로 치우치지 않고 팀원들이 납득할 수 있는 결론을 내기 쉽습니다.\n\n이 조합이 있는 팀은 갈등 후 회복이 빠른 편으로 알려져 있습니다.',
        },
        creator_executor: {
          title: '✨ 아이디어 실현 콤보 발동',
          body:
            '아이디어를 내는 사람과 실현하는 사람이 같은 팀에 있습니다.\n\n다른 팀이 고민할 때 이미 프로토타입을 만들고 있을 수 있는 구조입니다.',
        },
      },
      missing: {
        visionary: {
          title: '⚠️ 방향 부재 주의',
          body: '팀에 방향을 제시하는 사람이 없습니다. 열심히 달리고 있는데 어디로 가는지 팀 전체가 모를 수 있습니다.',
          prescription:
            '팀 미팅 시작 전 반드시 "우리가 이 프로젝트로 달성하려는 것이 무엇인가"를 함께 정의해보세요.',
        },
        executor: {
          title: '⚠️ 실행력 부재 주의',
          body: '팀에 아이디어와 방향은 있지만 실제 결과물을 만들어내는 엔진이 부족할 수 있습니다.',
          prescription: '매 회의 말미에 반드시 "누가 언제까지 무엇을 한다"를 명시적으로 정하는 규칙을 만드세요.',
        },
        analyst: {
          title: '⚠️ 리스크 감지 약화 주의',
          body: '팀이 빠르게 움직이지만 빈틈을 발견하는 역할이 부족할 수 있습니다.',
          prescription:
            '중요한 결정 전에 "악마의 변호인" 역할을 돌아가면서 맡아보세요. 반론을 찾는 것만으로도 리스크가 크게 줄어듭니다.',
        },
        coordinator: {
          title: '⚠️ 갈등 내성 약화 주의',
          body: '팀 내 갈등이 생겼을 때 자연스럽게 중재하는 역할이 없을 수 있습니다.',
          prescription:
            '회의에서 아무도 말하지 않는 침묵에 주의하세요. "다른 생각 있는 사람?"을 묻는 짧은 루틴이 필요할 수 있습니다.',
        },
        creator: {
          title: '⚠️ 창의적 돌파구 부족 주의',
          body: '팀이 막혔을 때 전혀 새로운 각도의 아이디어가 잘 나오지 않을 수 있습니다.',
          prescription: '월 1회 "가장 황당한 아이디어 대회"를 열어보세요. 판단 없는 브레인스토밍이 창의 근육을 키웁니다.',
        },
        supporter: {
          title: '⚠️ 팀 소진 위험 주의',
          body: '성과 중심으로 빠르게 달리는 팀이지만 팀원 심리 상태를 챙기는 역할이 부족할 수 있습니다.',
          prescription: '주간 미팅에 "각자 한 주 에너지 레벨은 몇 점?" 체크인을 넣어보세요.',
        },
      },
      grade: {
        six_roles: {
          title: '케미 A+ 완성형 팀 🏆',
          body: '6가지 역할군이 두루 섞여 있습니다. 각자의 강점이 서로의 약점을 보완하며 시너지를 내기 좋은 구조입니다.',
          caution: '역할이 너무 고정되지 않도록 가끔은 서로 역할을 바꿔보는 경험이 팀 전체의 유연성을 키웁니다.',
        },
        five_roles: {
          title: '케미 A (1가지 역할 보완 여지)',
          body: '다양한 역할이 어느 정도 섞여 있습니다. 부족한 역할군을 의식적으로 메우면 팀 케미가 한 단계 올라갑니다.',
          caution: '',
        },
        four_roles: {
          title: '케미 B+ (2가지 역할 보완 여지)',
          body: '다양한 역할이 어느 정도 섞여 있습니다. 부족한 역할군을 의식적으로 메우면 팀 케미가 한 단계 올라갑니다.',
          caution: '',
        },
        three_balance: {
          title: '케미 B 균형 필요 팀 ⚖️',
          body: '팀 역할에 편중이 있습니다. 지금 잘 굴러가더라도 특정 상황에서 취약점이 드러날 수 있습니다.',
          caution:
            '부족한 역할의 책임을 팀 미팅에서 명시적으로 논의해보세요. "우리 팀에 [분석가]가 없으니 이번엔 누가 그 역할을 해줄 수 있어?"처럼요.',
        },
        two_roles: {
          title: '케미 C (구조 재점검 권장)',
          body: '역할 다양성이 낮습니다. 회의 안건에 "빈틈 점검"과 "감정 체크"를 번갈아 넣어보세요.',
          caution: '',
        },
        one_cluster: {
          title: '케미 D 재점검 필요 팀 🚨',
          body: '팀 전체가 비슷한 역할군에 몰려 있습니다. 같은 방식으로 생각하다 보면 놓치는 부분이 생깁니다.',
          caution: '팀 외부에서 다른 시각을 가진 사람의 피드백을 정기적으로 받으면 사각지대를 줄일 수 있습니다.',
        },
      },
    },
    en: {
      synergy: {
        visionary_executor: {
          title: '✨ Dream combo unlocked',
          body:
            'You have both someone who sets direction and someone who executes.\n\nThis team structure is close to “set a goal and actually ship it.”\n\nNote: as execution speeds up, detailed verification can slip—an Analyst role makes this combo even stronger.',
        },
        coordinator_analyst: {
          title: '✨ Balance combo unlocked',
          body:
            'Head and heart are balanced. Decisions are less likely to swing to one extreme, and conclusions are easier for everyone to accept.\n\nTeams with this pairing often bounce back faster after conflict.',
        },
        creator_executor: {
          title: '✨ Idea-to-ship combo unlocked',
          body:
            'Idea people and builders are on the same team.\n\nWhile others are still debating, you may already be prototyping.',
        },
      },
      missing: {
        visionary: {
          title: '⚠️ No clear direction',
          body: 'No one is naturally setting direction. The team may be running hard without a shared “where we’re going.”',
          prescription:
            'Before meetings, align on “what this project must achieve” in one short sentence everyone agrees on.',
        },
        executor: {
          title: '⚠️ Weak execution engine',
          body: 'There may be ideas and direction, but not enough drive to turn them into concrete output.',
          prescription: 'End every meeting with explicit “who does what by when”—make it a team habit.',
        },
        analyst: {
          title: '⚠️ Weaker risk detection',
          body: 'The team moves fast, but fewer people naturally spot gaps and risks.',
          prescription:
            'Rotate a “devil’s advocate” before big decisions—finding counterarguments alone cuts a lot of risk.',
        },
        coordinator: {
          title: '⚠️ Harder conflict recovery',
          body: 'When friction appears, there may be no natural mediator.',
          prescription:
            'Watch for awkward silence in meetings. A quick “anyone see this differently?” routine helps.',
        },
        creator: {
          title: '⚠️ Few creative breakthroughs',
          body: 'When stuck, radically new angles may not surface easily.',
          prescription: 'Try a monthly “wildest idea” round—judgment-free brainstorming trains creative muscle.',
        },
        supporter: {
          title: '⚠️ Burnout risk',
          body: 'The team may chase results while under-supporting emotional energy.',
          prescription: 'Add a weekly check-in: “energy level 1–10 this week?”',
        },
      },
      grade: {
        six_roles: {
          title: 'Chemistry A+ — well-rounded team 🏆',
          body: 'All six role types show up. Strengths can cover blind spots—great synergy potential.',
          caution: 'Swap roles occasionally so no one gets stuck in one lane—flexibility helps the whole team.',
        },
        five_roles: {
          title: 'Chemistry A — one role gap',
          body: 'Roles are fairly mixed. Consciously filling the missing type can lift team chemistry a notch.',
          caution: '',
        },
        four_roles: {
          title: 'Chemistry B+ — two role gaps',
          body: 'Roles are fairly mixed. Consciously filling missing types can lift team chemistry a notch.',
          caution: '',
        },
        three_balance: {
          title: 'Chemistry B — balance needed ⚖️',
          body: 'Roles are skewed. Things may work now, but certain situations will expose weak spots.',
          caution:
            'Name missing roles in meetings: “We don’t have an Analyst—who can play that part this time?”',
        },
        two_roles: {
          title: 'Chemistry C — revisit structure',
          body: 'Low role diversity. Alternate meeting items like “gap check” and “emotion check.”',
          caution: '',
        },
        one_cluster: {
          title: 'Chemistry D — needs a reset 🚨',
          body: 'Everyone clusters in similar roles. Thinking the same way creates blind spots.',
          caution: 'Bring outside perspectives regularly to shrink blind spots.',
        },
      },
    },
  };

  return R[locale] || R.en;
}

const localesDir = path.join(__dirname, 'locales');

function loadReport(loc) {
  if (loc === 'ko') return reportBlock('ko');
  if (loc === 'en') return reportBlock('en');
  const p = path.join(localesDir, `team-report-${loc}.json`);
  if (fs.existsSync(p)) {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  }
  return reportBlock('en');
}

const locales = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'id', 'vi'];

for (const loc of locales) {
  const file = path.join(messagesDir, `${loc}.json`);
  const raw = fs.readFileSync(file, 'utf8');
  const j = JSON.parse(raw);
  if (!j.phase3TeamWorkChemistryTest) continue;
  j.phase3TeamWorkChemistryTest.roleLabels = roleLabels[loc] || roleLabels.en;
  j.phase3TeamWorkChemistryTest.report = loadReport(loc);
  fs.writeFileSync(file, JSON.stringify(j, null, 2) + '\n', 'utf8');
  console.log('updated', file);
}
