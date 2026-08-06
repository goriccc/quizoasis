import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { headers } from 'next/headers';

import { setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n';

import { getTestBySlug } from '@/lib/supabase';
import { SITE_URL } from '@/lib/siteUrl';
import { getTestData } from '@/lib/mbtiData';
import { getOgImageUrl, getThumbnailUrl } from '@/lib/utils';
import { getLatestTestSlugs } from '@/lib/latestTests';

// 동적 import로 JavaScript 번들 크기 최적화 (모바일 성능 향상)
const Phase2ReflexTestClient = dynamic(() => import('@/components/Phase2ReflexTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const MBTITestClient = dynamic(() => import('@/components/MBTITestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const StressTestClient = dynamic(() => import('@/components/StressTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const DatingTestClient = dynamic(() => import('@/components/DatingTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const SignalTestClient = dynamic(() => import('@/components/SignalTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const AttachmentTestClient = dynamic(() => import('@/components/AttachmentTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ReactionStyleTestClient = dynamic(() => import('@/components/ReactionStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const JealousyTestClient = dynamic(() => import('@/components/JealousyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const QuickDecisionTestClient = dynamic(() => import('@/components/QuickDecisionTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FriendTestClient = dynamic(() => import('@/components/FriendTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ConflictTestClient = dynamic(() => import('@/components/ConflictTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const EmpathyTestClient = dynamic(() => import('@/components/EmpathyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const LoveFlavorTestClient = dynamic(() => import('@/components/LoveFlavorTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const IdealTypeTestClient = dynamic(() => import('@/components/IdealTypeTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const CrushTestClient = dynamic(() => import('@/components/CrushTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FlirtingTestClient = dynamic(() => import('@/components/FlirtingTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const SpouseTestClient = dynamic(() => import('@/components/SpouseTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const LoveObstaclesTestClient = dynamic(() => import('@/components/LoveObstaclesTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const HumorCodeTestClient = dynamic(() => import('@/components/HumorCodeTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const TrustTestClient = dynamic(() => import('@/components/TrustTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const KpopDebutTestClient = dynamic(() => import('@/components/KpopDebutTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const KpopExamTestClient = dynamic(() => import('@/components/KpopExamTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const EmpathyFTestClient = dynamic(() => import('@/components/EmpathyFTestClient'), {
  ssr: false
});
const Phase3RealReasonForBreakupTestClient = dynamic(
  () => import('@/components/Phase3RealReasonForBreakupTestClient'),
  { ssr: false }
);
const Phase3CareerAptitudeAi16typesTestClient = dynamic(
  () => import('@/components/Phase3CareerAptitudeAi16typesTestClient'),
  { ssr: false }
);
const Phase3MemeCharacterTypeTestClient = dynamic(
  () => import('@/components/Phase3MemeCharacterTypeTestClient'),
  { ssr: false }
);
const Phase3KdramaLeadCharacterTypeTestClient = dynamic(
  () => import('@/components/Phase3KdramaLeadCharacterTypeTestClient'),
  { ssr: false }
);
const Phase3DittoConsumptionTypeTestClient = dynamic(
  () => import('@/components/Phase3DittoConsumptionTypeTestClient'),
  { ssr: false }
);
const Phase3ExercisePersistenceTypeTestClient = dynamic(
  () => import('@/components/Phase3ExercisePersistenceTypeTestClient'),
  { ssr: false }
);
const Phase3SoloDrinkingTypeTestClient = dynamic(
  () => import('@/components/Phase3SoloDrinkingTypeTestClient'),
  { ssr: false }
);
const Phase3SoloDiningTypeTestClient = dynamic(
  () => import('@/components/Phase3SoloDiningTypeTestClient'),
  { ssr: false }
);
const Phase3InstaFeedPersonaAnalysisTestClient = dynamic(
  () => import('@/components/Phase3InstaFeedPersonaAnalysisTestClient'),
  { ssr: false }
);
const Phase3ChronotypeMorningEveningTestClient = dynamic(
  () => import('@/components/Phase3ChronotypeMorningEveningTestClient'),
  { ssr: false }
);
const Phase3DopamineTypeTestClient = dynamic(() => import('@/components/Phase3DopamineTypeTestClient'), {
  ssr: false,
});
const Phase3VillainDnaTestClient = dynamic(() => import('@/components/Phase3VillainDnaTestClient'), {
  ssr: false,
});
const Phase3SomeVsRelationshipTimingTestClient = dynamic(
  () => import('@/components/Phase3SomeVsRelationshipTimingTestClient'),
  { ssr: false }
);
const Phase3AttachmentLoveTestClient = dynamic(() => import('@/components/Phase3AttachmentLoveTestClient'), {
  ssr: false
});
const Phase3BurnoutFatigueTestClient = dynamic(() => import('@/components/Phase3BurnoutFatigueTestClient'), {
  ssr: false
});
const Phase3SummerVacationTypeTestClient = dynamic(() => import('@/components/Phase3SummerVacationTypeTestClient'), {
  ssr: false
});
const Phase3PersonalityStrengthWeaknessTestClient = dynamic(
  () => import('@/components/Phase3PersonalityStrengthWeaknessTestClient'),
  { ssr: false }
);
const Phase3ReincarnationJobTestClient = dynamic(
  () => import('@/components/Phase3ReincarnationJobTestClient'),
  { ssr: false }
);
const Phase3DramaLifeCharacterTestClient = dynamic(
  () => import('@/components/Phase3DramaLifeCharacterTestClient'),
  { ssr: false }
);
const Phase3HiddenSubCharacterTestClient = dynamic(
  () => import('@/components/Phase3HiddenSubCharacterTestClient'),
  { ssr: false }
);
const Phase3CoupleChemistryAnalysisTestClient = dynamic(
  () => import('@/components/Phase3CoupleChemistryAnalysisTestClient'),
  { ssr: false }
);
const Phase3PerfectionismIndexTestClient = dynamic(
  () => import('@/components/Phase3PerfectionismIndexTestClient'),
  { ssr: false }
);
const Phase3AdhdTendencyChecklistTestClient = dynamic(
  () => import('@/components/Phase3AdhdTendencyChecklistTestClient'),
  { ssr: false }
);
const Phase3BestFriendQuizTestClient = dynamic(
  () => import('@/components/Phase3BestFriendQuizTestClient'),
  { ssr: false }
);
const Phase3FriendSeesMyMbtiTestClient = dynamic(
  () => import('@/components/Phase3FriendSeesMyMbtiTestClient'),
  { ssr: false }
);
const Phase3ToxicRelationshipDiagnosisTestClient = dynamic(
  () => import('@/components/Phase3ToxicRelationshipDiagnosisTestClient'),
  { ssr: false }
);
const Phase3GaslightingDefensePowerTestClient = dynamic(
  () => import('@/components/Phase3GaslightingDefensePowerTestClient'),
  { ssr: false }
);
const Phase3DopamineSelfControlIndexTestClient = dynamic(
  () => import('@/components/Phase3DopamineSelfControlIndexTestClient'),
  { ssr: false }
);
const Phase3LoveVillainIndexTestClient = dynamic(
  () => import('@/components/Phase3LoveVillainIndexTestClient'),
  { ssr: false }
);
const Phase3GhostingReboundPotentialTestClient = dynamic(
  () => import('@/components/Phase3GhostingReboundPotentialTestClient'),
  { ssr: false }
);
const Phase3FirstImpressionColorScannerTestClient = dynamic(
  () => import('@/components/Phase3FirstImpressionColorScannerTestClient'),
  { ssr: false }
);
const Phase3PersonalityColorTemperatureTestClient = dynamic(
  () => import('@/components/Phase3PersonalityColorTemperatureTestClient'),
  { ssr: false }
);
const Phase3SoulmateFinderTestClient = dynamic(
  () => import('@/components/Phase3SoulmateFinderTestClient'),
  { ssr: false }
);
const Phase3AiEraJobSurvivalScoreTestClient = dynamic(
  () => import('@/components/Phase3AiEraJobSurvivalScoreTestClient'),
  { ssr: false }
);
const Phase3LazinessMaxLevelTestClient = dynamic(
  () => import('@/components/Phase3LazinessMaxLevelTestClient'),
  { ssr: false }
);
const Phase3MukbangStyleDiagnosisTestClient = dynamic(
  () => import('@/components/Phase3MukbangStyleDiagnosisTestClient'),
  { ssr: false }
);
const Phase3SuddenPoorDefenseIndexTestClient = dynamic(
  () => import('@/components/Phase3SuddenPoorDefenseIndexTestClient'),
  { ssr: false }
);
const Phase3LeadershipStyleTestClient = dynamic(
  () => import('@/components/Phase3LeadershipStyleTestClient'),
  { ssr: false }
);
const Phase3CreativityPotentialTestClient = dynamic(
  () => import('@/components/Phase3CreativityPotentialTestClient'),
  { ssr: false }
);
const Phase3FandomStyleTestClient = dynamic(
  () => import('@/components/Phase3FandomStyleTestClient'),
  { ssr: false }
);
const Phase3WebtoonProtagonistTestClient = dynamic(
  () => import('@/components/Phase3WebtoonProtagonistTestClient'),
  { ssr: false }
);
const Phase3AloneTimeTypeTestClient = dynamic(
  () => import('@/components/Phase3AloneTimeTypeTestClient'),
  { ssr: false }
);
const Phase3LateNightTypeTestClient = dynamic(
  () => import('@/components/Phase3LateNightTypeTestClient'),
  { ssr: false }
);
const Phase3GritIndexTestClient = dynamic(
  () => import('@/components/Phase3GritIndexTestClient'),
  { ssr: false }
);
const Phase3RiskToleranceTestClient = dynamic(
  () => import('@/components/Phase3RiskToleranceTestClient'),
  { ssr: false }
);
const Phase3DecisionMakingStyleTestClient = dynamic(
  () => import('@/components/Phase3DecisionMakingStyleTestClient'),
  { ssr: false }
);
const Phase3CompetitiveDnaTestClient = dynamic(
  () => import('@/components/Phase3CompetitiveDnaTestClient'),
  { ssr: false }
);
const Phase3TimePerspectiveTestClient = dynamic(
  () => import('@/components/Phase3TimePerspectiveTestClient'),
  { ssr: false }
);
const Phase3OptimismIndexTestClient = dynamic(
  () => import('@/components/Phase3OptimismIndexTestClient'),
  { ssr: false }
);
const Phase3ApprovalSeekingLevelTestClient = dynamic(
  () => import('@/components/Phase3ApprovalSeekingLevelTestClient'),
  { ssr: false }
);
const Phase3EqSelfDiagnosisTestClient = dynamic(
  () => import('@/components/Phase3EqSelfDiagnosisTestClient'),
  { ssr: false }
);

const Phase3CuriosityTypeTestClient = dynamic(
  () => import('@/components/Phase3CuriosityTypeTestClient'),
  { ssr: false }
);

const Phase3RelationshipEnergyTestClient = dynamic(
  () => import('@/components/Phase3RelationshipEnergyTestClient'),
  { ssr: false }
);

const Phase3FamilyBalanceGameTestClient = dynamic(
  () => import('@/components/Phase3FamilyBalanceGameTestClient'),
  { ssr: false }
);

const Phase3FriendshipBalanceGameTestClient = dynamic(
  () => import('@/components/Phase3FriendshipBalanceGameTestClient'),
  { ssr: false }
);

const Phase3DesertIslandSurvivalKitTestClient = dynamic(
  () => import('@/components/Phase3DesertIslandSurvivalKitTestClient'),
  { ssr: false }
);

const Phase3ChangeAdaptabilityTestClient = dynamic(
  () => import('@/components/Phase3ChangeAdaptabilityTestClient'),
  { ssr: false }
);
const Phase3KpopHistoryMasterTestClient = dynamic(
  () => import('@/components/Phase3KpopHistoryMasterTestClient'),
  { ssr: false }
);
const Phase3EverydayScienceQuizTestClient = dynamic(
  () => import('@/components/Phase3EverydayScienceQuizTestClient'),
  { ssr: false }
);
const Phase3EgoWallThicknessTestClient = dynamic(
  () => import('@/components/Phase3EgoWallThicknessTestClient'),
  { ssr: false }
);
const Phase3CafeWorkGradeTestClient = dynamic(
  () => import('@/components/Phase3CafeWorkGradeTestClient'),
  { ssr: false }
);
const Phase3PersonalBrandingKeywordsTestClient = dynamic(
  () => import('@/components/Phase3PersonalBrandingKeywordsTestClient'),
  { ssr: false }
);
const Phase3HundredBillionProbabilityTestClient = dynamic(
  () => import('@/components/Phase3HundredBillionProbabilityTestClient'),
  { ssr: false }
);
const Phase3OfficeVillainProbabilityTestClient = dynamic(
  () => import('@/components/Phase3OfficeVillainProbabilityTestClient'),
  { ssr: false }
);
const Phase3Balance99UltimateTestClient = dynamic(
  () => import('@/components/Phase3Balance99UltimateTestClient'),
  { ssr: false }
);
const Phase3DailyMindWeatherReportTestClient = dynamic(
  () => import('@/components/Phase3DailyMindWeatherReportTestClient'),
  { ssr: false }
);
const Phase3OneMinReactionSpeedTestClient = dynamic(
  () => import('@/components/Phase3OneMinReactionSpeedTestClient'),
  { ssr: false }
);
const Phase3LuckGameTestClient = dynamic(
  () => import('@/components/Phase3LuckGameTestClient'),
  { ssr: false }
);
const Phase3MemoryLimitChallengeTestClient = dynamic(
  () => import('@/components/Phase3MemoryLimitChallengeTestClient'),
  { ssr: false }
);
const Phase3SpotTheDifferenceChallengeTestClient = dynamic(
  () => import('@/components/Phase3SpotTheDifferenceChallengeTestClient'),
  { ssr: false }
);
const Phase3AiFuture10YearsTestClient = dynamic(
  () => import('@/components/Phase3AiFuture10YearsTestClient'),
  { ssr: false }
);
const Phase3FallInLoveSpeedTestClient = dynamic(
  () => import('@/components/Phase3FallInLoveSpeedTestClient'),
  { ssr: false }
);
const Phase3LoveObsessionThermometerTestClient = dynamic(
  () => import('@/components/Phase3LoveObsessionThermometerTestClient'),
  { ssr: false }
);
const Phase3MultitaskingAbilityTestClient = dynamic(
  () => import('@/components/Phase3MultitaskingAbilityTestClient'),
  { ssr: false }
);
const Phase3LonelinessConcentrationTestClient = dynamic(
  () => import('@/components/Phase3LonelinessConcentrationTestClient'),
  { ssr: false }
);
const Phase3SelfEsteemShieldStrengthTestClient = dynamic(
  () => import('@/components/Phase3SelfEsteemShieldStrengthTestClient'),
  { ssr: false }
);
const Phase3ExLingeringFeelingsTestClient = dynamic(
  () => import('@/components/Phase3ExLingeringFeelingsTestClient'),
  { ssr: false }
);
const Phase3FlirtingStyleTestClient = dynamic(
  () => import('@/components/Phase3FlirtingStyleTestClient'),
  { ssr: false }
);
const Phase3EagleEyeUltimateTestClient = dynamic(
  () => import('@/components/Phase3EagleEyeUltimateTestClient'),
  { ssr: false }
);
const Phase3CoupleBreakupRiskTestClient = dynamic(
  () => import('@/components/Phase3CoupleBreakupRiskTestClient'),
  { ssr: false }
);
const Phase3WhichAiAreYouTestClient = dynamic(
  () => import('@/components/Phase3WhichAiAreYouTestClient'),
  { ssr: false }
);
const Phase3SnsAlgorithmTypeTestClient = dynamic(
  () => import('@/components/Phase3SnsAlgorithmTypeTestClient'),
  { ssr: false }
);
const Phase3PersonalityColorFinderTestClient = dynamic(
  () => import('@/components/Phase3PersonalityColorFinderTestClient'),
  { ssr: false }
);
const Phase3PersonalityWeatherTypeTestClient = dynamic(
  () => import('@/components/Phase3PersonalityWeatherTypeTestClient'),
  { ssr: false }
);
const Phase3GameLoveBalanceExtremeTestClient = dynamic(
  () => import('@/components/Phase3GameLoveBalanceExtremeTestClient'),
  { ssr: false }
);
const Phase3SpendingDarkHistoryTypeTestClient = dynamic(
  () => import('@/components/Phase3SpendingDarkHistoryTypeTestClient'),
  { ssr: false }
);
const Phase3RoomPersonalityAnalysisTestClient = dynamic(
  () => import('@/components/Phase3RoomPersonalityAnalysisTestClient'),
  { ssr: false }
);
const Phase3GuardianSpiritAnimalTestClient = dynamic(
  () => import('@/components/Phase3GuardianSpiritAnimalTestClient'),
  { ssr: false }
);
const Phase3OotdStyleDiagnosisTestClient = dynamic(
  () => import('@/components/Phase3OotdStyleDiagnosisTestClient'),
  { ssr: false }
);
const Phase3PersonalityShoeRecommendationTestClient = dynamic(
  () => import('@/components/Phase3PersonalityShoeRecommendationTestClient'),
  { ssr: false }
);
const Phase3YoutubeAlgorithmKnowsTestClient = dynamic(
  () => import('@/components/Phase3YoutubeAlgorithmKnowsTestClient'),
  { ssr: false }
);
const Phase3ShortformAddictionTypeTestClient = dynamic(
  () => import('@/components/Phase3ShortformAddictionTypeTestClient'),
  { ssr: false }
);
const Phase3SpendingPersonalityTypeTestClient = dynamic(
  () => import('@/components/Phase3SpendingPersonalityTypeTestClient'),
  { ssr: false }
);
const Phase3YoloFireGodlifeTypeTestClient = dynamic(
  () => import('@/components/Phase3YoloFireGodlifeTypeTestClient'),
  { ssr: false }
);
const Phase3TanjinjamSpendingTypeTestClient = dynamic(
  () => import('@/components/Phase3TanjinjamSpendingTypeTestClient'),
  { ssr: false }
);
const Phase3DumbSpendingDiagnosisTestClient = dynamic(
  () => import('@/components/Phase3DumbSpendingDiagnosisTestClient'),
  { ssr: false }
);
const Phase3ZeroSpendingChallengeTestClient = dynamic(
  () => import('@/components/Phase3ZeroSpendingChallengeTestClient'),
  { ssr: false }
);
const Phase3StressReliefTypeTestClient = dynamic(
  () => import('@/components/Phase3StressReliefTypeTestClient'),
  { ssr: false }
);
const Phase3SleepTypePrescriptionTestClient = dynamic(
  () => import('@/components/Phase3SleepTypePrescriptionTestClient'),
  { ssr: false }
);
const Phase3MyHashtagGeneratorTestClient = dynamic(
  () => import('@/components/Phase3MyHashtagGeneratorTestClient'),
  { ssr: false }
);
const Phase3GodsaengIndexMeasurementTestClient = dynamic(
  () => import('@/components/Phase3GodsaengIndexMeasurementTestClient'),
  { ssr: false }
);
const Phase3OfficeBalanceGameTestClient = dynamic(
  () => import('@/components/Phase3OfficeBalanceGameTestClient'),
  { ssr: false }
);
const Phase3OfficeSurvivalTypeTestClient = dynamic(
  () => import('@/components/Phase3OfficeSurvivalTypeTestClient'),
  { ssr: false }
);
const Phase3RealFriendConditionAnalysisTestClient = dynamic(
  () => import('@/components/Phase3RealFriendConditionAnalysisTestClient'),
  { ssr: false }
);
const Phase3TfIndexPreciseMeasurementTestClient = dynamic(
  () => import('@/components/Phase3TfIndexPreciseMeasurementTestClient'),
  { ssr: false }
);
const Phase3SnIndexPreciseMeasurementTestClient = dynamic(
  () => import('@/components/Phase3SnIndexPreciseMeasurementTestClient'),
  { ssr: false }
);
const Phase3EiIndexPreciseMeasurementTestClient = dynamic(
  () => import('@/components/Phase3EiIndexPreciseMeasurementTestClient'),
  { ssr: false }
);
const Phase3JpIndexPreciseMeasurementTestClient = dynamic(
  () => import('@/components/Phase3JpIndexPreciseMeasurementTestClient'),
  { ssr: false }
);
const Phase3ElementaryMathAdultsQuizTestClient = dynamic(
  () => import('@/components/Phase3ElementaryMathAdultsQuizTestClient'),
  { ssr: false }
);
const Phase3EmojiMovieIdiomQuizTestClient = dynamic(
  () => import('@/components/Phase3EmojiMovieIdiomQuizTestClient'),
  { ssr: false }
);
const Phase3WorldLandmarkCityQuizTestClient = dynamic(
  () => import('@/components/Phase3WorldLandmarkCityQuizTestClient'),
  { ssr: false }
);
const Phase3WorldGreetingChallengeTestClient = dynamic(
  () => import('@/components/Phase3WorldGreetingChallengeTestClient'),
  { ssr: false }
);
const Phase3WorldFlagMasterTestClient = dynamic(
  () => import('@/components/Phase3WorldFlagMasterTestClient'),
  { ssr: false }
);
const Phase3TeamWorkChemistryTestClient = dynamic(
  () => import('@/components/Phase3TeamWorkChemistryTestClient'),
  { ssr: false }
);
const Phase3LoveRedFlagFinderTestClient = dynamic(
  () => import('@/components/Phase3LoveRedFlagFinderTestClient'),
  { ssr: false }
);
const Phase3LoveGreenFlagFinderTestClient = dynamic(
  () => import('@/components/Phase3LoveGreenFlagFinderTestClient'),
  { ssr: false }
);
const Phase3LoveBehaviorTypeTestClient = dynamic(
  () => import('@/components/Phase3LoveBehaviorTypeTestClient'),
  { ssr: false }
);
const Phase3IdealTypeDnaAnalysisTestClient = dynamic(
  () => import('@/components/Phase3IdealTypeDnaAnalysisTestClient'),
  { ssr: false }
);
const Phase3LoveWeaknessMomentTestClient = dynamic(
  () => import('@/components/Phase3LoveWeaknessMomentTestClient'),
  { ssr: false }
);
const Phase3SoloEscapePossibilityTestClient = dynamic(
  () => import('@/components/Phase3SoloEscapePossibilityTestClient'),
  { ssr: false }
);
const Phase3LovePrescriptionTestClient = dynamic(
  () => import('@/components/Phase3LovePrescriptionTestClient'),
  { ssr: false }
);
const Phase3SkincareRoutineRecommendationTestClient = dynamic(
  () => import('@/components/Phase3SkincareRoutineRecommendationTestClient'),
  { ssr: false }
);
const Phase2FactBomberTestClient = dynamic(() => import('@/components/Phase2FactBomberTestClient'), {
  ssr: false
});
const Phase2DatingMbtiTestClient = dynamic(() => import('@/components/Phase2DatingMbtiTestClient'), {
  ssr: false
});
const Phase2PerfectionismTestClient = dynamic(() => import('@/components/Phase2PerfectionismTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2FriendshipStyleTestClient = dynamic(() => import('@/components/Phase2FriendshipStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2RelationshipCutTestClient = dynamic(() => import('@/components/Phase2RelationshipCutTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2SelfEsteemTestClient = dynamic(() => import('@/components/Phase2SelfEsteemTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2MentalAgeTestClient = dynamic(() => import('@/components/Phase2MentalAgeTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2GuiltLevelTestClient = dynamic(() => import('@/components/Phase2GuiltLevelTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2CreativityLevelTestClient = dynamic(() => import('@/components/Phase2CreativityLevelTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2ImpulseBuyingTestClient = dynamic(() => import('@/components/Phase2ImpulseBuyingTestClient'), {
  ssr: false
});
const Phase2BirthGemFlowerTestClient = dynamic(() => import('@/components/Phase2BirthGemFlowerTestClient'), {
  ssr: false
});
const Phase2CoreEmotionTestClient = dynamic(() => import('@/components/Phase2CoreEmotionTestClient'), {
  ssr: false
});
const Phase2ResilienceTestClient = dynamic(() => import('@/components/Phase2ResilienceTestClient'), {
  ssr: false
});
const Phase2DreamCarTestClient = dynamic(() => import('@/components/Phase2DreamCarTestClient'), {
  ssr: false
});
const Phase2BodySignalTestClient = dynamic(() => import('@/components/Phase2BodySignalTestClient'), {
  ssr: false
});
const Phase2GreekGodTestClient = dynamic(() => import('@/components/Phase2GreekGodTestClient'), {
  ssr: false
});
const Phase2TeaTherapyTestClient = dynamic(() => import('@/components/Phase2TeaTherapyTestClient'), {
  ssr: false
});
const Phase2StressCareTestClient = dynamic(() => import('@/components/Phase2StressCareTestClient'), {
  ssr: false
});
const Phase2ConflictReasonTestClient = dynamic(() => import('@/components/Phase2ConflictReasonTestClient'), {
  ssr: false
});
const Phase2ReincarnationAnimalTestClient = dynamic(() => import('@/components/Phase2ReincarnationAnimalTestClient'), {
  ssr: false
});
const Phase2DarkSideTestClient = dynamic(() => import('@/components/Phase2DarkSideTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2AreYouTTestClient = dynamic(() => import('@/components/Phase2AreYouTTestClient'), {
  ssr: false
});
const Phase2CapitalQuizTestClient = dynamic(() => import('@/components/Phase2CapitalQuizTestClient'), {
  ssr: false
});
const Phase2ItTechQuizTestClient = dynamic(() => import('@/components/Phase2ItTechQuizTestClient'), {
  ssr: false
});
const Phase2LiteratureQuizTestClient = dynamic(() => import('@/components/Phase2LiteratureQuizTestClient'), {
  ssr: false
});
const Phase2InventionQuizTestClient = dynamic(() => import('@/components/Phase2InventionQuizTestClient'), {
  ssr: false
});
const Phase2WorldHistoryQuizTestClient = dynamic(() => import('@/components/Phase2WorldHistoryQuizTestClient'), {
  ssr: false
});
const Phase2YoutubeChannelTestClient = dynamic(() => import('@/components/Phase2YoutubeChannelTestClient'), {
  ssr: false
});
const Phase2HiddenTalentTestClient = dynamic(() => import('@/components/Phase2HiddenTalentTestClient'), {
  ssr: false
});
const Phase2SocialLevelTestClient = dynamic(() => import('@/components/Phase2SocialLevelTestClient'), {
  ssr: false
});
const Phase2LieDetectorTestClient = dynamic(() => import('@/components/Phase2LieDetectorTestClient'), {
  ssr: false
});
const Phase2HomebodyLevelTestClient = dynamic(() => import('@/components/Phase2HomebodyLevelTestClient'), {
  ssr: false
});
const Phase2LazinessLevelTestClient = dynamic(() => import('@/components/Phase2LazinessLevelTestClient'), {
  ssr: false
});
const Phase2ColorSurvivalTestClient = dynamic(() => import('@/components/Phase2ColorSurvivalTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2HearingAgeTestClient = dynamic(() => import('@/components/Phase2HearingAgeTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2EyesightTestClient = dynamic(() => import('@/components/Phase2EyesightTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2ColorBlindTestClient = dynamic(() => import('@/components/Phase2ColorBlindTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2GlobalTypingTestClient = dynamic(() => import('@/components/Phase2GlobalTypingTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2MemoryLevelTestClient = dynamic(() => import('@/components/Phase2MemoryLevelTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const Phase2SpeedClickTestClient = dynamic(() => import('@/components/Phase2SpeedClickTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const SoulDrinkTestClient = dynamic(() => import('@/components/SoulDrinkTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const SuperpowerTestClient = dynamic(() => import('@/components/SuperpowerTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const TravelStyleTestClient = dynamic(() => import('@/components/TravelStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ConflictStyleTestClient = dynamic(() => import('@/components/ConflictStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ConversationStyleTestClient = dynamic(() => import('@/components/ConversationStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FlirtingStyleTestClient = dynamic(() => import('@/components/FlirtingStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const LeadershipStyleTestClient = dynamic(() => import('@/components/LeadershipStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const TimePerspectiveTestClient = dynamic(() => import('@/components/TimePerspectiveTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const DefenseMechanismTestClient = dynamic(() => import('@/components/DefenseMechanismTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const LoveLanguageTestClient = dynamic(() => import('@/components/LoveLanguageTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const LifePrioritiesTestClient = dynamic(() => import('@/components/LifePrioritiesTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ApologyTestClient = dynamic(() => import('@/components/ApologyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const BreakupTestClient = dynamic(() => import('@/components/BreakupTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FirstImpressionTestClient = dynamic(() => import('@/components/FirstImpressionTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const HonestyTestClient = dynamic(() => import('@/components/HonestyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const CareerTestClient = dynamic(() => import('@/components/CareerTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const JobStrengthTestClient = dynamic(() => import('@/components/JobStrengthTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const WorkValuesTestClient = dynamic(() => import('@/components/WorkValuesTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const EntrepreneurSpiritTestClient = dynamic(() => import('@/components/EntrepreneurSpiritTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const WorkLifeBalanceTestClient = dynamic(() => import('@/components/WorkLifeBalanceTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const LeadershipTestClient = dynamic(() => import('@/components/LeadershipTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ObsessionTestClient = dynamic(() => import('@/components/ObsessionTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const TeamPlayerTestClient = dynamic(() => import('@/components/TeamPlayerTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ChallengePotentialTestClient = dynamic(() => import('@/components/ChallengePotentialTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const StressReliefTestClient = dynamic(() => import('@/components/StressReliefTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const InvestmentStyleTestClient = dynamic(() => import('@/components/InvestmentStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const TimeEfficiencyTestClient = dynamic(() => import('@/components/TimeEfficiencyTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const BrainTestClient = dynamic(() => import('@/components/BrainTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const OptimismTestClient = dynamic(() => import('@/components/OptimismTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const EnneagramTestClient = dynamic(() => import('@/components/EnneagramTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const AdventurerTestClient = dynamic(() => import('@/components/AdventurerTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const CommunicationStyleTestClient = dynamic(() => import('@/components/CommunicationStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const HonestyVsRestraintTestClient = dynamic(() => import('@/components/HonestyVsRestraintTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const IndependenceTestClient = dynamic(() => import('@/components/IndependenceTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const DecisionSpeedTestClient = dynamic(() => import('@/components/DecisionSpeedTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const CompetitivenessTestClient = dynamic(() => import('@/components/CompetitivenessTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const PlannerVsSpontaneousTestClient = dynamic(() => import('@/components/PlannerVsSpontaneousTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const DatingStyleTestClient = dynamic(() => import('@/components/DatingStyleTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const ConcentrationTestClient = dynamic(() => import('@/components/ConcentrationTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const MBTIAccurateTestClient = dynamic(() => import('@/components/MBTIAccurateTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const BrainQuizTestClient = dynamic(() => import('@/components/BrainQuizTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const RealIQTestClient = dynamic(() => import('@/components/RealIQTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const MensaExtremeTestClient = dynamic(() => import('@/components/MensaExtremeTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});

const ExtremeQuizTestClient = dynamic(() => import('@/components/ExtremeQuizTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});

const FaceReadingTestClient = dynamic(() => import('@/components/FaceReadingTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});

const FaceLoveFortuneTestClient = dynamic(() => import('@/components/FaceLoveFortuneTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FaceOccupationsTestClient = dynamic(() => import('@/components/FaceOccupationsTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FacePsychStateTestClient = dynamic(() => import('@/components/FacePsychStateTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const HonestFacialEvaluationTestClient = dynamic(() => import('@/components/HonestFacialEvaluationTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FaceFortuneTestClient = dynamic(() => import('@/components/FaceFortuneTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});
const FaceReincarnationTestClient = dynamic(() => import('@/components/FaceReincarnationTestClient'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
});

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

// ISR with 60 seconds cache: play_count 빠른 업데이트
export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = params;
  let test = await getTestBySlug(slug);

  if (!test && slug === 'phase3-summer-vacation-type') {
    test = {
      slug: 'phase3-summer-vacation-type',
      title: {
        ko: '올여름 찰떡! 내 휴가지 유형',
        en: 'Your Summer Vacation Match Type',
        ja: '今年の夏ピッタリ！私の休暇タイプ',
        'zh-CN': '今夏合拍！我的度假类型',
        'zh-TW': '今夏合拍！我的度假類型',
        vi: 'Hè này hợp gu! Kiểu kỳ nghỉ của tôi',
        id: 'Cocok musim panas! Tipe liburanku',
      },
      description: {
        ko: '여행 성향·예산·동행으로 보는 휴가지 추천. 12문항 2지선다.',
        en: 'Summer trip style in 12 A/B questions — destination vibe match.',
        ja: '旅スタイル・予算・同行者から見る夏の休暇タイプ。12問の2択。',
        'zh-CN': '从旅行风格、预算、同行看今夏度假类型，12 道二选一。',
        'zh-TW': '從旅行風格、預算、同行看今夏度假類型，12 題二選一。',
        vi: 'Phong cách du lịch, ngân sách, đồng hành — 12 câu trắc nghiệm.',
        id: 'Gaya traveling, budget, teman seperjalanan — 12 pertanyaan pilihan ganda.',
      },
      thumbnail: 'p3_test_summer_vacation_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['여행', '휴가', '심리'],
        en: ['Travel', 'Vacation', 'Psychology'],
        ja: ['旅行', '休暇', '心理'],
        'zh-CN': ['旅行', '度假', '心理'],
        'zh-TW': ['旅行', '度假', '心理'],
        vi: ['Du lịch', 'Kỳ nghỉ', 'Tâm lý'],
        id: ['Travel', 'Liburan', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-perfectionism-index') {
    test = {
      slug: 'phase3-perfectionism-index',
      title: {
        ko: '나의 완벽주의 지수',
        en: 'My Perfectionism Index',
        ja: '私の完璧主義指数',
        'zh-CN': '我的完美主义指数',
        'zh-TW': '我的完美主義指數',
        vi: 'Chỉ số chủ nghĩa hoàn hảo của tôi',
        id: 'Indeks perfeksionismeku',
      },
      description: {
        ko: '12가지 일상 행동으로 완벽주의 레벨과 삶에 미치는 영향을 분석합니다. #성격 #공감 #자기이해',
        en: '12 everyday behaviors — perfectionism level and life impact. #Personality #Empathy #SelfInsight',
        ja: '日常12問で完璧主義レベルと生活への影響を分析。#性格 #共感 #自己理解',
        'zh-CN': '12 道日常行为题，分析完美主义程度与生活影响。#性格 #共情 #自我理解',
        'zh-TW': '12 道日常行為題，分析完美主義程度與生活影響。#性格 #共情 #自我理解',
        vi: '12 hành vi hàng ngày — mức chủ nghĩa hoàn hảo và tác động.#Tính cách #Đồng cảm #Tự hiểu mình',
        id: '12 perilaku sehari-hari — tingkat perfeksionisme & dampaknya.#Kepribadian #Empati #Memahami diri',
      },
      thumbnail: 'p3_test_perfectionism_index.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['성격', '공감', '자기이해'],
        en: ['Personality', 'Empathy', 'Self-understanding'],
        ja: ['性格', '共感', '自己理解'],
        'zh-CN': ['性格', '共情', '自我理解'],
        'zh-TW': ['性格', '共情', '自我理解'],
        vi: ['Tính cách', 'Đồng cảm', 'Tự hiểu mình'],
        id: ['Kepribadian', 'Empati', 'Memahami diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-best-friend-quiz') {
    test = {
      slug: 'phase3-best-friend-quiz',
      title: {
        ko: '나를 제일 잘 아는 친구는?',
        en: 'Who knows me best?',
        ja: '私を一番よく知ってる友だちは？',
        'zh-CN': '谁最了解我？',
        'zh-TW': '誰最了解我？',
        vi: 'Ai hiểu tôi nhất?',
        id: 'Siapa yang paling mengenal saya?',
      },
      description: {
        ko: '10문항 찐친 퀴즈. 먼저 내가 정답을 정하고 친구에게 링크를 공유하세요. #관계 #우정 #찐친',
        en: '10-question BFF quiz: set your answers first, then share the link with friends. #friends #friendship #bff',
        ja: '10問の親友クイズ。先に正解を決めて友だちにリンクを共有。#友だち #友情',
        'zh-CN': '10 题挚友测验：先设定你的答案，再分享链接给好友。#友情 #挚友',
        'zh-TW': '10 題摯友測驗：先設定你的答案，再分享連結給好友。#友情 #摯友',
        vi: 'Quiz 10 câu bạn thân: chọn đáp án của bạn trước, rồi chia sẻ link. #bạn #tình bạn',
        id: 'Kuis 10 soal sahabat: tentukan jawabanmu dulu, lalu bagikan tautannya. #teman #persahabatan',
      },
      thumbnail: 'p3_test_best_friend_quiz.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['관계', '우정', '찐친'],
        en: ['relationships', 'friendship', 'bff'],
        ja: ['人間関係', '友情', '親友'],
        'zh-CN': ['关系', '友情', '挚友'],
        'zh-TW': ['關係', '友情', '摯友'],
        vi: ['quan hệ', 'tình bạn', 'bạn thân'],
        id: ['hubungan', 'persahabatan', 'sahabat'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-friend-sees-my-mbti') {
    test = {
      slug: 'phase3-friend-sees-my-mbti',
      title: {
        ko: '친구가 보는 내 MBTI',
        en: 'My MBTI Through a Friend\'s Eyes',
        ja: '友だちが見る私のMBTI',
        'zh-CN': '朋友眼中的我的MBTI',
        'zh-TW': '朋友眼中的我的MBTI',
        vi: 'MBTI của tôi qua mắt bạn bè',
        id: 'MBTIku lewat mata teman',
      },
      description: {
        ko: '내가 생각한 나 vs 친구가 보는 나, MBTI로 비교해보세요',
        en: 'Compare how you see yourself vs how a friend sees you — through MBTI',
        ja: '自分が思う自分 vs 友だちが見る自分を、MBTIで比較してみよう',
        'zh-CN': '用 MBTI 对比：你以为的自己 vs 朋友眼里的你',
        'zh-TW': '用 MBTI 對比：你以為的自己 vs 朋友眼裡的你',
        vi: 'So sánh bạn nghĩ về mình vs bạn bè nhìn bạn — qua MBTI',
        id: 'Bandingkan dirimu menurutmu vs menurut teman — lewat MBTI',
      },
      thumbnail: 'p3_test_friend_sees_my_mbti.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['MBTI', '친구', '심리'],
        en: ['MBTI', 'Friends', 'Psychology'],
        ja: ['MBTI', '友だち', '心理'],
        'zh-CN': ['MBTI', '朋友', '心理'],
        'zh-TW': ['MBTI', '朋友', '心理'],
        vi: ['MBTI', 'Bạn bè', 'Tâm lý'],
        id: ['MBTI', 'Teman', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-ego-wall-thickness') {
    test = {
      slug: 'phase3-ego-wall-thickness',
      title: {
        ko: "나의 '자아 성벽' 두께",
        en: "My 'Ego Wall' Thickness",
        ja: '私の『自我の壁』の厚さ',
        'zh-CN': '我的「自我城墙」厚度',
        'zh-TW': '我的「自我城牆」厚度',
        vi: "Độ dày 'Bức tường bản ngã' của tôi",
        id: "Ketebalan 'Tembok Ego'-ku",
      },
      description: {
        ko: '직관적으로 이미지를 선택하면 나의 자아 성벽 두께와 방어 기제 패턴을 분석해 드립니다.',
        en: "Choose images intuitively, and we'll analyze the thickness of your ego wall and your defense mechanism pattern.",
        ja: '直感的に画像を選ぶと、あなたの自我の壁の厚さと防衛機制のパターンを分析します。',
        'zh-CN': '凭直觉选择图片，我们将为你分析自我城墙的厚度和防御机制模式。',
        'zh-TW': '憑直覺選擇圖片，我們將為你分析自我城牆的厚度和防禦機制模式。',
        vi: 'Chọn hình ảnh theo trực giác, chúng tôi sẽ phân tích độ dày bức tường bản ngã và kiểu cơ chế phòng vệ của bạn.',
        id: 'Pilih gambar secara intuitif, dan kami akan menganalisis ketebalan tembok egomu serta pola mekanisme pertahananmu.',
      },
      thumbnail: 'p3_test_ego_wall_thickness.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['자아성벽', '방어기제', '자존감'],
        en: ['ego wall', 'defense mechanism', 'self-esteem'],
        ja: ['自我の壁', '防衛機制', '自己肯定感'],
        'zh-CN': ['自我城墙', '防御机制', '自尊'],
        'zh-TW': ['自我城牆', '防禦機制', '自尊'],
        vi: ['bức tường bản ngã', 'cơ chế phòng vệ', 'tự tôn'],
        id: ['tembok ego', 'mekanisme pertahanan', 'harga diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-cafe-work-grade') {
    test = {
      slug: 'phase3-cafe-work-grade',
      title: {
        ko: "나의 '카공족' 등급 테스트",
        en: "My 'Cafe Studier' Grade Test",
        ja: '私の「カフェ勉族」等級テスト',
        'zh-CN': '我的「咖啡馆学习党」等级测试',
        'zh-TW': '我的「咖啡廳學習黨」等級測試',
        vi: "Bài test hạng 'dân học ở quán cà phê' của tôi",
        id: "Tes Grade 'Pekerja Kafe'-ku",
      },
      description: {
        ko: '12문항으로 나의 카공 습관과 에티켓 등급을 솔직하게 진단합니다.',
        en: '12 questions honestly diagnose your cafe work habits and etiquette grade.',
        ja: '12問で、あなたのカフェ勉習慣とエチケット等級を正直に診断します。',
        'zh-CN': '通过12道题诚实地诊断你的咖啡馆学习办公习惯与礼仪等级。',
        'zh-TW': '透過12題誠實診斷你的咖啡廳學習辦公習慣與禮儀等級。',
        vi: '12 câu hỏi chẩn đoán thẳng thắn thói quen học/làm ở quán cà phê và hạng etiquette của bạn.',
        id: '12 pertanyaan mendiagnosis kebiasaan kerja di kafe dan grade etiketmu secara jujur.',
      },
      thumbnail: 'p3_test_cafe_work_grade.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['카공족', '카페', '에티켓', '공부', '재택'],
        en: ['cafe studier', 'cafe', 'etiquette', 'study', 'remote work'],
        ja: ['カフェ勉族', 'カフェ', 'エチケット', '勉強', '在宅'],
        'zh-CN': ['咖啡馆学习党', '咖啡馆', '礼仪', '学习', '居家办公'],
        'zh-TW': ['咖啡廳學習黨', '咖啡廳', '禮儀', '學習', '居家辦公'],
        vi: ['học ở quán cà phê', 'quán cà phê', 'etiquette', 'học tập', 'làm việc từ xa'],
        id: ['pekerja kafe', 'kafe', 'etiket', 'belajar', 'kerja remote'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-personal-branding-keywords') {
    test = {
      slug: 'phase3-personal-branding-keywords',
      title: {
        ko: "나의 '퍼스널 브랜딩' 키워드",
        en: "My 'Personal Branding' Keywords",
        ja: '私の「パーソナルブランディング」キーワード',
        'zh-CN': '我的「个人品牌」关键词',
        'zh-TW': '我的「個人品牌」關鍵字',
        vi: "Từ khóa 'Personal Branding' của tôi",
        id: "Kata Kunci 'Personal Branding'-ku",
      },
      description: {
        ko: '12문항으로 나를 홍보할 최적의 키워드 3개를 찾아드립니다.',
        en: '12 questions find the 3 best keywords to promote yourself.',
        ja: '12問であなたをアピールする最適なキーワード3つを見つけます。',
        'zh-CN': '通过12道题找出最适合宣传自己的3个关键词。',
        'zh-TW': '透過12題找出最適合宣傳自己的3個關鍵字。',
        vi: '12 câu hỏi giúp tìm 3 từ khóa tối ưu để quảng bá bản thân.',
        id: '12 pertanyaan menemukan 3 kata kunci terbaik untuk mempromosikan dirimu.',
      },
      thumbnail: 'p3_test_personal_branding_keywords.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['퍼스널브랜딩', '이력서', '링크드인', '자기소개', '커리어'],
        en: ['personal branding', 'resume', 'linkedin', 'self-introduction', 'career'],
        ja: ['パーソナルブランディング', '履歴書', 'LinkedIn', '自己紹介', 'キャリア'],
        'zh-CN': ['个人品牌', '简历', '领英', '自我介绍', '职业'],
        'zh-TW': ['個人品牌', '履歷', 'LinkedIn', '自我介紹', '職涯'],
        vi: ['personal branding', 'CV', 'LinkedIn', 'giới thiệu bản thân', 'sự nghiệp'],
        id: ['personal branding', 'CV', 'LinkedIn', 'perkenalan diri', 'karier'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-100billion-probability') {
    test = {
      slug: 'phase3-100billion-probability',
      title: {
        ko: '내가 100억 부자가 될 확률',
        en: 'My Odds of Becoming a ₩10 Billion Rich Person',
        ja: '私が100億ウォンの金持ちになる確率',
        'zh-CN': '我成为100亿韩元富翁的概率',
        'zh-TW': '我成為100億韓元富翁的機率',
        vi: 'Xác suất tôi trở thành người giàu 100 tỷ won',
        id: 'Peluangku Jadi Kaya 100 Miliar Won',
      },
      description: {
        ko: '12문항으로 나의 부의 마인드셋과 재테크 성향을 분석해 100억 부자가 될 확률을 알려드립니다.',
        en: '12 questions analyze your wealth mindset and investing habits to estimate your odds of reaching ₩10 billion.',
        ja: '12問であなたの富のマインドセットと投資傾向を分析し、100億ウォンの金持ちになる確率をお伝えします。',
        'zh-CN': '通过12道题分析你的财富心态与理财倾向，告诉你成为100亿韩元富翁的概率。',
        'zh-TW': '透過12題分析你的財富心態與理財傾向，告訴你成為100億韓元富翁的機率。',
        vi: '12 câu hỏi phân tích tư duy giàu có và xu hướng đầu tư để ước tính xác suất bạn đạt 100 tỷ won.',
        id: '12 pertanyaan menganalisis mindset kekayaan dan kecenderungan investasi untuk memperkirakan peluangmu mencapai 100 miliar won.',
      },
      thumbnail: 'p3_test_100billion_probability.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['100억', '부자', '재테크', '마인드셋', '돈'],
        en: ['10 billion', 'rich', 'investing', 'mindset', 'money'],
        ja: ['100億', '金持ち', '投資', 'マインドセット', 'お金'],
        'zh-CN': ['100亿', '富翁', '理财', '心态', '金钱'],
        'zh-TW': ['100億', '富翁', '理財', '心態', '金錢'],
        vi: ['100 tỷ', 'giàu', 'đầu tư', 'mindset', 'tiền'],
        id: ['100 miliar', 'kaya', 'investasi', 'mindset', 'uang'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-office-villain-probability') {
    test = {
      slug: 'phase3-office-villain-probability',
      title: {
        ko: "내가 '회사 빌런'이 될 확률?",
        en: "What's My Odds of Becoming an 'Office Villain'?",
        ja: '私が「オフィス悪役」になる確率は？',
        'zh-CN': '我成为「职场反派」的概率？',
        'zh-TW': '我成為「職場反派」的機率？',
        vi: "Xác suất tôi trở thành 'phản diện công sở'?",
        id: "Berapa Peluangku Jadi 'Penjahat Kantor'?",
      },
      description: {
        ko: '12가지 오피스 상황극으로 나의 직장 빌런 확률을 솔직하게 측정합니다.',
        en: '12 real office scenarios honestly measure your odds of being a workplace villain.',
        ja: '12のオフィス状況劇で、あなたの職場悪役確率を正直に測定します。',
        'zh-CN': '通过12个办公室情景剧，诚实测量你成为职场反派的概率。',
        'zh-TW': '透過12個辦公室情境劇，誠實測量你成為職場反派的機率。',
        vi: '12 tình huống văn phòng đo xác suất bạn trở thành phản diện công sở một cách thẳng thắn.',
        id: '12 skenario kantor mengukur peluangmu jadi penjahat kantor secara jujur.',
      },
      thumbnail: 'p3_test_office_villain_probability.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['회사빌런', '직장인', '오피스', '공감', '블라인드'],
        en: ['office villain', 'office worker', 'office', 'relatable', 'Blind'],
        ja: ['オフィス悪役', '会社員', 'オフィス', '共感', 'Blind'],
        'zh-CN': ['职场反派', '上班族', '办公室', '共鸣', 'Blind'],
        'zh-TW': ['職場反派', '上班族', '辦公室', '共鳴', 'Blind'],
        vi: ['phản diện công sở', 'nhân viên văn phòng', 'văn phòng', 'đồng cảm', 'Blind'],
        id: ['penjahat kantor', 'pekerja kantor', 'kantor', 'relatable', 'Blind'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-balance-99-ultimate') {
    test = {
      slug: 'phase3-balance-99-ultimate',
      title: {
        ko: "세상 까다로운 '밸런스' 99",
        en: "The World's Pickiest Balance 99",
        ja: "世界一むずかしい『バランス』99",
        'zh-CN': "世上最挑剔的『平衡』99",
        'zh-TW': "世上最挑剔的『平衡』99",
        vi: "Balance 99 khó nhằn nhất",
        id: "Balance 99 paling cerewet di dunia",
      },
      description: {
        ko: '99개 극한 밸런스 질문으로 선택 성향을 분석하고 친구와 1:1 대결할 수 있습니다.',
        en: 'Analyze your choice style with 99 extreme would-you-rather questions—and duel a friend 1:1.',
        ja: '99個の極限バランス質問で選択傾向を分析し、友達と1:1対決できます。',
        'zh-CN': '用99道极限二选一分析你的选择倾向，还能和朋友1:1对决。',
        'zh-TW': '用99道極限二選一分析你的選擇傾向，還能和朋友1:1對決。',
        vi: 'Phân tích xu hướng lựa chọn với 99 câu hỏi cân bằng cực đoan—và đấu 1:1 với bạn.',
        id: 'Analisis gaya pilihanmu dengan 99 pertanyaan would-you-rather ekstrem—dan duel 1:1 dengan teman.',
      },
      thumbnail: 'p3_game_balance_99_ultimate.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['밸런스게임', '99', '극한선택', '친구대결', '공감'],
        en: ['would you rather', '99', 'hard choices', 'friend duel', 'compatibility'],
        ja: ['バランスゲーム', '99', '極限選択', '友達対決', '相性'],
        'zh-CN': ['二选一', '99', '极限选择', '朋友对决', '默契'],
        'zh-TW': ['二選一', '99', '極限選擇', '朋友對決', '默契'],
        vi: ['would you rather', '99', 'lựa chọn khó', 'đấu bạn', 'tương hợp'],
        id: ['would you rather', '99', 'pilihan sulit', 'duel teman', 'kecocokan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-daily-mind-weather-report') {
    test = {
      slug: 'phase3-daily-mind-weather-report',
      title: {
        ko: "오늘 나의 '마음 날씨' 리포트",
        en: "Today's Mind Weather Report",
        ja: "今日の『心天気』レポート",
        'zh-CN': "今天的『心天气』报告",
        'zh-TW': "今天的『心天氣』報告",
        vi: "Báo cáo thời tiết lòng hôm nay",
        id: "Laporan Cuaca Hati Hari Ini",
      },
      description: {
        ko: '6가지 이미지를 직관적으로 선택하면 오늘 나의 마음 날씨 리포트가 완성됩니다.',
        en: 'Pick 6 images by gut feeling and get your mind-weather report for today.',
        ja: '6枚の画像を直感で選ぶと、今日の心天気レポートが完成します。',
        'zh-CN': '凭直觉选择6张图，即可完成今天的心天气报告。',
        'zh-TW': '憑直覺選擇6張圖，即可完成今天的心天氣報告。',
        vi: 'Chọn 6 hình theo trực giác để hoàn thành báo cáo thời tiết lòng hôm nay.',
        id: 'Pilih 6 gambar secara intuisi untuk menyelesaikan laporan cuaca hati hari ini.',
      },
      thumbnail: 'p3_daily_mind_weather_report.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['마음날씨', '감정체크', '오늘기분', '데일리', '멘탈케어'],
        en: ['mind weather', 'mood check', 'daily mood', 'daily', 'mental care'],
        ja: ['心天気', '感情チェック', '今日の気分', 'デイリー', 'メンタルケア'],
        'zh-CN': ['心天气', '情绪打卡', '今日心情', '每日', '心理关怀'],
        'zh-TW': ['心天氣', '情緒打卡', '今日心情', '每日', '心理關懷'],
        vi: ['thời tiết lòng', 'check cảm xúc', 'tâm trạng hôm nay', 'hàng ngày', 'chăm sóc tinh thần'],
        id: ['cuaca hati', 'cek emosi', 'mood hari ini', 'harian', 'perawatan mental'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-ai-future-10years') {
    test = {
      slug: 'phase3-ai-future-10years',
      title: {
        ko: "AI가 그린 나의 '10년 후'",
        en: 'AI Paints My Life in 10 Years',
        ja: 'AIが描く私の『10年後』',
        'zh-CN': 'AI描绘我的『十年后』',
        'zh-TW': 'AI描繪我的『十年後』',
        vi: 'AI vẽ cuộc sống 10 năm sau của tôi',
        id: 'AI Menggambar Hidupku 10 Tahun Lagi',
      },
      description: {
        ko: '12가지 질문으로 AI가 그려주는 10년 후 나의 하루와 라이프스타일을 확인합니다.',
        en: 'Answer 12 questions and see the day and lifestyle AI paints for you in 10 years.',
        ja: '12の質問で、AIが描く10年後の一日とライフスタイルを確認します。',
        'zh-CN': '通过12个问题，看看AI为你描绘的十年后的一天与生活方式。',
        'zh-TW': '透過12個問題，看看AI為你描繪的十年後的一天與生活方式。',
        vi: 'Trả lời 12 câu hỏi để xem một ngày và lối sống sau 10 năm mà AI vẽ cho bạn.',
        id: 'Jawab 12 pertanyaan dan lihat hari serta gaya hidup 10 tahun lagi yang digambar AI untukmu.',
      },
      thumbnail: 'p3_test_ai_future_10years.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['10년후', '미래', '라이프스타일', 'AI분석', '개인화'],
        en: ['10 years later', 'future', 'lifestyle', 'AI analysis', 'personalized'],
        ja: ['10年後', '未来', 'ライフスタイル', 'AI分析', 'パーソナライズ'],
        'zh-CN': ['十年后', '未来', '生活方式', 'AI分析', '个性化'],
        'zh-TW': ['十年後', '未來', '生活方式', 'AI分析', '個人化'],
        vi: ['10 năm sau', 'tương lai', 'lối sống', 'phân tích AI', 'cá nhân hóa'],
        id: ['10 tahun lagi', 'masa depan', 'gaya hidup', 'analisis AI', 'personal'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-fall-in-love-speed') {
    test = {
      slug: 'phase3-fall-in-love-speed',
      title: {
        ko: "나의 '금사빠' 속도 측정",
        en: 'Measure My Fall-in-Love Speed',
        ja: '私の『一目惚れ』スピード測定',
        'zh-CN': '测测我的『秒速心动』',
        'zh-TW': '測測我的『秒速心動』',
        vi: "Đo tốc độ 'yêu nhanh' của tôi",
        id: "Ukur Kecepatan 'Jatuh Cinta'-ku",
      },
      description: {
        ko: '12가지 상황극으로 사랑에 빠지는 속도를 측정합니다.',
        en: 'Measure how fast you fall in love with 12 real-life scenarios.',
        ja: '12のシチュエーションで恋に落ちるスピードを測定します。',
        'zh-CN': '通过12个情景测量你坠入爱河的速度。',
        'zh-TW': '透過12個情景測量你墜入愛河的速度。',
        vi: 'Đo tốc độ yêu qua 12 tình huống thực tế.',
        id: 'Ukur seberapa cepat kamu jatuh cinta lewat 12 skenario nyata.',
      },
      thumbnail: 'p3_test_fall_in_love_speed.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['금사빠', '설렘', '연애', '첫눈에반함', '폴인러브'],
        en: ['fall in love', 'crush', 'dating', 'love at first sight', 'romance'],
        ja: ['一目惚れ', 'ときめき', '恋愛', '一目ぼれ', 'フォーリンラブ'],
        'zh-CN': ['秒速心动', '心动', '恋爱', '一见钟情', '坠入爱河'],
        'zh-TW': ['秒速心動', '心動', '戀愛', '一見鍾情', '墜入愛河'],
        vi: ['yêu nhanh', 'rung động', 'hẹn hò', 'yêu từ cái nhìn đầu', 'tình yêu'],
        id: ['jatuh cinta', 'deg-degan', 'pacaran', 'cinta pandang pertama', 'romance'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-love-obsession-thermometer') {
    test = {
      slug: 'phase3-love-obsession-thermometer',
      title: {
        ko: "나의 '연애 집착' 온도계",
        en: 'My Dating-Obsession Thermometer',
        ja: '私の『恋愛執着』温度計',
        'zh-CN': '我的『恋爱执着』温度计',
        'zh-TW': '我的『戀愛執著』溫度計',
        vi: "Nhiệt kế 'ám ảnh tình cảm' của tôi",
        id: "Termometer 'Obsesi Cinta'-ku",
      },
      description: {
        ko: '12가지 질문으로 연애 집착 온도와 구속 지수를 측정합니다.',
        en: 'Measure your dating-obsession temperature and control index with 12 questions.',
        ja: '12の質問で恋愛執着温度と束縛指数を測定します。',
        'zh-CN': '通过12个问题测量恋爱执着温度与束缚指数。',
        'zh-TW': '透過12個問題測量戀愛執著溫度與束縛指數。',
        vi: 'Đo nhiệt độ ám ảnh tình cảm và chỉ số ràng buộc qua 12 câu hỏi.',
        id: 'Ukur suhu obsesi cinta dan indeks kontrol lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_love_obsession_thermometer.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애집착', '구속', '연락', '온도계', '자기점검'],
        en: ['dating obsession', 'control', 'texting', 'thermometer', 'self-check'],
        ja: ['恋愛執着', '束縛', '連絡', '温度計', '自己点検'],
        'zh-CN': ['恋爱执着', '束缚', '联系', '温度计', '自我检视'],
        'zh-TW': ['戀愛執著', '束縛', '聯繫', '溫度計', '自我檢視'],
        vi: ['ám ảnh tình cảm', 'ràng buộc', 'liên lạc', 'nhiệt kế', 'tự kiểm'],
        id: ['obsesi cinta', 'kontrol', 'chat', 'termometer', 'cek diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-multitasking-ability') {
    test = {
      slug: 'phase3-multitasking-ability',
      title: {
        ko: "나의 '멀티태스킹' 능력치",
        en: 'My Multitasking Ability Score',
        ja: '私の『マルチタスク』能力値',
        'zh-CN': '我的『多任务』能力值',
        'zh-TW': '我的『多任務』能力值',
        vi: 'Chỉ số khả năng đa nhiệm của tôi',
        id: 'Skor Kemampuan Multitasking Saya',
      },
      description: {
        ko: '5라운드 실시간 수행으로 진짜 멀티태스킹 능력치를 측정합니다.',
        en: 'Measure your real multitasking ability across 5 live performance rounds.',
        ja: '5ラウンドのリアルタイム課題で本物のマルチタスク能力を測定します。',
        'zh-CN': '通过5轮实时任务测量你的真实多任务能力。',
        'zh-TW': '透過5輪即時任務測量你的真實多任務能力。',
        vi: 'Đo khả năng đa nhiệm thật qua 5 vòng thực hiện thời gian thực.',
        id: 'Ukur kemampuan multitasking nyata lewat 5 ronde performa langsung.',
      },
      thumbnail: 'p3_test_multitasking_ability.webp',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ['멀티태스킹', '뇌효율', '집중력', '생산성', '능력치'],
        en: ['multitasking', 'brain efficiency', 'focus', 'productivity', 'ability'],
        ja: ['マルチタスク', '脳効率', '集中力', '生産性', '能力値'],
        'zh-CN': ['多任务', '脑效率', '专注力', '生产力', '能力值'],
        'zh-TW': ['多任務', '腦效率', '專注力', '生產力', '能力值'],
        vi: ['đa nhiệm', 'hiệu suất não', 'tập trung', 'năng suất', 'khả năng'],
        id: ['multitasking', 'efisiensi otak', 'fokus', 'produktivitas', 'kemampuan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-loneliness-concentration') {
    test = {
      slug: 'phase3-loneliness-concentration',
      title: {
        ko: "나의 '외로움' 농도 테스트",
        en: 'My Loneliness Concentration Test',
        ja: "私の『孤独』濃度テスト",
        'zh-CN': "我的『孤独』浓度测试",
        'zh-TW': "我的『孤獨』濃度測試",
        vi: "Bài test nồng độ 'cô đơn' của tôi",
        id: "Tes Konsentrasi 'Kesepian' Saya",
      },
      description: {
        ko: '12가지 질문으로 지금 나의 외로움 농도와 연결 상태를 측정합니다.',
        en: 'Measure your loneliness concentration and connection state with 12 questions.',
        ja: '12の質問で今の孤独の濃度とつながりの状態を測ります。',
        'zh-CN': '通过12个问题测量你现在的孤独浓度与连接状态。',
        'zh-TW': '透過12個問題測量你現在的孤獨濃度與連結狀態。',
        vi: 'Đo nồng độ cô đơn và trạng thái kết nối hiện tại qua 12 câu hỏi.',
        id: 'Ukur konsentrasi kesepian dan status koneksi saat ini lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_loneliness_concentration.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['외로움', '고립감', '소통', '감정', '커뮤니티'],
        en: ['loneliness', 'isolation', 'connection', 'emotion', 'community'],
        ja: ['孤独', '孤立感', 'つながり', '感情', 'コミュニティ'],
        'zh-CN': ['孤独', '孤立感', '沟通', '情感', '社区'],
        'zh-TW': ['孤獨', '孤立感', '溝通', '情感', '社群'],
        vi: ['cô đơn', 'cô lập', 'kết nối', 'cảm xúc', 'cộng đồng'],
        id: ['kesepian', 'isolasi', 'koneksi', 'emosi', 'komunitas'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-self-esteem-shield-strength') {
    test = {
      slug: 'phase3-self-esteem-shield-strength',
      title: {
        ko: "나의 '자존감 방패' 강도",
        en: 'My Self-Esteem Shield Strength',
        ja: "私の『自尊心シールド』強度",
        'zh-CN': "我的『自尊盾牌』强度",
        'zh-TW': "我的『自尊盾牌』強度",
        vi: "Cường độ 'lá chắn tự trọng' của tôi",
        id: "Kekuatan 'Perisai Harga Diri' Saya",
      },
      description: {
        ko: '12가지 질문으로 외부 비난으로부터 나를 지키는 자존감 방패 강도를 측정합니다.',
        en: 'Measure your self-esteem shield strength against external criticism with 12 questions.',
        ja: '12の質問で外部の非難から自分を守る自尊心シールドの強度を測ります。',
        'zh-CN': '通过12个问题测量你抵御外部批评的自尊盾牌强度。',
        'zh-TW': '透過12個問題測量你抵禦外部批評的自尊盾牌強度。',
        vi: 'Đo cường độ lá chắn tự trọng trước lời chỉ trích bên ngoài qua 12 câu hỏi.',
        id: 'Ukur kekuatan perisai harga diri terhadap kritik eksternal lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_self_esteem_shield_strength.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['자존감', '자기긍정', '방패', '멘탈', '심리'],
        en: ['self-esteem', 'self-affirmation', 'shield', 'mental', 'psychology'],
        ja: ['自尊心', '自己肯定', 'シールド', 'メンタル', '心理'],
        'zh-CN': ['自尊', '自我肯定', '盾牌', '心态', '心理'],
        'zh-TW': ['自尊', '自我肯定', '盾牌', '心態', '心理'],
        vi: ['tự trọng', 'tự khẳng định', 'lá chắn', 'tinh thần', 'tâm lý'],
        id: ['harga diri', 'afirmasi diri', 'perisai', 'mental', 'psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-ex-lingering-feelings') {
    test = {
      slug: 'phase3-ex-lingering-feelings',
      title: {
        ko: "나의 '전여친/남친' 미련 지수",
        en: 'My Ex Lingering Feelings Index',
        ja: "私の『元恋人』未練指数",
        'zh-CN': "我的『前任』留恋指数",
        'zh-TW': "我的『前任』留戀指數",
        vi: "Chỉ số 'vương vấn' người yêu cũ của tôi",
        id: "Indeks 'Rasa Kangen' Mantan Pacarku",
      },
      description: {
        ko: '12가지 질문으로 전 연인에 대한 잔류 감정과 미련 지수를 솔직하게 측정합니다.',
        en: 'Measure lingering feelings for your ex honestly with 12 questions.',
        ja: '12の質問で元恋人への残る感情と未練指数を正直に測ります。',
        'zh-CN': '通过12个问题诚实测量对前任的残留情感与留恋指数。',
        'zh-TW': '透過12個問題誠實測量對前任的殘留情感與留戀指數。',
        vi: 'Đo cảm xúc còn sót và mức vương vấn với người yêu cũ qua 12 câu hỏi.',
        id: 'Ukur sisa perasaan dan indeks rasa kangen pada mantan lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_ex_lingering_feelings.webp',
      type: 'psychology',
      category: 'love',
      play_count: 0,
      tags: {
        ko: ['미련', '전연인', '이별', '잔류감정', '익명고민'],
        en: ['lingering feelings', 'ex', 'breakup', 'residual emotion', 'anonymous'],
        ja: ['未練', '元恋人', '別れ', '残る感情', '匿名相談'],
        'zh-CN': ['留恋', '前任', '分手', '残留情感', '匿名倾诉'],
        'zh-TW': ['留戀', '前任', '分手', '殘留情感', '匿名傾訴'],
        vi: ['vương vấn', 'người yêu cũ', 'chia tay', 'cảm xúc còn sót', 'ẩn danh'],
        id: ['kangen', 'mantan', 'putus', 'sisa emosi', 'anonim'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-flirting-style') {
    test = {
      slug: 'phase3-flirting-style',
      title: {
        ko: "나의 '플러팅' 스타일",
        en: 'My Flirting Style',
        ja: "私の『フリート』スタイル",
        'zh-CN': "我的『撩人』风格",
        'zh-TW': "我的『撩人』風格",
        vi: "Phong cách 'flirting' của tôi",
        id: "Gaya 'Flirting'-ku",
      },
      description: {
        ko: '12가지 상황극으로 나의 진짜 플러팅 스타일과 유혹 필살기를 찾아드립니다.',
        en: 'Discover your true flirting style and seduction move with 12 situational questions.',
        ja: '12のシチュエーションで本当のフリートスタイルと必殺技を見つけます。',
        'zh-CN': '通过12个情境题找到你真正的撩人风格与必杀技。',
        'zh-TW': '透過12個情境題找到你真正的撩人風格與必殺技。',
        vi: 'Tìm phong cách flirting và chiêu thức quyến rũ thật sự qua 12 tình huống.',
        id: 'Temukan gaya flirting dan jurus memikatmu lewat 12 situasi.',
      },
      thumbnail: 'p3_test_flirting_style.webp',
      type: 'psychology',
      category: 'love',
      play_count: 0,
      tags: {
        ko: ['플러팅', '유혹', '연애', '썸', '필살기'],
        en: ['flirting', 'seduction', 'dating', 'crush', 'move'],
        ja: ['フリート', '誘惑', '恋愛', '曖昧', '必殺技'],
        'zh-CN': ['撩人', '诱惑', '恋爱', '暧昧', '必杀技'],
        'zh-TW': ['撩人', '誘惑', '戀愛', '曖昧', '必殺技'],
        vi: ['flirting', 'quyến rũ', 'hẹn hò', 'crush', 'chiêu thức'],
        id: ['flirting', 'godaan', 'pacaran', 'crush', 'jurus'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-eagle-eye-ultimate') {
    test = {
      slug: 'phase3-eagle-eye-ultimate',
      title:       {
        ko: '눈썰미 끝판왕 찾기',
        en: 'Ultimate Eagle Eye Challenge',
        ja: '目利き究極チャレンジ',
        'zh-CN': '火眼金睛终极挑战',
        'zh-TW': '火眼金睛終極挑戰',
        vi: 'Thử thách Mắt Đại Bàng Tối Thượng',
        id: 'Tantangan Mata Elang Ultimate',
      },
      description:       {
        ko: '12가지 착시·숨은그림·차이 찾기로 나의 눈썰미 등급을 측정합니다. #눈썰미 #착시 #숨은그림 #퀴즈 #챌린지',
        en: 'Measure your eagle-eye grade with 12 illusions, hidden pictures, and spot-the-difference puzzles. #eagleeye #illusion #hiddenpicture #quiz #challenge',
        ja: '12種類の錯視・隠し絵・間違い探しで目利き等級を測定。#目利き #錯視 #隠し絵 #クイズ #チャレンジ',
        'zh-CN': '用12种错觉·找隐藏图·找不同测试你的眼力等级。#眼力 #错觉 #隐藏图 #测验 #挑战',
        'zh-TW': '用12種錯覺·找隱藏圖·找不同測試你的眼力等級。#眼力 #錯覺 #隱藏圖 #測驗 #挑戰',
        vi: 'Đo cấp mắt tinh với 12 ảo giác·tranh ẩn·tìm khác biệt. #mắttinh #ảoảnh #tranhẩn #quiz #thửthách',
        id: 'Ukur level mata elang lewat 12 ilusi·gambar tersembunyi·cari beda. #mataelang #ilusi #gambartersembunyi #kuis #tantangan',
      },
      thumbnail: 'p3_quiz_eagle_eye_ultimate.webp',
      type: 'psychology',
      category: 'brain',
      play_count: 0,
      tags: {
        ko: ['눈썰미', '착시', '숨은그림', '퀴즈', '챌린지'],
        en: ['eagle eye', 'illusion', 'hidden picture', 'quiz', 'challenge'],
        ja: ['目利き', '錯視', '隠し絵', 'クイズ', 'チャレンジ'],
        'zh-CN': ['眼力', '错觉', '隐藏图', '测验', '挑战'],
        'zh-TW': ['眼力', '錯覺', '隱藏圖', '測驗', '挑戰'],
        vi: ['mắt tinh', 'ảo giác', 'tranh ẩn', 'quiz', 'thử thách'],
        id: ['mata elang', 'ilusi', 'gambar tersembunyi', 'kuis', 'tantangan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-1min-reaction-speed') {
    test = {
      slug: 'phase3-1min-reaction-speed',
      title: {
        ko: "1분 '순발력' 테스트",
        en: '1-Min Reflex Test',
        ja: '1分『瞬発力』テスト',
        'zh-CN': '1分钟『反应力』测试',
        'zh-TW': '1分鐘『反應力』測試',
        vi: 'Test phản xạ 1 phút',
        id: 'Tes Refleks 1 Menit',
      },
      description: {
        ko: '60초 안에 단순·판단·복합 반응을 모두 측정합니다. 내 점수 이겼어?',
        en: 'Measure simple, judgment, and complex reactions in 60 seconds. Can you beat my score?',
        ja: '60秒で単純・判断・複合反応をすべて測定。俺のスコア超えられる？',
        'zh-CN': '60秒内测完简单、判断与复合反应。能赢我的分数吗？',
        'zh-TW': '60秒內測完簡單、判斷與複合反應。能贏我的分數嗎？',
        vi: 'Đo phản ứng đơn giản, phán đoán và phức hợp trong 60 giây. Thắng được điểm tao không?',
        id: 'Ukur reaksi sederhana, penilaian, dan kompleks dalam 60 detik. Bisa kalahkan skor aku?',
      },
      thumbnail: 'p3_test_1min_reaction_speed.webp',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ['순발력', '반응속도', '1분', '랭킹', '챌린지'],
        en: ['reflexes', 'reaction speed', '1 minute', 'ranking', 'challenge'],
        ja: ['瞬発力', '反応速度', '1分', 'ランキング', 'チャレンジ'],
        'zh-CN': ['反应力', '反应速度', '1分钟', '排行', '挑战'],
        'zh-TW': ['反應力', '反應速度', '1分鐘', '排行', '挑戰'],
        vi: ['phản xạ', 'tốc độ phản ứng', '1 phút', 'xếp hạng', 'thử thách'],
        id: ['refleks', 'kecepatan reaksi', '1 menit', 'peringkat', 'tantangan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-luck-game-test') {
    test = {
      slug: 'phase3-luck-game-test',
      title: {
        ko: "'확률' 게임 : 운빨 테스트",
        en: "'Probability' Game: Luck Test",
        ja: "'確率'ゲーム：運ゲーテスト",
        'zh-CN': "'概率'游戏：运气测试",
        'zh-TW': "'機率'遊戲：運氣測試",
        vi: "Game 'Xác Suất': Test Vận May",
        id: "Game 'Probabilitas': Tes Keberuntungan",
      },
      description: {
        ko: '10가지 확률 게임으로 오늘의 운빨을 0~100점으로 측정합니다. 내 점수 이겼어?',
        en: "Measure today's luck from 0–100 with 10 probability games. Can you beat my score?",
        ja: '10種類の確率ゲームで今日の運を0〜100点で測定。私の点数超えられる？',
        'zh-CN': '用10种概率游戏测量今天运气0~100分。能赢我的分数吗？',
        'zh-TW': '用10種機率遊戲測量今天運氣0~100分。能贏我的分數嗎？',
        vi: 'Đo vận may hôm nay 0–100 qua 10 trò xác suất. Thắng điểm tôi được không?',
        id: 'Ukur keberuntungan hari ini 0–100 lewat 10 game probabilitas. Bisa kalahkan skorku?',
      },
      thumbnail: 'p3_game_luck_test.webp',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ['운빨', '확률', '게임', '운', '챌린지'],
        en: ['luck', 'probability', 'game', 'fortune', 'challenge'],
        ja: ['運ゲー', '確率', 'ゲーム', '運', 'チャレンジ'],
        'zh-CN': ['运气', '概率', '游戏', '运势', '挑战'],
        'zh-TW': ['運氣', '機率', '遊戲', '運勢', '挑戰'],
        vi: ['vận may', 'xác suất', 'game', 'may mắn', 'thử thách'],
        id: ['keberuntungan', 'probabilitas', 'game', 'hoki', 'tantangan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-memory-limit-challenge') {
    test = {
      slug: 'phase3-memory-limit-challenge',
      title: {
        ko: "'기억력' 한계 챌린지",
        en: 'Memory Limit Challenge',
        ja: '「記憶力」限界チャレンジ',
        'zh-CN': '「记忆力」极限挑战',
        'zh-TW': '「記憶力」極限挑戰',
        vi: 'Thử thách Giới hạn Trí nhớ',
        id: 'Tantangan Batas Memori',
      },
      description: {
        ko: '12라운드 이미지 기억 챌린지로 단기 기억력을 0~12점으로 측정합니다. 내 뇌세포 아직 살아있음?',
        en: 'Measure your short-term memory from 0–12 with a 12-round image memory challenge. Are your brain cells still alive?',
        ja: '12ラウンドの画像記憶チャレンジで短期記憶力を0〜12点で測定。あなたの脳細胞はまだ生きている？',
        'zh-CN': '通过12轮图像记忆挑战，将短期记忆力测量为0~12分。你的脑细胞还活着吗？',
        'zh-TW': '透過12輪圖像記憶挑戰，將短期記憶力測量為0~12分。你的腦細胞還活著嗎？',
        vi: 'Đo trí nhớ ngắn hạn 0–12 qua 12 vòng thử thách ghi nhớ hình ảnh. Não bạn còn sống không?',
        id: 'Ukur memori jangka pendek 0–12 lewat 12 ronde tantangan ingat gambar. Sel otakmu masih hidup?',
      },
      thumbnail: 'p3_test_memory_limit_challenge.webp',
      type: 'game',
      category: 'brain',
      play_count: 0,
      tags: {
        ko: ['기억력', '챌린지', '뇌세포', '단기기억', '퀴즈'],
        en: ['memory', 'challenge', 'brain cells', 'short-term memory', 'quiz'],
        ja: ['記憶力', 'チャレンジ', '脳細胞', '短期記憶', 'クイズ'],
        'zh-CN': ['记忆力', '挑战', '脑细胞', '短期记忆', '测验'],
        'zh-TW': ['記憶力', '挑戰', '腦細胞', '短期記憶', '測驗'],
        vi: ['trí nhớ', 'thử thách', 'tế bào não', 'trí nhớ ngắn hạn', 'quiz'],
        id: ['memori', 'tantangan', 'sel otak', 'memori jangka pendek', 'kuis'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-spot-the-difference-challenge') {
    test = {
      slug: 'phase3-spot-the-difference-challenge',
      title: {
        ko: "'틀린 그림' 찾기 챌린지",
        en: 'Spot the Difference Challenge',
        ja: '間違い探しチャレンジ',
        'zh-CN': '找不同挑战',
        'zh-TW': '找不同挑戰',
        vi: 'Thử thách tìm điểm khác biệt',
        id: 'Tantangan Spot the Difference',
      },
      description: {
        ko: '6라운드 틀린그림 찾기로 관찰력을 0~20점으로 측정합니다. 좌·우 그림의 큰 차이를 터치하세요. 라운드1 60초, 매 라운드 10초씩 감소.',
        en: 'Measure observation skills across 6 spot-the-difference rounds (0–20 points). Tap major differences in left/right images. Round 1: 60s, minus 10s each round.',
        ja: '6ラウンドの間違い探しで観察力を0〜20点で測定。左右の絵の大きな違いをタップ。1ラウンド目60秒、以降10秒短縮。',
        'zh-CN': '6轮找不同测试，观察力0~20分。点击左右图中明显差异。第1轮60秒，每轮减10秒。',
        'zh-TW': '6輪找不同測試，觀察力0~20分。點擊左右圖中明顯差異。第1輪60秒，每輪減10秒。',
        vi: 'Đo khả năng quan sát qua 6 vòng tìm khác biệt (0–20 điểm). Chạm các điểm khác biệt lớn giữa ảnh trái/phải. Vòng 1: 60s, giảm 10s mỗi vòng.',
        id: 'Ukur observasi lewat 6 ronde cari beda (0–20 poin). Ketuk perbedaan besar gambar kiri/kanan. Ronde 1: 60 dtk, -10 dtk tiap ronde.',
      },
      thumbnail: 'p3_game_spot_the_difference.webp',
      type: 'game',
      category: 'brain',
      play_count: 0,
      tags: {
        ko: ['틀린그림', '찾기', '관찰력', '눈썰미', '챌린지'],
        en: ['spot the difference', 'observation', 'eagle eye', 'puzzle', 'challenge'],
        ja: ['間違い探し', '観察力', '目利き', 'パズル', 'チャレンジ'],
        'zh-CN': ['找不同', '观察力', '眼力', '益智', '挑战'],
        'zh-TW': ['找不同', '觀察力', '眼力', '益智', '挑戰'],
        vi: ['tìm khác biệt', 'quan sát', 'mắt tinh', 'giải đố', 'thử thách'],
        id: ['cari beda', 'observasi', 'mata elang', 'teka-teki', 'tantangan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-leadership-style') {
    test = {
      slug: 'phase3-leadership-style',
      title: {
        ko: "나의 '리더십' 스타일",
        en: "My Leadership Style",
        ja: '私のリーダーシップスタイル',
        'zh-CN': '我的领导风格',
        'zh-TW': '我的領導風格',
        vi: 'Phong cách lãnh đạo của tôi',
        id: 'Gaya Kepemimpinanku',
      },
      description: {
        ko: '12가지 팀 프로젝트 상황에서 나의 진짜 리더십 스타일을 찾고 자소서 소재까지 확인합니다.',
        en: 'Discover your true leadership style through 12 team project scenarios and find cover letter material.',
        ja: '12のチームプロジェクト状況から本当のリーダーシップスタイルを見つけ、自己PRの素材まで確認します。',
        'zh-CN': '通过12种团队项目情境找到你真正的领导风格，并获取自我介绍素材。',
        'zh-TW': '透過12種團隊專案情境找到你真正的領導風格，並取得自我介紹素材。',
        vi: 'Khám phá phong cách lãnh đạo thật qua 12 tình huống dự án nhóm và tìm ý tưởng cho thư xin việc.',
        id: 'Temukan gaya kepemimpinanmu yang sebenarnya lewat 12 situasi proyek tim dan dapatkan bahan surat lamaran.',
      },
      thumbnail: 'p3_test_leadership_style.webp',
      type: 'psychology',
      category: 'career',
      play_count: 0,
      tags: {
        ko: ['리더십', '팀프로젝트', '자소서', '직장인', '자기이해'],
        en: ['leadership', 'team project', 'cover letter', 'workplace', 'self-discovery'],
        ja: ['リーダーシップ', 'チームプロジェクト', '自己PR', '社会人', '自己理解'],
        'zh-CN': ['领导力', '团队项目', '自我介绍', '职场', '自我了解'],
        'zh-TW': ['領導力', '團隊專案', '自我介紹', '職場', '自我了解'],
        vi: ['lãnh đạo', 'dự án nhóm', 'thư xin việc', 'nơi làm việc', 'hiểu bản thân'],
        id: ['kepemimpinan', 'proyek tim', 'surat lamaran', 'tempat kerja', 'mengenal diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-creativity-potential') {
    test = {
      slug: 'phase3-creativity-potential',
      title: {
        ko: "나의 '창의성' 잠재력",
        en: 'My Creativity Potential',
        ja: '私の「創造性」潜在力',
        'zh-CN': '我的「创造力」潜能',
        'zh-TW': '我的「創造力」潛能',
        vi: 'Tiềm năng sáng tạo của tôi',
        id: 'Potensi Kreativitasku',
      },
      description: {
        ko: '12가지 질문으로 나의 창의적 사고 패턴을 분석하고 어떤 유형의 창의성이 가장 강하게 발현되는지 찾아드립니다.',
        en: 'Analyze your creative thinking patterns through 12 questions and discover which type of creativity shines strongest in you.',
        ja: '12の質問で創造的思考パターンを分析し、どのタイプの創造性が最も強く発現するか見つけます。',
        'zh-CN': '通过12个问题分析你的创意思维模式，找出哪种创造力在你身上最强。',
        'zh-TW': '透過12個問題分析你的創意思維模式，找出哪種創造力在你身上最強。',
        vi: 'Phân tích mô hình tư duy sáng tạo qua 12 câu hỏi và tìm loại sáng tạo nào phát huy mạnh nhất ở bạn.',
        id: 'Analisis pola berpikir kreatifmu lewat 12 pertanyaan dan temukan jenis kreativitas mana yang paling kuat pada dirimu.',
      },
      thumbnail: 'p3_test_creativity_potential.webp',
      type: 'psychology',
      category: 'career',
      play_count: 0,
      tags: {
        ko: ['창의성', '아이디어', '기획', '디자인', '문제해결'],
        en: ['creativity', 'ideas', 'planning', 'design', 'problem solving'],
        ja: ['創造性', 'アイデア', '企画', 'デザイン', '問題解決'],
        'zh-CN': ['创造力', '创意', '策划', '设计', '问题解决'],
        'zh-TW': ['創造力', '創意', '企劃', '設計', '問題解決'],
        vi: ['sáng tạo', 'ý tưởng', 'lập kế hoạch', 'thiết kế', 'giải quyết vấn đề'],
        id: ['kreativitas', 'ide', 'perencanaan', 'desain', 'pemecahan masalah'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-fandom-style') {
    test = {
      slug: 'phase3-fandom-style',
      title: {
        ko: '나의 덕질 성향 진단',
        en: 'My Fandom Style Diagnosis',
        ja: '私の推し活タイプ診断',
        'zh-CN': '我的追星倾向诊断',
        'zh-TW': '我的追星傾向診斷',
        vi: 'Chẩn đoán phong cách fan của tôi',
        id: 'Diagnosis Gaya Fandom-ku',
      },
      description: {
        ko: '12가지 질문으로 나의 진짜 덕질 성향과 가장 잘 맞는 최애 유형을 찾아드립니다.',
        en: 'Find your true fandom style and the bias type that fits you best through 12 questions.',
        ja: '12の質問で本当の推し活タイプと最も合う推しタイプを見つけます。',
        'zh-CN': '通过12个问题找到你真正的追星倾向和最匹配的本命类型。',
        'zh-TW': '透過12個問題找到你真正的追星傾向和最匹配的本命類型。',
        vi: 'Tìm phong cách fan thật và kiểu bias phù hợp nhất qua 12 câu hỏi.',
        id: 'Temukan gaya fandom sebenarnya dan tipe bias yang paling cocok lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_fandom_style.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['덕질', '팬덤', '최애', '덕후', 'K팝'],
        en: ['fandom', 'fan', 'bias', 'stan', 'K-pop'],
        ja: ['推し活', 'ファンダム', '推し', 'オタク', 'K-POP'],
        'zh-CN': ['追星', '粉丝', '本命', '铁粉', 'K-pop'],
        'zh-TW': ['追星', '粉絲', '本命', '鐵粉', 'K-pop'],
        vi: ['fan', 'fandom', 'bias', 'stan', 'K-pop'],
        id: ['fandom', 'fan', 'bias', 'stan', 'K-pop'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-webtoon-protagonist') {
    test = {
      slug: 'phase3-webtoon-protagonist',
      title: {
        ko: '나는 어떤 웹툰 주인공?',
        en: 'What Webtoon Protagonist Am I?',
        ja: '私はどんなウェブトゥーン主人公?',
        'zh-CN': '我是哪种网漫主角?',
        'zh-TW': '我是哪種網漫主角?',
        vi: 'Tôi là nhân vật chính webtoon kiểu nào?',
        id: 'Aku Protagonis Webtoon Tipe Apa?',
      },
      description: {
        ko: '12가지 질문으로 내가 웹툰 속 주인공이 된다면 어떤 유형인지 분석하고 추천 웹툰 장르를 알려드립니다.',
        en: 'Analyze what type of webtoon protagonist you would be through 12 questions and get recommended genres.',
        ja: '12の質問でウェブトゥーンの主人公タイプを分析し、おすすめジャンルをお伝えします。',
        'zh-CN': '通过12个问题分析你成为网漫主角的类型，并推荐适合你的网漫类型。',
        'zh-TW': '透過12個問題分析你成為網漫主角的類型，並推薦適合你的網漫類型。',
        vi: 'Phân tích bạn sẽ là kiểu nhân vật chính webtoon nào qua 12 câu hỏi và gợi ý thể loại phù hợp.',
        id: 'Analisis tipe protagonis webtoon-mu lewat 12 pertanyaan dan dapatkan rekomendasi genre.',
      },
      thumbnail: 'p3_test_webtoon_protagonist.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['웹툰', '주인공', '먼치킨', '로맨스', '웹툰추천'],
        en: ['webtoon', 'protagonist', 'op mc', 'romance', 'webtoon rec'],
        ja: ['ウェブトゥーン', '主人公', '最強', 'ロマンス', 'おすすめ'],
        'zh-CN': ['网漫', '主角', '龙傲天', '浪漫', '网漫推荐'],
        'zh-TW': ['網漫', '主角', '龍傲天', '浪漫', '網漫推薦'],
        vi: ['webtoon', 'nhân vật chính', 'overpowered', 'lãng mạn', 'gợi ý webtoon'],
        id: ['webtoon', 'protagonis', 'overpowered', 'romance', 'rekomendasi webtoon'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-alone-time-type') {
    test = {
      slug: 'phase3-alone-time-type',
      title: {
        ko: "나의 '찐 혼자 시간' 유형",
        en: "My True Solo Time Type",
        ja: "私の「本当の一人時間」タイプ",
        'zh-CN': "我的「真·独处时间」类型",
        'zh-TW': "我的「真·獨處時間」類型",
        vi: "Kiểu thời gian một mình thật của tôi",
        id: "Tipe Waktu Sendiri Asli-ku",
      },
      description: {
        ko: '12가지 질문으로 아무도 없을 때의 진짜 나, 진짜 충전 방식을 분석합니다.',
        en: 'Analyze your true self and real recharge style when no one is around through 12 questions.',
        ja: '12の質問で、誰もいないときの本当の自分と本当の充電方法を分析します。',
        'zh-CN': '通过12个问题分析无人时的真实自我与真正的充电方式。',
        'zh-TW': '透過12個問題分析無人時的真實自我與真正的充電方式。',
        vi: 'Phân tích con người thật và cách nạp năng lượng thật khi không ai ở bên qua 12 câu hỏi.',
        id: 'Analisis diri asli dan cara isi ulang energi saat sendiri lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_alone_time_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['혼자시간', '인싸아웃사', '내향', 'MZ일상', '자기충전'],
        en: ['solo time', 'introvert extrovert', 'introvert', 'daily life', 'self recharge'],
        ja: ['一人時間', 'インキャアウトキャ', '内向', '日常', '充電'],
        'zh-CN': ['独处时间', '内向外向', '内向', '日常', '自我充电'],
        'zh-TW': ['獨處時間', '內向外向', '內向', '日常', '自我充電'],
        vi: ['thời gian một mình', 'hướng nội ngoại', 'hướng nội', 'đời sống', 'nạp năng lượng'],
        id: ['waktu sendiri', 'introvert ekstrovert', 'introvert', 'keseharian', 'isi ulang energi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-late-night-type') {
    test = {
      slug: 'phase3-late-night-type',
      title: {
        ko: '나의 새벽 감성 유형',
        en: 'My Late-Night Vibe Type',
        ja: '私の夜明け前センシタイプ',
        'zh-CN': '我的凌晨感性类型',
        'zh-TW': '我的凌晨感性類型',
        vi: 'Kiểu cảm xúc đêm khuya của tôi',
        id: 'Tipe Vibe Tengah Malam-ku',
      },
      description: {
        ko: '12가지 질문으로 나의 새벽 감성 유형과 그 안에 담긴 진짜 내면 에너지를 찾아드립니다.',
        en: 'Find your late-night vibe type and the true inner energy within it through 12 questions.',
        ja: '12の質問で、あなたの夜明け前センシタイプとその中にある本当の内面エネルギーを見つけます。',
        'zh-CN': '通过12个问题，找出你的凌晨感性类型及其中的真实内在能量。',
        'zh-TW': '透過12個問題，找出你的凌晨感性類型及其中的真實內在能量。',
        vi: 'Tìm kiểu cảm xúc đêm khuya và năng lượng nội tâm thật sự qua 12 câu hỏi.',
        id: 'Temukan tipe vibe tengah malammu dan energi batin sejati di dalamnya lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_late_night_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['새벽감성', '야행성', '심야감성', '혼자시간', '새벽루틴'],
        en: ['late night vibe', 'night owl', 'midnight mood', 'solo time', 'dawn routine'],
        ja: ['夜明け前センシ', '夜型', '深夜の感性', '一人時間', '夜更かしルーティン'],
        'zh-CN': ['凌晨感性', '夜猫子', '深夜情绪', '独处时间', '凌晨routine'],
        'zh-TW': ['凌晨感性', '夜貓子', '深夜情緒', '獨處時間', '凌晨routine'],
        vi: ['cảm xúc đêm khuya', 'cú đêm', 'tâm trạng đêm', 'thời gian một mình', 'routine đêm khuya'],
        id: ['vibe tengah malam', 'night owl', 'mood midnight', 'waktu sendiri', 'rutinitas dini hari'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-grit-index') {
    test = {
      slug: 'phase3-grit-index',
      title: {
        ko: '나의 그릿(Grit) 지수 측정',
        en: 'My Grit Index Measurement',
        ja: '私のグリット指標測定',
        'zh-CN': '我的坚毅指数测量',
        'zh-TW': '我的堅毅指數測量',
        vi: 'Chỉ số Grit của tôi',
        id: 'Pengukuran Indeks Grit-ku',
      },
      description: {
        ko: '12가지 질문으로 나의 그릿 지수와 유형을 측정합니다. 끈기와 열정의 강약, 병목까지 함께 분석해드려요.',
        en: 'Measure your Grit Index and type with 12 questions. Understand the balance between perseverance and passion — including your bottleneck.',
        ja: '12の質問でグリット指標とタイプを測定します。忍耐と情熱のバランス、そしてボトルネックまで分析します。',
        'zh-CN': '通过12个问题测量你的坚毅指数与类型。了解毅力与热情的平衡，并分析你的瓶颈。',
        'zh-TW': '透過12個問題測量你的堅毅指數與類型。了解毅力與熱情的平衡，並分析你的瓶頸。',
        vi: 'Đo chỉ số Grit và kiểu của bạn qua 12 câu hỏi. Hiểu sự cân bằng giữa bền bỉ và đam mê, kèm theo “nút thắt”.',
        id: 'Ukur Indeks Grit dan tipe kamu lewat 12 pertanyaan. Pahami keseimbangan antara ketekunan dan semangat, termasuk bottleneck.',
      },
      thumbnail: 'p3_test_grit_index.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['그릿', '끈기', '열정', '자기계발', '목표달성'],
        en: ['grit', 'perseverance', 'passion', 'self-improvement', 'goal achievement'],
        ja: ['グリット', '忍耐', '情熱', '自己成長', '目標達成'],
        'zh-CN': ['坚毅', '毅力', '热情', '自我提升', '目标达成'],
        'zh-TW': ['堅毅', '毅力', '熱情', '自我提升', '目標達成'],
        vi: ['grit', 'bền bỉ', 'đam mê', 'tự cải thiện', 'đạt mục tiêu'],
        id: ['grit', 'ketekunan', 'semangat', 'pengembangan diri', 'pencapaian tujuan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-risk-tolerance') {
    test = {
      slug: 'phase3-risk-tolerance',
      title: {
        ko: '나의 위험 감수 성향',
        en: 'My Risk Tolerance',
        ja: '私のリスク許容度',
        'zh-CN': '我的风险承受倾向',
        'zh-TW': '我的風險承受傾向',
        vi: 'Xu hướng chấp nhận rủi ro của tôi',
        id: 'Toleransi Risiko-ku',
      },
      description: {
        ko: '12가지 일상 선택 상황으로 나의 위험 감수 수준을 정밀 측정합니다. 재정·사회·신체·커리어·불확실성 5개 영역별 분석과 투자·창업 성향까지 확인하세요.',
        en: 'Measure your risk tolerance with 12 everyday scenarios. Get analysis across 5 domains plus investment and entrepreneurship insights.',
        ja: '12の日常選択シナリオでリスク許容度を精密測定。金融・社会・身体・キャリア・不確実性の5領域分析と投資・起業傾向まで確認。',
        'zh-CN': '通过12个日常选择场景精确测量风险承受水平。含财务、社会、身体、职业、不确定性5个领域分析及投资创业倾向。',
        'zh-TW': '透過12個日常選擇場景精確測量風險承受水平。含財務、社會、身體、職業、不確定性5個領域分析及投資創業傾向。',
        vi: 'Đo mức chấp nhận rủi ro qua 12 tình huống hàng ngày. Phân tích 5 lĩnh vực và xu hướng đầu tư, khởi nghiệp.',
        id: 'Ukur toleransi risiko lewat 12 skenario sehari-hari. Analisis 5 domain plus insight investasi dan kewirausahaan.',
      },
      thumbnail: 'p3_test_risk_tolerance.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['리스크', '모험성향', '투자성향', '창업', '위험감수'],
        en: ['risk', 'adventure', 'investment style', 'entrepreneurship', 'risk tolerance'],
        ja: ['リスク', '冒険性向', '投資性向', '起業', 'リスク許容'],
        'zh-CN': ['风险', '冒险倾向', '投资倾向', '创业', '风险承受'],
        'zh-TW': ['風險', '冒險傾向', '投資傾向', '創業', '風險承受'],
        vi: ['rủi ro', 'phiêu lưu', 'đầu tư', 'khởi nghiệp', 'chấp nhận rủi ro'],
        id: ['risiko', 'petualangan', 'investasi', 'wirausaha', 'toleransi risiko'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-decision-making-style') {
    test = {
      slug: 'phase3-decision-making-style',
      title: {
        ko: '나의 의사결정 스타일',
        en: 'My Decision-Making Style',
        ja: '私の意思決定スタイル',
        'zh-CN': '我的决策风格',
        'zh-TW': '我的決策風格',
        vi: 'Phong cách ra quyết định của tôi',
        id: 'Gaya Pengambilan Keputusan-ku',
      },
      description: {
        ko: '12가지 질문으로 나의 의사결정 스타일과 패턴을 분석합니다. 6개 영역별 점수와 강점·약점·개선 방향까지 확인하세요.',
        en: 'Analyze your decision-making style and patterns with 12 questions. See scores across 6 domains plus strengths, weaknesses, and improvement tips.',
        ja: '12の質問で意思決定スタイルとパターンを分析。6領域スコアと強み・弱み・改善方向まで確認。',
        'zh-CN': '通过12个问题分析你的决策风格与模式。含6个领域得分及优势、弱点与改进方向。',
        'zh-TW': '透過12個問題分析你的決策風格與模式。含6個領域得分及優勢、弱點與改進方向。',
        vi: 'Phân tích phong cách và mẫu ra quyết định qua 12 câu hỏi. Xem điểm 6 lĩnh vực cùng điểm mạnh, điểm yếu và hướng cải thiện.',
        id: 'Analisis gaya dan pola pengambilan keputusan lewat 12 pertanyaan. Lihat skor 6 domain plus kekuatan, kelemahan, dan tips perbaikan.',
      },
      thumbnail: 'p3_test_decision_making_style.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['의사결정', '결정패턴', '사고유형', 'MBTI', '자기이해'],
        en: ['decision-making', 'decision pattern', 'thinking type', 'MBTI', 'self-understanding'],
        ja: ['意思決定', '決定パターン', '思考タイプ', 'MBTI', '自己理解'],
        'zh-CN': ['决策', '决策模式', '思维类型', 'MBTI', '自我理解'],
        'zh-TW': ['決策', '決策模式', '思維類型', 'MBTI', '自我理解'],
        vi: ['ra quyết định', 'mẫu quyết định', 'kiểu tư duy', 'MBTI', 'hiểu bản thân'],
        id: ['pengambilan keputusan', 'pola keputusan', 'tipe berpikir', 'MBTI', 'memahami diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-competitive-dna') {
    test = {
      slug: 'phase3-competitive-dna',
      title: {
        ko: "나의 '경쟁심' DNA 분석",
        en: 'My Competitive DNA Analysis',
        ja: "私の'競争心'DNA分析",
        'zh-CN': "我的'竞争心'DNA分析",
        'zh-TW': "我的'競爭心'DNA分析",
        vi: 'Phân tích DNA Tinh thần cạnh tranh của tôi',
        id: 'Analisis DNA Daya Saing-ku',
      },
      description: {
        ko: '12가지 질문으로 경쟁 상황에서 나의 진짜 반응과 동기 유형을 분석합니다. 6개 영역별 점수와 강점·주의점·적합 환경까지 확인하세요.',
        en: 'Analyze your real reactions and motivation in competitive situations with 12 questions. See scores across 6 domains plus strengths, cautions, and best-fit environments.',
        ja: '12の質問で競争場面での本当の反応と動機タイプを分析。6領域スコアと強み・注意点・適合環境まで確認。',
        'zh-CN': '通过12个问题分析竞争情境中的真实反应与动机类型。含6个领域得分及优势、注意点与适合环境。',
        'zh-TW': '透過12個問題分析競爭情境中的真實反應與動機類型。含6個領域得分及優勢、注意點與適合環境。',
        vi: 'Phân tích phản ứng và động lực thật trong cạnh tranh qua 12 câu hỏi. Xem điểm 6 lĩnh vực cùng điểm mạnh, lưu ý và môi trường phù hợp.',
        id: 'Analisis reaksi dan motivasi nyata dalam kompetisi lewat 12 pertanyaan. Lihat skor 6 domain plus kekuatan, peringatan, dan lingkungan cocok.',
      },
      thumbnail: 'p3_test_competitive_dna.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['경쟁심', '승부욕', '게임', '스포츠', '자기분석'],
        en: ['competitiveness', 'winning drive', 'games', 'sports', 'self-analysis'],
        ja: ['競争心', '勝負欲', 'ゲーム', 'スポーツ', '自己分析'],
        'zh-CN': ['竞争心', '胜负欲', '游戏', '体育', '自我分析'],
        'zh-TW': ['競爭心', '勝負欲', '遊戲', '體育', '自我分析'],
        vi: ['tinh thần cạnh tranh', 'thắng thua', 'game', 'thể thao', 'tự phân tích'],
        id: ['daya saing', 'dorong menang', 'game', 'olahraga', 'analisis diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-time-perspective') {
    test = {
      slug: 'phase3-time-perspective',
      title: {
        ko: '나의 과거-현재-미래 시간관',
        en: 'My Past-Present-Future Time Perspective',
        ja: '私の過去・現在・未来の時間観',
        'zh-CN': '我的过去-现在-未来时间观',
        'zh-TW': '我的過去-現在-未來時間觀',
        vi: 'Quan niệm thời gian Quá khứ-Hiện tại-Tương lai của tôi',
        id: 'Perspektif Waktu Masa Lalu-Kini-Masa Depanku',
      },
      description: {
        ko: '12가지 질문으로 나는 과거·현재·미래 중 어느 시간대에 주로 머무는지 분석합니다. 6개 영역별 점수와 행복 전략까지 확인하세요.',
        en: 'Analyze which time zone you mainly live in—past, present, or future—with 12 questions. See scores across 6 domains plus happiness strategies.',
        ja: '12の質問で過去・現在・未来のどの時間帯に主にいるか分析。6領域スコアと幸福戦略まで確認。',
        'zh-CN': '通过12个问题分析你主要活在过去、现在还是未来。含6个领域得分与幸福策略。',
        'zh-TW': '透過12個問題分析你主要活在過去、現在還是未來。含6個領域得分與幸福策略。',
        vi: 'Phân tích bạn chủ yếu sống ở quá khứ, hiện tại hay tương lai qua 12 câu hỏi. Xem điểm 6 lĩnh vực và chiến lược hạnh phúc.',
        id: 'Analisis zona waktu utama—masa lalu, kini, atau depan—lewat 12 pertanyaan. Lihat skor 6 domain dan strategi kebahagiaan.',
      },
      thumbnail: 'p3_test_time_perspective.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['시간관', '심리학', '과거현재미래', '짐바르도', '자기이해'],
        en: ['time perspective', 'psychology', 'past present future', 'Zimbardo', 'self-understanding'],
        ja: ['時間観', '心理学', '過去現在未来', 'ジンバルド', '自己理解'],
        'zh-CN': ['时间观', '心理学', '过去现在未来', '津巴多', '自我理解'],
        'zh-TW': ['時間觀', '心理學', '過去現在未來', '津巴多', '自我理解'],
        vi: ['quan niệm thời gian', 'tâm lý', 'quá khứ hiện tại tương lai', 'Zimbardo', 'hiểu bản thân'],
        id: ['perspektif waktu', 'psikologi', 'masa lalu kini depan', 'Zimbardo', 'memahami diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-optimism-index') {
    test = {
      slug: 'phase3-optimism-index',
      title: {
        ko: '나의 낙관주의 지수',
        en: 'My Optimism Index',
        ja: '私の楽観主義指数',
        'zh-CN': '我的乐观主义指数',
        'zh-TW': '我的樂觀主義指數',
        vi: 'Chỉ số Lạc quan của tôi',
        id: 'Indeks Optimisme-ku',
      },
      description: {
        ko: '12가지 질문으로 셀리그만 3P(영구성·보편성·개인화) 기반 낙관주의 지수와 회복 패턴을 측정합니다.',
        en: "Measure your optimism index and recovery pattern with 12 questions based on Seligman's 3P (Permanence, Pervasiveness, Personalization).",
        ja: '12の質問でセリグマン3P（永続性・普遍性・個人化）に基づく楽観主義指数と回復パターンを測定。',
        'zh-CN': '通过12个问题，基于塞利格曼3P（永久性、普遍性、个人化）测量乐观指数与恢复模式。',
        'zh-TW': '透過12個問題，基於塞利格曼3P（永久性、普遍性、個人化）測量樂觀指數與恢復模式。',
        vi: 'Đo chỉ số lạc quan và mẫu phục hồi qua 12 câu hỏi dựa trên 3P của Seligman (Vĩnh viễn, Lan rộng, Cá nhân hóa).',
        id: 'Ukur indeks optimisme dan pola pemulihan lewat 12 pertanyaan berbasis 3P Seligman (Permanen, Meresap, Personalisasi).',
      },
      thumbnail: 'p3_test_optimism_index.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['낙관주의', '긍정', '회복탄력성', '심리', '셀리그만'],
        en: ['optimism', 'positivity', 'resilience', 'psychology', 'Seligman'],
        ja: ['楽観主義', 'ポジティブ', '回復力', '心理学', 'セリグマン'],
        'zh-CN': ['乐观主义', '积极', '复原力', '心理学', '塞利格曼'],
        'zh-TW': ['樂觀主義', '積極', '復原力', '心理學', '塞利格曼'],
        vi: ['lạc quan', 'tích cực', 'phục hồi', 'tâm lý', 'Seligman'],
        id: ['optimisme', 'positif', 'resiliensi', 'psikologi', 'Seligman'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-approval-seeking-level') {
    test = {
      slug: 'phase3-approval-seeking-level',
      title: {
        ko: '나의 인정 욕구 농도',
        en: 'My Approval-Seeking Level',
        ja: '私の承認欲求の濃度',
        'zh-CN': '我的认可需求浓度',
        'zh-TW': '我的認可需求濃度',
        vi: 'Mức độ Khao khát được Công nhận của tôi',
        id: 'Tingkat Keinginan Pengakuan-ku',
      },
      description: {
        ko: '12가지 질문으로 지금 내 인정 욕구가 어느 농도에 있는지 솔직하게 측정합니다. 6개 영역별 점수와 유형별 건강한 방향 제시까지 확인하세요.',
        en: 'Measure your approval-seeking level honestly with 12 questions. See scores across 6 domains plus type-specific guidance.',
        ja: '12の質問で今の承認欲求の濃度を正直に測定。6領域のスコアとタイプ別の健康的な方向性まで確認。',
        'zh-CN': '通过12个问题诚实测量你现在的认可需求浓度。含6个领域得分与类型健康方向建议。',
        'zh-TW': '透過12個問題誠實測量你現在的認可需求濃度。含6個領域得分與類型健康方向建議。',
        vi: 'Đo mức khao khát được công nhận qua 12 câu hỏi. Xem điểm 6 lĩnh vực và hướng dẫn theo loại.',
        id: 'Ukur tingkat keinginan pengakuan lewat 12 pertanyaan. Lihat skor 6 domain dan panduan sehat per tipe.',
      },
      thumbnail: 'p3_test_approval_seeking_level.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['인정욕구', '자존감', '타인시선', '심리', '공감'],
        en: ['approval seeking', 'self-esteem', 'others gaze', 'psychology', 'empathy'],
        ja: ['承認欲求', '自尊心', '他人の視線', '心理', '共感'],
        'zh-CN': ['认可需求', '自尊', '他人目光', '心理', '共情'],
        'zh-TW': ['認可需求', '自尊', '他人目光', '心理', '共情'],
        vi: ['khao khát công nhận', 'lòng tự trọng', 'ánh mắt người khác', 'tâm lý', 'đồng cảm'],
        id: ['keinginan pengakuan', 'harga diri', 'pandangan orang lain', 'psikologi', 'empati'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-eq-self-diagnosis') {
    test = {
      slug: 'phase3-eq-self-diagnosis',
      title: {
        ko: '나의 정서 지능(EQ) 자가진단',
        en: 'My EQ Self-Diagnosis',
        ja: '私のEQ自己診断',
        'zh-CN': '我的情商(EQ)自测',
        'zh-TW': '我的情商(EQ)自測',
        vi: 'Tự chẩn đoán EQ của tôi',
        id: 'Diagnosis Diri EQ-ku',
      },
      description: {
        ko: '12가지 질문으로 나의 EQ 수준과 5가지 요소(자기인식·자기조절·내적 동기·공감·사회성)별 강점과 약점을 분석합니다.',
        en: 'Analyze your EQ level and strengths/weaknesses across 5 elements with 12 questions.',
        ja: '12の質問でEQ水準と5要素別の強み・弱みを分析します。',
        'zh-CN': '通过12个问题分析EQ水平及5要素强弱。',
        'zh-TW': '透過12個問題分析EQ水準及5要素強弱。',
        vi: 'Phân tích mức EQ và 5 yếu tố qua 12 câu hỏi.',
        id: 'Analisis level EQ dan 5 elemen lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_eq_self_diagnosis.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['EQ', '정서지능', '감성지능', '자기인식', '공감능력'],
        en: ['EQ', 'emotional intelligence', 'self-awareness', 'empathy', 'psychology'],
        ja: ['EQ', '感情知能', '自己認識', '共感', '心理'],
        'zh-CN': ['EQ', '情商', '自我认知', '共情', '心理'],
        'zh-TW': ['EQ', '情商', '自我認知', '共感', '心理'],
        vi: ['EQ', 'trí tuệ cảm xúc', 'tự nhận thức', 'đồng cảm', 'tâm lý'],
        id: ['EQ', 'kecerdasan emosional', 'kesadaran diri', 'empati', 'psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-curiosity-type') {
    test = {
      slug: 'phase3-curiosity-type',
      title: {
        ko: '나의 호기심 유형 진단',
        en: 'My Curiosity Type Test',
        ja: '私の好奇心タイプ診断',
        'zh-CN': '我的好奇心类型诊断',
        'zh-TW': '我的好奇心類型診斷',
        vi: 'Chẩn đoán Kiểu Tò mò của tôi',
        id: 'Diagnosis Tipe Rasa Ingin Tahu-ku',
      },
      description: {
        ko: '12가지 질문으로 나는 무엇에 끌리고 어떻게 탐구하는지 분석합니다. 6가지 호기심 유형과 탐구 방식·학습 패턴·최적 콘텐츠를 알려드립니다.',
        en: 'Analyze what draws you in and how you explore with 12 questions. Discover your curiosity type, learning pattern, and best content.',
        ja: '12の質問で何に惹かれどう探究するか分析します。',
        'zh-CN': '通过12个问题分析你被什么吸引以及如何探索。',
        'zh-TW': '透過12個問題分析你被什麼吸引以及如何探索。',
        vi: 'Phân tích điều gì thu hút bạn và cách bạn khám phá qua 12 câu hỏi.',
        id: 'Analisis apa yang menarikmu dan cara mengeksplorasi lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_curiosity_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['호기심', '지적성향', '학습유형', '탐구', '자기이해'],
        en: ['curiosity', 'learning style', 'exploration', 'self-understanding', 'psychology'],
        ja: ['好奇心', '学習タイプ', '探究', '自己理解', '心理'],
        'zh-CN': ['好奇心', '学习类型', '探索', '自我理解', '心理'],
        'zh-TW': ['好奇心', '學習類型', '探索', '自我理解', '心理'],
        vi: ['tò mò', 'kiểu học', 'khám phá', 'hiểu bản thân', 'tâm lý'],
        id: ['rasa ingin tahu', 'gaya belajar', 'eksplorasi', 'pengenalan diri', 'psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-relationship-energy') {
    test = {
      slug: 'phase3-relationship-energy',
      title: {
        ko: '내가 사람관계에 쏟는 에너지',
        en: 'Energy I Invest in Relationships',
        ja: '人間関係に注ぐエネルギー',
        'zh-CN': '我在人际关系中投入的能量',
        'zh-TW': '我在人際關係中投入的能量',
        vi: 'Năng lượng tôi dành cho các mối quan hệ',
        id: 'Energi yang Kucurahkan untuk Hubungan',
      },
      description: {
        ko: '12가지 질문으로 관계에서 에너지를 어떻게 쓰고 충전하는지 분석합니다. 6가지 관계 에너지 유형과 영역별 소모·충전 패턴을 알려드립니다.',
        en: 'Analyze how you spend and recharge energy in relationships with 12 questions. Discover your relationship energy type and domain patterns.',
        ja: '12の質問で関係におけるエネルギーの使い方と充電パターンを分析します。',
        'zh-CN': '通过12个问题分析你在关系中如何消耗与补充能量。',
        'zh-TW': '透過12個問題分析你在關係中如何消耗與補充能量。',
        vi: 'Phân tích cách bạn tiêu hao và nạp năng lượng trong các mối quan hệ qua 12 câu hỏi.',
        id: 'Analisis cara kamu menghabiskan dan mengisi ulang energi dalam hubungan lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_relationship_energy.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['관계에너지', '인간관계', '내향외향', '충전방식', '피곤함'],
        en: ['relationship energy', 'social battery', 'introvert extrovert', 'recharge style', 'psychology'],
        ja: ['関係エネルギー', '人間関係', '内向外向', '充電方式', '心理'],
        'zh-CN': ['关系能量', '人际关系', '内向外向', '充电方式', '心理'],
        'zh-TW': ['關係能量', '人際關係', '內向外向', '充電方式', '心理'],
        vi: ['năng lượng quan hệ', 'mối quan hệ', 'hướng nội ngoại', 'cách nạp pin', 'tâm lý'],
        id: ['energi hubungan', 'relasi', 'introvert ekstrovert', 'cara isi ulang', 'psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-family-balance-game') {
    test = {
      slug: 'phase3-family-balance-game',
      title: {
        ko: '밸런스 게임 — 가족 극한편',
        en: 'Balance Game — Family Extreme',
        ja: 'バランスゲーム 家族編（極限）',
        'zh-CN': '平衡游戏 · 家庭篇（极限）',
        'zh-TW': '平衡遊戲 · 家庭篇（極限）',
        vi: 'Trò cân bằng — gia đình (cực hạn)',
        id: 'Permainan seimbang — keluarga (ekstrem)',
      },
      description: {
        ko: '12라운드 극한 2지선다로 나의 가족 관계 스타일을 분석합니다. 가족 단톡방에 공유하면 선택이 달라 반응이 터집니다.',
        en: '12 rounds of extreme A/B choices reveal your family relationship style. Share in the family chat for guaranteed reactions.',
        ja: '12ラウンドの極限2択で家族関係スタイルを分析。家族グループチャットで共有すると反応が炸裂します。',
        'zh-CN': '12轮极限二选一分析你的家庭关系风格。分享到家庭群聊，选择不同反应保证炸裂。',
        'zh-TW': '12輪極限二選一分析你的家庭關係風格。分享到家庭群聊，選擇不同反應保證炸裂。',
        vi: '12 vòng chọn cực hạn phân tích kiểu quan hệ gia đình. Chia sẻ vào nhóm chat gia đình để xem phản ứng.',
        id: '12 ronde pilihan ekstrem menganalisis gaya hubungan keluargamu. Bagikan di grup keluarga untuk reaksi garanti.',
      },
      thumbnail: 'p3_game_family_balance.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['밸런스게임', '가족', '명절', '극한선택', '가족단톡'],
        en: ['balance game', 'family', 'holiday', 'extreme choice', 'family chat'],
        ja: ['バランスゲーム', '家族', '帰省', '極限選択', '家族グループ'],
        'zh-CN': ['平衡游戏', '家庭', '节日', '极限选择', '家庭群'],
        'zh-TW': ['平衡遊戲', '家庭', '節日', '極限選擇', '家庭群'],
        vi: ['trò cân bằng', 'gia đình', 'lễ tết', 'lựa chọn cực hạn', 'nhóm chat'],
        id: ['permainan seimbang', 'keluarga', 'liburan', 'pilihan ekstrem', 'grup keluarga'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-friendship-balance-game') {
    test = {
      slug: 'phase3-friendship-balance-game',
      title: {
        ko: '밸런스 게임 — 우정 극한편',
        en: 'Balance Game — Friendship Extreme',
        ja: 'バランスゲーム 友情編（極限）',
        'zh-CN': '平衡游戏 · 友情篇（极限）',
        'zh-TW': '平衡遊戲 · 友情篇（極限）',
        vi: 'Trò cân bằng — tình bạn (cực hạn)',
        id: 'Permainan seimbang — persahabatan (ekstrem)',
      },
      description: {
        ko: '12라운드 극한 2지선다로 나의 우정 스타일을 분석합니다. 친구에게 공유하면 선택이 달라 반응이 터집니다.',
        en: '12 rounds of extreme A/B choices reveal your friendship style. Share with friends for guaranteed reactions.',
        ja: '12ラウンドの極限2択で友情スタイルを分析。友達に共有すると反応が炸裂します。',
        'zh-CN': '12轮极限二选一分析你的友情风格。分享给朋友，选择不同反应保证炸裂。',
        'zh-TW': '12輪極限二選一分析你的友情風格。分享給朋友，選擇不同反應保證炸裂。',
        vi: '12 vòng chọn cực hạn phân tích kiểu tình bạn. Chia sẻ với bạn bè để xem phản ứng.',
        id: '12 ronde pilihan ekstrem menganalisis gaya persahabatanmu. Bagikan ke teman untuk reaksi garanti.',
      },
      thumbnail: 'p3_game_friendship_balance.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['밸런스게임', '우정', '의리', '친구', '극한선택'],
        en: ['balance game', 'friendship', 'loyalty', 'friends', 'extreme choice'],
        ja: ['バランスゲーム', '友情', '義理', '友達', '極限選択'],
        'zh-CN': ['平衡游戏', '友情', '义气', '朋友', '极限选择'],
        'zh-TW': ['平衡遊戲', '友情', '義氣', '朋友', '極限選擇'],
        vi: ['trò cân bằng', 'tình bạn', 'nghĩa khí', 'bạn bè', 'lựa chọn cực hạn'],
        id: ['permainan seimbang', 'persahabatan', 'loyalitas', 'teman', 'pilihan ekstrem'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-desert-island-survival-kit') {
    test = {
      slug: 'phase3-desert-island-survival-kit',
      title: {
        ko: '나의 무인도 생존 키트 선택',
        en: 'My Desert Island Survival Kit',
        ja: '私の無人島サバイバルキット選択',
        'zh-CN': '我的无人岛生存 kit 选择',
        'zh-TW': '我的無人島生存 kit 選擇',
        vi: 'Bộ sinh tồn đảo hoang của tôi',
        id: 'Kit Bertahan Hidup Pulau Terpencil-ku',
      },
      description: {
        ko: '5가지 극한 2지선다로 나의 생존 본능 유형을 분석합니다. 친구에게 공유하면 "무인도에서 그걸 챙긴다고?!" 반응이 터집니다.',
        en: '5 extreme A/B choices reveal your survival instinct type. Share with friends for guaranteed "You\'d pack THAT on a desert island?!" reactions.',
        ja: '5つの極限2択でサバイバル本能タイプを分析。友達に共有すると「無人島でそれ持っていくの？！」の反応が炸裂。',
        'zh-CN': '5个极限二选一分析你的生存本能类型。分享给朋友，保证出现「无人岛带这个？！」的反应。',
        'zh-TW': '5個極限二選一分析你的生存本能類型。分享給朋友，保證出現「無人島帶這個？！」的反應。',
        vi: '5 lựa chọn cực hạn phân tích kiểu bản năng sinh tồn. Chia sẻ với bạn bè để xem phản ứng "Mang cái đó lên đảo hoang?!".',
        id: '5 pilihan ekstrem menganalisis tipe insting bertahan hidup. Bagikan ke teman untuk reaksi "Bawa itu ke pulau terpencil?!".',
      },
      thumbnail: 'p3_game_deserted_island_kit.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['무인도', '생존', '밸런스게임', '황당', '유머'],
        en: ['desert island', 'survival', 'balance game', 'absurd', 'humor'],
        ja: ['無人島', 'サバイバル', 'バランスゲーム', '荒唐', 'ユーモア'],
        'zh-CN': ['无人岛', '生存', '平衡游戏', '荒诞', '幽默'],
        'zh-TW': ['無人島', '生存', '平衡遊戲', '荒謬', '幽默'],
        vi: ['đảo hoang', 'sinh tồn', 'trò cân bằng', 'vô lý', 'hài hước'],
        id: ['pulau terpencil', 'bertahan hidup', 'permainan seimbang', 'absurd', 'humor'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-change-adaptability') {
    test = {
      slug: 'phase3-change-adaptability',
      title: {
        ko: '나의 변화 적응력 지수',
        en: 'My Change Adaptability Index',
        ja: '私の変化適応力指数',
        'zh-CN': '我的变化适应力指数',
        'zh-TW': '我的變化適應力指數',
        vi: 'Chỉ số Thích nghi với Thay đổi của tôi',
        id: 'Indeks Adaptasi Perubahan-ku',
      },
      description: {
        ko: '12가지 질문으로 예상치 못한 변화 앞에서 나는 어떻게 반응하는지 분석합니다. 6개 영역별 적응력 점수와 유형별 대응 팁까지 확인하세요.',
        en: 'Analyze how you react to unexpected change with 12 questions. See scores across 6 adaptability domains plus type-specific response tips.',
        ja: '12の質問で予想外の変化にどう反応するか分析。6領域の適応力スコアとタイプ別対応のヒントまで確認。',
        'zh-CN': '通过12个问题分析面对意外变化时的反应模式。含6个领域适应力得分与类型应对建议。',
        'zh-TW': '透過12個問題分析面對意外變化時的反應模式。含6個領域適應力得分與類型應對建議。',
        vi: 'Phân tích cách bạn phản ứng với thay đổi bất ngờ qua 12 câu hỏi. Xem điểm 6 lĩnh vực thích nghi và mẹo ứng phó theo loại.',
        id: 'Analisis reaksi terhadap perubahan tak terduga lewat 12 pertanyaan. Lihat skor 6 domain adaptasi dan tips respons per tipe.',
      },
      thumbnail: 'p3_test_change_adaptability.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['변화적응력', '유연성', '회복력', '자기이해', '성장'],
        en: ['change adaptability', 'flexibility', 'resilience', 'self-understanding', 'growth'],
        ja: ['変化適応力', '柔軟性', '回復力', '自己理解', '成長'],
        'zh-CN': ['变化适应力', '灵活性', '复原力', '自我理解', '成长'],
        'zh-TW': ['變化適應力', '靈活性', '復原力', '自我理解', '成長'],
        vi: ['thích nghi thay đổi', 'linh hoạt', 'phục hồi', 'hiểu bản thân', 'phát triển'],
        id: ['adaptasi perubahan', 'fleksibilitas', 'resiliensi', 'memahami diri', 'pertumbuhan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-kpop-history-master') {
    test = {
      slug: 'phase3-kpop-history-master',
      title: {
        ko: 'K-팝 역사 마스터 테스트',
        en: 'K-Pop History Master Test',
        ja: 'K-POP歴史マスターテスト',
        'zh-CN': 'K-Pop历史大师测试',
        'zh-TW': 'K-Pop歷史大師測試',
        vi: 'K-Pop History Master Test',
        id: 'K-Pop History Master Test',
      },
      description: {
        ko: '12가지 문제로 나의 K-팝 역사 지식 수준을 측정합니다. 1세대부터 4세대까지 K-팝 역사 고수 등급을 확인하세요.',
        en: 'Measure your K-Pop history knowledge with 12 questions. Check your expert grade from 1st to 4th gen.',
        ja: '12問で私のK-POP歴史知識レベルを測定します。1世代から4世代までのK-POP歴史上級者等級を確認してください。',
        'zh-CN': '通过12道题测量你的K-Pop历史知识水平。确认从1代到4代的K-Pop历史高手等级。',
        'zh-TW': '透過12道題測量你的K-Pop歷史知識水平。確認從1代到4代的K-Pop歷史高手等級。',
        vi: 'Đo mức kiến thức lịch sử K-Pop của bạn qua 12 câu hỏi. Xem cấp cao thủ từ thế hệ 1 đến 4.',
        id: 'Ukur pengetahuan sejarah K-Pop-mu lewat 12 pertanyaan. Cek grade ahli dari generasi 1 sampai 4.',
      },
      thumbnail: 'p3_quiz_kpop_history_master.webp',
      type: 'knowledge',
      category: 'challenge',
      play_count: 0,
      tags: {
        ko: ['K팝', '케이팝역사', '팬덤', '아이돌', '마스터'],
        en: ['K-Pop', 'K-Pop history', 'fandom', 'idol', 'master'],
        ja: ['K-POP', 'K-POP歴史', 'ファンダム', 'アイドル', 'マスター'],
        'zh-CN': ['K-Pop', 'K-Pop历史', '粉丝', '偶像', '大师'],
        'zh-TW': ['K-Pop', 'K-Pop歷史', '粉絲', '偶像', '大師'],
        vi: ['K-Pop', 'lịch sử K-Pop', 'fandom', 'idol', 'master'],
        id: ['K-Pop', 'sejarah K-Pop', 'fandom', 'idol', 'master'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-everyday-science-quiz') {
    test = {
      slug: 'phase3-everyday-science-quiz',
      title: {
        ko: '생활 속 과학 상식 퀴즈',
        en: 'Everyday Science Quiz',
        ja: '生活の科学常識クイズ',
        'zh-CN': '生活中的科学常识测验',
        'zh-TW': '生活中的科學常識測驗',
        vi: 'Quiz Khoa Học Thường Ngày',
        id: 'Kuis Sains Sehari-hari',
      },
      description: {
        ko: '12가지 생활 속 과학 문제로 나의 생활 과학 상식 수준을 측정합니다. 냉장고부터 하늘까지, 어? 진짜?? 소리 나오는 과학 퀴즈!',
        en: 'Measure your everyday science knowledge with 12 questions. From refrigerators to the sky—a quiz that makes you say wow!',
        ja: '12問の生活科学問題であなたの生活科学常識レベルを測定します。冷蔵庫から空まで、え？本当？と驚く科学クイズ！',
        'zh-CN': '通过12道生活科学题测量你的科学常识水平。从冰箱到天空，让你惊呼真的吗？的科学测验！',
        'zh-TW': '透過12道生活科學題測量你的科學常識水平。從冰箱到天空，讓你驚呼真的嗎？的科學測驗！',
        vi: 'Đo mức kiến thức khoa học thường ngày qua 12 câu hỏi. Từ tủ lạnh đến bầu trời—quiz khiến bạn nói wow!',
        id: 'Ukur pengetahuan sains sehari-hari lewat 12 pertanyaan. Dari kulkas sampai langit—kuis yang bikin kamu bilang wow!',
      },
      thumbnail: 'p3_quiz_everyday_science.webp',
      type: 'knowledge',
      category: 'challenge',
      play_count: 0,
      tags: {
        ko: ['생활과학', '과학상식', '퀴즈', '신기함', '이거왜그럼'],
        en: ['everyday science', 'science quiz', 'quiz', 'fun facts', 'why'],
        ja: ['生活科学', '科学常識', 'クイズ', '不思議', 'なぜ'],
        'zh-CN': ['生活科学', '科学常识', '测验', '有趣', '为什么'],
        'zh-TW': ['生活科學', '科學常識', '測驗', '有趣', '為什麼'],
        vi: ['khoa học', 'quiz', 'đố vui', 'thú vị', 'tại sao'],
        id: ['sains', 'kuis', 'quiz', 'menarik', 'mengapa'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-world-greeting-challenge') {
    test = {
      slug: 'phase3-world-greeting-challenge',
      title: {
        ko: '나라별 인사말 맞추기 챌린지',
        en: 'World Greeting Challenge',
        ja: '世界の挨拶当てチャレンジ',
        'zh-CN': '世界各国问候语挑战',
        'zh-TW': '世界各國問候語挑戰',
        vi: 'Thử thách đoán lời chào thế giới',
        id: 'Tantangan Tebak Salam Dunia',
      },
      description: {
        ko: '12가지 세계 인사말 이미지로 나라를 맞춰보세요. Bonjour부터 Talofa까지, 세계 언어 고수 등급을 확인하세요!',
        en: 'Match 12 greeting images to their countries. From Bonjour to Talofa—find your world language rank!',
        ja: '12の世界の挨拶画像で国を当てましょう。BonjourからTalofaまで、世界言語マスター等級を確認！',
        'zh-CN': '通过12道世界问候语图片猜国家。从Bonjour到Talofa，测测你的世界语言等级！',
        'zh-TW': '透過12道世界問候語圖片猜國家。從Bonjour到Talofa，測測你的世界語言等級！',
        vi: 'Đoán quốc gia qua 12 ảnh lời chào thế giới. Từ Bonjour đến Talofa—xem cấp độ ngôn ngữ của bạn!',
        id: 'Tebak negara dari 12 gambar salam dunia. Dari Bonjour ke Talofa—cek level bahasa duniamu!',
      },
      thumbnail: 'p3_quiz_world_greeting_challenge.webp',
      type: 'knowledge',
      category: 'challenge',
      play_count: 0,
      tags: {
        ko: ['세계인사말', '언어상식', '퀴즈', '다국어', '이거어느나라말'],
        en: ['world greeting', 'language quiz', 'quiz', 'multilingual', 'guess country'],
        ja: ['世界の挨拶', '言語クイズ', 'クイズ', '多言語', 'どこの国'],
        'zh-CN': ['世界问候', '语言常识', '测验', '多语言', '哪国语言'],
        'zh-TW': ['世界問候', '語言常識', '測驗', '多語言', '哪國語言'],
        vi: ['lời chào', 'ngôn ngữ', 'quiz', 'đa ngôn ngữ', 'đoán quốc gia'],
        id: ['salam dunia', 'bahasa', 'kuis', 'multibahasa', 'tebak negara'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-world-flag-master') {
    test = {
      slug: 'phase3-world-flag-master',
      title: {
        ko: '세계 국기 고수 테스트',
        en: 'World Flag Master Test',
        ja: '世界国旗マスターテスト',
        'zh-CN': '世界国旗高手测试',
        'zh-TW': '世界國旗高手測試',
        vi: 'Bài kiểm tra chuyên gia cờ thế giới',
        id: 'Tes Master Bendera Dunia',
      },
      description: {
        ko: '12개의 국기 이미지로 나라를 맞춰보세요. 일본부터 카자흐스탄까지, 세계 국기 고수 등급을 확인하세요!',
        en: 'Match 12 flag images to their countries. From Japan to Kazakhstan—find your world flag rank!',
        ja: '12の国旗画像で国を当てましょう。日本からカザフスタンまで、世界国旗マスター等級を確認！',
        'zh-CN': '通过12道国旗图片猜国家。从日本到哈萨克斯坦，测测你的世界国旗等级！',
        'zh-TW': '透過12道國旗圖片猜國家。從日本到哈薩克，測測你的世界國旗等級！',
        vi: 'Đoán quốc gia qua 12 ảnh cờ thế giới. Từ Nhật đến Kazakhstan—xem cấp độ cờ của bạn!',
        id: 'Tebak negara dari 12 gambar bendera dunia. Dari Jepang ke Kazakhstan—cek level bendera duniamu!',
      },
      thumbnail: 'p3_quiz_world_flag_master.webp',
      type: 'knowledge',
      category: 'challenge',
      play_count: 0,
      tags: {
        ko: ['세계국기', '지리상식', '퀴즈', '국기챌린지', '도전'],
        en: ['world flag', 'geography quiz', 'quiz', 'flag challenge', 'challenge'],
        ja: ['世界国旗', '地理クイズ', 'クイズ', '国旗チャレンジ', '挑戦'],
        'zh-CN': ['世界国旗', '地理常识', '测验', '国旗挑战', '挑战'],
        'zh-TW': ['世界國旗', '地理常識', '測驗', '國旗挑戰', '挑戰'],
        vi: ['cờ thế giới', 'địa lý', 'quiz', 'thử thách cờ', 'thử thách'],
        id: ['bendera dunia', 'geografi', 'kuis', 'tantangan bendera', 'tantangan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-sudden-poor-defense-index') {
    test = {
      slug: 'phase3-sudden-poor-defense-index',
      title: {
        ko: "나의 '벼락거지' 방어 지수",
        en: "My 'Sudden Poverty' Defense Index",
        ja: '私の「いきなり貧乏」防御指数',
        'zh-CN': '我的「霹雳穷人」防御指数',
        'zh-TW': '我的「霹靂窮人」防禦指數',
        vi: "Chỉ số phòng vệ 'Nghèo Bất Ngờ' của tôi",
        id: "Indeks Pertahanan 'Miskin Mendadak'-ku",
      },
      description: {
        ko: '12가지 질문으로 나의 경제 문해력과 자산 안정성을 진단하고 벼락거지 방어 지수를 측정합니다.',
        en: 'Diagnose your financial literacy and asset stability with 12 questions and measure your Sudden Poverty Defense Index.',
        ja: '12個の質問で自分の経済リテラシーと資産の安定性を診断し、いきなり貧乏防御指数を測定します。',
        'zh-CN': '通过12个问题诊断你的金融素养和资产稳定性，测测你的霹雳穷人防御指数。',
        'zh-TW': '透過12個問題診斷你的金融素養和資產穩定性，測測你的霹靂窮人防禦指數。',
        vi: 'Chẩn đoán khả năng hiểu biết tài chính và độ ổn định tài sản của bạn qua 12 câu hỏi, đo chỉ số phòng vệ trước tình trạng nghèo bất ngờ.',
        id: 'Diagnosis literasi finansial dan stabilitas asetmu lewat 12 pertanyaan, dan ukur indeks pertahanan miskin mendadak-mu.',
      },
      thumbnail: 'p3_test_sudden_poor_defense_index.webp',
      type: 'psychology',
      category: 'career',
      play_count: 0,
      tags: {
        ko: ['벼락거지', '재테크', '인플레이션'],
        en: ['sudden poverty', 'investing', 'inflation'],
        ja: ['いきなり貧乏', '資産形成', 'インフレ'],
        'zh-CN': ['霹雳穷人', '理财', '通货膨胀'],
        'zh-TW': ['霹靂窮人', '理財', '通貨膨脹'],
        vi: ['nghèo bất ngờ', 'đầu tư tài chính', 'lạm phát'],
        id: ['miskin mendadak', 'investasi', 'inflasi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-mukbang-style-diagnosis') {
    test = {
      slug: 'phase3-mukbang-style-diagnosis',
      title: {
        ko: "나의 '먹방' 스타일 진단",
        en: "Diagnosing My 'Mukbang' Style",
        ja: '私の『食べっぷり』スタイル診断',
        'zh-CN': '诊断我的「干饭」风格',
        'zh-TW': '診斷我的「吃播」風格',
        vi: 'Chẩn đoán phong cách ăn uống của tôi',
        id: "Diagnosis Gaya 'Makan' Milikku",
      },
      description: {
        ko: '12가지 이미지 선택으로 나의 진짜 먹방 스타일을 진단합니다.',
        en: '12 image choices diagnose your true mukbang style.',
        ja: '12枚の画像選択で、あなたの本当の『食べっぷり』スタイルを診断します。',
        'zh-CN': '通过12张图片选择，诊断出你真正的干饭风格。',
        'zh-TW': '透過12張圖片選擇，診斷出你真正的吃播風格。',
        vi: 'Chọn 12 hình ảnh để chẩn đoán phong cách ăn uống thật của bạn.',
        id: 'Pilih 12 gambar untuk mendiagnosis gaya makanmu yang sesungguhnya.',
      },
      thumbnail: 'p3_test_mukbang_style_diagnosis.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['먹방', '찍먹부먹', '음식취향'],
        en: ['mukbang', 'food', 'taste'],
        ja: ['食べっぷり', 'つけダレかけダレ', '食の好み'],
        'zh-CN': ['干饭', '蘸浇之争', '饮食口味'],
        'zh-TW': ['吃播', '沾淋之爭', '飲食口味'],
        vi: ['ăn uống', 'chấm hay rưới', 'gu ẩm thực'],
        id: ['makan', 'cocol vs siram', 'selera makanan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-laziness-max-level') {
    test = {
      slug: 'phase3-laziness-max-level',
      title: {
        ko: "나의 '귀차니즘' 만렙 측정",
        en: "Measuring My 'Laziness' Max Level",
        ja: '私の「めんどくさがり」満レベル測定',
        'zh-CN': '测测我的「懒惰」满级值',
        'zh-TW': '測測我的「懶惰」滿級值',
        vi: "Đo mức 'Lười biếng' tối đa của tôi",
        id: "Mengukur Level 'Kemalasan' Maksimalku",
      },
      description: {
        ko: '12가지 실제 상황극으로 나의 귀차니즘 만렙을 측정합니다.',
        en: '12 real-life scenarios measure your laziness max level.',
        ja: '12個のリアルなシチュエーション劇で、あなたの「めんどくさがり」満レベルを測定します。',
        'zh-CN': '通过12个真实场景测测你的懒惰满级值。',
        'zh-TW': '透過12個真實場景測測你的懶惰滿級值。',
        vi: 'Đo mức độ lười biếng tối đa của bạn qua 12 tình huống thực tế.',
        id: 'Ukur level kemalasan maksimalmu lewat 12 skenario nyata.',
      },
      thumbnail: 'p3_test_laziness_max_level.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['귀차니즘', '게으름', '공감'],
        en: ['laziness', 'procrastination', 'relatable'],
        ja: ['めんどくさがり', 'だらだら', '共感'],
        'zh-CN': ['懒惰', '拖延', '共鸣'],
        'zh-TW': ['懶惰', '拖延', '共鳴'],
        vi: ['lười biếng', 'trì hoãn', 'đồng cảm'],
        id: ['kemalasan', 'menunda', 'relatable'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-ai-era-job-survival-score') {
    test = {
      slug: 'phase3-ai-era-job-survival-score',
      title: {
        ko: 'AI 시대, 내 직업 생존 점수',
        en: 'My Job Survival Score in the AI Era',
        ja: 'AI時代、私の職業生存スコア',
        'zh-CN': 'AI时代，我的职业生存分数',
        'zh-TW': 'AI時代，我的職業生存分數',
        vi: 'Điểm sinh tồn nghề nghiệp của tôi trong thời đại AI',
        id: 'Skor Kelangsungan Karierku di Era AI',
      },
      description: {
        ko: '12가지 질문으로 내 직업 역량이 AI 시대에 얼마나 경쟁력이 있는지 점수를 매겨드립니다.',
        en: '12 questions to score how competitive your job skills are in the AI era.',
        ja: '12個の質問で、自分の職業スキルがAI時代にどれくらい競争力があるか採点します。',
        'zh-CN': '通过12个问题，为你的职业能力在AI时代的竞争力打分。',
        'zh-TW': '透過12個問題，為你的職業能力在AI時代的競爭力打分。',
        vi: '12 câu hỏi để chấm điểm năng lực nghề nghiệp của bạn có cạnh tranh được trong thời đại AI hay không.',
        id: '12 pertanyaan untuk menilai seberapa kompetitif kemampuan kerjamu di era AI.',
      },
      thumbnail: 'p3_test_ai_era_job_survival_score.webp',
      type: 'psychology',
      category: 'career',
      play_count: 0,
      tags: {
        ko: ['AI', '직업', '생존'],
        en: ['AI', 'career', 'survival'],
        ja: ['AI', '職業', '生存'],
        'zh-CN': ['AI', '职业', '生存'],
        'zh-TW': ['AI', '職業', '生存'],
        vi: ['AI', 'nghề nghiệp', 'sinh tồn'],
        id: ['AI', 'karier', 'kelangsungan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-soulmate-finder') {
    test = {
      slug: 'phase3-soulmate-finder',
      title: {
        ko: "내 영혼의 '소울메이트' 찾기",
        en: "Find My Soul's Soulmate",
        ja: '私の魂の『ソウルメイト』探し',
        'zh-CN': '寻找我灵魂的「灵魂伴侣」',
        'zh-TW': '尋找我靈魂的「靈魂伴侶」',
        vi: "Tìm 'Tri kỷ' của tâm hồn tôi",
        id: "Menemukan 'Soulmate' Jiwaku",
      },
      description: {
        ko: '12가지 질문으로 나의 소울 타입을 찾고 쌍둥이 소울·운명적 소울이 어떤 타입인지 알아봅니다.',
        en: 'Find your soul type with 12 questions and discover your twin soul and destiny soul.',
        ja: '12個の質問で自分のソウルタイプを見つけ、ツインソウルとディスティニーソウルがどんなタイプか調べます。',
        'zh-CN': '通过12个问题找到你的灵魂类型，看看你的双生灵魂和命定灵魂是什么类型。',
        'zh-TW': '透過12個問題找到你的靈魂類型，看看你的雙生靈魂和命定靈魂是什麼類型。',
        vi: 'Tìm kiểu tâm hồn của bạn qua 12 câu hỏi và khám phá tâm hồn song sinh, tâm hồn định mệnh của bạn.',
        id: 'Temukan tipe jiwamu lewat 12 pertanyaan dan cari tahu twin soul serta destiny soul-mu.',
      },
      thumbnail: 'p3_test_soulmate_finder.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['소울메이트', '영혼', '궁합'],
        en: ['soulmate', 'soul', 'compatibility'],
        ja: ['ソウルメイト', '魂', '相性'],
        'zh-CN': ['灵魂伴侣', '灵魂', '缘分'],
        'zh-TW': ['靈魂伴侶', '靈魂', '緣分'],
        vi: ['tri kỷ', 'tâm hồn', 'hợp nhau'],
        id: ['soulmate', 'jiwa', 'kecocokan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-first-impression-color-scanner') {
    test = {
      slug: 'phase3-first-impression-color-scanner',
      title: {
        ko: "나의 '첫인상' 컬러 스캐너",
        en: "My 'First Impression' Color Scanner",
        ja: '私の『第一印象』カラースキャナー',
        'zh-CN': '我的「第一印象」色彩扫描仪',
        'zh-TW': '我的「第一印象」色彩掃描儀',
        vi: "Máy quét màu 'ấn tượng đầu' của tôi",
        id: "Pemindai Warna 'Kesan Pertama'-ku",
      },
      description: {
        ko: '직관적으로 끌리는 이미지를 선택하면 남들이 나에게서 느끼는 색깔을 분석해 드립니다. 퍼스널 컬러와 연결한 나만의 컬러 정체성까지.',
        en: 'Pick images you are drawn to — we analyze the color others sense from you and connect it to your personal color identity.',
        ja: '直感で惹かれる画像を選ぶと、周りがあなたから感じる色を分析します。パーソナルカラーとつながるカラーアイデンティティまで。',
        'zh-CN': '凭直觉选择吸引你的图片，分析别人从你身上感受到的颜色，并连接到你的个人色彩身份。',
        'zh-TW': '憑直覺選擇吸引你的圖片，分析別人從你身上感受到的顏色，並連接到你的個人色彩身分。',
        vi: 'Chọn hình ảnh bạn bị thu hút theo trực giác — phân tích màu người khác cảm nhận từ bạn và kết nối personal color.',
        id: 'Pilih gambar yang menarik secara intuitif — kami analisis warna yang orang rasakan darimu dan hubungkan dengan personal color.',
      },
      thumbnail: 'p3_test_first_impression_color_scanner.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['첫인상', '컬러', '퍼스널컬러'],
        en: ['first impression', 'color', 'personal color'],
        ja: ['第一印象', 'カラー', 'パーソナルカラー'],
        'zh-CN': ['第一印象', '色彩', '个人色彩'],
        'zh-TW': ['第一印象', '色彩', '個人色彩'],
        vi: ['ấn tượng đầu', 'màu sắc', 'personal color'],
        id: ['kesan pertama', 'warna', 'personal color'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-personality-color-temperature') {
    test = {
      slug: 'phase3-personality-color-temperature',
      title: {
        ko: '내 성격의 감성 온도',
        en: 'My Personality Color Temperature',
        ja: '私の性格の感性温度',
        'zh-CN': '我性格的情感温度',
        'zh-TW': '我性格的情感溫度',
        vi: 'Nhiệt độ cảm xúc tính cách của tôi',
        id: 'Suhu Emosi Kepribadianku',
      },
      description: {
        ko: '12가지 이미지 중 더 끌리는 것을 직관적으로 선택하면 나의 감성 온도와 컬러를 분석해 드립니다. 쿨톤부터 웜톤까지 6가지 감성 온도 유형.',
        en: 'Pick the images you are drawn to among 12 choices — we analyze your emotional temperature and color from cool to warm across 6 types.',
        ja: '12枚の画像から直感で選ぶと、あなたの感性温度とカラーを分析します。クールからウォームまで6タイプ。',
        'zh-CN': '从12张图片中凭直觉选择更吸引你的，分析你的情感温度与色彩，从冷调到暖调共6种类型。',
        'zh-TW': '從12張圖片中憑直覺選擇更吸引你的，分析你的情感溫度與色彩，從冷調到暖調共6種類型。',
        vi: 'Chọn trực giác hình ảnh bạn bị thu hút trong 12 lựa chọn — phân tích nhiệt độ cảm xúc và màu sắc từ cool đến warm, 6 kiểu.',
        id: 'Pilih gambar yang menarik dari 12 pilihan secara intuitif — analisis suhu emosi dan warnamu dari cool ke warm, 6 tipe.',
      },
      thumbnail: 'p3_test_personality_color_temperature.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['감성온도', '퍼스널컬러', '쿨톤', '웜톤', '성격색깔'],
        en: ['emotion temperature', 'personal color', 'cool tone', 'warm tone', 'personality color'],
        ja: ['感性温度', 'パーソナルカラー', 'クールトーン', 'ウォームトーン', '性格カラー'],
        'zh-CN': ['情感温度', '个人色彩', '冷调', '暖调', '性格色彩'],
        'zh-TW': ['情感溫度', '個人色彩', '冷調', '暖調', '性格色彩'],
        vi: ['nhiệt độ cảm xúc', 'personal color', 'cool tone', 'warm tone', 'màu tính cách'],
        id: ['suhu emosi', 'personal color', 'cool tone', 'warm tone', 'warna kepribadian'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-ghosting-rebound-potential') {
    test = {
      slug: 'phase3-ghosting-rebound-potential',
      title: {
        ko: "나의 '잠수/환승' 잠재력",
        en: "My 'Ghosting/Rebound' Potential",
        ja: '私の『音信不通／乗り換え』ポテンシャル',
        'zh-CN': '我的「失联/闪现」潜力',
        'zh-TW': '我的「失聯／閃現」潛力',
        vi: "Tiềm năng 'Ghosting/Rebound' của tôi",
        id: "Potensi 'Ghosting/Rebound'-ku",
      },
      description: {
        ko: '12가지 실제 상황극으로 측정하는 이별 앞 나의 비겁함 수치. 당신은 잠수형인가요, 환승형인가요?',
        en: 'Measure your breakup cowardice score with 12 real-life scenarios. Are you a ghoster or a rebounder?',
        ja: '12のリアルなシチュエーションで測る、別れの前の臆病さ。あなたは音信不通タイプ？乗り換えタイプ？',
        'zh-CN': '用12个真实情境测量分手时的懦弱指数。你是失联型还是闪现型？',
        'zh-TW': '用12個真實情境測量分手時的懦弱指數。你是失聯型還是閃現型？',
        vi: 'Đo mức độ hèn nhát trước chia tay qua 12 kịch bản thực tế. Bạn thuộc kiểu ghosting hay rebound?',
        id: 'Ukur skor keberanianmu saat putus lewat 12 skenario nyata. Kamu tipe ghosting atau rebound?',
      },
      thumbnail: 'p3_test_ghosting_rebound_potential.webp',
      type: 'psychology',
      category: 'love',
      play_count: 0,
      tags: {
        ko: ['잠수', '환승', '이별'],
        en: ['ghosting', 'rebound', 'breakup'],
        ja: ['音信不通', '乗り換え', '別れ'],
        'zh-CN': ['失联', '闪现', '分手'],
        'zh-TW': ['失聯', '閃現', '分手'],
        vi: ['ghosting', 'rebound', 'chia tay'],
        id: ['ghosting', 'rebound', 'putus'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-love-villain-index') {
    test = {
      slug: 'phase3-love-villain-index',
      title: {
        ko: "나의 '연애 빌런' 지수",
        en: "My 'Love Villain' Index",
        ja: '私の『恋愛ヴィラン』指数',
        'zh-CN': '我的「恋爱反派」指数',
        'zh-TW': '我的「戀愛反派」指數',
        vi: "Chỉ số 'phản diện tình yêu' của tôi",
        id: "Indeks 'Penjahat Cinta'-ku",
      },
      description: {
        ko: '12가지 질문으로 진단하는 나의 무의식 속 연애 빌런 행동. 단톡방에 공유해서 폭로전을 펼쳐보세요.',
        en: 'Diagnose your unconscious love-villain behaviors with 12 questions. Share it in your group chat and start an exposure battle.',
        ja: '12の質問で診断する無意識の恋愛ヴィラン行動。グループトークでシェアして暴露バトルを繰り広げよう。',
        'zh-CN': '通过12个问题诊断你无意识中的恋爱反派行为。分享到群聊，来一场互相爆料大战吧。',
        'zh-TW': '透過12個問題診斷你無意識中的戀愛反派行為。分享到群組，來一場互相爆料大戰吧。',
        vi: 'Chẩn đoán hành vi phản diện tình yêu vô thức của bạn qua 12 câu hỏi. Chia sẻ vào nhóm chat và mở màn cuộc chiến bóc phốt.',
        id: 'Diagnosis perilaku penjahat cinta bawah sadarmu lewat 12 pertanyaan. Bagikan ke grup chat dan mulai perang pengakuan.',
      },
      thumbnail: 'p3_test_love_villain_index.webp',
      type: 'psychology',
      category: 'love',
      play_count: 0,
      tags: {
        ko: ['연애빌런', '연애', '자기폭로'],
        en: ['Love Villain', 'Dating', 'Self-Exposure'],
        ja: ['恋愛ヴィラン', '恋愛', '自己暴露'],
        'zh-CN': ['恋爱反派', '恋爱', '自我爆料'],
        'zh-TW': ['戀愛反派', '戀愛', '自我爆料'],
        vi: ['Phản diện tình yêu', 'Tình yêu', 'Tự bóc phốt'],
        id: ['Penjahat Cinta', 'Cinta', 'Pengakuan Diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-dopamine-self-control-index') {
    test = {
      slug: 'phase3-dopamine-self-control-index',
      title: {
        ko: "나의 '도파민 절제력' 지수",
        en: "My 'Dopamine Self-Control' Index",
        ja: '私の『ドーパミン自制力』指数',
        'zh-CN': '我的「多巴胺自控力」指数',
        'zh-TW': '我的「多巴胺自控力」指數',
        vi: "Chỉ số 'kiềm chế dopamine' của tôi",
        id: "Indeks 'Pengendalian Dopamin'-ku",
      },
      description: {
        ko: '12가지 질문으로 측정하는 내 도파민 절제력 지수. 알고리즘에 얼마나 장악돼 있는지 솔직하게 진단해 드립니다.',
        en: 'Measure your dopamine self-control index with 12 questions. An honest diagnosis of how much the algorithm has taken over you.',
        ja: '12の質問で測る私のドーパミン自制力指数。アルゴリズムにどれだけ支配されているか正直に診断します。',
        'zh-CN': '通过12个问题测量你的多巴胺自控力指数。诚实诊断你被算法掌控的程度。',
        'zh-TW': '透過12個問題測量你的多巴胺自控力指數。誠實診斷你被演算法掌控的程度。',
        vi: 'Đo chỉ số kiềm chế dopamine của bạn qua 12 câu hỏi. Chẩn đoán thẳng thắn mức độ bạn bị thuật toán chi phối.',
        id: 'Ukur indeks pengendalian dopaminmu lewat 12 pertanyaan. Diagnosis jujur seberapa jauh kamu dikuasai algoritma.',
      },
      thumbnail: 'p3_test_dopamine_self_control_index.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['도파민', '디지털중독', '절제력'],
        en: ['Dopamine', 'Digital Addiction', 'Self-Control'],
        ja: ['ドーパミン', 'デジタル依存', '自制力'],
        'zh-CN': ['多巴胺', '数字成瘾', '自控力'],
        'zh-TW': ['多巴胺', '數位成癮', '自控力'],
        vi: ['Dopamine', 'Nghiện kỹ thuật số', 'Kiềm chế'],
        id: ['Dopamin', 'Kecanduan Digital', 'Pengendalian Diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-gaslighting-defense-power') {
    test = {
      slug: 'phase3-gaslighting-defense-power',
      title: {
        ko: "나의 '가스라이팅' 방어력",
        en: 'My Gaslighting Defense Power',
        ja: '私の『ガスライティング』防御力',
        'zh-CN': '我的「煤气灯」防御力',
        'zh-TW': '我的「煤氣燈」防禦力',
        vi: "Sức phòng thủ 'Gaslighting' của tôi",
        id: "Daya Tahan 'Gaslighting'-ku",
      },
      description: {
        ko: '12가지 상황으로 알아보는 나의 심리적 방어력 레벨. 당신은 흔들리지 않는 멘탈 금강불괴인가요?',
        en: 'Discover your psychological defense level through 12 situations. Are you an unshakeable, unbreakable mind?',
        ja: '12の状況でわかる心理的防御力レベル。あなたは揺るがないメンタル金剛不壊？',
        'zh-CN': '通过12个情境了解你的心理防御力等级。你是不动摇的金刚不坏心态吗？',
        'zh-TW': '透過12個情境了解你的心理防禦力等級。你是不動搖的金剛不壞心態嗎？',
        vi: 'Khám phá cấp độ phòng thủ tâm lý qua 12 tình huống. Bạn có phải tinh thần kim cương bất hoại không lay chuyển?',
        id: 'Ketahui level pertahanan psikologismu lewat 12 situasi. Apakah mentalmu baja tak terpatahkan?',
      },
      thumbnail: 'p3_test_gaslighting_defense_power.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['가스라이팅', '멘탈', '심리'],
        en: ['Gaslighting', 'Mental', 'Psychology'],
        ja: ['ガスライティング', 'メンタル', '心理'],
        'zh-CN': ['煤气灯', '心态', '心理'],
        'zh-TW': ['煤氣燈', '心態', '心理'],
        vi: ['Gaslighting', 'Tinh thần', 'Tâm lý'],
        id: ['Gaslighting', 'Mental', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-toxic-relationship-diagnosis') {
    test = {
      slug: 'phase3-toxic-relationship-diagnosis',
      title: {
        ko: '거리를 둬야 할 인맥 진단',
        en: 'Toxic Connections Diagnosis',
        ja: '距離を置くべき人脈診断',
        'zh-CN': '该保持距离的人脉诊断',
        'zh-TW': '該保持距離的人脈診斷',
        vi: 'Chẩn đoán mối quan hệ cần giữ khoảng cách',
        id: 'Diagnosis Relasi yang Perlu Dijauhi',
      },
      description: {
        ko: '만나고 나면 기운이 빠지는 사람이 주변에 있나요?',
        en: 'Is there someone who drains you every time you meet?',
        ja: '会うたびに元気がなくなる人が周りにいますか？',
        'zh-CN': '身边有没有一见面就让你没劲的人？',
        'zh-TW': '身邊有沒有一見面就讓你沒勁的人？',
        vi: 'Có ai quanh bạn khiến bạn kiệt sức mỗi lần gặp không?',
        id: 'Ada orang di sekitar yang membuatmu lelah setiap kali bertemu?',
      },
      thumbnail: 'p3_test_toxic_relationship_diagnosis.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['인맥', '관계', '심리'],
        en: ['Network', 'Relationships', 'Psychology'],
        ja: ['人脈', '関係', '心理'],
        'zh-CN': ['人脉', '关系', '心理'],
        'zh-TW': ['人脈', '關係', '心理'],
        vi: ['Quan hệ', 'Mối quan hệ', 'Tâm lý'],
        id: ['Lingkaran', 'Hubungan', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-team-work-chemistry-test') {
    test = {
      slug: 'phase3-team-work-chemistry-test',
      title: {
        ko: '우리 팀 워크 케미 테스트',
        en: 'Our Team Work Chemistry Test',
        ja: '私たちのチームワーク相性テスト',
        'zh-CN': '我们团队默契测试',
        'zh-TW': '我們團隊默契測試',
        vi: 'Bài test team chemistry của chúng ta',
        id: 'Tes chemistry kerja tim kita',
      },
      description: {
        ko: '12문항으로 나의 팀 역할 유형을 찾고, 팀원 결과를 모으면 팀 케미·시너지·주의점이 분석됩니다. #팀워크 #직장 #협업',
        en: '12 questions to find your team role type; combine teammates’ results for chemistry, synergy, and watch-outs. #teamwork #workplace #collab',
        ja: '12問でチーム役割タイプを診断。メンバー結果を集めるとケミ・シナジーが分析。#チームワーク #職場',
        'zh-CN': '12 题找到你的团队角色类型；汇总成员结果可看默契与协同。#团队 #职场 #协作',
        'zh-TW': '12 題找到你的團隊角色類型；彙整成員結果可看默契與協同。#團隊 #職場 #協作',
        vi: '12 câu tìm vai trò nhóm; gom kết quả để xem chemistry & synergy. #teamwork #công sở',
        id: '12 soal cari peran tim; kumpulkan hasil untuk chemistry & sinergi. #teamwork #kantor',
      },
      thumbnail: 'p3_test_team_work_chemistry.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['팀워크', '직장', '협업'],
        en: ['Teamwork', 'Workplace', 'Collaboration'],
        ja: ['チームワーク', '職場', '協業'],
        'zh-CN': ['团队', '职场', '协作'],
        'zh-TW': ['團隊', '職場', '協作'],
        vi: ['Teamwork', 'Công sở', 'Hợp tác'],
        id: ['Teamwork', 'Kantor', 'Kolaborasi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-couple-breakup-risk') {
    test = {
      slug: 'phase3-couple-breakup-risk',
      title: {
        ko: '우리 헤어질 확률? 커플 위험도 테스트',
        en: 'Will We Break Up? Couple Risk Test',
        ja: '別れる確率は？カップル危険度テスト',
        'zh-CN': '我们会分手吗？情侣风险测试',
        'zh-TW': '我們會分手嗎？情侶風險測驗',
        vi: 'Chúng ta có chia tay? Test rủi ro cặp đôi',
        id: 'Peluang putus? Tes risiko pasangan',
      },
      description: {
        ko: '12문항 커플 매칭형. 파트너 A·B 각자 답한 뒤 합산 점수로 위험도·GAP을 확인합니다. #연애 #커플 #관계',
        en: '12-question couple match: Partner A & B answer separately, then see combined risk and GAP. #love #couple #relationship',
        ja: '12問のカップル型。A・Bがそれぞれ回答し、合計スコアで危険度とGAPを確認。#恋愛 #カップル #関係',
        'zh-CN': '12 题伴侣匹配：A、B 各自作答后看总分、风险与差距。#恋爱 #情侣 #关系',
        'zh-TW': '12 題伴侶配對：A、B 各自作答後看總分、風險與差距。#戀愛 #情侶 #關係',
        vi: '12 câu dạng cặp đôi: A và B trả lời riêng, xem tổng điểm, rủi ro và GAP. #yêu #cặp đôi #quan hệ',
        id: '12 pertandingan pasangan: A & B jawab terpisah, lihat total risiko & GAP. #cinta #pasangan #hubungan',
      },
      thumbnail: 'p3_test_couple_breakup_risk.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '커플', '관계'],
        en: ['Love', 'Couple', 'Relationship'],
        ja: ['恋愛', 'カップル', '関係'],
        'zh-CN': ['恋爱', '情侣', '关系'],
        'zh-TW': ['戀愛', '情侶', '關係'],
        vi: ['Yêu đương', 'Cặp đôi', 'Quan hệ'],
        id: ['Pacaran', 'Pasangan', 'Hubungan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-which-ai-are-you') {
    test = {
      slug: 'phase3-which-ai-are-you',
      title: {
        ko: '나는 어떤 AI를 닮았을까?',
        en: 'Which AI Are You Most Like?',
        ja: '私はどのAIに似ている？',
        'zh-CN': '我最像哪种 AI？',
        'zh-TW': '我最像哪種 AI？',
        vi: 'Tôi giống AI nào nhất?',
        id: 'Aku paling mirip AI yang mana?',
      },
      description: {
        ko: '12문항 4지선다로 보는 AI 성향 매칭 6유형. ChatGPT·Claude·Gemini… 나는 어떤 AI일까? #AI #성격 #트렌드 #재미',
        en: '12 multiple-choice questions — 6 AI personality matches. Which AI are you? #AI #personality #trend #fun',
        ja: '12問4択で見るAIタイプ6種。あなたはどのAIタイプ？#AI #性格 #トレンド',
        'zh-CN': '12 道四选一，六种 AI 人格匹配。你像哪种 AI？#AI #性格 #趋势',
        'zh-TW': '12 題四選一，六種 AI 人格配對。你像哪種 AI？#AI #性格 #趨勢',
        vi: '12 câu trắc nghiệm — 6 kiểu khớp tính cách AI. Bạn giống AI nào? #AI #tính cách #xu hướng',
        id: '12 pertanyaan pilihan ganda — 6 tipe cocok AI. Kamu mirip AI mana? #AI #kepribadian #tren',
      },
      thumbnail: 'p3_test_which_ai_are_you.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['AI', '성격', '트렌드', '재미'],
        en: ['AI', 'Personality', 'Trend', 'Fun'],
        ja: ['AI', '性格', 'トレンド', 'エンタメ'],
        'zh-CN': ['AI', '性格', '趋势', '趣味'],
        'zh-TW': ['AI', '性格', '趨勢', '趣味'],
        vi: ['AI', 'Tính cách', 'Xu hướng', 'Giải trí'],
        id: ['AI', 'Kepribadian', 'Tren', 'Seru'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-sns-algorithm-type') {
    test = {
      slug: 'phase3-sns-algorithm-type',
      title: {
        ko: '나는 어떤 SNS 알고리즘 타입?',
        en: 'What Is My SNS Algorithm Type?',
        ja: '私のSNSアルゴリズムタイプは？',
        'zh-CN': '我是什么 SNS 算法类型？',
        'zh-TW': '我是哪種 SNS 演算法類型？',
        vi: 'Tôi thuộc kiểu thuật toán SNS nào?',
        id: 'Tipe algoritme SNS-ku?',
      },
      description: {
        ko: '12문항 이미지 2지선다로 보는 SNS 알고리즘 소비 패턴 6유형. #SNS #트렌드 #디지털 #성격',
        en: '12 image A/B questions — 6 feed algorithm personality types. #SNS #trend #digital #personality',
        ja: '画像12問の2択で見るSNS消費タイプ6種。#SNS #トレンド #デジタル #性格',
        'zh-CN': '12 道图片二选一，六种信息流算法人格。#社交媒体 #趋势 #数字生活 #性格',
        'zh-TW': '12 題圖片二選一，六種資訊流演算法人格。#社群 #趨勢 #數位 #性格',
        vi: '12 câu chọn ảnh A/B — 6 tính cách thuật toán feed. #SNS #xu hướng #số #tính cách',
        id: '12 pertanyaan gambar A/B — 6 tipe algoritme feed. #SNS #tren #digital #kepribadian',
      },
      thumbnail: 'p3_test_sns_algorithm_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['SNS', '트렌드', '디지털', '성격'],
        en: ['SNS', 'Trend', 'Digital', 'Personality'],
        ja: ['SNS', 'トレンド', 'デジタル', '性格'],
        'zh-CN': ['社交媒体', '趋势', '数字', '性格'],
        'zh-TW': ['社群', '趨勢', '數位', '性格'],
        vi: ['SNS', 'Xu hướng', 'Số', 'Tính cách'],
        id: ['SNS', 'Tren', 'Digital', 'Kepribadian'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-personality-color-finder') {
    const { phase3PersonalityColorFinderTestFallback } = await import('@/lib/phase3PersonalityColorFinderData');
    test = {
      slug: 'phase3-personality-color-finder',
      ...phase3PersonalityColorFinderTestFallback,
      thumbnail: 'p3_test_personality_color_finder.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-personality-weather-type') {
    const { phase3PersonalityWeatherTypeTestFallback } = await import('@/lib/phase3PersonalityWeatherTypeData');
    test = {
      slug: 'phase3-personality-weather-type',
      ...phase3PersonalityWeatherTypeTestFallback,
      thumbnail: 'p3_test_personality_weather_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-real-reason-for-breakup') {
    test = {
      slug: 'phase3-real-reason-for-breakup',
      title: {
        ko: '전 남친/여친 떠나간 진짜 이유',
        en: 'The Real Reason Your Ex Left',
        ja: '元カノ/元カレが去った本当の理由',
        'zh-CN': '前男/女友离开的真正原因',
        'zh-TW': '前男/女友離開的真正原因',
        vi: 'Lý do thật sự khiến người yêu cũ rời đi',
        id: 'Alasan sebenarnya mantanmu pergi',
      },
      description: {
        ko: '헤어진 이유를 상대방 탓으로만 돌리고 있진 않나요? 나의 연애 패턴에서 이별의 진짜 원인을 찾아드립니다.',
        en: 'Are you blaming the breakup only on your ex? We find the real breakup cause in YOUR dating patterns.',
        ja: '別れの理由を相手のせいにばかりしていませんか？あなたの恋愛パターンから、別れの本当の原因を見つけます。',
        'zh-CN': '是不是总把分手的理由全怪在对方头上？我们从你的恋爱模式中，找出分手的真正原因。',
        'zh-TW': '是不是總把分手的理由全怪在對方頭上？我們從你的戀愛模式中，找出分手的真正原因。',
        vi: 'Bạn có đang đổ hết lỗi chia tay cho người yêu cũ không? Chúng tôi tìm nguyên nhân chia tay thật sự trong kiểu yêu của bạn.',
        id: 'Apakah kamu menyalahkan putus hanya pada mantan? Kami menemukan penyebab putus yang sebenarnya di pola pacaranmu.',
      },
      thumbnail: 'p3_test_real_reason_for_breakup.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['이별', '연애', '자기반성', '심리', '공감'],
        en: ['Breakup', 'Dating', 'Self-reflection', 'Psychology', 'Empathy'],
        ja: ['別れ', '恋愛', '自己反省', '心理', '共感'],
        'zh-CN': ['分手', '恋爱', '自我反省', '心理', '共情'],
        'zh-TW': ['分手', '戀愛', '自我反省', '心理', '同理心'],
        vi: ['Chia tay', 'Hẹn hò', 'Tự phản tỉnh', 'Tâm lý', 'Đồng cảm'],
        id: ['Putus', 'Pacaran', 'Refleksi diri', 'Psikologi', 'Empati'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-career-aptitude-ai-16types') {
    test = {
      slug: 'phase3-career-aptitude-ai-16types',
            title: {
              "ko": "직업 적성 AI 분석 (16가지 직군)",
              "en": "Career Aptitude AI Analysis (16 Career Types)",
              "ja": "職業適性AI分析（16職群）",
              "zh-CN": "职业适性 AI 分析（16种职群）",
              "zh-TW": "職業適性 AI 分析（16種職群）",
              "vi": "Phân tích năng lực nghề nghiệp AI (16 nhóm nghề)",
              "id": "Analisis Bakat Karier AI (16 Kelompok Karier)"
            },
            description: {
              "ko": "내가 어떤 일을 해야 오래, 잘 할 수 있을까요?",
              "en": "What work can you do well and enjoy for the long run?",
              "ja": "自分はどんな仕事なら、長く、うまく続けられる？",
              "zh-CN": "什么工作能让你做得久，也做得好？",
              "zh-TW": "什麼工作能讓你做得久，也做得好？",
              "vi": "Công việc nào bạn có thể làm lâu dài và làm thật tốt?",
              "id": "Pekerjaan seperti apa yang bisa kamu lakukan lama dan dengan baik?"
            },
            thumbnail: 'p3_test_career_aptitude_ai_16types.webp',
            type: 'psychology',
            category: 'personality',
            play_count: 0,
            tags: {
              "ko": [
                "직업",
                "적성",
                "커리어",
                "취업",
                "이직"
              ],
              "en": [
                "Career",
                "Aptitude",
                "Career quiz",
                "Job search",
                "Career change"
              ],
              "ja": [
                "職業",
                "適性",
                "キャリア",
                "就職",
                "転職"
              ],
              "zh-CN": [
                "职业",
                "适性",
                "职涯",
                "求职",
                "跳槽"
              ],
              "zh-TW": [
                "職業",
                "適性",
                "職涯",
                "求職",
                "轉職"
              ],
              "vi": [
                "Nghề nghiệp",
                "Năng lực",
                "Sự nghiệp",
                "Việc làm",
                "Chuyển việc"
              ],
              "id": [
                "Karier",
                "Bakat",
                "Pengembangan karier",
                "Pencarian kerja",
                "Ganti pekerjaan"
              ]
            },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-spending-dark-history-type') {
    test = {
      slug: 'phase3-spending-dark-history-type',
      title: {
        ko: '내 지갑을 위협하는 소비 흑역사 유형',
        en: 'Spending Dark-History Type (Wallet Threat)',
        ja: '財布を脅かす消費ブラック履歴タイプ',
        'zh-CN': '威胁钱包的消费黑历史类型',
        'zh-TW': '威脅錢包的消費黑歷史類型',
        vi: 'Kiểu “hố đen” tiêu xài đe dọa ví',
        id: 'Tipe riwayat belanja gelap yang mengancam dompet',
      },
      description: {
        ko: '12문항 4지선다로 보는 소비 흑역사 6유형 진단과 재발 방지책. #소비 #공감 #재테크',
        en: '12 questions, 4 choices — 6 spending slip-up types + prevention tips. #spending #empathy #money',
        ja: '12問4択で見る消費ブラック履歴6タイプと再発防止。#消費 #共感 #家計',
        'zh-CN': '12 道四选一，六种消费黑历史与防再犯。#消费 #共情 #理财',
        'zh-TW': '12 題四選一，六種消費黑歷史與防再犯。#消費 #共情 #理財',
        vi: '12 câu 4 lựa chọn — 6 kiểu “hố đen” chi tiêu và cách tránh lặp lại.',
        id: '12 soal 4 pilihan — 6 tipe kesalahan belanja dan pencegahan.',
      },
      thumbnail: 'p3_test_spending_dark_history_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['소비', '공감', '재테크'],
        en: ['Spending', 'Empathy', 'Money tips'],
        ja: ['消費', '共感', '家計'],
        'zh-CN': ['消费', '共情', '理财'],
        'zh-TW': ['消費', '共情', '理財'],
        vi: ['Chi tiêu', 'Đồng cảm', 'Tài chính'],
        id: ['Belanja', 'Empati', 'Keuangan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-game-love-balance-extreme') {
    test = {
      slug: 'phase3-game-love-balance-extreme',
      title: {
        ko: '밸런스 게임 - 연애편 극한버전',
        en: 'Extreme Dating Balance Game',
        ja: '恋愛・極限バランスゲーム',
        'zh-CN': '恋爱极限平衡游戏',
        'zh-TW': '戀愛極限平衡遊戲',
        vi: 'Trò cân bằng tình yêu cực hạn',
        id: 'Game keseimbangan cinta ekstrem',
      },
      description: {
        ko: '10문항 이미지 2지선다 극한 연애 밸런스 — 연애관·가치관 6유형 분석. #밸런스게임 #연애 #커플 #심리',
        en: '10 brutal image A/B rounds—6 love-value types. #balance #dating #couples #psychology',
        ja: '画像10問の究極2択恋愛バランス—恋愛観6タイプ。#バランス #恋愛 #カップル #心理',
        'zh-CN': '10 道图片极限恋爱二选一—6 种恋爱价值观。#平衡 #恋爱 #情侣 #心理',
        'zh-TW': '10 題圖片極限戀愛二選一—6 種戀愛價值觀。#平衡 #戀愛 #情侶 #心理',
        vi: '10 vòng ảnh 2 lựa chọn cực hạn—6 kiểu giá trị trong yêu. #cân_bằng #yêu #cặp_đôi #tâm_lý',
        id: '10 ronde gambar A/B ekstrem—6 tipe nilai cinta. #keseimbangan #pacaran #pasangan #psikologi',
      },
      thumbnail: 'p3_game_love_balance_extreme.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['밸런스게임', '연애', '커플', '심리'],
        en: ['Balance game', 'Dating', 'Couples', 'Psychology'],
        ja: ['バランスゲーム', '恋愛', 'カップル', '心理'],
        'zh-CN': ['平衡游戏', '恋爱', '情侣', '心理'],
        'zh-TW': ['平衡遊戲', '戀愛', '情侶', '心理'],
        vi: ['Trò cân bằng', 'Hẹn hò', 'Cặp đôi', 'Tâm lý'],
        id: ['Game seimbang', 'Pacaran', 'Pasangan', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-room-personality-analysis') {
    test = {
      slug: 'phase3-room-personality-analysis',
      title: {
        ko: '내 방이 말해주는 나의 성격',
        en: 'What Your Room Says About Your Personality',
        ja: 'あなたの部屋が語る性格',
        'zh-CN': '房间透露的你是什么性格',
        'zh-TW': '房間透露的你是什麼性格',
        vi: 'Căn phòng của bạn nói gì về tính cách?',
        id: 'Apa Kata Kamarmu tentang Kepribadianmu?',
      },
      description: {
        ko: '12문항 이미지 4지선다로 보는 성격·이상적인 방 스타일 6유형. #성격 #라이프스타일',
        en: '12 image questions — 6 personality & dream room types. #personality #lifestyle',
        ja: '画像12問4択で見る性格＆理想の部屋タイプ6種。#性格 #ライフスタイル',
        'zh-CN': '12 道图片四选一，六种性格与理想房间风格。#性格 #生活方式',
        'zh-TW': '12 題圖片四選一，六種性格與理想房間風格。#性格 #生活方式',
        vi: '12 câu chọn ảnh 4 đáp án — 6 kiểu tính cách & phòng mơ ước. #tính cách #lifestyle',
        id: '12 pertanyaan gambar 4 pilihan — 6 tipe kepribadian & gaya kamar impian. #kepribadian #gaya hidup',
      },
      thumbnail: 'p3_test_room_personality_analysis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['성격', '라이프스타일'],
        en: ['Personality', 'Lifestyle'],
        ja: ['性格', 'ライフスタイル'],
        'zh-CN': ['性格', '生活方式'],
        'zh-TW': ['性格', '生活方式'],
        vi: ['Tính cách', 'Lifestyle'],
        id: ['Kepribadian', 'Gaya hidup'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-guardian-spirit-animal') {
    test = {
      slug: 'phase3-guardian-spirit-animal',
      title: {
        ko: '나를 수호하는 신비한 영물',
        en: 'My Mystic Guardian Spirit',
        ja: '私を守る神秘の霊獣',
        'zh-CN': '守护我的神秘灵兽',
        'zh-TW': '守護我的神秘靈獸',
        vi: 'Linh thú thần bí hộ mệnh của tôi',
        id: 'Roh penjaga mistis yang melindungiku',
      },
      description: {
        ko: '12문항 이미지 2지선다로 보는 수호 영물 6유형. #영물 #운세 #신비 #수호',
        en: '12 image A/B questions — 6 guardian spirit types. #spirit #fortune #mystic',
        ja: '画像12問の2択で見る守護霊獣6タイプ。#霊獣 #運勢',
        'zh-CN': '12 道图片二选一，六种守护灵兽。#灵兽 #运势',
        'zh-TW': '12 題圖片二選一，六種守護靈獸。#靈獸 #運勢',
        vi: '12 câu chọn ảnh A/B — 6 linh thú hộ mệnh.',
        id: '12 pertanyaan gambar A/B — 6 tipe penjaga roh.',
      },
      thumbnail: 'p3_test_guardian_spirit_animal.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['영물', '운세', '신비', '수호'],
        en: ['Spirit', 'Fortune', 'Mystic', 'Guardian'],
        ja: ['霊獣', '運勢', '神秘', '守護'],
        'zh-CN': ['灵兽', '运势', '神秘', '守护'],
        'zh-TW': ['靈獸', '運勢', '神秘', '守護'],
        vi: ['Linh thú', 'Vận số', 'Huyền bí', 'Hộ mệnh'],
        id: ['Roh', 'Ramalan', 'Mistik', 'Penjaga'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-ootd-style-diagnosis') {
    test = {
      slug: 'phase3-ootd-style-diagnosis',
      title: {
        ko: '오늘 뭐 입지? OOTD 스타일 진단',
        en: 'What Should I Wear Today? OOTD Style Quiz',
        ja: '今日なに着る？OOTDスタイル診断',
        'zh-CN': '今天穿什么？OOTD 风格诊断',
        'zh-TW': '今天穿什麼？OOTD 風格診斷',
        vi: 'Hôm nay mặc gì? Trắc nghiệm phong cách OOTD',
        id: 'Mau pakai apa hari ini? Tes gaya OOTD',
      },
      description: {
        ko: '12문항 이미지 2지선다로 보는 패션 정체성 스펙트럼 6유형. #패션 #OOTD #스타일',
        en: '12 image A/B questions — 6 fashion identity types. #Fashion #OOTD #Style',
        ja: '画像12問の2択で見るファッションアイデンティティ6タイプ。#ファッション #OOTD #スタイル',
        'zh-CN': '12 道图片二选一，六种时尚身份光谱。#时尚 #OOTD #穿搭',
        'zh-TW': '12 題圖片二選一，六種時尚身份光譜。#時尚 #OOTD #穿搭',
        vi: '12 câu chọn ảnh A/B — 6 kiểu bản sắc thời trang. #Thời trang #OOTD #Phong cách',
        id: '12 pertanyaan gambar A/B — 6 spektrum identitas fashion. #Fashion #OOTD #Gaya',
      },
      thumbnail: 'p3_test_ootd_style_diagnosis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['패션', 'OOTD', '스타일'],
        en: ['Fashion', 'OOTD', 'Style'],
        ja: ['ファッション', 'OOTD', 'スタイル'],
        'zh-CN': ['时尚', 'OOTD', '风格'],
        'zh-TW': ['時尚', 'OOTD', '風格'],
        vi: ['Thời trang', 'OOTD', 'Phong cách'],
        id: ['Fashion', 'OOTD', 'Gaya'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-personality-shoe-recommendation') {
    test = {
      slug: 'phase3-personality-shoe-recommendation',
      title: {
        ko: '내 성격과 어울리는 신발 추천',
        en: 'Shoes That Match Your Personality',
        ja: '性格に合う靴おすすめ',
        'zh-CN': '与你性格相配的鞋款推荐',
        'zh-TW': '與你性格相配的鞋款推薦',
        vi: 'Gợi ý giày hợp tính cách của bạn',
        id: 'Rekomendasi sepatu yang cocok dengan kepribadianmu',
      },
      description: {
        ko: '12문항 이미지 4지선다로 보는 성격별 신발 추천 6유형. #패션 #신발 #성격 #OOTD #쇼핑',
        en: '12 image questions — 6 shoe types for your personality. #fashion #shoes #personality #OOTD',
        ja: '画像12問4択で見る性格別おすすめ靴6タイプ。#ファッション #靴 #性格',
        'zh-CN': '12 道图片四选一，六种性格鞋款推荐。#时尚 #鞋 #性格',
        'zh-TW': '12 題圖片四選一，六種性格鞋款推薦。#時尚 #鞋 #性格',
        vi: '12 câu chọn ảnh — 6 kiểu giày theo tính cách. #thời trang #giày',
        id: '12 pertanyaan gambar — 6 tipe sepatu sesuai kepribadian. #fashion #sepatu',
      },
      thumbnail: 'p3_test_personality_shoe_recommendation.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['패션', '신발', '성격', 'OOTD', '쇼핑'],
        en: ['Fashion', 'Shoes', 'Personality', 'OOTD', 'Shopping'],
        ja: ['ファッション', '靴', '性格', 'OOTD', 'ショッピング'],
        'zh-CN': ['时尚', '鞋', '性格', 'OOTD', '购物'],
        'zh-TW': ['時尚', '鞋', '性格', 'OOTD', '購物'],
        vi: ['Thời trang', 'Giày', 'Tính cách', 'OOTD', 'Mua sắm'],
        id: ['Fashion', 'Sepatu', 'Kepribadian', 'OOTD', 'Belanja'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-youtube-algorithm-knows') {
    test = {
      slug: 'phase3-youtube-algorithm-knows',
      title: {
        ko: '나의 유튜브 알고리즘이 뭔가 알고 있다',
        en: 'My YouTube Algorithm Seems to Know Me',
        ja: '私のYouTubeアルゴリズムが何か知っている',
        'zh-CN': '我的 YouTube 算法好像知道些什么',
        'zh-TW': '我的 YouTube 演算法好像知道些什麼',
        vi: 'Thuật toán YouTube của tôi dường như biết điều gì đó',
        id: 'Algoritme YouTube-ku seolah tahu sesuatu',
      },
      description: {
        ko: '12문항 4지선다로 보는 유튜브 알고리즘이 파악한 나의 숨은 유형 6가지. #유튜브 #알고리즘 #트렌드 #자기폭로',
        en: '12 multiple-choice questions — 6 hidden types your YouTube algorithm has pegged you as. #YouTube #algorithm #trend',
        ja: '12問4択で見るYouTubeアルゴリズムが見抜いた隠れた6タイプ。#YouTube #アルゴリズム #トレンド',
        'zh-CN': '12 道四选一，六种 YouTube 算法眼中的隐藏类型。#YouTube #算法 #趋势',
        'zh-TW': '12 題四選一，六種 YouTube 演算法眼中的隱藏類型。#YouTube #演算法 #趨勢',
        vi: '12 câu — 6 kiểu ẩn mà thuật toán YouTube đoán về bạn. #YouTube #thuật toán #xu hướng',
        id: '12 pertanyaan — 6 tipe tersembunyi yang algoritme YouTube tebak tentangmu. #YouTube #algoritme #tren',
      },
      thumbnail: 'p3_test_youtube_algorithm_knows.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['유튜브', '알고리즘', '트렌드', '자기폭로'],
        en: ['YouTube', 'Algorithm', 'Trend', 'Self-reveal'],
        ja: ['YouTube', 'アルゴリズム', 'トレンド', '自己開示'],
        'zh-CN': ['YouTube', '算法', '趋势', '自我爆料'],
        'zh-TW': ['YouTube', '演算法', '趨勢', '自我爆料'],
        vi: ['YouTube', 'Thuật toán', 'Xu hướng', 'Tự vạch trần'],
        id: ['YouTube', 'Algoritme', 'Tren', 'Ungkap diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-shortform-addiction-type') {
    test = {
      slug: 'phase3-shortform-addiction-type',
      title: {
        ko: '숏폼 중독 유형 진단',
        en: 'Short-Form Addiction Type Quiz',
        ja: 'ショート動画中毒タイプ診断',
        'zh-CN': '短视频成瘾类型诊断',
        'zh-TW': '短影音成癮類型診斷',
        vi: 'Trắc nghiệm kiểu nghiện video ngắn',
        id: 'Tes Tipe Kecanduan Konten Pendek',
      },
      description: {
        ko: '12문항 2지선다로 보는 숏폼 중독 스펙트럼 6유형과 처방전. #숏폼 #릴스 #쇼츠 #중독',
        en: '12 A/B questions — 6 short-form addiction types and a prescription. #shorts #reels #tiktok #habits',
        ja: '12問の2択で見るショート動画中毒スペクトラム6タイプと処方箋。#ショート #リール #中毒',
        'zh-CN': '12 道二选一，六种短视频成瘾光谱与处方。#短视频 #Reels #成瘾',
        'zh-TW': '12 題二選一，六種短影音成癮光譜與處方。#短影音 #Reels #成癮',
        vi: '12 câu A/B — 6 mức nghiện short-form và “đơn thuốc”. #shorts #reels #thói quen',
        id: '12 pertanyaan A/B — 6 spektrum kecanduan konten pendek & resep. #shorts #reels #kebiasaan',
      },
      thumbnail: 'p3_test_shortform_addiction_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['숏폼', '릴스', '쇼츠', '중독'],
        en: ['Short-form', 'Reels', 'Shorts', 'Habits'],
        ja: ['ショート', 'リール', 'ショート動画', '習慣'],
        'zh-CN': ['短视频', 'Reels', 'Shorts', '习惯'],
        'zh-TW': ['短影音', 'Reels', 'Shorts', '習慣'],
        vi: ['Short-form', 'Reels', 'Shorts', 'Thói quen'],
        id: ['Short-form', 'Reels', 'Shorts', 'Kebiasaan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-spending-personality-type') {
    test = {
      slug: 'phase3-spending-personality-type',
      title: {
        ko: '나의 소비 성향 유형 분석',
        en: 'My Spending Personality Type',
        ja: '私の消費傾向タイプ分析',
        'zh-CN': '我的消费性格类型分析',
        'zh-TW': '我的消費性格類型分析',
        vi: 'Phân tích kiểu chi tiêu của tôi',
        id: 'Analisis Tipe Kepribadian Belanjaku',
      },
      description: {
        ko: '12문항 4지선다로 보는 소비 DNA 스펙트럼 8유형. #소비 #재테크 #심리 #공감',
        en: '12 questions, 4 choices — 8 spending DNA types. #spending #money #psychology',
        ja: '12問4択で見る消費DNAスペクトラム8タイプ。#消費 #お金 #心理',
        'zh-CN': '12 题四选一，八种消费 DNA 光谱。#消费 #理财 #心理',
        'zh-TW': '12 題四選一，八種消費 DNA 光譜。#消費 #理財 #心理',
        vi: '12 câu 4 lựa chọn — 8 kiểu DNA chi tiêu. #tiêu dùng #tài chính #tâm lý',
        id: '12 pertanyaan 4 pilihan — 8 tipe DNA belanja. #belanja #uang #psikologi',
      },
      thumbnail: 'p3_test_spending_personality_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['소비', '재테크', '심리', '공감'],
        en: ['Spending', 'Money', 'Psychology', 'Relatable'],
        ja: ['消費', 'お金', '心理', '共感'],
        'zh-CN': ['消费', '理财', '心理', '共鸣'],
        'zh-TW': ['消費', '理財', '心理', '共鳴'],
        vi: ['Chi tiêu', 'Tiền', 'Tâm lý', 'Đồng cảm'],
        id: ['Belanja', 'Uang', 'Psikologi', 'Relatable'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-adhd-tendency-checklist') {
    test = {
      slug: 'phase3-adhd-tendency-checklist',
      title: {
        ko: '나 혹시 ADHD 성향 있어?',
        en: '나 혹시 ADHD 성향 있어?',
        ja: '나 혹시 ADHD 성향 있어?',
        'zh-CN': '나 혹시 ADHD 성향 있어?',
        'zh-TW': '나 혹시 ADHD 성향 있어?',
        vi: '나 혹시 ADHD 성향 있어?',
        id: '나 혹시 ADHD 성향 있어?',
      },
      description: {
        ko: '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        en: '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        ja: '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        'zh-CN': '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        'zh-TW': '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        vi: '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        id: '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
      },
      thumbnail: 'p3_test_adhd_tendency_checklist.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['ADHD', '성향', '자기이해'],
        en: ['ADHD', '성향', '자기이해'],
        ja: ['ADHD', '성향', '자기이해'],
        'zh-CN': ['ADHD', '성향', '자기이해'],
        'zh-TW': ['ADHD', '성향', '자기이해'],
        vi: ['ADHD', '성향', '자기이해'],
        id: ['ADHD', '성향', '자기이해'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-burnout-fatigue-precision') {
    test = {
      slug: 'phase3-burnout-fatigue-precision',
      title: {
        ko: '혹시 나도 번아웃? 피로도 정밀 진단',
        en: 'Burnout Check: Precision Fatigue Diagnosis',
        ja: '私もバーンアウト？疲労度精密診断',
        'zh-CN': '我也会职业倦怠吗？疲劳度精密诊断',
        'zh-TW': '我也會職業倦怠嗎？疲勞度精密診斷',
        vi: 'Bạn có đang kiệt sức? Chẩn đoán mức mệt mỏi',
        id: 'Apakah aku burnout? Diagnosis kelelahan presisi',
      },
      description: {
        ko: '신체·감정·인지 3축으로 보는 번아웃·피로도 레벨. 12문항.',
        en: 'Burnout and fatigue levels across body, emotion, and cognition — 12 questions.',
        ja: '身体・感情・認知の3軸で見るバーンアウト／疲労度。12問。',
        'zh-CN': '从身体、情绪、认知三轴看你的倦怠与疲劳度，12 题。',
        'zh-TW': '從身體、情緒、認知三軸看你的倦怠與疲勞度，12 題。',
        vi: '3 trục: thể chất, cảm xúc, nhận thức — 12 câu.',
        id: 'Tiga sumbu: fisik, emosi, kognisi — 12 pertanyaan.',
      },
      thumbnail: 'p3_test_burnout_fatigue_level.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '직장', '멘탈'],
        en: ['Psychology', 'Work', 'Mental health'],
        ja: ['心理', '職場', 'メンタル'],
        'zh-CN': ['心理', '职场', '心理'],
        'zh-TW': ['心理', '職場', '心理'],
        vi: ['Tâm lý', 'Công sở', 'Sức khỏe tinh thần'],
        id: ['Psikologi', 'Kerja', 'Kesehatan mental'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-attachment-style-love') {
    test = {
      slug: 'phase3-attachment-style-love',
      title: {
        ko: '내 연애가 힘든 이유 (애착유형 분석)',
        en: 'Why Love Feels Hard (Attachment Style Analysis)',
        ja: '恋愛がしんどい理由（愛着タイプ分析）',
        'zh-CN': '恋爱好累的原因（依恋类型分析）',
        'zh-TW': '戀愛好累的原因（依戀類型分析）',
        vi: 'Tại sao yêu đương mệt mỏi (Phân tích kiểu gắn bó)',
        id: 'Kenapa cinta terasa berat (Analisis tipe melekat)',
      },
      description: {
        ko: '애착 유형으로 보는 나의 연애 패턴. 12문항 심리 분석.',
        en: 'Discover your dating patterns through attachment theory in 12 questions.',
        ja: '愛着理論で見る恋愛パターン。12問の心理分析。',
        'zh-CN': '从依恋类型看你的恋爱模式，12 道心理题。',
        'zh-TW': '從依戀類型看你的戀愛模式，12 道心理題。',
        vi: 'Mô hình yêu đương qua lý thuyết gắn bó — 12 câu hỏi tâm lý.',
        id: 'Pola asmaramu lewat teori melekat — 12 pertanyaan psikologi.',
      },
      thumbnail: 'p3_test_attachment_style_love.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '연애', '성격'],
        en: ['Psychology', 'Love', 'Personality'],
        ja: ['心理', '恋愛', '性格'],
        'zh-CN': ['心理', '恋爱', '性格'],
        'zh-TW': ['心理', '戀愛', '性格'],
        vi: ['Tâm lý', 'Tình yêu', 'Tính cách'],
        id: ['Psikologi', 'Cinta', 'Kepribadian'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-reincarnation-job') {
    test = {
      slug: 'phase3-reincarnation-job',
      title: {
        ko: '내가 환생한다면 어떤 직업?',
        en: 'If I Were Reborn, What Job Would I Have?',
        ja: '転生したら私はどんな職業？',
        'zh-CN': '如果转世，我会是什么职业？',
        'zh-TW': '如果轉世，我會是什麼職業？',
        vi: 'Nếu đầu thai, tôi sẽ là nghề gì?',
        id: 'Jika bereinkarnasi, pekerjaan apa aku?',
      },
      description: {
        ko: '12문항 2지선다로 보는 환생 직업·시대 6유형. #환생 #직업 #성격',
        en: 'Six reincarnation job types from 12 A/B questions. #Reincarnation #Job #Personality',
        ja: '12問2択で見る転生ジョブ・時代6タイプ。#転生 #職業 #性格',
        'zh-CN': '12 道二选一，六种转世职业与时代。#转世 #职业 #性格',
        'zh-TW': '12 題二選一，六種轉世職業與時代。#轉世 #職業 #性格',
        vi: '12 câu trắc nghiệm, 6 kiểu nghề & thời đại.#Đầu thai #Nghề #Tính cách',
        id: '12 pertanyaan pilihan ganda, 6 tipe pekerjaan & era.#Reinkarnasi #Pekerjaan #Kepribadian',
      },
      thumbnail: 'p3_test_reincarnation_job_finder.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['환생', '직업', '성격'],
        en: ['Reincarnation', 'Job', 'Personality'],
        ja: ['転生', '職業', '性格'],
        'zh-CN': ['转世', '职业', '性格'],
        'zh-TW': ['轉世', '職業', '性格'],
        vi: ['Đầu thai', 'Nghề', 'Tính cách'],
        id: ['Reinkarnasi', 'Pekerjaan', 'Kepribadian'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-couple-chemistry-analysis') {
    test = {
      slug: 'phase3-couple-chemistry-analysis',
      title: {
        ko: '우리 커플 궁합 케미 분석',
        en: 'Our Couple Chemistry Analysis',
        ja: '私たちのカップル相性ケミ分析',
        'zh-CN': '我们的情侣合拍化学反应分析',
        'zh-TW': '我們的情侶合拍化學反應分析',
        vi: 'Phân tích chemistry cặp đôi của chúng mình',
        id: 'Analisis chemistry pasangan kita',
      },
      description: {
        ko: '각자 12문항으로 연애 스타일 6유형, 두 유형 조합으로 커플 케미 21가지. #커플 #궁합 #케미 #연애 #찰떡',
        en: '12 questions each — 6 dating styles, 21 couple chemistry combos. #Couple #Compatibility #Chemistry',
        ja: 'それぞれ12問で恋愛スタイル6タイプ、組み合わせでカップルケミ21パターン。#カップル #相性',
        'zh-CN': '各答 12 题得恋爱风格 6 型，组合看 21 种情侣化学反应。#情侣 #合拍',
        'zh-TW': '各答 12 題得戀愛風格 6 型，組合看 21 種情侶化學反應。#情侶 #合拍',
        vi: 'Mỗi người 12 câu — 6 kiểu yêu, 21 tổ hợp chemistry. #Cặp đôi #Hợp gu',
        id: 'Masing-masing 12 pertanyaan — 6 gaya pacaran, 21 kombinasi chemistry. #Pasangan',
      },
      thumbnail: 'p3_test_couple_chemistry_analysis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['커플', '궁합', '케미', '연애', '찰떡'],
        en: ['Couple', 'Compatibility', 'Chemistry', 'Love', 'Match'],
        ja: ['カップル', '相性', 'ケミ', '恋愛', '相性抜群'],
        'zh-CN': ['情侣', '合拍', '化学反应', '恋爱', '绝配'],
        'zh-TW': ['情侶', '合拍', '化學反應', '戀愛', '絕配'],
        vi: ['Cặp đôi', 'Hợp gu', 'Chemistry', 'Tình yêu', 'Hợp cạ'],
        id: ['Pasangan', 'Cocok', 'Chemistry', 'Cinta', 'Cocok banget'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-personality-strength-weakness') {
    test = {
      slug: 'phase3-personality-strength-weakness',
      title: {
        ko: '내 성격의 장점과 단점 팩폭',
        en: 'Brutally Honest: Your Personality Strengths & Weaknesses',
        ja: '性格の長所と短所をド正論で',
        'zh-CN': '性格优缺点直球测评',
        'zh-TW': '性格優缺點直球測評',
        vi: 'Thật thà: Điểm mạnh & yếu tính cách',
        id: 'Jujur: Kelebihan & Kekurangan Kepribadianmu',
      },
      description: {
        ko: '장점·단점을 팩트로 말하는 성격 스펙트럼 6유형. 12문항 4지선다.',
        en: 'Six personality spectrum types with blunt pros and cons — 12 multiple-choice questions.',
        ja: '長所・短所をファクトで言い切る性格スペクトラム6タイプ。12問4択。',
        'zh-CN': '六种性格光谱，优缺点直说。12 道四选一。',
        'zh-TW': '六種性格光譜，優缺點直說。12 題四選一。',
        vi: '6 kiểu phổ tính cách nói thẳng ưu/nhược — 12 câu trắc nghiệm.',
        id: '6 spektrum kepribadian dengan pro/kontra blak-blakan — 12 soal pilihan ganda.',
      },
      thumbnail: 'p3_test_personality_strength_weakness.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '성격'],
        en: ['Psychology', 'Personality'],
        ja: ['心理', '性格'],
        'zh-CN': ['心理', '性格'],
        'zh-TW': ['心理', '性格'],
        vi: ['Tâm lý', 'Tính cách'],
        id: ['Psikologi', 'Kepribadian'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-yolo-fire-godlife-type') {
    test = {
      slug: 'phase3-yolo-fire-godlife-type',
      title: {
        ko: '나는 욜로족? 파이어족? 갓생족?',
        en: 'YOLO, FIRE, or God-Life Type?',
        ja: 'YOLO？FIRE？ゴッドライフ？',
        'zh-CN': '你是 YOLO、FIRE 还是自律人生型？',
        'zh-TW': '你是 YOLO、FIRE 還是自律人生型？',
        vi: 'Bạn thuộc kiểu YOLO, FIRE hay God-life?',
        id: 'Tipe YOLO, FIRE, atau God-life?',
      },
      description: {
        ko: '12문항 2지선다로 보는 인생 재무 철학 스펙트럼 6유형. #재무 #라이프스타일 #욜로',
        en: '12 A/B questions — 6 life-money philosophy types. #money #lifestyle #yolo',
        ja: '12問2択で見る人生×お金の哲学6タイプ。#お金 #ライフスタイル',
        'zh-CN': '12 道二选一，六种人生财务观。#理财 #生活方式',
        'zh-TW': '12 題二選一，六種人生財務觀。#理財 #生活方式',
        vi: '12 câu A/B — 6 kiểu triết lý tiền & cuộc sống. #tài chính #lifestyle',
        id: '12 pertanyaan A/B — 6 filosofi uang & hidup. #keuangan #gaya hidup',
      },
      thumbnail: 'p3_test_yolo_fire_godlife_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['재무', '라이프스타일', '욜로'],
        en: ['Money', 'Lifestyle', 'YOLO'],
        ja: ['お金', 'ライフスタイル', 'YOLO'],
        'zh-CN': ['理财', '生活方式', 'YOLO'],
        'zh-TW': ['理財', '生活方式', 'YOLO'],
        vi: ['Tài chính', 'Lifestyle', 'YOLO'],
        id: ['Keuangan', 'Gaya hidup', 'YOLO'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-love-red-flag-finder') {
    test = {
      slug: 'phase3-love-red-flag-finder',
      title: {
        ko: '내 연애 레드플래그 찾기',
        en: 'Find my dating red flags',
        ja: '恋愛レッドフラッグ診断',
        'zh-CN': '恋爱危险信号测验',
        'zh-TW': '戀愛危險信號測驗',
        vi: 'Tìm cờ đỏ yêu đương của tôi',
        id: 'Temukan red flag asmara',
      },
      description: {
        ko: '12문항 4지선다로 보는 연애 레드플래그 스펙트럼 6유형. #연애 #심리',
        en: '12 questions, 6 dating reaction patterns — honest mirror, not comfort. #love #psychology',
        ja: '全12問・恋愛の反応パターン6タイプ。甘い慰めはなし。#恋愛 #心理',
        'zh-CN': '12 题四选一，6 种恋爱反应模式；直白镜子，不灌鸡汤。#恋爱 #心理',
        'zh-TW': '12 題四選一，6 種戀愛反應模式；直白鏡子，不灌雞湯。#戀愛 #心理',
        vi: '12 câu trắc nghiệm, 6 kiểu phản ứng trong yêu — gương thật lòng. #tìnhyêu #tâmlý',
        id: '12 pertanyaan pilihan ganda, 6 pola reaksi asmara — cermin jujur. #asmara #psikologi',
      },
      thumbnail: 'p3_test_love_red_flag_finder.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '심리'],
        en: ['Love', 'Psychology'],
        ja: ['恋愛', '心理'],
        'zh-CN': ['恋爱', '心理'],
        'zh-TW': ['戀愛', '心理'],
        vi: ['Tình yêu', 'Tâm lý'],
        id: ['Asmara', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-love-green-flag-finder') {
    test = {
      slug: 'phase3-love-green-flag-finder',
      title: {
        ko: '나의 연애 그린플래그는?',
        en: 'What’s my dating green flag?',
        ja: '私の恋愛グリーンフラッグは？',
        'zh-CN': '我的恋爱绿旗是什么？',
        'zh-TW': '我的戀愛綠旗是什麼？',
        vi: 'Cờ xanh yêu đương của tôi là gì?',
        id: 'Bendera hijau asmara saya?',
      },
      description: {
        ko: '12문항 4지선다로 보는 연애 그린플래그 스펙트럼 6유형. #연애 #심리',
        en: '12 questions, 6 dating green-flag spectrum types. #love #psychology',
        ja: '全12問・恋愛グリーンフラッグ6タイプ。#恋愛 #心理',
        'zh-CN': '12 题四选一，6 种恋爱绿旗光谱。#恋爱 #心理',
        'zh-TW': '12 題四選一，6 種戀愛綠旗光譜。#戀愛 #心理',
        vi: '12 câu trắc nghiệm, 6 kiểu quang phổ cờ xanh yêu đương. #tìnhyêu #tâmlý',
        id: '12 pertanyaan pilihan ganda, 6 spektrum green flag asmara. #asmara #psikologi',
      },
      thumbnail: 'p3_test_love_green_flag_finder.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '심리'],
        en: ['Love', 'Psychology'],
        ja: ['恋愛', '心理'],
        'zh-CN': ['恋爱', '心理'],
        'zh-TW': ['戀愛', '心理'],
        vi: ['Tình yêu', 'Tâm lý'],
        id: ['Asmara', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-love-behavior-type') {
    test = {
      slug: 'phase3-love-behavior-type',
      title: {
        ko: '나는 연애할 때 어떤 유형?',
        en: 'What’s my dating behavior type?',
        ja: '恋愛中の私はどんなタイプ？',
        'zh-CN': '恋爱时我是哪种类型？',
        'zh-TW': '戀愛時我是哪種類型？',
        vi: 'Khi yêu mình thuộc kiểu nào?',
        id: 'Tipe perilaku asmara seperti apa?',
      },
      description: {
        ko: '12문항 2지선다로 보는 연애 행동 패턴 스펙트럼 8유형. #연애 #성격 #심리 #커플',
        en: '12 A/B questions — 8 dating behavior spectrum types. #love #personality #psychology #couple',
        ja: '12問2択で見る恋愛行動パターン8タイプ。#恋愛 #性格 #心理 #カップル',
        'zh-CN': '12 道二选一，八种恋爱行为模式。#恋爱 #性格 #心理 #情侣',
        'zh-TW': '12 題二選一，八種戀愛行為模式。#戀愛 #性格 #心理 #情侶',
        vi: '12 câu A/B — 8 kiểu quang phổ hành vi yêu. #tìnhyêu #tínhcách #tâmlý #cặpđôi',
        id: '12 pertanyaan A/B — 8 spektrum pola asmara. #asmara #kepribadian #psikologi #pasangan',
      },
      thumbnail: 'p3_test_love_behavior_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '성격', '심리', '커플'],
        en: ['Love', 'Personality', 'Psychology', 'Couple'],
        ja: ['恋愛', '性格', '心理', 'カップル'],
        'zh-CN': ['恋爱', '性格', '心理', '情侣'],
        'zh-TW': ['戀愛', '性格', '心理', '情侶'],
        vi: ['Tình yêu', 'Tính cách', 'Tâm lý', 'Cặp đôi'],
        id: ['Asmara', 'Kepribadian', 'Psikologi', 'Pasangan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-ideal-type-dna-analysis') {
    test = {
      slug: 'phase3-ideal-type-dna-analysis',
      title: {
        ko: '내가 좋아하는 사람의 유형 분석',
        en: 'Who Is My Ideal Type? Crush Pattern Analysis',
        ja: '好きになる人のタイプ分析',
        'zh-CN': '我喜欢的人类型分析',
        'zh-TW': '我喜歡的人類型分析',
        vi: 'Phân tích gu người mình thích',
        id: 'Analisis tipe orang yang kusuka',
      },
      description: {
        ko: '12문항 4지선다로 보는 이상형 DNA 스펙트럼 6유형. #연애 #이상형 #심리',
        en: '12 multiple-choice questions — 6 ideal-type DNA spectrum types. #love #crush #psychology',
        ja: '全12問4択で見る理想型DNAスペクトラム6タイプ。#恋愛 #理想型 #心理',
        'zh-CN': '12 道四选一，六种理想型 DNA 光谱。#恋爱 #理想型 #心理',
        'zh-TW': '12 題四選一，六種理想型 DNA 光譜。#戀愛 #理想型 #心理',
        vi: '12 câu trắc nghiệm — 6 kiểu quang phổ DNA người trong mơ. #tìnhyêu #gu #tâmlý',
        id: '12 pertanyaan pilihan ganda — 6 spektrum DNA tipe ideal. #asmara #ideal #psikologi',
      },
      thumbnail: 'p3_test_ideal_type_dna_analysis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '이상형', '심리'],
        en: ['Love', 'Crush', 'Psychology'],
        ja: ['恋愛', '理想型', '心理'],
        'zh-CN': ['恋爱', '理想型', '心理'],
        'zh-TW': ['戀愛', '理想型', '心理'],
        vi: ['Tình yêu', 'Gu', 'Tâm lý'],
        id: ['Asmara', 'Ideal', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-love-weakness-moment') {
    test = {
      slug: 'phase3-love-weakness-moment',
      title: {
        ko: '연애할 때 내가 무너지는 순간',
        en: 'The Moment I Break in Dating',
        ja: '恋で私が崩れる瞬間',
        'zh-CN': '恋爱里我崩溃的瞬间',
        'zh-TW': '戀愛裡我崩潰的瞬間',
        vi: 'Khoảnh khắc tôi gục khi yêu',
        id: 'Saat aku runtuh dalam cinta',
      },
      description: {
        ko: '12문항 4지선다로 보는 연애 약점 스펙트럼 6유형. #연애 #심리 #공감',
        en: '12 multiple-choice questions — 6 dating weakness spectrum types. #love #psychology #empathy',
        ja: '全12問4択で見る恋愛の弱点スペクトラム6タイプ。#恋愛 #心理 #共感',
        'zh-CN': '12 道四选一，六种恋爱弱点光谱。#恋爱 #心理 #共鸣',
        'zh-TW': '12 題四選一，六種戀愛弱點光譜。#戀愛 #心理 #共鳴',
        vi: '12 câu trắc nghiệm — 6 kiểu quang phổ điểm yếu khi yêu. #tìnhyêu #tâmlý #đồngcảm',
        id: '12 pertanyaan pilihan ganda — 6 spektrum titik lemah asmara. #cinta #psikologi #empati',
      },
      thumbnail: 'p3_test_love_weakness_moment.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '심리', '공감'],
        en: ['Love', 'Psychology', 'Empathy'],
        ja: ['恋愛', '心理', '共感'],
        'zh-CN': ['恋爱', '心理', '共鸣'],
        'zh-TW': ['戀愛', '心理', '共鳴'],
        vi: ['Tình yêu', 'Tâm lý', 'Đồng cảm'],
        id: ['Cinta', 'Psikologi', 'Empati'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-solo-escape-possibility') {
    test = {
      slug: 'phase3-solo-escape-possibility',
      title: {
        ko: '나의 솔로 탈출 가능성 분석기',
        en: 'My Solo Escape Possibility Analyzer',
        ja: '私のソロ脱出可能性分析',
        'zh-CN': '我的脱单可能性分析',
        'zh-TW': '我的脫單可能性分析',
        vi: 'Phân tích khả năng thoát ế của tôi',
        id: 'Analisis peluang lolos dari jomblo',
      },
      description: {
        ko: '12문항 4지선다로 보는 솔로 탈출 가능성 퍼센트 6유형. #솔로 #연애 #공감',
        en: '12 multiple-choice questions — 6 solo escape possibility types. #single #dating #relatable',
        ja: '全12問4択で見るソロ脱出可能性6タイプ。#ソロ #恋愛 #共感',
        'zh-CN': '12 道四选一，六种脱单可能性。#单身 #恋爱 #共鸣',
        'zh-TW': '12 題四選一，六種脫單可能性。#單身 #戀愛 #共鳴',
        vi: '12 câu — 6 mức khả năng thoát ế. #độc thân #tình yêu #đồng cảm',
        id: '12 pertanyaan — 6 tipe peluang lolos jomblo. #jomblo #asmara #relate',
      },
      thumbnail: 'p3_test_solo_escape_possibility.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['솔로', '연애', '공감'],
        en: ['Single', 'Dating', 'Relatable'],
        ja: ['ソロ', '恋愛', '共感'],
        'zh-CN': ['单身', '恋爱', '共鸣'],
        'zh-TW': ['單身', '戀愛', '共鳴'],
        vi: ['Độc thân', 'Tình yêu', 'Đồng cảm'],
        id: ['Jomblo', 'Asmara', 'Relate'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-love-prescription') {
    test = {
      slug: 'phase3-love-prescription',
      title: {
        ko: '나를 위한 연애 처방전',
        en: 'My Love Prescription',
        ja: '私のための恋愛処方箋',
        'zh-CN': '属于我的恋爱处方',
        'zh-TW': '屬於我的戀愛處方',
        vi: 'Đơn thuốc tình yêu dành cho tôi',
        id: 'Resep cinta untukku',
      },
      description: {
        ko: '12문항 4지선다로 보는 연애 고민 유형별 맞춤 처방전 6가지. #연애 #심리 #자기계발',
        en: '12 questions, 4 choices — 6 tailored love prescriptions by worry type. #love #psychology #growth',
        ja: '12問4択で見る恋愛悩みタイプ別処方箋6種。#恋愛 #心理 #自己成長',
        'zh-CN': '12 道四选一，六种恋爱烦恼对症处方。#恋爱 #心理 #自我成长',
        'zh-TW': '12 題四選一，六種戀愛煩惱對症處方。#戀愛 #心理 #自我成長',
        vi: '12 câu — 6 đơn thuốc theo kiểu lo lắng khi yêu. #tìnhyêu #tâmlý #pháttriển',
        id: '12 pertanyaan — 6 resep cinta sesuai pola. #cinta #psikologi #perkembangan',
      },
      thumbnail: 'p3_test_love_prescription.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '심리', '자기계발'],
        en: ['Love', 'Psychology', 'Growth'],
        ja: ['恋愛', '心理', '自己成長'],
        'zh-CN': ['恋爱', '心理', '自我成长'],
        'zh-TW': ['戀愛', '心理', '自我成長'],
        vi: ['Tình yêu', 'Tâm lý', 'Phát triển bản thân'],
        id: ['Cinta', 'Psikologi', 'Pengembangan diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-skincare-routine-recommendation') {
    test = {
      slug: 'phase3-skincare-routine-recommendation',
      title: {
        ko: '내 피부타입 맞춤 스킨케어 루틴',
        en: 'Custom Skincare Routine for Your Skin Type',
        ja: '肌タイプ別スキンケアルーティン',
        'zh-CN': '根据肤质的定制护肤流程',
        'zh-TW': '依膚質訂製的保養流程',
        vi: 'Lịch skincare theo loại da của bạn',
        id: 'Rutinitas skincare sesuai tipe kulit',
      },
      description: {
        ko: '12문항 4지선다로 보는 피부타입별 맞춤 스킨케어 루틴과 핵심 성분 6유형. #피부 #뷰티',
        en: '12 multiple-choice questions — 6 skin-type routines with key ingredients. #skin #beauty',
        ja: '全12問4択で見る肌タイプ別スキンケアとキー成分6タイプ。#スキンケア #美容',
        'zh-CN': '12 道四选一，六种肤质护肤流程与核心成分。#护肤 #美妆',
        'zh-TW': '12 題四選一，六種膚質保養流程與核心成分。#保養 #美妝',
        vi: '12 câu — 6 lịch skincare và thành phần chính theo loại da. #da #làm đẹp',
        id: '12 pertanyaan — 6 rutinitas dan bahan kunci sesuai tipe kulit. #kulit #kecantikan',
      },
      thumbnail: 'p3_test_skincare_routine_recommendation.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['피부', '뷰티'],
        en: ['Skin', 'Beauty'],
        ja: ['肌', 'ビューティ'],
        'zh-CN': ['护肤', '美妆'],
        'zh-TW': ['保養', '美妝'],
        vi: ['Da', 'Làm đẹp'],
        id: ['Kulit', 'Kecantikan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-drama-life-character') {
    test = {
      slug: 'phase3-drama-life-character',
      title: {
        ko: '드라마 속 내 인생 캐릭터',
        en: 'My Life as a Drama Character',
        ja: 'ドラマの中の私というキャラクター',
        'zh-CN': '我人生电视剧里的角色',
        'zh-TW': '我人生戲劇裡的角色',
        vi: 'Nhân vật phim trong đời tôi',
        id: 'Karakter drama dalam hidupku',
      },
      description: {
        ko: '12문항 2지선다로 보는 드라마 캐릭터 유형 6가지. #드라마 #캐릭터 #성격 #공감',
        en: '12 A/B questions — which drama character matches your life story? Six types. #drama #character #personality',
        ja: '12問2択で見る人生ドラマのキャラクター6タイプ。#ドラマ #キャラクター #性格 #共感',
        'zh-CN': '12 道二选一，六种人生剧角色类型。#电视剧 #角色 #性格 #共鸣',
        'zh-TW': '12 題二選一，六種人生劇角色類型。#戲劇 #角色 #性格 #共鳴',
        vi: '12 câu trắc nghiệm — 6 kiểu nhân vật phim giống câu chuyện đời bạn. #phim #nhân vật',
        id: '12 pertanyaan — 6 tipe karakter drama seperti kisah hidupmu. #drama #karakter',
      },
      thumbnail: 'p3_test_drama_character_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['드라마', '캐릭터', '성격', '공감'],
        en: ['Drama', 'Character', 'Personality', 'Empathy'],
        ja: ['ドラマ', 'キャラクター', '性格', '共感'],
        'zh-CN': ['电视剧', '角色', '性格', '共鸣'],
        'zh-TW': ['戲劇', '角色', '性格', '共鳴'],
        vi: ['Phim', 'Nhân vật', 'Tính cách', 'Đồng cảm'],
        id: ['Drama', 'Karakter', 'Kepribadian', 'Empati'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-meme-character-type') {
    test = {
      slug: 'phase3-meme-character-type',
      title: {
        ko: '나는 어떤 밈 캐릭터 재질?',
        en: 'What Meme Character Type Are You?',
        ja: 'あなたはどんなミームキャラタイプ？',
        'zh-CN': '你是什么表情包角色类型？',
        'zh-TW': '你是什麼迷因角色類型？',
        vi: 'Bạn là kiểu meme character nào?',
        id: 'Kamu tipe karakter meme apa?',
      },
      description: {
        ko: '당신은 어떤 밈 재질인가요?',
        en: 'What meme character type are you?',
        ja: 'あなたはどんなミームの素質？',
        'zh-CN': '你是什么表情包体质？',
        'zh-TW': '你是什麼迷因體質？',
        vi: 'Bạn thuộc kiểu meme nào?',
        id: 'Kamu tipe meme yang mana?',
      },
      thumbnail: 'p3_test_meme_character_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['밈', '성격', '공감', 'MZ', '바이럴'],
        en: ['Meme', 'Personality', 'Empathy', 'Gen Z', 'Viral'],
        ja: ['ミーム', '性格', '共感', 'MZ', 'バイラル'],
        'zh-CN': ['表情包', '性格', '共鸣', 'Z世代', '病毒式传播'],
        'zh-TW': ['迷因', '性格', '共鳴', 'Z世代', '病毒式傳播'],
        vi: ['Meme', 'Tính cách', 'Đồng cảm', 'Gen Z', 'Viral'],
        id: ['Meme', 'Kepribadian', 'Empati', 'Gen Z', 'Viral'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-kdrama-lead-character-type') {
    test = {
      slug: 'phase3-kdrama-lead-character-type',
      title: {
        ko: 'K-드라마 주인공 재질 테스트',
        en: 'K-Drama Lead Character Type Test',
        ja: 'K-ドラマ主人公タイプ診断',
        'zh-CN': 'K剧主角类型测试',
        'zh-TW': 'K劇主角類型測試',
        vi: 'Bài test kiểu nhân vật chính K-Drama',
        id: 'Tes Tipe Karakter Utama K-Drama',
      },
      description: {
        ko: '당신의 일상은 어떤 K-드라마와 닮아 있나요?',
        en: 'Which K-drama does your daily life resemble?',
        ja: 'あなたの日常はどんなK-ドラマに似ている？',
        'zh-CN': '你的日常像哪部K剧？',
        'zh-TW': '你的日常像哪部K劇？',
        vi: 'Cuộc sống hàng ngày của bạn giống K-Drama nào?',
        id: 'Kehidupan sehari-harimu mirip K-Drama yang mana?',
      },
      thumbnail: 'p3_test_kdrama_lead_character_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['K드라마', '주인공', '성격', '드라마', '한류'],
        en: ['K-Drama', 'Protagonist', 'Personality', 'Drama', 'Hallyu'],
        ja: ['K-ドラマ', '主人公', '性格', 'ドラマ', '韓流'],
        'zh-CN': ['K剧', '主角', '性格', '电视剧', '韩流'],
        'zh-TW': ['K劇', '主角', '性格', '戲劇', '韓流'],
        vi: ['K-Drama', 'Nhân vật chính', 'Tính cách', 'Phim', 'Hallyu'],
        id: ['K-Drama', 'Protagonis', 'Kepribadian', 'Drama', 'Hallyu'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-ditto-consumption-type') {
    test = {
      slug: 'phase3-ditto-consumption-type',
      title: {
        ko: '나의 디토소비 유형',
        en: 'My Ditto Consumption Type',
        ja: '私のディトゥー消費タイプ',
        'zh-CN': '我的跟风消费类型',
        'zh-TW': '我的跟風消費類型',
        vi: 'Kiểu tiêu dùng Ditto của tôi',
        id: 'Tipe Konsumsi Ditto Saya',
      },
      description: {
        ko: '12가지 질문으로 나의 디토소비 패턴을 분석합니다.',
        en: 'Analyze your ditto consumption pattern in 12 questions.',
        ja: '12問であなたのディトゥー消費パターンを分析します。',
        'zh-CN': '用12道题分析你的跟风消费模式。',
        'zh-TW': '用12道題分析你的跟風消費模式。',
        vi: 'Phân tích kiểu tiêu dùng Ditto của bạn qua 12 câu hỏi.',
        id: 'Analisis pola konsumsi Ditto-mu lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_ditto_consumption_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['디토소비', '소비패턴', '트렌드', '인플루언서', '브랜드'],
        en: ['Ditto consumption', 'Spending pattern', 'Trend', 'Influencer', 'Brand'],
        ja: ['ディトゥー消費', '消費パターン', 'トレンド', 'インフルエンサー', 'ブランド'],
        'zh-CN': ['跟风消费', '消费模式', '趋势', '网红', '品牌'],
        'zh-TW': ['跟風消費', '消費模式', '趨勢', '網紅', '品牌'],
        vi: ['Tiêu dùng Ditto', 'Mẫu chi tiêu', 'Xu hướng', 'Influencer', 'Thương hiệu'],
        id: ['Konsumsi Ditto', 'Pola belanja', 'Tren', 'Influencer', 'Brand'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-solo-drinking-type') {
    test = {
      slug: 'phase3-solo-drinking-type',
      title: {
        ko: '나의 혼술 유형과 술버릇',
        en: 'My Solo Drinking Type & Habits',
        ja: '私のひとり飲みタイプと飲酒習慣',
        'zh-CN': '我的独自饮酒类型与饮酒习惯',
        'zh-TW': '我的獨自飲酒類型與飲酒習慣',
        vi: 'Kiểu uống một mình & thói quen uống của tôi',
        id: 'Tipe Minum Sendiri & Kebiasaan Minum Saya',
      },
      description: {
        ko: '직관적으로 끌리는 이미지를 선택하면 나의 혼술 DNA와 술버릇을 정확하게 분석해 드립니다.',
        en: 'Choose images that intuitively draw you in — we accurately analyze your solo drinking DNA and drinking habits.',
        ja: '直感で惹かれる画像を選ぶと、あなたのひとり飲みDNAと飲酒習慣を正確に分析します。',
        'zh-CN': '选择直觉吸引你的图片，我们将准确分析你的独自饮酒DNA和饮酒习惯。',
        'zh-TW': '選擇直覺吸引你的圖片，我們將準確分析你的獨自飲酒DNA和飲酒習慣。',
        vi: 'Chọn hình ảnh bạn thấy hấp dẫn theo trực giác — phân tích chính xác DNA uống một mình và thói quen uống của bạn.',
        id: 'Pilih gambar yang menarik secara intuitif — kami analisis DNA minum sendiri dan kebiasaan minummu dengan akurat.',
      },
      thumbnail: 'p3_test_solo_drinking_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['혼술', '술버릇', '음주', '안주', '공감'],
        en: ['Solo drinking', 'Drinking habits', 'Alcohol', 'Snacks', 'Empathy'],
        ja: ['ひとり飲み', '飲酒習慣', 'お酒', 'おつまみ', '共感'],
        'zh-CN': ['独自饮酒', '饮酒习惯', '喝酒', '下酒菜', '共鸣'],
        'zh-TW': ['獨自飲酒', '飲酒習慣', '喝酒', '下酒菜', '共鳴'],
        vi: ['Uống một mình', 'Thói quen uống', 'Rượu bia', 'Mồi nhậu', 'Đồng cảm'],
        id: ['Minum sendiri', 'Kebiasaan minum', 'Alkohol', 'Camilan', 'Empati'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-insta-feed-persona-analysis') {
    test = {
      slug: 'phase3-insta-feed-persona-analysis',
      title: {
        ko: '나의 인스타 피드 성향 분석',
        en: 'My Instagram Feed Persona Analysis',
        ja: '私のインスタフィード傾向分析',
        'zh-CN': '我的Instagram feed倾向分析',
        'zh-TW': '我的Instagram feed傾向分析',
        vi: 'Phân tích xu hướng feed Instagram của tôi',
        id: 'Analisis Persona Feed Instagram Saya',
      },
      description: {
        ko: '직관적으로 끌리는 이미지를 선택하면 나의 인스타그램 큐레이션 방식과 업로드 습관, 소비 패턴을 분석해 나의 인스타 페르소나를 찾아드립니다.',
        en: 'Choose images that intuitively draw you in — we analyze your Instagram curation style, upload habits, and consumption patterns to find your feed persona.',
        ja: '直感で惹かれる画像を選ぶと、Instagramのキュレーション方式・投稿習慣・消費パターンを分析し、あなたのインスタペルソナを見つけます。',
        'zh-CN': '选择直觉吸引你的图片，分析你的Instagram策展方式、发布习惯和消费模式，找出你的Instagram persona。',
        'zh-TW': '選擇直覺吸引你的圖片，分析你的Instagram策展方式、發布習慣和消費模式，找出你的Instagram persona。',
        vi: 'Chọn hình ảnh bạn thấy hấp dẫn theo trực giác — phân tích cách curate, thói quen đăng bài và mô hình tiêu thụ Instagram để tìm persona feed của bạn.',
        id: 'Pilih gambar yang menarik secara intuitif — kami analisis gaya kurasi, kebiasaan upload, dan pola konsumsi Instagram untuk menemukan persona feed Anda.',
      },
      thumbnail: 'p3_test_insta_feed_persona_analysis.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['인스타그램', '소셜미디어', '인플루언서'],
        en: ['Instagram', 'Social media', 'Influencer'],
        ja: ['Instagram', 'ソーシャルメディア', 'インフルエンサー'],
        'zh-CN': ['Instagram', '社交媒体', '网红'],
        'zh-TW': ['Instagram', '社交媒體', '網紅'],
        vi: ['Instagram', 'Mạng xã hội', 'Influencer'],
        id: ['Instagram', 'Media sosial', 'Influencer'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-solo-dining-type') {
    test = {
      slug: 'phase3-solo-dining-type',
      title: {
        ko: '나의 혼밥 유형',
        en: 'My Solo Dining Type',
        ja: '私のひとりご飯タイプ',
        'zh-CN': '我的独自用餐类型',
        'zh-TW': '我的獨自用餐類型',
        vi: 'Kiểu ăn một mình của tôi',
        id: 'Tipe Makan Sendiri Saya',
      },
      description: {
        ko: '직관적으로 끌리는 이미지를 선택하면 나의 혼밥 유형과 숨겨진 성향을 분석해 드립니다.',
        en: 'Choose images that intuitively draw you in — we analyze your solo dining type and hidden personality traits.',
        ja: '直感で惹かれる画像を選ぶと、あなたのひとりご飯タイプと隠れた性格傾向を分析します。',
        'zh-CN': '选择直觉吸引你的图片，分析你的独自用餐类型和隐藏性格倾向。',
        'zh-TW': '選擇直覺吸引你的圖片，分析你的獨自用餐類型和隱藏性格傾向。',
        vi: 'Chọn hình ảnh bạn thấy hấp dẫn theo trực giác — phân tích kiểu ăn một mình và tính cách ẩn của bạn.',
        id: 'Pilih gambar yang menarik secara intuitif — kami analisis tipe makan sendiri dan sifat tersembunyi Anda.',
      },
      thumbnail: 'p3_test_solo_dining_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['혼밥', '혼자', '식사', '성격', '공감'],
        en: ['Solo dining', 'Alone', 'Eating', 'Personality', 'Empathy'],
        ja: ['ひとりご飯', '一人', '食事', '性格', '共感'],
        'zh-CN': ['独自用餐', '一个人', '吃饭', '性格', '共鸣'],
        'zh-TW': ['獨自用餐', '一個人', '吃飯', '性格', '共鳴'],
        vi: ['Ăn một mình', 'Một mình', 'Ăn uống', 'Tính cách', 'Đồng cảm'],
        id: ['Makan sendiri', 'Sendirian', 'Makan', 'Kepribadian', 'Empati'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-exercise-persistence-type') {
    test = {
      slug: 'phase3-exercise-persistence-type',
      title: {
        ko: '나의 운동 지속력 유형',
        en: 'My Exercise Persistence Type',
        ja: '私の運動継続力タイプ',
        'zh-CN': '我的运动持续力类型',
        'zh-TW': '我的運動持續力類型',
        vi: 'Kiểu duy trì tập luyện của tôi',
        id: 'Tipe Konsistensi Olahraga Saya',
      },
      description: {
        ko: '12가지 질문으로 나의 운동 지속을 방해하는 진짜 장애물 유형을 찾고 맞춤 극복 전략을 드립니다.',
        en: 'Find what really blocks your exercise consistency in 12 questions and get personalized strategies to overcome it.',
        ja: '12問で運動継続を妨げる本当の障害タイプを見つけ、今すぐ使える克服戦略をお届けします。',
        'zh-CN': '用12道题找出真正阻碍你坚持运动的障碍类型，并提供量身定制的克服策略。',
        'zh-TW': '用12道題找出真正阻礙你堅持運動的障礙類型，並提供量身定制的克服策略。',
        vi: 'Tìm loại trở ngại thật sự cản trở việc duy trì tập luyện qua 12 câu hỏi và nhận chiến lược vượt qua phù hợp.',
        id: 'Temukan hambatan sebenarnya yang menghalangi konsistensi olahraga lewat 12 pertanyaan dan dapatkan strategi mengatasinya.',
      },
      thumbnail: 'p3_test_exercise_persistence_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['운동', '헬스', '작심삼일', '지속력', '갓생'],
        en: ['Exercise', 'Gym', 'Quit after 3 days', 'Persistence', 'Self-improvement'],
        ja: ['運動', 'ジム', '三日坊主', '継続力', '自己改善'],
        'zh-CN': ['运动', '健身', '三天打鱼', '持续力', '自律生活'],
        'zh-TW': ['運動', '健身', '三天打魚', '持續力', '自律生活'],
        vi: ['Tập luyện', 'Gym', 'Bỏ cuộc sớm', 'Kiên trì', 'Cải thiện bản thân'],
        id: ['Olahraga', 'Gym', 'Males 3 hari', 'Konsistensi', 'Self-improvement'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-chronotype-morning-evening') {
    test = {
      slug: 'phase3-chronotype-morning-evening',
      title: {
        ko: '나의 아침형 vs 저녁형 인간 정밀 분석',
        en: 'My Morning vs Evening Person — Precision Chronotype Analysis',
        ja: '私の朝型 vs 夜型人間 精密分析',
        'zh-CN': '我的晨型 vs 夜型人类精密分析',
        'zh-TW': '我的晨型 vs 夜型人類精密分析',
        vi: 'Phân tích chính xác kiểu người Sáng vs Tối của tôi',
        id: 'Analisis Presisi Tipe Pagi vs Malam Saya',
      },
      description: {
        ko: '12문항으로 나의 크로노타입(생체 리듬)을 정밀 분석합니다.',
        en: 'Analyze your chronotype (body clock) precisely in 12 questions.',
        ja: '12問であなたのクロノタイプ（生体リズム）を精密分析します。',
        'zh-CN': '用12道题精密分析你的昼夜节律（生物钟）。',
        'zh-TW': '用12道題精密分析你的晝夜節律（生物鐘）。',
        vi: 'Phân tích chính xác chronotype (nhịp sinh học) qua 12 câu hỏi.',
        id: 'Analisis presisi kronotipe (ritme tubuh) lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_chronotype_morning_evening.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['크로노타입', '아침형', '저녁형', '생체리듬', '수면'],
        en: ['Chronotype', 'Morning type', 'Evening type', 'Body rhythm', 'Sleep'],
        ja: ['クロノタイプ', '朝型', '夜型', '生体リズム', '睡眠'],
        'zh-CN': ['昼夜节律', '晨型', '夜型', '生物节律', '睡眠'],
        'zh-TW': ['晝夜節律', '晨型', '夜型', '生物節律', '睡眠'],
        vi: ['Chronotype', 'Kiểu sáng', 'Kiểu tối', 'Nhịp sinh học', 'Giấc ngủ'],
        id: ['Kronotipe', 'Tipe pagi', 'Tipe malam', 'Ritme tubuh', 'Tidur'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-dopamine-type-analysis') {
    test = {
      slug: 'phase3-dopamine-type-analysis',
      title: {
        ko: '날 미치게 하는! 도파민 유형',
        en: 'What Drives Your Dopamine?',
        ja: '私を夢中にさせる！ドーパミンタイプ',
        'zh-CN': '让我上瘾的！多巴胺类型',
        'zh-TW': '讓我上癮的！多巴胺類型',
        vi: 'Thứ khiến tôi phấn khích! Kiểu dopamine',
        id: 'Yang bikin aku ketagihan! Tipe dopamin',
      },
      description: {
        ko: '12문항 4지선다로 보는 도파민 충전 유형 6가지. #도파민 #성격 #공감',
        en: '12 multiple-choice questions — six dopamine recharge types. #dopamine #personality #relatable',
        ja: '12問4択で見るドーパミン充電タイプ6種。#ドーパミン #性格 #共感',
        'zh-CN': '12 道四选一，六种多巴胺充电类型。#多巴胺 #性格 #共鸣',
        'zh-TW': '12 題四選一，六種多巴胺充電類型。#多巴胺 #性格 #共鳴',
        vi: '12 câu trắc nghiệm — 6 kiểu nạp dopamine. #dopamine #tính cách #đồng cảm',
        id: '12 pertanyaan pilihan ganda — 6 tipe dopamin. #dopamin #kepribadian #relate',
      },
      thumbnail: 'p3_test_dopamine_type_analysis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['도파민', '성격', '공감'],
        en: ['Dopamine', 'Personality', 'Relatable'],
        ja: ['ドーパミン', '性格', '共感'],
        'zh-CN': ['多巴胺', '性格', '共鸣'],
        'zh-TW': ['多巴胺', '性格', '共鳴'],
        vi: ['Dopamine', 'Tính cách', 'Đồng cảm'],
        id: ['Dopamin', 'Kepribadian', 'Relate'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-villain-dna-test') {
    test = {
      slug: 'phase3-villain-dna-test',
      title: {
        ko: '내 안의 흑염룡! 빌런 재질 테스트',
        en: 'Black Flame Within! Villain DNA Test',
        ja: '内なる黒炎！悪役DNAテスト',
        'zh-CN': '内心的黑炎！反派DNA测试',
        'zh-TW': '內心的黑炎！反派DNA測驗',
        vi: 'Ngọn lửa đen trong tôi! Test DNA phản diện',
        id: 'Api Hitam di Dalam! Tes DNA Villain',
      },
      description: {
        ko: '12문항 2지선다로 보는 빌런 DNA 유형 6가지. #빌런 #성격 #웹툰 #드라마 #공감',
        en: '12 A/B questions — six villain DNA types. #villain #personality #webtoon #drama #relatable',
        ja: '12問2択で見る悪役DNAタイプ6種。#悪役 #性格 #ウェブトゥーン #ドラマ #共感',
        'zh-CN': '12 道二选一，六种反派 DNA 类型。#反派 #性格 #网漫 #电视剧 #共鸣',
        'zh-TW': '12 題二選一，六種反派 DNA 類型。#反派 #性格 #網漫 #戲劇 #共鳴',
        vi: '12 câu trắc nghiệm — 6 kiểu DNA phản diện. #phản diện #tính cách #webtoon #drama #đồng cảm',
        id: '12 pertanyaan pilihan ganda — 6 tipe DNA villain. #villain #kepribadian #webtoon #drama #relate',
      },
      thumbnail: 'p3_test_villain_dna_test.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['빌런', '성격', '웹툰', '드라마', '공감'],
        en: ['Villain', 'Personality', 'Webtoon', 'Drama', 'Relatable'],
        ja: ['悪役', '性格', 'ウェブトゥーン', 'ドラマ', '共感'],
        'zh-CN': ['反派', '性格', '网漫', '电视剧', '共鸣'],
        'zh-TW': ['反派', '性格', '網漫', '戲劇', '共鳴'],
        vi: ['Phản diện', 'Tính cách', 'Webtoon', 'Drama', 'Đồng cảm'],
        id: ['Villain', 'Kepribadian', 'Webtoon', 'Drama', 'Relate'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-some-vs-relationship-timing') {
    test = {
      slug: 'phase3-some-vs-relationship-timing',
      title: {
        ko: '썸 vs 연애 결정 타이밍 진단',
        en: 'Some vs Dating: When to Make It Official',
        ja: 'サマ恋・告白タイミング診断',
        'zh-CN': '暧昧 vs 恋爱：告白时机诊断',
        'zh-TW': '曖昧 vs 戀愛：告白時機診斷',
        vi: 'Mập mờ vs yêu: thời điểm tỏ tình',
        id: 'Some vs pacaran: waktu tepat menyatakan cinta',
      },
      description: {
        ko: '12문항 4지선다로 관계 신호와 고백·정리 타이밍 처방까지. #연애 #심리 #관계',
        en: '12 multiple-choice questions — relationship signals plus timing advice. #love #psychology #relationships',
        ja: '12問4択で関係のサインと告白・整理のタイミング。#恋愛 #心理 #関係',
        'zh-CN': '12 道四选一：关系信号与告白/整理时机建议。#恋爱 #心理 #关系',
        'zh-TW': '12 題四選一：關係訊號與告白／整理時機建議。#戀愛 #心理 #關係',
        vi: '12 câu 4 lựa chọn — tín hiệu và lời khuyên thời điểm. #yêu #tâm_lý #quan_hệ',
        id: '12 soal 4 pilihan — sinyal hubungan & saran waktu. #cinta #psikologi #hubungan',
      },
      thumbnail: 'p3_test_some_vs_relationship_timing.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '심리', '관계'],
        en: ['Love', 'Psychology', 'Relationships'],
        ja: ['恋愛', '心理', '関係'],
        'zh-CN': ['恋爱', '心理', '关系'],
        'zh-TW': ['戀愛', '心理', '關係'],
        vi: ['Tình yêu', 'Tâm lý', 'Quan hệ'],
        id: ['Cinta', 'Psikologi', 'Hubungan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-hidden-sub-character') {
    test = {
      slug: 'phase3-hidden-sub-character',
      title: {
        ko: '본캐 말고! 나의 부캐 찾기',
        en: 'Not Your Main Self — Find My Hidden Persona',
        ja: '本キャラじゃない！私の裏キャラ診断',
        'zh-CN': '不是本我！找出我的隐藏人设',
        'zh-TW': '不是本我！找出我的隱藏人設',
        vi: 'Không phải bản chính — Tìm persona ẩn của tôi',
        id: 'Bukan diri utama — Temukan persona tersembunyi',
      },
      description: {
        ko: '12문항 2지선다로 보는 부캐 유형 6가지. #부캐 #성격 #재미 #자기폭로 #MZ',
        en: '12 A/B questions — six hidden persona types. #persona #fun #MZ',
        ja: '12問2択で見る裏キャラ6タイプ。#裏キャラ #性格 #エンタメ',
        'zh-CN': '12 道二选一，六种隐藏人设类型。#人设 #性格 #趣味',
        'zh-TW': '12 題二選一，六種隱藏人設類型。#人設 #性格 #趣味',
        vi: '12 câu — 6 kiểu persona ẩn. #persona #tính cách #vui',
        id: '12 pertanyaan — 6 tipe persona tersembunyi. #persona #kepribadian',
      },
      thumbnail: 'p3_test_hidden_sub_character.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['부캐', '성격', '재미', '자기폭로', 'MZ'],
        en: ['Persona', 'Personality', 'Fun', 'Relatable', 'MZ'],
        ja: ['裏キャラ', '性格', 'エンタメ', '共感', 'MZ'],
        'zh-CN': ['人设', '性格', '趣味', '共鸣', 'MZ'],
        'zh-TW': ['人設', '性格', '趣味', '共鳴', 'MZ'],
        vi: ['Persona', 'Tính cách', 'Vui', 'Đồng cảm', 'MZ'],
        id: ['Persona', 'Kepribadian', 'Seru', 'Relate', 'MZ'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-dumb-spending-diagnosis') {
    test = {
      slug: 'phase3-dumb-spending-diagnosis',
      title: {
        ko: '줄줄 새는 돈! 나의 멍청비용 진단',
        en: 'Money Leaking Away! My Dumb Spending Diagnosis',
        ja: 'どんどん漏れるお金！私のムダ遣い診断',
        'zh-CN': '钱不知不觉溜走！我的冤枉钱诊断',
        'zh-TW': '錢不知不覺溜走！我的冤枉錢診斷',
        vi: 'Tiền cứ thế trôi! Chẩn đoán lãng phí của tôi',
        id: 'Uang Merembes! Diagnosis Borosku',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 멍청비용 패턴 6유형. #재테크 #절약 #소비습관 #공감 #멍청비용',
        en: '12 text MCQs — 6 dumb spending patterns. #money #saving #habits #relatable',
        ja: 'テキスト12問4択で見るムダ遣いパターン6タイプ。#節約 #お金',
        'zh-CN': '12 道文字四选一，六种冤枉钱模式。#理财 #省钱',
        'zh-TW': '12 題文字四選一，六種冤枉錢模式。#理財 #省錢',
        vi: '12 câu chữ 4 đáp án — 6 kiểu lãng phí. #tiền #tiết kiệm',
        id: '12 soal teks 4 opsi — 6 pola boros. #uang #hemat',
      },
      thumbnail: 'p3_test_dumb_spending_diagnosis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['재테크', '절약', '소비습관', '공감', '멍청비용'],
        en: ['Money', 'Saving', 'Spending', 'Relatable', 'MZ'],
        ja: ['節約', 'お金', '共感', 'MZ'],
        'zh-CN': ['理财', '省钱', '消费', '共鸣'],
        'zh-TW': ['理財', '省錢', '消費', '共鳴'],
        vi: ['Tài chính', 'Tiết kiệm', 'Chi tiêu', 'Đồng cảm'],
        id: ['Keuangan', 'Hemat', 'Belanja', 'Relate'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-zero-spending-challenge') {
    test = {
      slug: 'phase3-zero-spending-challenge',
      title: {
        ko: '무지출 챌린지 성공 가능성은?',
        en: 'Zero-Spend Challenge: Your Success Odds',
        ja: '無支出チャレンジ成功の可能性は？',
        'zh-CN': '零消费挑战成功率是多少？',
        'zh-TW': '零消費挑戰成功率是多少？',
        vi: 'Thử thách chi 0 đồng: khả năng thành công của bạn?',
        id: 'Tantangan belanja nol: peluang suksesmu?',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 무지출 챌린지 성공 확률 6구간. #챌린지 #소비습관 #재테크',
        en: '12 text MCQs — 6 success-rate bands for a zero-spend day. #challenge #spending #money',
        ja: 'テキスト12問4択で見る無支出チャレンジ成功確率6段階。#チャレンジ #節約',
        'zh-CN': '12 道文字四选一，六种零消费日成功概率区间。#挑战 #消费 #理财',
        'zh-TW': '12 題文字四選一，六種零消費日成功機率區間。#挑戰 #消費 #理財',
        vi: '12 câu chữ 4 đáp án — 6 mức xác suất chi 0 đồng. #thử thách #chi tiêu',
        id: '12 soal teks 4 opsi — 6 rentang peluang sukses belanja Rp0. #tantangan #uang',
      },
      thumbnail: 'p3_test_zero_spending_challenge_rate.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['챌린지', '소비습관', '재테크'],
        en: ['Challenge', 'Spending habits', 'Money'],
        ja: ['チャレンジ', '消費', 'お金'],
        'zh-CN': ['挑战', '消费习惯', '理财'],
        'zh-TW': ['挑戰', '消費習慣', '理財'],
        vi: ['Thử thách', 'Thói chi tiêu', 'Tài chính'],
        id: ['Tantangan', 'Kebiasaan belanja', 'Uang'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-stress-relief-type') {
    test = {
      slug: 'phase3-stress-relief-type',
      title: {
        ko: '나의 스트레스 해소 유형',
        en: 'My Stress Relief Type',
        ja: '私のストレス解消タイプ',
        'zh-CN': '我的压力舒缓类型',
        'zh-TW': '我的壓力舒緩類型',
        vi: 'Kiểu xả stress của tôi',
        id: 'Tipe pelegaan stresku',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 스트레스 해소 유형 6가지와 최적 회복 루틴. #스트레스 #힐링 #회복 #루틴 #자기돌봄',
        en: '12 text MCQs — 6 stress-relief types and an optimal recovery routine. #stress #healing #selfcare',
        ja: 'テキスト12問4択で見るストレス解消タイプ6種と最適リカバリー。#ストレス #ヒーリング',
        'zh-CN': '12 道文字四选一，六种压力舒缓类型与最佳恢复流程。#压力 #疗愈 #自我照顾',
        'zh-TW': '12 題文字四選一，六種壓力舒緩類型與最佳恢復流程。#壓力 #療癒 #自我照顧',
        vi: '12 câu chữ 4 đáp án — 6 kiểu xả stress và routine phục hồi tối ưu. #stress #chămsócbảnthân',
        id: '12 soal teks 4 opsi — 6 tipe pelegaan stres & rutinitas pemulihan. #stres #perawatandiri',
      },
      thumbnail: 'p3_test_stress_relief_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['스트레스', '힐링', '회복', '루틴', '자기돌봄'],
        en: ['Stress', 'Healing', 'Recovery', 'Routine', 'Self-care'],
        ja: ['ストレス', 'ヒーリング', '回復', 'ルーティン', 'セルフケア'],
        'zh-CN': ['压力', '疗愈', '恢复', '习惯', '自我照顾'],
        'zh-TW': ['壓力', '療癒', '恢復', '習慣', '自我照顧'],
        vi: ['Stress', 'Chữa lành', 'Phục hồi', 'Thói quen', 'Chăm sóc bản thân'],
        id: ['Stres', 'Penyembuhan', 'Pemulihan', 'Rutinitas', 'Perawatan diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-sleep-type-prescription') {
    test = {
      slug: 'phase3-sleep-type-prescription',
      title: {
        ko: '나의 수면 유형과 숙면 처방전',
        en: 'My Sleep Type & Good-Sleep Prescription',
        ja: '私の睡眠タイプと熟睡の処方箋',
        'zh-CN': '我的睡眠类型与好睡处方',
        'zh-TW': '我的睡眠類型與好睡處方',
        vi: 'Kiểu ngủ của tôi & đơn ngủ ngon',
        id: 'Tipe tidurku & resep tidur nyenyak',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 수면 유형 6가지와 숙면 처방전. #수면 #숙면 #불면 #건강 #루틴',
        en: '12 text questions (4 choices) — 6 sleep types and a good-sleep prescription. #sleep #deepsleep #insomnia #health #routine',
        ja: 'テキスト12問4択で見る睡眠タイプ6種と熟睡の処方箋。#睡眠 #熟睡 #不眠 #健康 #ルーティン',
        'zh-CN': '12 道文字四选一，六种睡眠类型与好睡处方。#睡眠 #熟睡 #失眠 #健康 #习惯',
        'zh-TW': '12 題文字四選一，六種睡眠類型與好睡處方。#睡眠 #熟睡 #失眠 #健康 #習慣',
        vi: '12 câu chữ 4 đáp án — 6 kiểu ngủ và đơn ngủ ngon. #ngủ #ngủngon #mấtngủ #suckhoe #thoiquen',
        id: '12 soal teks 4 opsi — 6 tipe tidur & resep tidur nyenyak. #tidur #tidurnyenyak #insomnia #kesehatan #rutinitas',
      },
      thumbnail: 'p3_test_sleep_type_prescription.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['수면', '숙면', '불면', '건강', '루틴'],
        en: ['Sleep', 'Good sleep', 'Insomnia', 'Health', 'Routine'],
        ja: ['睡眠', '熟睡', '不眠', '健康', 'ルーティン'],
        'zh-CN': ['睡眠', '熟睡', '失眠', '健康', '习惯'],
        'zh-TW': ['睡眠', '熟睡', '失眠', '健康', '習慣'],
        vi: ['Giấc ngủ', 'Ngủ ngon', 'Mất ngủ', 'Sức khỏe', 'Routine'],
        id: ['Tidur', 'Tidur nyenyak', 'Insomnia', 'Kesehatan', 'Rutinitas'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-my-hashtag-generator') {
    test = {
      slug: 'phase3-my-hashtag-generator',
      title: {
        ko: '나만의 해시태그 생성기',
        en: 'My Hashtag Generator',
        ja: '私だけのハッシュタグ生成',
        'zh-CN': '我的专属话题标签生成器',
        'zh-TW': '我的專屬話題標籤產生器',
        vi: 'Trình tạo hashtag của riêng tôi',
        id: 'Pembuat hashtag khas untukku',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 나를 표현하는 해시태그 6유형과 인스타 바이오 추천. #해시태그 #인스타 #SNS #성격 #자기표현',
        en: '12 text questions (4 choices) — 6 hashtag styles that express you, plus Instagram bio ideas. #hashtag #instagram #sns #personality',
        ja: 'テキスト12問4択で見る自分を表すハッシュタグ6タイプとインスタBio提案。#ハッシュタグ #インスタ',
        'zh-CN': '12 道文字四选一，六种表达你的话题标签与简介文案。#话题标签 #ins #社交',
        'zh-TW': '12 題文字四選一，六種表達你的話題標籤與簡介文案。#話題標籤 #ins #社群',
        vi: '12 câu chữ 4 đáp án — 6 kiểu hashtag thể hiện bạn và gợi ý bio Instagram.',
        id: '12 soal teks 4 opsi — 6 gaya hashtag yang mewakili kamu dan saran bio Instagram.',
      },
      thumbnail: 'p3_test_my_hashtag_generator.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['해시태그', '인스타', 'SNS', '성격', '자기표현'],
        en: ['Hashtag', 'Instagram', 'SNS', 'Personality', 'Self-expression'],
        ja: ['ハッシュタグ', 'Instagram', 'SNS', '性格', '自己表現'],
        'zh-CN': ['话题标签', 'Instagram', '社交', '性格', '自我表达'],
        'zh-TW': ['話題標籤', 'Instagram', '社群', '性格', '自我表達'],
        vi: ['hashtag', 'Instagram', 'SNS', 'tính cách', 'thể hiện bản thân'],
        id: ['hashtag', 'Instagram', 'SNS', 'kepribadian', 'ekspresi diri'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-godsaeng-index-measurement') {
    test = {
      slug: 'phase3-godsaeng-index-measurement',
      title: {
        ko: '내 갓생 지수 측정',
        en: 'My Godsaeng Index',
        ja: '私の「갓생」指数測定',
        'zh-CN': '我的自律人生指数测量',
        'zh-TW': '我的自律人生指數測量',
        vi: 'Chỉ số Godsaeng của tôi',
        id: 'Indeks Godsaeng-ku',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 갓생 지수·레벨·맞춤 처방 6유형. #자기계발 #루틴 #챌린지 #동기부여',
        en: '12 text questions (4 choices) — 6 Godsaeng score bands with missions. #selfimprovement #routine #challenge #motivation',
        ja: 'テキスト12問4択で見る갓생指数・レベル・処方6タイプ。#自己啓発 #ルーティン',
        'zh-CN': '12 道文字四选一，六种自律指数·等级·行动处方。#自我提升 #习惯',
        'zh-TW': '12 題文字四選一，六種自律指數·等級·行動處方。#自我提升 #習慣',
        vi: '12 câu chữ 4 đáp án — 6 mức chỉ số Godsaeng và nhiệm vụ. #pháttriển #routine',
        id: '12 soal teks 4 opsi — 6 level indeks Godsaeng & misi. #pengembangan #rutinitas',
      },
      thumbnail: 'p3_test_godsaeng_index_measurement.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['자기계발', '루틴', '챌린지', '동기부여'],
        en: ['Self-improvement', 'Routine', 'Challenge', 'Motivation'],
        ja: ['自己啓発', 'ルーティン', 'チャレンジ', 'モチベーション'],
        'zh-CN': ['自我提升', '习惯', '挑战', '动力'],
        'zh-TW': ['自我提升', '習慣', '挑戰', '動力'],
        vi: ['Tự phát triển', 'Thói quen', 'Thử thách', 'Động lực'],
        id: ['Pengembangan diri', 'Rutinitas', 'Tantangan', 'Motivasi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-office-balance-game') {
    test = {
      slug: 'phase3-office-balance-game',
      title: {
        ko: '밸런스 게임 - 직장생활편 (극한)',
        en: 'Balance Game — Office Life (Extreme)',
        ja: 'バランスゲーム 職場編（極限）',
        'zh-CN': '平衡游戏 · 职场篇（极限）',
        'zh-TW': '平衡遊戲 · 職場篇（極限）',
        vi: 'Trò cân bằng — đời công sở (cực hạn)',
        id: 'Permainan seimbang — kehidupan kantor (ekstrem)',
      },
      description: {
        ko: '10문항 텍스트 2지선다 직장 밸런스 6유형. #직장 #밸런스게임 #직장인 #유머 #워라밸',
        en: '10 A/B office-life dilemmas — 6 work-style types. #office #balance #humor #worklife',
        ja: 'テキスト10問2択の職場バランス6タイプ。#職場 #バランスゲーム',
        'zh-CN': '10 道文字二选一，六种职场平衡类型。#职场 #平衡游戏',
        'zh-TW': '10 題文字二選一，六種職場平衡類型。#職場 #平衡遊戲',
        vi: '10 câu chữ 2 lựa chọn — 6 kiểu cân bằng công sở. #côngsở #humor',
        id: '10 soal teks 2 pilihan — 6 tipe keseimbangan kantor. #kantor #humor',
      },
      thumbnail: 'p3_game_office_balance_extreme.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['직장', '밸런스게임', '직장인', '유머', '워라밸'],
        en: ['Office', 'Balance game', 'Work humor', 'Work-life'],
        ja: ['職場', 'バランスゲーム', 'ユーモア'],
        'zh-CN': ['职场', '平衡游戏', '幽默'],
        'zh-TW': ['職場', '平衡遊戲', '幽默'],
        vi: ['Công sở', 'Trò cân bằng', 'Hài hước'],
        id: ['Kantor', 'Permainan seimbang', 'Humor'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-office-survival-type') {
    test = {
      slug: 'phase3-office-survival-type',
      title: {
        ko: '나의 직장 생활 생존 유형',
        en: 'My Office Survival Type',
        ja: '私の職場サバイバルタイプ',
        'zh-CN': '我的职场生存类型',
        'zh-TW': '我的職場生存類型',
        vi: 'Kiểu sống sót nơi công sở của tôi',
        id: 'Tipe bertahan hidup di kantorku',
      },
      description: {
        ko: '12문항 4지선다로 보는 직장 내 포지션·생존 전략 6유형. #직장 #회사 #공감 #생존',
        en: '12 questions, 4 choices — 6 workplace survival types. #office #work #empathy',
        ja: '12問4択で見る職場ポジション・生存戦略6タイプ。#職場 #会社',
        'zh-CN': '12 道四选一，六种职场站位与生存策略。#职场 #公司',
        'zh-TW': '12 題四選一，六種職場站位與生存策略。#職場 #公司',
        vi: '12 câu 4 lựa chọn — 6 kiểu vị trí & chiến lược sống sót.#côngsở',
        id: '12 soal 4 pilihan — 6 tipe posisi & strategi bertahan di kantor.#kantor',
      },
      thumbnail: 'p3_test_office_survival_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['직장', '회사', '공감', '생존'],
        en: ['Office', 'Work', 'Empathy', 'Survival'],
        ja: ['職場', '会社', '共感', '生存'],
        'zh-CN': ['职场', '公司', '共情', '生存'],
        'zh-TW': ['職場', '公司', '共感', '生存'],
        vi: ['Công sở', 'Công ty', 'Đồng cảm', 'Sinh tồn'],
        id: ['Kantor', 'Kerja', 'Empati', 'Bertahan'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-real-friend-condition-analysis') {
    test = {
      slug: 'phase3-real-friend-condition-analysis',
      title: {
        ko: '나의 찐친 조건 분석',
        en: 'My Real Best Friend Criteria — Analysis',
        ja: '本当の親友条件 分析',
        'zh-CN': '我的真朋友条件分析',
        'zh-TW': '我的真朋友條件分析',
        vi: 'Phân tích tiêu chí bạn thân của tôi',
        id: 'Analisis kriteria sahabat sejatiku',
      },
      description: {
        ko: '12문항 4지선다로 보는 나의 찐친 조건·유형 6가지. #우정 #친구 #관계 #공감',
        en: '12 multiple-choice questions — 6 types for your real best friend criteria. #friendship #friends #relationships #empathy',
        ja: '12問4択で見る本当の親友条件・6タイプ。#友情 #友だち #関係 #共感',
        'zh-CN': '12 道四选一，六种真朋友条件类型。#友情 #朋友 #关系 #共情',
        'zh-TW': '12 題四選一，六種真朋友條件類型。#友情 #朋友 #關係 #共情',
        vi: '12 câu trắc nghiệm — 6 kiểu tiêu chí bạn thân đích thực. #tình bạn #bạn #quan hệ #đồng cảm',
        id: '12 pertanyaan pilihan ganda — 6 tipe kriteria sahabat sejati. #persahabatan #teman #hubungan #empati',
      },
      thumbnail: 'p3_test_real_friend_condition_analysis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['우정', '친구', '관계', '공감'],
        en: ['Friendship', 'Friends', 'Relationships', 'Empathy'],
        ja: ['友情', '友だち', '人間関係', '共感'],
        'zh-CN': ['友情', '朋友', '关系', '共情'],
        'zh-TW': ['友情', '朋友', '關係', '共感'],
        vi: ['Tình bạn', 'Bạn bè', 'Quan hệ', 'Đồng cảm'],
        id: ['Persahabatan', 'Teman', 'Hubungan', 'Empati'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-tf-index-precise-measurement') {
    test = {
      slug: 'phase3-tf-index-precise-measurement',
      title: {
        ko: '나의 T/F 지수 정밀 측정',
        en: 'My T/F Index — Precision Test',
        ja: '私のT/F指数 精密測定',
        'zh-CN': '我的 T/F 指数精密测量',
        'zh-TW': '我的 T/F 指數精密測量',
        vi: 'Chỉ số T/F của tôi — đo chính xác',
        id: 'Indeks T/F-ku — pengukuran presisi',
      },
      description: {
        ko: '12문항 2지선다로 보는 T/F 지수(F%·T%) 6유형. #MBTI #심리',
        en: '12 A/B questions — 6 T/F index types (F% · T%). #MBTI #psychology',
        ja: '12問2択で見るT/F指数（F%・T%）6タイプ。#MBTI #心理',
        'zh-CN': '12 道二选一，六种 T/F 指数（F%·T%）。#MBTI #心理',
        'zh-TW': '12 題二選一，六種 T/F 指數（F%·T%）。#MBTI #心理',
        vi: '12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số T/F (F% · T%). #MBTI #tâm lý',
        id: '12 pertanyaan 2 pilihan — 6 tipe indeks T/F (F% · T%). #MBTI #psikologi',
      },
      thumbnail: 'p3_test_tf_index_precise_measurement.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['MBTI', '심리'],
        en: ['MBTI', 'Psychology'],
        ja: ['MBTI', '心理'],
        'zh-CN': ['MBTI', '心理'],
        'zh-TW': ['MBTI', '心理'],
        vi: ['MBTI', 'Tâm lý'],
        id: ['MBTI', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-sn-index-precise-measurement') {
    test = {
      slug: 'phase3-sn-index-precise-measurement',
      title: {
        ko: '나의 S/N 지수 정밀 측정',
        en: 'My S/N Index — Precision Test',
        ja: '私のS/N指数 精密測定',
        'zh-CN': '我的 S/N 指数精密测量',
        'zh-TW': '我的 S/N 指數精密測量',
        vi: 'Chỉ số S/N của tôi — đo chính xác',
        id: 'Indeks S/N-ku — pengukuran presisi',
      },
      description: {
        ko: '12문항 2지선다로 보는 S/N 지수(N%·S%) 6유형. #MBTI #심리',
        en: '12 A/B questions — 6 S/N index types (N% · S%). #MBTI #psychology',
        ja: '12問2択で見るS/N指数（N%・S%）6タイプ。#MBTI #心理',
        'zh-CN': '12 道二选一，六种 S/N 指数（N%·S%）。#MBTI #心理',
        'zh-TW': '12 題二選一，六種 S/N 指數（N%·S%）。#MBTI #心理',
        vi: '12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số S/N (N% · S%). #MBTI #tâm lý',
        id: '12 pertanyaan 2 pilihan — 6 tipe indeks S/N (N% · S%). #MBTI #psikologi',
      },
      thumbnail: 'p3_test_sn_index_precise_measurement.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['MBTI', '심리'],
        en: ['MBTI', 'Psychology'],
        ja: ['MBTI', '心理'],
        'zh-CN': ['MBTI', '心理'],
        'zh-TW': ['MBTI', '心理'],
        vi: ['MBTI', 'Tâm lý'],
        id: ['MBTI', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-ei-index-precise-measurement') {
    test = {
      slug: 'phase3-ei-index-precise-measurement',
      title: {
        ko: '나의 E/I 지수 정밀 측정',
        en: 'My E/I Index — Precision Test',
        ja: '私のE/I指数 精密測定',
        'zh-CN': '我的 E/I 指数精密测量',
        'zh-TW': '我的 E/I 指數精密測量',
        vi: 'Chỉ số E/I của tôi — đo chính xác',
        id: 'Indeks E/I-ku — pengukuran presisi',
      },
      description: {
        ko: '12문항 2지선다로 보는 E/I 지수(E%·I%) 6유형. #MBTI #심리',
        en: '12 A/B questions — 6 E/I index types (E% · I%). #MBTI #psychology',
        ja: '12問2択で見るE/I指数（E%・I%）6タイプ。#MBTI #心理',
        'zh-CN': '12 道二选一，六种 E/I 指数（E%·I%）。#MBTI #心理',
        'zh-TW': '12 題二選一，六種 E/I 指數（E%·I%）。#MBTI #心理',
        vi: '12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số E/I (E% · I%). #MBTI #tâm lý',
        id: '12 pertanyaan 2 pilihan — 6 tipe indeks E/I (E% · I%). #MBTI #psikologi',
      },
      thumbnail: 'p3_test_ei_index_precise_measurement.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['MBTI', '심리'],
        en: ['MBTI', 'Psychology'],
        ja: ['MBTI', '心理'],
        'zh-CN': ['MBTI', '心理'],
        'zh-TW': ['MBTI', '心理'],
        vi: ['MBTI', 'Tâm lý'],
        id: ['MBTI', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-jp-index-precise-measurement') {
    test = {
      slug: 'phase3-jp-index-precise-measurement',
      title: {
        ko: '나의 J/P 지수 정밀 측정',
        en: 'My J/P Index — Precision Test',
        ja: '私のJ/P指数 精密測定',
        'zh-CN': '我的 J/P 指数精密测量',
        'zh-TW': '我的 J/P 指數精密測量',
        vi: 'Chỉ số J/P của tôi — đo chính xác',
        id: 'Indeks J/P-ku — pengukuran presisi',
      },
      description: {
        ko: '12문항 2지선다로 보는 J/P 지수(P%·J%) 6유형. #MBTI #심리',
        en: '12 A/B questions — 6 J/P index types (P% · J%). #MBTI #psychology',
        ja: '12問2択で見るJ/P指数（P%・J%）6タイプ。#MBTI #心理',
        'zh-CN': '12 道二选一，六种 J/P 指数（P%·J%）。#MBTI #心理',
        'zh-TW': '12 題二選一，六種 J/P 指數（P%·J%）。#MBTI #心理',
        vi: '12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số J/P (P% · J%). #MBTI #tâm lý',
        id: '12 pertanyaan 2 pilihan — 6 tipe indeks J/P (P% · J%). #MBTI #psikologi',
      },
      thumbnail: 'p3_test_jp_index_precise_measurement.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['MBTI', '심리'],
        en: ['MBTI', 'Psychology'],
        ja: ['MBTI', '心理'],
        'zh-CN': ['MBTI', '心理'],
        'zh-TW': ['MBTI', '心理'],
        vi: ['MBTI', 'Tâm lý'],
        id: ['MBTI', 'Psikologi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-elementary-math-adults-quiz') {
    test = {
      slug: 'phase3-elementary-math-adults-quiz',
      title: {
        ko: '어른들 멘붕! 초등 수학 퀴즈',
        en: 'Adults Meltdown! Elementary Math Quiz',
        ja: '大人むずっ！小学生算数クイズ',
        'zh-CN': '大人崩溃！小学数学测验',
        'zh-TW': '大人崩潰！小學數學測驗',
        vi: 'Người lớn cũng trượt! Quiz toán tiểu học',
        id: 'Orang dewasa kewalahan! Kuis matematika SD',
      },
      description: {
        ko: '10문항 4지선다 초등 수학 함정 퀴즈. 연산 순서·분수·최소공배수까지. #수학 #퀴즈 #초등 #두뇌게임 #자존심',
        en: '10 multiple-choice elementary math trick questions. Order of operations, fractions, LCM, and more. #math #quiz #brain',
        ja: '算数の落とし穴10問4択。演算順序・分数・最小公倍数など。#算数 #クイズ #脳トレ',
        'zh-CN': '10 道四选一小学数学陷阱题。运算顺序、分数、最小公倍数等。#数学 #测验',
        'zh-TW': '10 題四選一小學數學陷阱題。運算順序、分數、最小公倍數等。#數學 #測驗',
        vi: '10 câu trắc nghiệm 4 đáp án — bẫy toán tiểu học. Thứ tự phép tính, phân số, BCNN… #toán #quiz',
        id: '10 soal pilihan ganda matematika SD — jebakan urutan operasi, pecahan, KPK… #matematika #quiz',
      },
      thumbnail: 'p3_quiz_elementary_math_adults.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['수학', '퀴즈', '초등', '두뇌게임', '자존심'],
        en: ['Math', 'Quiz', 'Elementary', 'Brain game', 'Pride'],
        ja: ['算数', 'クイズ', '小学生', '脳トレ', 'プライド'],
        'zh-CN': ['数学', '测验', '小学', '脑力', '自尊'],
        'zh-TW': ['數學', '測驗', '小學', '腦力', '自尊'],
        vi: ['Toán', 'Quiz', 'Tiểu học', 'Trí não', 'Tự tôn'],
        id: ['Matematika', 'Quiz', 'SD', 'Otak', 'Ego'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-emoji-movie-idiom-quiz') {
    test = {
      slug: 'phase3-emoji-movie-idiom-quiz',
      title: {
        ko: '이모티콘 퀴즈 (영화 & 관용구)',
        en: 'Emoji Quiz: Movies & Korean Idioms',
        ja: '絵文字クイズ（映画＆慣用句）',
        'zh-CN': '表情符号测验（电影与成语）',
        'zh-TW': '表情符號測驗（電影與成語）',
        vi: 'Quiz emoji: phim & thành ngữ Hàn',
        id: 'Kuis emoji: film & peribahasa Korea',
      },
      description: {
        ko: '이모티콘만 보고 영화 제목·한국 관용구 맞히기 10문항 4지선다. #퀴즈 #이모티콘 #영화 #관용구 #두뇌게임',
        en: '10 emoji multiple-choice questions—movies & Korean idioms. #quiz #emoji #movies #idioms #brain',
        ja: '絵文字だけで映画タイトル・韓国慣用句10問4択。#クイズ #絵文字 #映画 #慣用句',
        'zh-CN': '10 道表情猜电影与韩国成语四选一。#测验 #表情 #电影 #成语',
        'zh-TW': '10 題表情猜電影與韓國成語四選一。#測驗 #表情 #電影 #成語',
        vi: '10 câu emoji đoán phim & thành ngữ Hàn.#quiz #emoji #phim',
        id: '10 soal emoji tebak film & peribahasa Korea.#kuis #emoji #film',
      },
      thumbnail: 'p3_quiz_emoji_movie_idiom.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['퀴즈', '이모티콘', '영화', '관용구', '두뇌게임'],
        en: ['Quiz', 'Emoji', 'Movies', 'Idioms', 'Brain game'],
        ja: ['クイズ', '絵文字', '映画', '慣用句', '脳トレ'],
        'zh-CN': ['测验', '表情', '电影', '成语', '脑力'],
        'zh-TW': ['測驗', '表情', '電影', '成語', '腦力'],
        vi: ['Quiz', 'Emoji', 'Phim', 'Thành ngữ', 'Trí não'],
        id: ['Kuis', 'Emoji', 'Film', 'Peribahasa', 'Otak'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-world-landmark-city-quiz') {
    test = {
      slug: 'phase3-world-landmark-city-quiz',
      title: {
        ko: '세계 랜드마크 보고 도시 맞추기',
        en: 'Guess the City from World Landmarks',
        ja: '世界のランドマークから都市を当てる',
        'zh-CN': '看世界地标猜城市',
        'zh-TW': '看世界地標猜城市',
        vi: 'Đoán thành phố qua biểu tượng thế giới',
        id: 'Tebak kota dari landmark dunia',
      },
      description: {
        ko: '12문항 이미지형 4지선다. 랜드마크 사진을 보고 도시를 고르세요. #퀴즈 #여행 #랜드마크 #세계지리',
        en: '12 image questions, 4 choices—pick the city for each landmark. #quiz #travel #landmark #geography',
        ja: '全12問・画像4択。ランドマークの写真から都市を選びます。#クイズ #旅行 #ランドマーク #地理',
        'zh-CN': '12 道看图选城市四选一。#测验 #旅行 #地标 #地理',
        'zh-TW': '12 題看圖選城市四選一。#測驗 #旅行 #地標 #地理',
        vi: '12 cây hình, 4 đáp án—chọn thành phố theo ảnh địa danh. #quiz #du lịch #địa lý',
        id: '12 soal gambar, 4 pilihan—tebak kota dari foto landmark. #kuis #travel #geografi',
      },
      thumbnail: 'p3_quiz_world_landmark_city_match.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['퀴즈', '여행', '랜드마크', '세계지리'],
        en: ['Quiz', 'Travel', 'Landmark', 'Geography'],
        ja: ['クイズ', '旅行', 'ランドマーク', '地理'],
        'zh-CN': ['测验', '旅行', '地标', '地理'],
        'zh-TW': ['測驗', '旅行', '地標', '地理'],
        vi: ['Quiz', 'Du lịch', 'Địa danh', 'Địa lý'],
        id: ['Kuis', 'Travel', 'Landmark', 'Geografi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-team-work-chemistry-test') {
    test = {
      slug: 'phase3-team-work-chemistry-test',
      title: {
        ko: '우리 팀 워크 케미 테스트',
        en: 'Our Team Work Chemistry Test',
        ja: '私たちのチームワーク相性テスト',
        'zh-CN': '我们团队默契测试',
        'zh-TW': '我們團隊默契測試',
        vi: 'Bài test team chemistry của chúng ta',
        id: 'Tes chemistry kerja tim kita',
      },
      description: {
        ko: '12문항으로 나의 팀 역할 유형을 찾고, 팀원 결과를 모으면 팀 케미·시너지·주의점이 분석됩니다. #팀워크 #직장 #협업',
        en: '12 questions to find your team role type; combine teammates’ results for chemistry, synergy, and watch-outs. #teamwork #workplace #collab',
        ja: '12問でチーム役割タイプを診断。メンバー結果を集めるとケミ・シナジーが分析。#チームワーク #職場',
        'zh-CN': '12 题找到你的团队角色类型；汇总成员结果可看默契与协同。#团队 #职场 #协作',
        'zh-TW': '12 題找到你的團隊角色類型；彙整成員結果可看默契與協同。#團隊 #職場 #協作',
        vi: '12 câu tìm vai trò nhóm; gom kết quả để xem chemistry & synergy. #teamwork #công sở',
        id: '12 soal cari peran tim; kumpulkan hasil untuk chemistry & sinergi. #teamwork #kantor',
      },
      thumbnail: 'p3_test_team_work_chemistry.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['팀워크', '직장', '협업'],
        en: ['Teamwork', 'Workplace', 'Collaboration'],
        ja: ['チームワーク', '職場', '協業'],
        'zh-CN': ['团队', '职场', '协作'],
        'zh-TW': ['團隊', '職場', '協作'],
        vi: ['Teamwork', 'Công sở', 'Hợp tác'],
        id: ['Teamwork', 'Kantor', 'Kolaborasi'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test && slug === 'phase3-tanjinjam-spending-type') {
    test = {
      slug: 'phase3-tanjinjam-spending-type',
      title: {
        ko: '나의 탕진잼 유형은?',
        en: 'What’s My Splurge-Joy Type?',
        ja: '私の散財ジョイタイプは？',
        'zh-CN': '我的剁手快乐型是？',
        'zh-TW': '我的剁手快樂型是？',
        vi: 'Kiểu vui khi shopping của tôi?',
        id: 'Tipe bahagia belanjaku?',
      },
      description: {
        ko: '12문항 이미지 4지선다로 보는 탕진잼 소비 행복 포인트 5유형. #소비 #쇼핑 #공감',
        en: '12 image multiple-choice questions — 5 spending happiness types. #shopping #lifestyle #relatable',
        ja: '画像12問4択で見る散財ジョイ・幸福ポイント5タイプ。#買い物 #ライフスタイル #共感',
        'zh-CN': '12 道图片四选一，五种消费快乐型。#购物 #生活方式 #共鸣',
        'zh-TW': '12 題圖片四選一，五種消費快樂型。#購物 #生活方式 #共鳴',
        vi: '12 câu chọn ảnh 4 đáp án — 5 kiểu điểm hạnh phúc khi chi tiêu. #mua sắm #lối sống #đồng cảm',
        id: '12 soal pilih gambar 4 opsi — 5 tipe titik bahagia saat belanja. #belanja #gaya hidup #relate',
      },
      thumbnail: 'p3_test_tanjinjam_spending_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['소비', '쇼핑', '공감'],
        en: ['Shopping', 'Lifestyle', 'Relatable'],
        ja: ['買い物', 'ライフスタイル', '共感'],
        'zh-CN': ['购物', '生活方式', '共鸣'],
        'zh-TW': ['購物', '生活方式', '共鳴'],
        vi: ['Mua sắm', 'Lối sống', 'Đồng cảm'],
        id: ['Belanja', 'Gaya hidup', 'Relate'],
      },
    } as Awaited<ReturnType<typeof getTestBySlug>>;
  }

  if (!test) {
    return {
      title: '심리테스트 | QuizOasis',
      description: '재미있는 심리테스트를 즐겨보세요',
    };
  }

  const title = test.title[locale] || test.title.ko || '심리테스트';
  const description = test.description?.[locale] || test.description?.ko || '';

  // 태그가 다국어 객체인 경우 현재 언어의 태그 배열 추출
  const tags = typeof test.tags === 'object' && !Array.isArray(test.tags)
    ? test.tags[locale] || test.tags.ko || []
    : test.tags;

  // 공유용 OG 이미지(고해상도 리사이즈 옵션) + 일반 썸네일(캐시 가능한 안정 URL)
  const ogImageUrl = getOgImageUrl(test.thumbnail);
  const thumbnailUrl = getThumbnailUrl(test.thumbnail);


  const baseUrl = SITE_URL;
  const canonicalUrl = `${baseUrl}/${locale}/test/${slug}`;

  return {
    title: title,
    description: description,
    keywords: Array.isArray(tags) ? tags.join(', ') : '',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'ko': `${baseUrl}/ko/test/${slug}`,
        'en': `${baseUrl}/en/test/${slug}`,
        'ja': `${baseUrl}/ja/test/${slug}`,
        'zh-CN': `${baseUrl}/zh-CN/test/${slug}`,
        'zh-TW': `${baseUrl}/zh-TW/test/${slug}`,
        'id': `${baseUrl}/id/test/${slug}`,
        'vi': `${baseUrl}/vi/test/${slug}`,
      },
    },
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        }
      ],
      type: 'website',
      url: canonicalUrl,
      siteName: 'QuizOasis',
      locale: locale,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
        { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [ogImageUrl],
      site: '@QuizOasis',
      creator: '@QuizOasis',
    },
    other: {
      'og:image': ogImageUrl,
      'og:image:url': ogImageUrl,
      'og:image:secure_url': ogImageUrl,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/jpeg',
      'og:image:alt': title,
      'twitter:image:src': ogImageUrl,
      'twitter:image:alt': title,
      'og:site_name': 'QuizOasis',
      'og:url': canonicalUrl,
      'og:type': 'website',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'QuizOasis',
      'application-name': 'QuizOasis',
      'msapplication-TileColor': '#6366f1',
      'msapplication-TileImage': `${baseUrl}/favicon-192x192.png`,
      'theme-color': '#6366f1',
    },
  };
}

export default async function TestPage({ params }: Props) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  // Force dynamic rendering - 항상 최신 데이터
  headers();

  // 애착 스타일 테스트의 경우 Supabase에서 시도
  if (slug === 'attachment-style-test') {
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'attachment-style-test',
      title: {
        ko: '어떤 애착 스타일을 가지고 있나요?',
        en: 'What attachment style do you have?',
        ja: 'どの愛着スタイルを持っていますか？',
        'zh-CN': '你有什么依恋风格？',
        'zh-TW': '你有什麼依戀風格？',
        vi: 'Bạn có phong cách gắn bó nào?',
        id: 'Gaya kelekatan apa yang Anda miliki?'
      },
      description: {
        ko: '당신의 사랑 방식, 어린 시절부터 결정됐다? 심리학의 애착 이론으로 나의 애착 스타일을 알아보세요.',
        en: 'Your way of loving, determined from childhood? Discover your attachment style through psychological attachment theory.',
        ja: 'あなたの愛し方、幼い頃から決まっている？心理学の愛着理論で私の愛着スタイルを調べてみましょう。',
        'zh-CN': '你的爱情方式，从童年就决定了？通过心理学的依恋理论了解你的依恋风格。',
        'zh-TW': '你的愛情方式，從童年就決定了？通過心理學的依戀理論了解你的依戀風格。',
        vi: 'Cách yêu của bạn, được quyết định từ thời thơ ấu? Khám phá phong cách gắn bó của bạn thông qua lý thuyết gắn bó tâm lý học.',
        id: 'Cara mencintai Anda, ditentukan sejak masa kanak-kanak? Temukan gaya kelekatan Anda melalui teori kelekatan psikologi.'
      },
      thumbnail: 'test_028_attachment_style.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['심리', '관계'],
        en: ['Psychology', 'Relationships'],
        ja: ['心理学', '関계'],
        'zh-CN': ['心理学', '关系'],
        'zh-TW': ['心理學', '關係'],
        vi: ['Tâm lý học', 'Mối quan hệ'],
        id: ['Psikologi', 'Hubungan']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }
  }

  // 친구 테스트의 경우 Supabase에서 시도
  if (slug === 'friend-test') {
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'friend-test',
      title: {
        ko: '친구들에게 나는 어떤 친구일까?',
        en: 'What kind of friend am I to my friends?',
        ja: '友達にとって私はどんな友達？',
        'zh-CN': '在朋友眼中我是什么样的朋友？',
        'zh-TW': '在朋友眼中我是什麼樣的朋友？',
        vi: 'Tôi là kiểu bạn bè gì đối với bạn bè?',
        id: 'Saya teman seperti apa bagi teman-teman saya?'
      },
      description: {
        ko: '내가 생각하는 나 vs 친구들이 보는 나. 친구가 힘들 때, 나는 어떤 역할을 할까? 친구들은 나를 어떻게 기억할까?',
        en: 'Me as I think vs me as my friends see me. What role do I play when friends are having a hard time? How do friends remember me?',
        ja: '私が思う私 vs 友達が見る私。友達が困っている時、私はどんな役割をする？友達は私をどう覚えている？',
        'zh-CN': '我想象中的我 vs 朋友眼中的我。朋友困难时，我扮演什么角色？朋友怎么记住我？',
        'zh-TW': '我想像中的我 vs 朋友眼中的我。朋友困難時，我扮演什麼角色？朋友怎麼記住我？',
        vi: 'Tôi như tôi nghĩ vs tôi như bạn bè nhìn thấy. Khi bạn bè gặp khó khăn, tôi đóng vai trò gì? Bạn bè nhớ tôi như thế nào?',
        id: 'Saya seperti yang saya pikir vs saya seperti yang dilihat teman-teman. Peran apa yang saya mainkan ketika teman-teman mengalami kesulitan? Bagaimana teman-teman mengingat saya?'
      },
      thumbnail: 'test_029_what_kind_of_friend.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['우정', '관계', '성격'],
        en: ['Friendship', 'Relationships', 'Personality'],
        ja: ['友情', '関係', '性格'],
        'zh-CN': ['友谊', '关系', '性格'],
        'zh-TW': ['友誼', '關係', '性格'],
        vi: ['Tình bạn', 'Mối quan hệ', 'Tính cách'],
        id: ['Persahabatan', 'Hubungan', 'Kepribadian']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }
  }


  // 시간 효율성 테스트의 경우 Supabase에서 시도
  if (slug === 'time-efficiency-test') {
    const { timeEfficiencyQuestions, timeEfficiencyResults } = await import('@/lib/timeEfficiencyData');
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'time-efficiency-test',
      title: {
        ko: '당신은 시간을 얼마나 효율적으로 활용하나요?',
        en: 'How efficiently do you use your time?',
        ja: 'あなたは時間をどのくらい効率的に活用していますか？',
        'zh-CN': '你如何高效地利用时间？',
        'zh-TW': '你如何高效地利用時間？',
        vi: 'Bạn sử dụng thời gian hiệu quả đến mức nào?',
        id: 'Seberapa efisien Anda menggunakan waktu?'
      },
      description: {
        ko: '하루 24시간, 당신은 얼마나 효율적으로 사용하고 있나요? 누구에게나 공평하게 주어지는 24시간, 어떤 사람은 모든 것을 해내고, 어떤 사람은 시간이 부족하다고 말합니다.',
        en: '24 hours a day, how efficiently are you using them? 24 hours given equally to everyone, some people accomplish everything, some people say they don\'t have enough time.',
        ja: '一日24時間、あなたはどのくらい効率的に使っていますか？誰にでも平等に与えられる24時間、ある人はすべてを成し遂げ、ある人は時間が不足していると言います。',
        'zh-CN': '一天24小时，你如何高效地使用它们？每个人都被平等地给予24小时，有些人完成所有事情，有些人说时间不够。',
        'zh-TW': '一天24小時，你如何高效地使用它們？每個人都被平等地給予24小時，有些人完成所有事情，有些人說時間不夠。',
        vi: '24 giờ một ngày, bạn sử dụng chúng hiệu quả đến mức nào? 24 giờ được trao cho mọi người một cách bình đẳng, một số người hoàn thành mọi thứ, một số người nói rằng họ không có đủ thời gian.',
        id: '24 jam sehari, seberapa efisien Anda menggunakannya? 24 jam yang diberikan secara adil kepada semua orang, beberapa orang menyelesaikan segalanya, beberapa orang mengatakan mereka tidak punya cukup waktu.'
      },
      thumbnail: 'test_079_time_efficiency.jpg',
      type: 'career',
      play_count: 0,
      tags: {
        ko: ['성향'],
        en: ['Tendency'],
        ja: ['傾向'],
        'zh-CN': ['倾向'],
        'zh-TW': ['傾向'],
        vi: ['Xu hướng'],
        id: ['Kecenderungan']
      }
    };

    const testData = {
      questions: timeEfficiencyQuestions,
      results: timeEfficiencyResults
    };

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      image: thumbnailUrl,
      url: canonicalUrl,
      author: {
        '@type': 'Organization',
        name: 'QuizOasis',
        url: 'https://quizoasis-coral.vercel.app',
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis',
        logo: {
          '@type': 'ImageObject',
          url: 'https://quizoasis-coral.vercel.app/logo.png',
        },
      },
      inLanguage: locale,
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/PlayAction',
        userInteractionCount: test.play_count || 0,
      },
      numberOfQuestions: testData.questions.length,
      educationalLevel: 'General',
      typicalAgeRange: '13-99',
      keywords: typeof test.tags === 'object' && !Array.isArray(test.tags)
        ? (test.tags[locale] || test.tags.ko || []).join(', ')
        : Array.isArray(test.tags) ? test.tags.join(', ') : '',
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: test.category || 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />

        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <TimeEfficiencyTestClient
          locale={locale as Locale}
          slug={slug}
          title={title}
          description={description}
          questions={testData.questions}
          results={testData.results}
          questionCount={testData.questions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          similarTests={[]} // 클라이언트 사이드에서 로드
          badgeType={test.badge_type || null}
          isLatestTest={isLatestTest}
        />
      </>
    );
  }

  if (slug === 'apology-style-test') {
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'apology-style-test',
      title: {
        ko: '당신은 어떤 방식으로 사과하는 사람인가요?',
        en: 'What is your way of apologizing?',
        ja: 'あなたはどのように謝る人ですか？',
        'zh-CN': '你是如何道歉的人？',
        'zh-TW': '你是如何道歉的人？',
        vi: 'Bạn là người xin lỗi như thế nào?',
        id: 'Bagaimana cara Anda meminta maaf?'
      },
      description: {
        ko: '미안해? 내 잘못이 아닌데? 아니면 행동으로 보여줄게?\n사과하는 방식은 사람마다 다릅니다.\n미안해를 즉시 말하는 사람, 하지만 그건...이라며 변명하는 사람, 말없이 행동으로 보여주는 사람, 시간이 필요한 사람.\n당신은 어떤 방식으로 사과하나요?\n사과 스타일은 관계의 질을 결정합니다. 잘못된 사과는 관계를 더 악화시키고, 진심 어린 사과는 관계를 더 돈독하게 만듭니다.\n소요 시간 단 3분! 솔직하게 답해주세요 💬',
        en: 'Sorry? It\'s not my fault? Or show it with actions?\nThe way of apologizing is different for each person.\nPeople who immediately say sorry, people who make excuses saying \"but that\'s...\", people who show with actions without words, people who need time.\nWhat is your way of apologizing?\nApology style determines the quality of relationships. Wrong apologies worsen relationships, while sincere apologies strengthen them.\nTakes only 3 minutes! Please answer honestly 💬',
        ja: 'ごめん？私のせいじゃない？それとも行動で示す？\n謝り方は人それぞれ違います。\nすぐに「ごめん」と言う人、「でもそれは...」と弁解する人、言葉なしで行動で示す人、時間が必要な人。\nあなたはどのように謝りますか？\n謝り方のスタイルは関係の質を決定します。間違った謝りは関係を悪化させ、心からの謝りは関係をより強固にします。\n所要時間わずか3分！正直に答えてください 💬',
        'zh-CN': '对不起？不是我的错？还是用行动表示？\n道歉方式因人而异。\n立即说对不起的人，说「但是那是...」辩解的人，用行动不说话的人，需要时间的人。\n你是如何道歉的？\n道歉风格决定关系质量。错误的道歉会恶化关系，真诚的道歉会加强关系。\n只需3分钟！请诚实回答 💬',
        'zh-TW': '對不起？不是我的錯？還是用行動表示？\n道歉方式因人而異。\n立即說對不起的人，說「但是那是...」辯解的人，用行動不說話的人，需要時間的人。\n你是如何道歉的？\n道歉風格決定關係質量。錯誤的道歉會惡化關係，真誠的道歉會加強關係。\n只需3分鐘！請誠實回答 💬',
        vi: 'Xin lỗi? Không phải lỗi của tôi? Hay thể hiện bằng hành động?\nCách xin lỗi của mỗi người khác nhau.\nNgười nói xin lỗi ngay lập tức, người biện hộ nói \"nhưng đó là...\", người thể hiện bằng hành động không lời, người cần thời gian.\nBạn xin lỗi như thế nào?\nPhong cách xin lỗi quyết định chất lượng mối quan hệ. Lời xin lỗi sai làm xấu mối quan hệ, lời xin lỗi chân thành làm mối quan hệ bền chặt hơn.\nChỉ mất 3 phút! Hãy trả lời thành thật 💬',
        id: 'Maaf? Bukan salah saya? Atau tunjukkan dengan tindakan?\nCara meminta maaf berbeda untuk setiap orang.\nOrang yang langsung bilang maaf, orang yang beralasan bilang \"tapi itu...\", orang yang tunjukkan dengan tindakan tanpa kata, orang yang butuh waktu.\nBagaimana cara Anda meminta maaf?\nGaya meminta maaf menentukan kualitas hubungan. Permintaan maaf yang salah memperburuk hubungan, sementara permintaan maaf yang tulus memperkuat hubungan.\nHanya butuh 3 menit! Silakan jawab dengan jujur 💬'
      },
      thumbnail: 'test_039_apology_style.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['소통', '관계', '성격'],
        en: ['Communication', 'Relationships', 'Personality'],
        ja: ['コミュニケーション', '関係', '性格'],
        'zh-CN': ['沟通', '关系', '性格'],
        'zh-TW': ['溝通', '關係', '性格'],
        vi: ['Giao tiếp', 'Mối quan hệ', 'Tính cách'],
        id: ['Komunikasi', 'Hubungan', 'Kepribadian']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      mainEntity: {
        '@type': 'Question',
        text: '사과 스타일 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 사과 스타일 분석'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <ApologyTestClient
          locale={locale}
          slug={slug}
          title={title}
          description={description}
          questions={testData.questions}
          results={testData.results}
          questionCount={testData.questions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count || 0}
        />
      </>
    );
  }

  if (slug === 'breakup-coping-test') {
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'breakup-coping-test',
      title: {
        ko: '당신은 이별에 어떻게 대처하나요?',
        en: 'How do you cope with breakups?',
        ja: '別れにどう対処しますか？',
        'zh-CN': '你如何应对分手？',
        'zh-TW': '你如何應對分手？',
        vi: 'Bạn đối phó với chia tay như thế nào?',
        id: 'Bagaimana Anda menghadapi putus cinta?'
      },
      description: {
        ko: '이별 후, 당신의 진짜 회복 스타일은?\n어떤 사람은 금방 털고 일어나고,\n어떤 사람은 오랜 시간 아파합니다.\n어떤 사람은 바쁘게 움직이며 잊으려 하고,\n어떤 사람은 이별을 성장의 기회로 삼습니다.\n당신은 이별 후 어떻게 대처하나요?\n12개 질문으로 당신의 이별 대처 스타일을 확인하고,\n더 건강한 회복을 위한 조언을 받아보세요!\n소요 시간 단 3분! 혼자서도, 친구와도 함께 해보세요 💙',
        en: 'What is your real recovery style after a breakup?\nSome people bounce back quickly,\nSome people hurt for a long time.\nSome people stay busy to forget,\nSome people see breakups as growth opportunities.\nHow do you cope after a breakup?\nCheck your breakup coping style with 12 questions,\nand get advice for healthier recovery!\nTakes only 3 minutes! Try alone or with friends 💙',
        ja: '別れ後、あなたの本当の回復スタイルは？\nすぐに立ち直る人もいれば、\n長い間傷つく人もいます。\n忘れようと忙しく動く人もいれば、\n別れを成長の機会とする人もいます。\n別れの後、どう対処しますか？\n12の質問であなたの別れ対処スタイルを確認し、\nより健康的な回復のためのアドバイスを受けましょう！\n所要時間わずか3分！一人でも、友達と一緒でも楽しめます 💙',
        'zh-CN': '分手后，你真正的恢复风格是什么？\n有人很快振作，\n有人痛苦很久。\n有人忙碌忘记，\n有人把分手当作成长机会。\n分手后你如何应对？\n用12个问题检查你的分手应对风格，\n获得更健康恢复的建议！\n只需3分钟！独自或与朋友一起尝试 💙',
        'zh-TW': '分手後，你真正的恢復風格是什麼？\n有人很快振作，\n有人痛苦很久。\n有人忙碌忘記，\n有人把分手當作成長機會。\n分手後你如何應對？\n用12個問題檢查你的分手應對風格，\n獲得更健康恢復的建議！\n只需3分鐘！獨自或與朋友一起嘗試 💙',
        vi: 'Sau chia tay, phong cách phục hồi thực sự của bạn là gì?\nCó người nhanh chóng vượt qua,\nCó người đau khổ lâu dài.\nCó người bận rộn để quên,\nCó người coi chia tay là cơ hội phát triển.\nBạn đối phó như thế nào sau chia tay?\nKiểm tra phong cách đối phó với chia tay của bạn bằng 12 câu hỏi,\nvà nhận lời khuyên để phục hồi lành mạnh hơn!\nChỉ mất 3 phút! Thử một mình hoặc với bạn bè 💙',
        id: 'Setelah putus cinta, apa gaya pemulihan sejati Anda?\nAda yang cepat bangkit,\nAda yang sakit lama.\nAda yang sibuk untuk melupakan,\nAda yang melihat putus cinta sebagai kesempatan tumbuh.\nBagaimana Anda menghadapi setelah putus cinta?\nPeriksa gaya menghadapi putus cinta Anda dengan 12 pertanyaan,\ndan dapatkan saran untuk pemulihan yang lebih sehat!\nHanya butuh 3 menit! Coba sendiri atau dengan teman 💙'
      },
      thumbnail: 'test_040_breakup_coping.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['연애', '감정', '회복'],
        en: ['Love', 'Emotion', 'Recovery'],
        ja: ['恋愛', '感情', '回復'],
        'zh-CN': ['恋爱', '情感', '恢复'],
        'zh-TW': ['戀愛', '情感', '恢復'],
        vi: ['Tình yêu', 'Cảm xúc', 'Phục hồi'],
        id: ['Cinta', 'Emosi', 'Pemulihan']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      numberOfQuestions: testData.questions.length,
      question: testData.questions.map((q: any, index: number) => ({
        '@type': 'Question',
        text: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: '이별 대처 스타일 분석'
        }
      })),
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <BreakupTestClient
          locale={locale}
          slug={slug}
          title={title}
          description={description}
          questions={testData.questions}
          results={testData.results}
          questionCount={testData.questions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count || 0}
        />
      </>
    );
  }

  if (slug === 'jealousy-level-test') {
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'jealousy-level-test',
      title: {
        ko: '당신은 얼마나 질투심이 많은가요?',
        en: 'How jealous are you?',
        ja: 'あなたはどのくらい嫉妬深いですか？',
        'zh-CN': '你有多嫉妒？',
        'zh-TW': '你有多嫉妒？',
        vi: 'Bạn ghen tuông đến mức nào?',
        id: 'Seberapa cemburu Anda?'
      },
      description: {
        ko: '쿨하다 vs 집착한다? 당신의 질투 지수는?\n연인이 이성 친구와 연락하면? 「괜찮아」 쿨하게 넘기나요? 「누구야?」 물어보나요?\nSNS에 이성이 좋아요 누르면? 신경 안 쓰나요? 은근히 신경 쓰이나요?\n질투는 사랑의 표현? 아니면 불신의 신호?\n적당한 질투는 애교지만, 과한 질투는 관계를 망칩니다.\n친구, 연인과 비교하면 더 재미있어요 😂\n소요 시간 단 3분! 솔직하게 답해주세요 💚',
        en: 'Cool vs Obsessed? What\'s your jealousy level?\nWhen your partner contacts opposite-sex friends? Do you say 「It\'s okay」 coolly? Or ask 「Who is it?」\nWhen opposite-sex people like your partner\'s SNS? Do you not care? Or do you secretly care?\nIs jealousy an expression of love? Or a signal of distrust?\nModerate jealousy is cute, but excessive jealousy ruins relationships.\nIt\'s more fun to compare with friends and partners 😂\nTakes only 3 minutes! Please answer honestly 💚',
        ja: 'クール vs 執着？あなたの嫉妬レベルは？\n恋人が異性の友達と連絡すると？「大丈夫」とクールに流す？それとも「誰？」と聞く？\nSNSで異性がいいねを押すと？気にしない？それとも密かに気になる？\n嫉妬は愛の表現？それとも不信の信号？\n適度な嫉妬は可愛いけど、過度な嫉妬は関係を壊します。\n友達、恋人と比較するともっと面白いです 😂\n所要時間わずか3分！正直に答えてください 💚',
        'zh-CN': '酷 vs 执着？你的嫉妒水平是什么？\n当你的伴侣联系异性朋友时？你会说「没关系」酷酷地过去？还是问「是谁？」\n当异性给你的伴侣的SNS点赞时？你不在乎？还是暗中在意？\n嫉妒是爱的表达？还是不信任的信号？\n适度的嫉妒是可爱的，但过度的嫉妒会破坏关系。\n和朋友、伴侣比较会更有趣 😂\n只需3分钟！请诚实回答 💚',
        'zh-TW': '酷 vs 執著？你的嫉妒水平是什麼？\n當你的伴侶聯繫異性朋友時？你會說「沒關係」酷酷地過去？還是問「是誰？」\n當異性給你的伴侶的SNS點讚時？你不在乎？還是暗中在意？\n嫉妒是愛的表達？還是不信任的信號？\n適度的嫉妒是可愛的，但過度的嫉妒會破壞關係。\n和朋友、伴侶比較會更有趣 😂\n只需3分鐘！請誠實回答 💚',
        vi: 'Mát mẻ vs Ám ảnh? Mức độ ghen tuông của bạn là gì?\nKhi người yêu liên lạc với bạn khác giới? Bạn nói 「Không sao」 một cách mát mẻ? Hay hỏi 「Ai vậy?」\nKhi người khác giới thích SNS của người yêu? Bạn không quan tâm? Hay bí mật quan tâm?\nGhen tuông là biểu hiện của tình yêu? Hay tín hiệu của sự không tin tưởng?\nGhen tuông vừa phải thì dễ thương, nhưng ghen tuông quá toute sẽ phá hủy mối quan hệ.\nSo sánh với bạn bè, người yêu sẽ thú vị hơn 😂\nChỉ mất 3 phút! Hãy trả lời thành thật 💚',
        id: 'Keren vs Obsesi? Berapa level cemburu Anda?\nKetika pasangan Anda menghubungi teman lawan jenis? Apakah Anda bilang 「Tidak apa-apa」 dengan keren? Atau bertanya 「Siapa itu?」\nKetika orang lawan jenis menyukai SNS pasangan Anda? Apakah Anda tidak peduli? Atau diam-diam peduli?\nCemburu adalah ekspresi cinta? Atau sinyal ketidakpercayaan?\nCemburu yang wajar itu lucu, tapi cemburu berlebihan merusak hubungan.\nLebih seru kalau dibandingkan dengan teman dan pasangan 😂\nHanya butuh 3 menit! Silakan jawab dengan jujur 💚'
      },
      thumbnail: 'test_038_jealousy_level.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['감정', '연애', '성격'],
        en: ['Emotion', 'Love', 'Personality'],
        ja: ['感情', '恋愛', '性格'],
        'zh-CN': ['情感', '恋爱', '性格'],
        'zh-TW': ['情感', '戀愛', '性格'],
        vi: ['Cảm xúc', 'Tình yêu', 'Tính cách'],
        id: ['Emosi', 'Cinta', 'Kepribadian']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      mainEntity: {
        '@type': 'Question',
        text: '질투심 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 질투심 분석'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />

        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <JealousyTestClient
          locale={locale as Locale}
          slug={slug}
          title={title}
          description={description}
          questions={testData.questions}
          results={testData.results}
          questionCount={testData.questions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          similarTests={[]} // 클라이언트 사이드에서 로드
          badgeType={test.badge_type || null}
          isLatestTest={isLatestTest}
        />
      </>
    );
  }

  if (slug === 'first-impression-test') {
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'first-impression-test',
      title: {
        ko: '당신의 첫인상은?',
        en: 'What is your first impression?',
        ja: 'あなたの第一印象は？',
        'zh-CN': '你的第一印象是什么？',
        'zh-TW': '你的第一印象是什麼？',
        vi: 'Ấn tượng đầu tiên của bạn là gì?',
        id: 'Kesan pertama Anda adalah?'
      },
      description: {
        ko: '사람들이 나를 처음 봤을 때 어떻게 느낄까?\n어떤 사람은 만나자마자 친근하게 느껴지고,\n어떤 사람은 첫 만남에 차갑고 도도해 보입니다.\n어떤 사람은 에너지가 넘치고,\n어떤 사람은 조용하지만 신비로워 보입니다.\n당신은 다른 사람들에게 어떤 첫인상을 주나요?\n12개 질문으로 당신의 진짜 첫인상을 확인하고,\n더 나은 인간관계를 위한 팁을 받아보세요!\n소요 시간 단 3분! 친구들과 비교해보는 재미도 쏠쏠 😊',
        en: 'How do people feel when they first see me?\nSome people feel friendly right away,\nSome people seem cold and arrogant at first meeting.\nSome people are full of energy,\nSome people are quiet but mysterious.\nWhat first impression do you give to others?\nCheck your real first impression with 12 questions,\nand get tips for better relationships!\nTakes only 3 minutes! It\'s also fun to compare with friends 😊',
        ja: '人々が私を初めて見た時、どのように感じるでしょうか？\nある人は会った瞬間に親しみやすく感じられ、\nある人は初対面で冷たく高慢に見えます。\nある人はエネルギーに溢れ、\nある人は静かですが神秘的です。\nあなたは他の人にどのような第一印象を与えますか？\n12の質問であなたの本当の第一印象を確認し、\nより良い人間関係のためのヒントを受けましょう！\n所要時間わずか3分！友達と比較するのも楽しいです 😊',
        'zh-CN': '人们第一次看到我时会有什么感觉？\n有些人一见面就感到亲切，\n有些人在初次见面时显得冷漠高傲。\n有些人充满活力，\n有些人安静但神秘。\n你给别人什么样的第一印象？\n用12个问题检查你的真实第一印象，\n获得更好人际关系的建议！\n只需3分钟！和朋友比较也很有趣 😊',
        'zh-TW': '人們第一次看到我時會有什麼感覺？\n有些人一見面就感到親切，\n有些人在初次見面時顯得冷漠高傲。\n有些人充滿活力，\n有些人安靜但神秘。\n你給別人什麼樣的第一印象？\n用12個問題檢查你的真實第一印象，\n獲得更好人際關係的建議！\n只需3分鐘！和朋友比較也很有趣 😊',
        vi: 'Mọi người cảm thấy như thế nào khi lần đầu nhìn thấy tôi?\nMột số người cảm thấy thân thiện ngay lập tức,\nMột số người có vẻ lạnh lùng và kiêu ngạo trong lần gặp đầu tiên.\nMột số người tràn đầy năng lượng,\nMột số người im lặng nhưng bí ẩn.\nBạn tạo ấn tượng đầu tiên như thế nào với người khác?\nKiểm tra ấn tượng đầu tiên thực sự của bạn với 12 câu hỏi,\nvà nhận lời khuyên cho mối quan hệ tốt hơn!\nChỉ mất 3 phút! So sánh với bạn bè cũng rất thú vị 😊',
        id: 'Bagaimana perasaan orang ketika pertama kali melihat saya?\nBeberapa orang merasa ramah langsung,\nBeberapa orang terlihat dingin dan sombong saat pertama bertemu.\nBeberapa orang penuh energi,\nBeberapa orang pendiam tapi misterius.\nKesan pertama seperti apa yang Anda berikan kepada orang lain?\nPeriksa kesan pertama asli Anda dengan 12 pertanyaan,\ndan dapatkan tips untuk hubungan yang lebih baik!\nHanya butuh 3 menit! Membandingkan dengan teman juga menyenangkan 😊'
      },
      thumbnail: 'test_041_first_impression.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['관계', '인상', '사회성'],
        en: ['Relationships', 'Impression', 'Social'],
        ja: ['関係', '印象', '社会性'],
        'zh-CN': ['关系', '印象', '社交'],
        'zh-TW': ['關係', '印象', '社交'],
        vi: ['Mối quan hệ', 'Ấn tượng', 'Xã hội'],
        id: ['Hubungan', 'Kesan', 'Sosial']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      mainEntity: {
        '@type': 'Question',
        text: '첫인상 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 첫인상 분석'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />

        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <FirstImpressionTestClient
          locale={locale as Locale}
          slug={slug}
          title={title}
          description={description}
          questions={testData.questions}
          results={testData.results}
          questionCount={testData.questions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          similarTests={[]} // 클라이언트 사이드에서 로드
          badgeType={test.badge_type || null}
          isLatestTest={isLatestTest}
        />
      </>
    );
  }

  // 워라밸 테스트의 경우 Supabase에서 시도
  if (slug === 'work-life-balance-test') {
    const { workLifeBalanceQuestions, workLifeBalanceResults } = await import('@/lib/workLifeBalanceData');
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'work-life-balance-test',
      title: {
        ko: '당신의 이상적인 워라밸은?',
        en: 'What is your ideal work-life balance?',
        ja: 'あなたの理想的なワークライフバランスは？',
        'zh-CN': '你理想的工作生活平衡是什么？',
        'zh-TW': '你理想的工作生活平衡是什麼？',
        vi: 'Cân bằng công việc-cuộc sống lý tưởng của bạn là gì?',
        id: 'Apa keseimbangan kerja-hidup ideal Anda?'
      },
      description: {
        ko: '일이 우선? 삶이 우선? 당신의 진짜 가치관을 발견하세요!',
        en: 'Work first? Life first? Discover your true values!',
        ja: '仕事優先？人生優先？あなたの本当の価値観を発見してください！',
        'zh-CN': '工作优先？生活优先？发现你真正的价值观！',
        'zh-TW': '工作優先？生活優先？發現你真正的價值觀！',
        vi: 'Công việc trước? Cuộc sống trước? Khám phá giá trị thực sự của bạn!',
        id: 'Kerja dulu? Hidup dulu? Temukan nilai-nilai sejati Anda!'
      },
      thumbnail: 'test_051_work_life_balance.jpg',
      play_count: 0
    };

    return (
      <>
        <WorkLifeBalanceTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={workLifeBalanceQuestions}
          results={workLifeBalanceResults}
          questionCount={workLifeBalanceQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 리더십 스타일 테스트의 경우 Supabase에서 시도
  if (slug === 'leadership-style-test') {
    const { leadershipQuestions, leadershipResults } = await import('@/lib/leadershipData');
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'leadership-style-test',
      title: {
        ko: '당신은 어떤 리더인가요?',
        en: 'What kind of leader are you?',
        ja: 'あなたはどんなリーダーですか？',
        'zh-CN': '你是什么样的领导者？',
        'zh-TW': '你是什麼樣的領導者？',
        vi: 'Bạn là loại lãnh đạo nào?',
        id: 'Jenis pemimpin apa Anda?'
      },
      description: {
        ko: '리더십 심화 진단! 당신만의 리더십 스타일은?',
        en: 'In-depth leadership diagnosis! What is your leadership style?',
        ja: 'リーダーシップ深層診断！あなただけのリーダーシップスタイルは？',
        'zh-CN': '深度领导力诊断！你的领导风格是什么？',
        'zh-TW': '深度領導力診斷！你的領導風格是什麼？',
        vi: 'Chẩn đoán lãnh đạo sâu sắc! Phong cách lãnh đạo của bạn là gì?',
        id: 'Diagnosis kepemimpinan mendalam! Apa gaya kepemimpinan Anda?'
      },
      thumbnail: 'test_202_leadership_style.jpg',
      play_count: 0
    };

    return (
      <>
        <LeadershipTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={leadershipQuestions}
          results={leadershipResults}
          questionCount={leadershipQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 강박 테스트의 경우 Supabase에서 시도
  if (slug === 'obsession-test') {
    const { obsessionQuestions, obsessionResults } = await import('@/lib/obsessionData');
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'obsession-test',
      title: {
        ko: '나는 강박 스타일까? vs 건강한 스타일까?',
        en: 'Am I obsessed? vs healthy style?',
        ja: '私は強迫スタイルか？VS健康的なスタイルか？',
        'zh-CN': '我是强迫型还是健康型？',
        'zh-TW': '我是強迫型還是健康型？',
        vi: 'Tôi là phong cách ám ảnh hay phong cách khỏe mạnh?',
        id: 'Apakah saya gaya obsesif? VS gaya sehat?'
      },
      description: {
        ko: '완벽함을 추구하는 것? 아니면 강박일까?',
        en: 'Pursuing perfection? Or obsession?',
        ja: '完璧を追求すること？それとも強迫的？',
        'zh-CN': '追求完美？还是强迫症？',
        'zh-TW': '追求完美？還是強迫症？',
        vi: 'Theo đuổi sự hoàn hảo? Hay ám ảnh?',
        id: 'Mengejar kesempurnaan? Atau obsesi?'
      },
      thumbnail: 'test_203_obsession_vs_healthy.jpg',
      play_count: 0
    };

    return (
      <>
        <ObsessionTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={obsessionQuestions}
          results={obsessionResults}
          questionCount={obsessionQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 팀 플레이어 테스트의 경우 Supabase에서 시도
  if (slug === 'team-player-test') {
    const { teamPlayerQuestions, teamPlayerResults } = await import('@/lib/teamPlayerData');
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'team-player-test',
      title: {
        ko: '당신은 어떤 팀 플레이어인가요?',
        en: 'What kind of team player are you?',
        ja: 'あなたはどんなチームプレイヤーですか？',
        'zh-CN': '你是什么样的团队玩家？',
        'zh-TW': '你是什麼樣的團隊玩家？',
        vi: 'Bạn là loại người chơi nhóm nào?',
        id: 'Anda adalah pemain tim seperti apa?'
      },
      description: {
        ko: '혼자서는 빠르지만, 함께하면 더 멀리 갑니다!',
        en: 'Alone we can do so little; together we can do so much!',
        ja: '一人では速いが、一緒ならもっと遠くまで行ける！',
        'zh-CN': '一个人走得快，但一起走得更远！',
        'zh-TW': '一個人走得快，但一起走得更遠！',
        vi: 'Một mình thì nhanh, nhưng cùng nhau thì đi xa hơn！',
        id: 'Sendirian cepat, tapi bersama-sama lebih jauh！'
      },
      thumbnail: 'test_052_team_player.jpg',
      play_count: 0
    };

    return (
      <>
        <TeamPlayerTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={teamPlayerQuestions}
          results={teamPlayerResults}
          questionCount={teamPlayerQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 도전 잠재력 테스트의 경우 Supabase에서 시도
  if (slug === 'challenge-potential-test') {
    const { challengePotentialQuestions, challengePotentialResults } = await import('@/lib/challengePotentialData');
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'challenge-potential-test',
      title: {
        ko: '당신의 도전의식 잠재력은?',
        en: 'What is your challenge potential?',
        ja: 'あなたの挑戦意識の潜在力は？',
        'zh-CN': '你的挑战意识潜力是什么？',
        'zh-TW': '你的挑戰意識潛力是什麼？',
        vi: 'Tiềm năng thử thách của bạn là gì?',
        id: 'Apa potensi tantangan Anda?'
      },
      description: {
        ko: '당신 안에 잠들어 있는 도전 정신을 깨워보세요!',
        en: 'Awaken the spirit of challenge sleeping within you!',
        ja: 'あなたの中に眠っている挑戦精神を目覚めさせてください！',
        'zh-CN': '唤醒沉睡在你内心的挑战精神！',
        'zh-TW': '喚醒沉睡在你內心的挑戰精神！',
        vi: 'Đánh thức tinh thần thử thách đang ngủ trong bạn!',
        id: 'Bangunkan semangat tantangan yang tertidur dalam diri Anda!'
      },
      thumbnail: 'test_053_challenge_potential.jpg',
      play_count: 0
    };

    return (
      <>
        <ChallengePotentialTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={challengePotentialQuestions}
          results={challengePotentialResults}
          questionCount={challengePotentialQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 낙관 vs 비관 테스트
  if (slug === 'optimism-pessimism-test') {
    const { optimismQuestions, optimismResults } = await import('@/lib/optimismData');
    const test = await getTestBySlug(slug) || {
      slug: 'optimism-pessimism-test',
      title: {
        ko: '나는 낙관주의일까? vs 비관주의일까?',
        en: 'Am I an Optimist or Pessimist?',
        ja: '私は楽観主義者か悲観主義者か？',
        'zh-CN': '我是乐观主义者还是悲观主义者？',
        'zh-TW': '我是樂觀主義者還是悲觀主義者？',
        vi: 'Tôi là người lạc quan hay bi quan?',
        id: 'Apakah saya optimis atau pesimis?'
      },
      description: {
        ko: '컵에 물이 반? 반이나 있다 vs 반밖에 없다',
        en: 'Cup half full or half empty?',
        ja: 'コップに水が半分？半分もある vs 半分しかない',
        'zh-CN': '杯子半满还是半空？',
        'zh-TW': '杯子半滿還是半空？',
        vi: 'Cốc nước đầy một nửa hay còn một nửa?',
        id: 'Cangkir setengah penuh atau setengah kosong?'
      },
      thumbnail: 'test_204_optimism_vs_pessimism.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격'],
        en: ['Personality'],
        ja: ['性格'],
        'zh-CN': ['性格'],
        'zh-TW': ['性格'],
        vi: ['Tính cách'],
        id: ['Kepribadian']
      }
    };

    return (
      <>
        <OptimismTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={optimismQuestions}
          results={optimismResults}
          questionCount={optimismQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_fact_bomber_test') {
    const { phase2FactBomberQuestions, phase2FactBomberResults } = await import('@/lib/phase2_fact_bomber_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_fact_bomber_test',
      title: {
        ko: '팩폭 능력 T 테스트 (간편)',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '"너 T야?" 이 말을 칭찬으로 듣나요, 아니면 욕으로 듣나요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_065_fact_bomber.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '성격'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2FactBomberTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2FactBomberQuestions}
          results={phase2FactBomberResults}
          questionCount={phase2FactBomberQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase2_dating_mbti_test') {
    const { phase2DatingMbtiQuestions, phase2DatingMbtiResults } = await import('@/lib/phase2_dating_mbti_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_dating_mbti_test',
      title: {
        ko: '평생 솔로? 연애 호구? 내 연애 MBTI',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '당신의 연애 세포는 안녕하신가요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_140_dating_mbti.jpg',
      type: 'psychology',
      category: 'love',
      play_count: 0,
      tags: {
        ko: ['연애', '심리'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2DatingMbtiTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2DatingMbtiQuestions}
          results={phase2DatingMbtiResults}
          questionCount={phase2DatingMbtiQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 에니어그램 테스트
  if (slug === 'enneagram-test') {
    const { enneagramQuestions, enneagramResults } = await import('@/lib/enneagramData');
    const test = await getTestBySlug(slug) || {
      slug: 'enneagram-test',
      title: {
        ko: '9가지 성격! 에니어그램 테스트',
        en: '9 Types of Personality! Enneagram Test',
        ja: '9種類の性格！エニアグラムテスト',
        'zh-CN': '9种性格类型！九型人格测试',
        'zh-TW': '9種性格類型！九型人格測試',
        vi: '9 Loại Tính Cách! Bài Kiểm Tra Enneagram',
        id: '9 Tipe Kepribadian! Tes Enneagram'
      },
      description: {
        ko: '나를 움직이는 내면의 힘은 무엇일까요?',
        en: 'What is the inner force that drives me?',
        ja: '私を動かす内なる力は何だろう？',
        'zh-CN': '驱动我的内在力量是什么？',
        'zh-TW': '驅動我的內在力量是什麼？',
        vi: 'Lực lượng nội tâm nào thúc đẩy tôi?',
        id: 'Apa kekuatan batin yang menggerakkan saya?'
      },
      thumbnail: 'phase2_test_145_enneagram.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['심리', '성격'],
        en: ['psychology', 'personality'],
        ja: ['心理', '性格'],
        'zh-CN': ['心理学', '性格'],
        'zh-TW': ['心理學', '性格'],
        vi: ['tâm lý học', 'tính cách'],
        id: ['psikologi', 'kepribadian']
      }
    };

    return (
      <>
        <EnneagramTestClient
          locale={locale}
          slug={test.slug}
          title={test.title}
          description={test.description}
          questions={enneagramQuestions}
          results={enneagramResults}
          questionCount={enneagramQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // K-POP 팬덤 능력 고사 (덕력 측정기) 테스트
  if (slug === 'kpop-exam-test') {
    const { kpopExamQuestions, kpopExamResults } = await import('@/lib/kpopExamData');
    const test = await getTestBySlug(slug) || {
      slug: 'kpop-exam-test',
      title: {
        ko: 'K-POP 팬덤 능력 고사 (덕력 측정기)',
        en: 'K-POP Fan Knowledge Exam (Fan Level Test)',
        ja: 'K-POPファン知識試験（ファンレベルテスト）',
        'zh-CN': 'K-POP粉丝知识考试（粉丝等级测试）',
        'zh-TW': 'K-POP粉絲知識考試（粉絲等級測試）',
        vi: 'Kỳ thi kiến thức fan K-POP (Bài kiểm tra cấp độ fan)',
        id: 'Ujian Pengetahuan Penggemar K-POP (Tes Level Penggemar)'
      },
      description: {
        ko: '당신의 덕력은 몇 레벨입니까?',
        en: 'What level is your K-POP fan knowledge?',
        ja: 'あなたのK-POPファン知識レベルはいくつですか？',
        'zh-CN': '你的K-POP粉丝知识是几级？',
        'zh-TW': '你的K-POP粉絲知識是幾級？',
        vi: 'Kiến thức K-POP của bạn ở cấp độ nào?',
        id: 'Berapa level pengetahuan K-POP Anda?'
      },
      thumbnail: 'phase2_test_076_kpop_exam.jpg',
      type: 'knowledge',
      category: 'challenge',
      play_count: 0,
      tags: {
        ko: ['지식', '챌린지'],
        en: ['Knowledge', 'Challenge'],
        ja: ['知識', 'チャレンジ'],
        'zh-CN': ['知识', '挑战'],
        'zh-TW': ['知識', '挑戰'],
        vi: ['Kiến thức', 'Thử thách'],
        id: ['Pengetahuan', 'Tantangan']
      }
    };

    return (
      <>
        <KpopExamTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={kpopExamQuestions}
          results={kpopExamResults}
          questionCount={kpopExamQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'empathy-f-test') {
    const { empathyFQuestions, empathyFResults } = await import('@/lib/empathyFData');
    const test = await getTestBySlug(slug) || {
      slug: 'empathy-f-test',
      title: {
        ko: '공감 능력 F 테스트 (간편)',
        en: 'Empathy F Test (Simple)',
        ja: '共感能力Fテスト（簡易）',
        'zh-CN': '共情能力F测试（简易）',
        'zh-TW': '共情能力F測試（簡易）',
        vi: 'Bài kiểm tra F khả năng đồng cảm (Đơn giản)',
        id: 'Tes F Kemampuan Empati (Sederhana)'
      },
      description: {
        ko: '친구가 우울하다고 할 때 당신의 반응은?',
        en: 'How do you react when a friend says they are depressed?',
        ja: '友達が落ち込んでいるとき、あなたの反応は？',
        'zh-CN': '朋友说心情不好时你的反应是？',
        'zh-TW': '朋友說心情不好時你的反應是？',
        vi: 'Phản ứng của bạn khi bạn bè nói buồn là gì?',
        id: 'Bagaimana reaksi Anda saat teman mengatakan mereka sedih?'
      },
      thumbnail: 'phase2_test_064_empathy_level.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '성격'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <EmpathyFTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={empathyFQuestions}
          results={empathyFResults}
          questionCount={empathyFQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-attachment-style-love') {
    const { phase3AttachmentLoveQuestions, phase3AttachmentLoveResults } = await import('@/lib/phase3AttachmentLoveData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase3-attachment-style-love',
      title: {
        ko: '내 연애가 힘든 이유 (애착유형 분석)',
        en: 'Why Love Feels Hard (Attachment Style Analysis)',
        ja: '恋愛がしんどい理由（愛着タイプ分析）',
        'zh-CN': '恋爱好累的原因（依恋类型分析）',
        'zh-TW': '戀愛好累的原因（依戀類型分析）',
        vi: 'Tại sao yêu đương mệt mỏi (Phân tích kiểu gắn bó)',
        id: 'Kenapa cinta terasa berat (Analisis tipe melekat)',
      },
      description: {
        ko: '애착 유형으로 보는 나의 연애 패턴. 심리학 기반 12문항 분석.',
        en: 'Discover your dating patterns through attachment theory in 12 questions.',
        ja: '愛着理論で見る恋愛パターン。心理学に基づく12問分析。',
        'zh-CN': '从依恋类型看你的恋爱模式，12 道心理学题目。',
        'zh-TW': '從依戀類型看你的戀愛模式，12 道心理學題目。',
        vi: 'Mô hình yêu đương qua lý thuyết gắn bó — bài quiz 12 câu tâm lý.',
        id: 'Pola asmaramu lewat teori melekat — kuis psikologi 12 pertanyaan.',
      },
      thumbnail: 'p3_test_attachment_style_love.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '연애', '성격'],
        en: ['Psychology', 'Love', 'Personality'],
        ja: ['心理', '恋愛', '性格'],
        'zh-CN': ['心理', '恋爱', '性格'],
        'zh-TW': ['心理', '戀愛', '性格'],
        vi: ['Tâm lý', 'Tình yêu', 'Tính cách'],
        id: ['Psikologi', 'Cinta', 'Kepribadian'],
      },
    };

    return (
      <>
        <Phase3AttachmentLoveTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3AttachmentLoveQuestions}
          results={phase3AttachmentLoveResults}
          questionCount={phase3AttachmentLoveQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-burnout-fatigue-precision') {
    const { phase3BurnoutFatigueQuestions, phase3BurnoutFatigueResults } = await import('@/lib/phase3BurnoutFatigueData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase3-burnout-fatigue-precision',
      title: {
        ko: '혹시 나도 번아웃? 피로도 정밀 진단',
        en: 'Burnout Check: Precision Fatigue Diagnosis',
        ja: '私もバーンアウト？疲労度精密診断',
        'zh-CN': '我也会职业倦怠吗？疲劳度精密诊断',
        'zh-TW': '我也會職業倦怠嗎？疲勞度精密診斷',
        vi: 'Bạn có đang kiệt sức? Chẩn đoán mức mệt mỏi',
        id: 'Apakah aku burnout? Diagnosis kelelahan presisi',
      },
      description: {
        ko: '신체·감정·인지 3축으로 보는 번아웃·피로도 레벨. 12문항.',
        en: 'Burnout and fatigue levels across body, emotion, and cognition — 12 questions.',
        ja: '身体・感情・認知の3軸で見るバーンアウト／疲労度。12問。',
        'zh-CN': '从身体、情绪、认知三轴看你的倦怠与疲劳度，12 题。',
        'zh-TW': '從身體、情緒、認知三軸看你的倦怠與疲勞度，12 題。',
        vi: '3 trục: thể chất, cảm xúc, nhận thức — 12 câu.',
        id: 'Tiga sumbu: fisik, emosi, kognisi — 12 pertanyaan.',
      },
      thumbnail: 'p3_test_burnout_fatigue_level.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '직장', '멘탈'],
        en: ['Psychology', 'Work', 'Mental health'],
        ja: ['心理', '職場', 'メンタル'],
        'zh-CN': ['心理', '职场', '心理'],
        'zh-TW': ['心理', '職場', '心理'],
        vi: ['Tâm lý', 'Công sở', 'Sức khỏe tinh thần'],
        id: ['Psikologi', 'Kerja', 'Kesehatan mental'],
      },
    };

    return (
      <>
        <Phase3BurnoutFatigueTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3BurnoutFatigueQuestions}
          results={phase3BurnoutFatigueResults}
          questionCount={phase3BurnoutFatigueQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-meme-character-type') {
    const { phase3MemeCharacterTypeQuestions, phase3MemeCharacterTypeResults } = await import('@/lib/phase3MemeCharacterTypeData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase3-meme-character-type',
      title: {
        ko: '나는 어떤 밈 캐릭터 재질?',
        en: 'What Meme Character Type Are You?',
        ja: 'あなたはどんなミームキャラタイプ？',
        'zh-CN': '你是什么表情包角色类型？',
        'zh-TW': '你是什麼迷因角色類型？',
        vi: 'Bạn là kiểu meme character nào?',
        id: 'Kamu tipe karakter meme apa?',
      },
      description: {
        ko: '당신은 어떤 밈 재질인가요?',
        en: 'What meme character type are you?',
        ja: 'あなたはどんなミームの素質？',
        'zh-CN': '你是什么表情包体质？',
        'zh-TW': '你是什麼迷因體質？',
        vi: 'Bạn thuộc kiểu meme nào?',
        id: 'Kamu tipe meme yang mana?',
      },
      thumbnail: 'p3_test_meme_character_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['밈', '성격', '공감', 'MZ', '바이럴'],
        en: ['Meme', 'Personality', 'Empathy', 'Gen Z', 'Viral'],
        ja: ['ミーム', '性格', '共感', 'MZ', 'バイラル'],
        'zh-CN': ['表情包', '性格', '共鸣', 'Z世代', '病毒式传播'],
        'zh-TW': ['迷因', '性格', '共鳴', 'Z世代', '病毒式傳播'],
        vi: ['Meme', 'Tính cách', 'Đồng cảm', 'Gen Z', 'Viral'],
        id: ['Meme', 'Kepribadian', 'Empati', 'Gen Z', 'Viral'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3MemeCharacterTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3MemeCharacterTypeQuestions}
          results={phase3MemeCharacterTypeResults}
          questionCount={phase3MemeCharacterTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-kdrama-lead-character-type') {
    const { phase3KdramaLeadCharacterTypeQuestions, phase3KdramaLeadCharacterTypeResults } = await import('@/lib/phase3KdramaLeadCharacterTypeData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase3-kdrama-lead-character-type',
      title: {
        ko: 'K-드라마 주인공 재질 테스트',
        en: 'K-Drama Lead Character Type Test',
        ja: 'K-ドラマ主人公タイプ診断',
        'zh-CN': 'K剧主角类型测试',
        'zh-TW': 'K劇主角類型測試',
        vi: 'Bài test kiểu nhân vật chính K-Drama',
        id: 'Tes Tipe Karakter Utama K-Drama',
      },
      description: {
        ko: '당신의 일상은 어떤 K-드라마와 닮아 있나요?',
        en: 'Which K-drama does your daily life resemble?',
        ja: 'あなたの日常はどんなK-ドラマに似ている？',
        'zh-CN': '你的日常像哪部K剧？',
        'zh-TW': '你的日常像哪部K劇？',
        vi: 'Cuộc sống hàng ngày của bạn giống K-Drama nào?',
        id: 'Kehidupan sehari-harimu mirip K-Drama yang mana?',
      },
      thumbnail: 'p3_test_kdrama_lead_character_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['K드라마', '주인공', '성격', '드라마', '한류'],
        en: ['K-Drama', 'Protagonist', 'Personality', 'Drama', 'Hallyu'],
        ja: ['K-ドラマ', '主人公', '性格', 'ドラマ', '韓流'],
        'zh-CN': ['K剧', '主角', '性格', '电视剧', '韩流'],
        'zh-TW': ['K劇', '主角', '性格', '戲劇', '韓流'],
        vi: ['K-Drama', 'Nhân vật chính', 'Tính cách', 'Phim', 'Hallyu'],
        id: ['K-Drama', 'Protagonis', 'Kepribadian', 'Drama', 'Hallyu'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3KdramaLeadCharacterTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3KdramaLeadCharacterTypeQuestions}
          results={phase3KdramaLeadCharacterTypeResults}
          questionCount={phase3KdramaLeadCharacterTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-ditto-consumption-type') {
    const { phase3DittoConsumptionTypeQuestions, phase3DittoConsumptionTypeResults } = await import('@/lib/phase3DittoConsumptionTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-ditto-consumption-type',
      title: {
        ko: '나의 디토소비 유형',
        en: 'My Ditto Consumption Type',
        ja: '私のディトゥー消費タイプ',
        'zh-CN': '我的跟风消费类型',
        'zh-TW': '我的跟風消費類型',
        vi: 'Kiểu tiêu dùng Ditto của tôi',
        id: 'Tipe Konsumsi Ditto Saya',
      },
      description: {
        ko: '12가지 질문으로 나의 디토소비 패턴을 분석합니다.',
        en: 'Analyze your ditto consumption pattern in 12 questions.',
        ja: '12問であなたのディトゥー消費パターンを分析します。',
        'zh-CN': '用12道题分析你的跟风消费模式。',
        'zh-TW': '用12道題分析你的跟風消費模式。',
        vi: 'Phân tích kiểu tiêu dùng Ditto của bạn qua 12 câu hỏi.',
        id: 'Analisis pola konsumsi Ditto-mu lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_ditto_consumption_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['디토소비', '소비패턴', '트렌드', '인플루언서', '브랜드'],
        en: ['Ditto consumption', 'Spending pattern', 'Trend', 'Influencer', 'Brand'],
        ja: ['ディトゥー消費', '消費パターン', 'トレンド', 'インフルエンサー', 'ブランド'],
        'zh-CN': ['跟风消费', '消费模式', '趋势', '网红', '品牌'],
        'zh-TW': ['跟風消費', '消費模式', '趨勢', '網紅', '品牌'],
        vi: ['Tiêu dùng Ditto', 'Mẫu chi tiêu', 'Xu hướng', 'Influencer', 'Thương hiệu'],
        id: ['Konsumsi Ditto', 'Pola belanja', 'Tren', 'Influencer', 'Brand'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3DittoConsumptionTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3DittoConsumptionTypeQuestions}
          results={phase3DittoConsumptionTypeResults}
          questionCount={phase3DittoConsumptionTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-summer-vacation-type') {
    const { phase3SummerVacationTypeQuestions, phase3SummerVacationTypeResults } = await import('@/lib/phase3SummerVacationTypeData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase3-summer-vacation-type',
      title: {
        ko: '올여름 찰떡! 내 휴가지 유형',
        en: 'Your Summer Vacation Match Type',
        ja: '今年の夏ピッタリ！私の休暇タイプ',
        'zh-CN': '今夏合拍！我的度假类型',
        'zh-TW': '今夏合拍！我的度假類型',
        vi: 'Hè này hợp gu! Kiểu kỳ nghỉ của tôi',
        id: 'Cocok musim panas! Tipe liburanku',
      },
      description: {
        ko: '여행 성향·예산·동행으로 보는 휴가지 추천. 12문항 2지선다.',
        en: 'Summer trip style in 12 A/B questions — destination vibe match.',
        ja: '旅スタイル・予算・同行者から見る夏の休暇タイプ。12問の2択。',
        'zh-CN': '从旅行风格、预算、同行看今夏度假类型，12 道二选一。',
        'zh-TW': '從旅行風格、預算、同行看今夏度假類型，12 題二選一。',
        vi: 'Phong cách du lịch, ngân sách, đồng hành — 12 câu trắc nghiệm.',
        id: 'Gaya traveling, budget, teman seperjalanan — 12 pertanyaan pilihan ganda.',
      },
      thumbnail: 'p3_test_summer_vacation_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['여행', '휴가', '심리'],
        en: ['Travel', 'Vacation', 'Psychology'],
        ja: ['旅行', '休暇', '心理'],
        'zh-CN': ['旅行', '度假', '心理'],
        'zh-TW': ['旅行', '度假', '心理'],
        vi: ['Du lịch', 'Kỳ nghỉ', 'Tâm lý'],
        id: ['Travel', 'Liburan', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3SummerVacationTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SummerVacationTypeQuestions}
          results={phase3SummerVacationTypeResults}
          questionCount={phase3SummerVacationTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-perfectionism-index') {
    const { phase3PerfectionismIndexQuestions, phase3PerfectionismIndexResults } = await import('@/lib/phase3PerfectionismIndexData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-perfectionism-index',
      title: {
        ko: '나의 완벽주의 지수',
        en: 'My Perfectionism Index',
        ja: '私の完璧主義指数',
        'zh-CN': '我的完美主义指数',
        'zh-TW': '我的完美主義指數',
        vi: 'Chỉ số chủ nghĩa hoàn hảo của tôi',
        id: 'Indeks perfeksionismeku',
      },
      description: {
        ko: '12가지 일상 행동으로 완벽주의 레벨과 삶에 미치는 영향을 분석합니다. #성격 #공감 #자기이해',
        en: '12 everyday behaviors — perfectionism level and life impact. #Personality #Empathy #SelfInsight',
        ja: '日常12問で完璧主義レベルと生活への影響を分析。#性格 #共感 #自己理解',
        'zh-CN': '12 道日常行为题，分析完美主义程度与生活影响。#性格 #共情 #自我理解',
        'zh-TW': '12 道日常行為題，分析完美主義程度與生活影響。#性格 #共情 #自我理解',
        vi: '12 hành vi hàng ngày — mức chủ nghĩa hoàn hảo và tác động.#Tính cách #Đồng cảm #Tự hiểu mình',
        id: '12 perilaku sehari-hari — tingkat perfeksionisme & dampaknya.#Kepribadian #Empati #Memahami diri',
      },
      thumbnail: 'p3_test_perfectionism_index.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['성격', '공감', '자기이해'],
        en: ['Personality', 'Empathy', 'Self-understanding'],
        ja: ['性格', '共感', '自己理解'],
        'zh-CN': ['性格', '共情', '自我理解'],
        'zh-TW': ['性格', '共情', '自我理解'],
        vi: ['Tính cách', 'Đồng cảm', 'Tự hiểu mình'],
        id: ['Kepribadian', 'Empati', 'Memahami diri'],
      },
    };

    return (
      <>
        <Phase3PerfectionismIndexTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3PerfectionismIndexQuestions}
          results={phase3PerfectionismIndexResults}
          questionCount={phase3PerfectionismIndexQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-best-friend-quiz') {
    const { phase3BestFriendQuizQuestions, phase3BestFriendQuizResults } = await import('@/lib/phase3BestFriendQuizData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-best-friend-quiz',
      title: {
        ko: '나를 제일 잘 아는 친구는?',
        en: 'Who knows me best?',
        ja: '私を一番よく知ってる友だちは？',
        'zh-CN': '谁最了解我？',
        'zh-TW': '誰最了解我？',
        vi: 'Ai hiểu tôi nhất?',
        id: 'Siapa yang paling mengenal saya?',
      },
      description: {
        ko: '10문항 찐친 퀴즈. 먼저 내가 정답을 정하고 친구에게 링크를 공유하세요. #관계 #우정 #찐친',
        en: '10-question BFF quiz: set your answers first, then share the link with friends. #friends #friendship #bff',
        ja: '10問の親友クイズ。先に正解を決めて友だちにリンクを共有。#友だち #友情',
        'zh-CN': '10 题挚友测验：先设定你的答案，再分享链接给好友。#友情 #挚友',
        'zh-TW': '10 題摯友測驗：先設定你的答案，再分享連結給好友。#友情 #摯友',
        vi: 'Quiz 10 câu bạn thân: chọn đáp án của bạn trước, rồi chia sẻ link. #bạn #tình bạn',
        id: 'Kuis 10 soal sahabat: tentukan jawabanmu dulu, lalu bagikan tautannya. #teman #persahabatan',
      },
      thumbnail: 'p3_test_best_friend_quiz.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['관계', '우정', '찐친'],
        en: ['relationships', 'friendship', 'bff'],
        ja: ['人間関係', '友情', '親友'],
        'zh-CN': ['关系', '友情', '挚友'],
        'zh-TW': ['關係', '友情', '摯友'],
        vi: ['quan hệ', 'tình bạn', 'bạn thân'],
        id: ['hubungan', 'persahabatan', 'sahabat'],
      },
    };

    return (
      <>
        <Phase3BestFriendQuizTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3BestFriendQuizQuestions}
          results={phase3BestFriendQuizResults}
          questionCount={phase3BestFriendQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-friend-sees-my-mbti') {
    const { phase3FriendSeesMyMbtiQuestions } = await import('@/lib/phase3FriendSeesMyMbtiData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-friend-sees-my-mbti',
      title: {
        ko: '친구가 보는 내 MBTI',
        en: 'My MBTI Through a Friend\'s Eyes',
        ja: '友だちが見る私のMBTI',
        'zh-CN': '朋友眼中的我的MBTI',
        'zh-TW': '朋友眼中的我的MBTI',
        vi: 'MBTI của tôi qua mắt bạn bè',
        id: 'MBTIku lewat mata teman',
      },
      description: {
        ko: '내가 생각한 나 vs 친구가 보는 나, MBTI로 비교해보세요',
        en: 'Compare how you see yourself vs how a friend sees you — through MBTI',
        ja: '自分が思う自分 vs 友だちが見る自分を、MBTIで比較してみよう',
        'zh-CN': '用 MBTI 对比：你以为的自己 vs 朋友眼里的你',
        'zh-TW': '用 MBTI 對比：你以為的自己 vs 朋友眼裡的你',
        vi: 'So sánh bạn nghĩ về mình vs bạn bè nhìn bạn — qua MBTI',
        id: 'Bandingkan dirimu menurutmu vs menurut teman — lewat MBTI',
      },
      thumbnail: 'p3_test_friend_sees_my_mbti.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['MBTI', '친구', '심리'],
        en: ['MBTI', 'Friends', 'Psychology'],
        ja: ['MBTI', '友だち', '心理'],
        'zh-CN': ['MBTI', '朋友', '心理'],
        'zh-TW': ['MBTI', '朋友', '心理'],
        vi: ['MBTI', 'Bạn bè', 'Tâm lý'],
        id: ['MBTI', 'Teman', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3FriendSeesMyMbtiTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3FriendSeesMyMbtiQuestions}
          questionCount={phase3FriendSeesMyMbtiQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-ego-wall-thickness') {
    const { phase3EgoWallThicknessQuestions, phase3EgoWallThicknessResults } = await import('@/lib/phase3EgoWallThicknessData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-ego-wall-thickness',
      title: {
        ko: "나의 '자아 성벽' 두께",
        en: "My 'Ego Wall' Thickness",
        ja: '私の『自我の壁』の厚さ',
        'zh-CN': '我的「自我城墙」厚度',
        'zh-TW': '我的「自我城牆」厚度',
        vi: "Độ dày 'Bức tường bản ngã' của tôi",
        id: "Ketebalan 'Tembok Ego'-ku",
      },
      description: {
        ko: '직관적으로 이미지를 선택하면 나의 자아 성벽 두께와 방어 기제 패턴을 분석해 드립니다.',
        en: "Choose images intuitively, and we'll analyze the thickness of your ego wall and your defense mechanism pattern.",
        ja: '直感的に画像を選ぶと、あなたの自我の壁の厚さと防衛機制のパターンを分析します。',
        'zh-CN': '凭直觉选择图片，我们将为你分析自我城墙的厚度和防御机制模式。',
        'zh-TW': '憑直覺選擇圖片，我們將為你分析自我城牆的厚度和防禦機制模式。',
        vi: 'Chọn hình ảnh theo trực giác, chúng tôi sẽ phân tích độ dày bức tường bản ngã và kiểu cơ chế phòng vệ của bạn.',
        id: 'Pilih gambar secara intuitif, dan kami akan menganalisis ketebalan tembok egomu serta pola mekanisme pertahananmu.',
      },
      thumbnail: 'p3_test_ego_wall_thickness.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['자아성벽', '방어기제', '자존감'],
        en: ['ego wall', 'defense mechanism', 'self-esteem'],
        ja: ['自我の壁', '防衛機制', '自己肯定感'],
        'zh-CN': ['自我城墙', '防御机制', '自尊'],
        'zh-TW': ['自我城牆', '防禦機制', '自尊'],
        vi: ['bức tường bản ngã', 'cơ chế phòng vệ', 'tự tôn'],
        id: ['tembok ego', 'mekanisme pertahanan', 'harga diri'],
      },
    };

    return (
      <>
        <Phase3EgoWallThicknessTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3EgoWallThicknessQuestions}
          results={phase3EgoWallThicknessResults}
          questionCount={phase3EgoWallThicknessQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-cafe-work-grade') {
    const { phase3CafeWorkGradeQuestions, phase3CafeWorkGradeResults } = await import('@/lib/phase3CafeWorkGradeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-cafe-work-grade',
      title: {
        ko: "나의 '카공족' 등급 테스트",
        en: "My 'Cafe Studier' Grade Test",
        ja: '私の「カフェ勉族」等級テスト',
        'zh-CN': '我的「咖啡馆学习党」等级测试',
        'zh-TW': '我的「咖啡廳學習黨」等級測試',
        vi: "Bài test hạng 'dân học ở quán cà phê' của tôi",
        id: "Tes Grade 'Pekerja Kafe'-ku",
      },
      description: {
        ko: '12문항으로 나의 카공 습관과 에티켓 등급을 솔직하게 진단합니다.',
        en: '12 questions honestly diagnose your cafe work habits and etiquette grade.',
        ja: '12問で、あなたのカフェ勉習慣とエチケット等級を正直に診断します。',
        'zh-CN': '通过12道题诚实地诊断你的咖啡馆学习办公习惯与礼仪等级。',
        'zh-TW': '透過12題誠實診斷你的咖啡廳學習辦公習慣與禮儀等級。',
        vi: '12 câu hỏi chẩn đoán thẳng thắn thói quen học/làm ở quán cà phê và hạng etiquette của bạn.',
        id: '12 pertanyaan mendiagnosis kebiasaan kerja di kafe dan grade etiketmu secara jujur.',
      },
      thumbnail: 'p3_test_cafe_work_grade.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['카공족', '카페', '에티켓', '공부', '재택'],
        en: ['cafe studier', 'cafe', 'etiquette', 'study', 'remote work'],
        ja: ['カフェ勉族', 'カフェ', 'エチケット', '勉強', '在宅'],
        'zh-CN': ['咖啡馆学习党', '咖啡馆', '礼仪', '学习', '居家办公'],
        'zh-TW': ['咖啡廳學習黨', '咖啡廳', '禮儀', '學習', '居家辦公'],
        vi: ['học ở quán cà phê', 'quán cà phê', 'etiquette', 'học tập', 'làm việc từ xa'],
        id: ['pekerja kafe', 'kafe', 'etiket', 'belajar', 'kerja remote'],
      },
    };

    return (
      <>
        <Phase3CafeWorkGradeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3CafeWorkGradeQuestions}
          results={phase3CafeWorkGradeResults}
          questionCount={phase3CafeWorkGradeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-personal-branding-keywords') {
    const { phase3PersonalBrandingKeywordsQuestions, phase3PersonalBrandingKeywordsResults } = await import('@/lib/phase3PersonalBrandingKeywordsData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-personal-branding-keywords',
      title: {
        ko: "나의 '퍼스널 브랜딩' 키워드",
        en: "My 'Personal Branding' Keywords",
        ja: '私の「パーソナルブランディング」キーワード',
        'zh-CN': '我的「个人品牌」关键词',
        'zh-TW': '我的「個人品牌」關鍵字',
        vi: "Từ khóa 'Personal Branding' của tôi",
        id: "Kata Kunci 'Personal Branding'-ku",
      },
      description: {
        ko: '12문항으로 나를 홍보할 최적의 키워드 3개를 찾아드립니다.',
        en: '12 questions find the 3 best keywords to promote yourself.',
        ja: '12問であなたをアピールする最適なキーワード3つを見つけます。',
        'zh-CN': '通过12道题找出最适合宣传自己的3个关键词。',
        'zh-TW': '透過12題找出最適合宣傳自己的3個關鍵字。',
        vi: '12 câu hỏi giúp tìm 3 từ khóa tối ưu để quảng bá bản thân.',
        id: '12 pertanyaan menemukan 3 kata kunci terbaik untuk mempromosikan dirimu.',
      },
      thumbnail: 'p3_test_personal_branding_keywords.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['퍼스널브랜딩', '이력서', '링크드인', '자기소개', '커리어'],
        en: ['personal branding', 'resume', 'linkedin', 'self-introduction', 'career'],
        ja: ['パーソナルブランディング', '履歴書', 'LinkedIn', '自己紹介', 'キャリア'],
        'zh-CN': ['个人品牌', '简历', '领英', '自我介绍', '职业'],
        'zh-TW': ['個人品牌', '履歷', 'LinkedIn', '自我介紹', '職涯'],
        vi: ['personal branding', 'CV', 'LinkedIn', 'giới thiệu bản thân', 'sự nghiệp'],
        id: ['personal branding', 'CV', 'LinkedIn', 'perkenalan diri', 'karier'],
      },
    };

    return (
      <>
        <Phase3PersonalBrandingKeywordsTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3PersonalBrandingKeywordsQuestions}
          results={phase3PersonalBrandingKeywordsResults}
          questionCount={phase3PersonalBrandingKeywordsQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-100billion-probability') {
    const { phase3HundredBillionProbabilityQuestions, phase3HundredBillionProbabilityResults } = await import('@/lib/phase3HundredBillionProbabilityData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-100billion-probability',
      title: {
        ko: '내가 100억 부자가 될 확률',
        en: 'My Odds of Becoming a ₩10 Billion Rich Person',
        ja: '私が100億ウォンの金持ちになる確率',
        'zh-CN': '我成为100亿韩元富翁的概率',
        'zh-TW': '我成為100億韓元富翁的機率',
        vi: 'Xác suất tôi trở thành người giàu 100 tỷ won',
        id: 'Peluangku Jadi Kaya 100 Miliar Won',
      },
      description: {
        ko: '12문항으로 나의 부의 마인드셋과 재테크 성향을 분석해 100억 부자가 될 확률을 알려드립니다.',
        en: '12 questions analyze your wealth mindset and investing habits to estimate your odds of reaching ₩10 billion.',
        ja: '12問であなたの富のマインドセットと投資傾向を分析し、100億ウォンの金持ちになる確率をお伝えします。',
        'zh-CN': '通过12道题分析你的财富心态与理财倾向，告诉你成为100亿韩元富翁的概率。',
        'zh-TW': '透過12題分析你的財富心態與理財傾向，告訴你成為100億韓元富翁的機率。',
        vi: '12 câu hỏi phân tích tư duy giàu có và xu hướng đầu tư để ước tính xác suất bạn đạt 100 tỷ won.',
        id: '12 pertanyaan menganalisis mindset kekayaan dan kecenderungan investasi untuk memperkirakan peluangmu mencapai 100 miliar won.',
      },
      thumbnail: 'p3_test_100billion_probability.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['100억', '부자', '재테크', '마인드셋', '돈'],
        en: ['10 billion', 'rich', 'investing', 'mindset', 'money'],
        ja: ['100億', '金持ち', '投資', 'マインドセット', 'お金'],
        'zh-CN': ['100亿', '富翁', '理财', '心态', '金钱'],
        'zh-TW': ['100億', '富翁', '理財', '心態', '金錢'],
        vi: ['100 tỷ', 'giàu', 'đầu tư', 'mindset', 'tiền'],
        id: ['100 miliar', 'kaya', 'investasi', 'mindset', 'uang'],
      },
    };

    return (
      <>
        <Phase3HundredBillionProbabilityTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3HundredBillionProbabilityQuestions}
          results={phase3HundredBillionProbabilityResults}
          questionCount={phase3HundredBillionProbabilityQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-office-villain-probability') {
    const { phase3OfficeVillainProbabilityQuestions, phase3OfficeVillainProbabilityResults } = await import('@/lib/phase3OfficeVillainProbabilityData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-office-villain-probability',
      title: {
        ko: "내가 '회사 빌런'이 될 확률?",
        en: "What's My Odds of Becoming an 'Office Villain'?",
        ja: '私が「オフィス悪役」になる確率は？',
        'zh-CN': '我成为「职场反派」的概率？',
        'zh-TW': '我成為「職場反派」的機率？',
        vi: "Xác suất tôi trở thành 'phản diện công sở'?",
        id: "Berapa Peluangku Jadi 'Penjahat Kantor'?",
      },
      description: {
        ko: '12가지 오피스 상황극으로 나의 직장 빌런 확률을 솔직하게 측정합니다.',
        en: '12 real office scenarios honestly measure your odds of being a workplace villain.',
        ja: '12のオフィス状況劇で、あなたの職場悪役確率を正直に測定します。',
        'zh-CN': '通过12个办公室情景剧，诚实测量你成为职场反派的概率。',
        'zh-TW': '透過12個辦公室情境劇，誠實測量你成為職場反派的機率。',
        vi: '12 tình huống văn phòng đo xác suất bạn trở thành phản diện công sở một cách thẳng thắn.',
        id: '12 skenario kantor mengukur peluangmu jadi penjahat kantor secara jujur.',
      },
      thumbnail: 'p3_test_office_villain_probability.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['회사빌런', '직장인', '오피스', '공감', '블라인드'],
        en: ['office villain', 'office worker', 'office', 'relatable', 'Blind'],
        ja: ['オフィス悪役', '会社員', 'オフィス', '共感', 'Blind'],
        'zh-CN': ['职场反派', '上班族', '办公室', '共鸣', 'Blind'],
        'zh-TW': ['職場反派', '上班族', '辦公室', '共鳴', 'Blind'],
        vi: ['phản diện công sở', 'nhân viên văn phòng', 'văn phòng', 'đồng cảm', 'Blind'],
        id: ['penjahat kantor', 'pekerja kantor', 'kantor', 'relatable', 'Blind'],
      },
    };

    return (
      <>
        <Phase3OfficeVillainProbabilityTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3OfficeVillainProbabilityQuestions}
          results={phase3OfficeVillainProbabilityResults}
          questionCount={phase3OfficeVillainProbabilityQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-balance-99-ultimate') {
    const { phase3Balance99UltimateQuestions, phase3Balance99UltimateResults } = await import('@/lib/phase3Balance99UltimateData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-balance-99-ultimate',
      title: {
        ko: "세상 까다로운 '밸런스' 99",
        en: "The World's Pickiest Balance 99",
        ja: "世界一むずかしい『バランス』99",
        'zh-CN': "世上最挑剔的『平衡』99",
        'zh-TW': "世上最挑剔的『平衡』99",
        vi: "Balance 99 khó nhằn nhất",
        id: "Balance 99 paling cerewet di dunia",
      },
      description: {
        ko: '99개 극한 밸런스 질문으로 선택 성향을 분석하고 친구와 1:1 대결할 수 있습니다.',
        en: 'Analyze your choice style with 99 extreme would-you-rather questions—and duel a friend 1:1.',
        ja: '99個の極限バランス質問で選択傾向を分析し、友達と1:1対決できます。',
        'zh-CN': '用99道极限二选一分析你的选择倾向，还能和朋友1:1对决。',
        'zh-TW': '用99道極限二選一分析你的選擇傾向，還能和朋友1:1對決。',
        vi: 'Phân tích xu hướng lựa chọn với 99 câu hỏi cân bằng cực đoan—và đấu 1:1 với bạn.',
        id: 'Analisis gaya pilihanmu dengan 99 pertanyaan would-you-rather ekstrem—dan duel 1:1 dengan teman.',
      },
      thumbnail: 'p3_game_balance_99_ultimate.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['밸런스게임', '99', '극한선택', '친구대결', '공감'],
        en: ['would you rather', '99', 'hard choices', 'friend duel', 'compatibility'],
        ja: ['バランスゲーム', '99', '極限選択', '友達対決', '相性'],
        'zh-CN': ['二选一', '99', '极限选择', '朋友对决', '默契'],
        'zh-TW': ['二選一', '99', '極限選擇', '朋友對決', '默契'],
        vi: ['would you rather', '99', 'lựa chọn khó', 'đấu bạn', 'tương hợp'],
        id: ['would you rather', '99', 'pilihan sulit', 'duel teman', 'kecocokan'],
      },
    };

    return (
      <>
        <Phase3Balance99UltimateTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3Balance99UltimateQuestions}
          results={phase3Balance99UltimateResults}
          questionCount={phase3Balance99UltimateQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-daily-mind-weather-report') {
    const { phase3DailyMindWeatherReportQuestions, phase3DailyMindWeatherReportResults } = await import('@/lib/phase3DailyMindWeatherReportData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-daily-mind-weather-report',
      title: {
        ko: "오늘 나의 '마음 날씨' 리포트",
        en: "Today's Mind Weather Report",
        ja: "今日の『心天気』レポート",
        'zh-CN': "今天的『心天气』报告",
        'zh-TW': "今天的『心天氣』報告",
        vi: "Báo cáo thời tiết lòng hôm nay",
        id: "Laporan Cuaca Hati Hari Ini",
      },
      description: {
        ko: '6가지 이미지를 직관적으로 선택하면 오늘 나의 마음 날씨 리포트가 완성됩니다.',
        en: 'Pick 6 images by gut feeling and get your mind-weather report for today.',
        ja: '6枚の画像を直感で選ぶと、今日の心天気レポートが完成します。',
        'zh-CN': '凭直觉选择6张图，即可完成今天的心天气报告。',
        'zh-TW': '憑直覺選擇6張圖，即可完成今天的心天氣報告。',
        vi: 'Chọn 6 hình theo trực giác để hoàn thành báo cáo thời tiết lòng hôm nay.',
        id: 'Pilih 6 gambar secara intuisi untuk menyelesaikan laporan cuaca hati hari ini.',
      },
      thumbnail: 'p3_daily_mind_weather_report.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['마음날씨', '감정체크', '오늘기분', '데일리', '멘탈케어'],
        en: ['mind weather', 'mood check', 'daily mood', 'daily', 'mental care'],
        ja: ['心天気', '感情チェック', '今日の気分', 'デイリー', 'メンタルケア'],
        'zh-CN': ['心天气', '情绪打卡', '今日心情', '每日', '心理关怀'],
        'zh-TW': ['心天氣', '情緒打卡', '今日心情', '每日', '心理關懷'],
        vi: ['thời tiết lòng', 'check cảm xúc', 'tâm trạng hôm nay', 'hàng ngày', 'chăm sóc tinh thần'],
        id: ['cuaca hati', 'cek emosi', 'mood hari ini', 'harian', 'perawatan mental'],
      },
    };

    return (
      <>
        <Phase3DailyMindWeatherReportTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3DailyMindWeatherReportQuestions}
          results={phase3DailyMindWeatherReportResults}
          questionCount={phase3DailyMindWeatherReportQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-1min-reaction-speed') {
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-1min-reaction-speed',
      title: {
        ko: "1분 '순발력' 테스트",
        en: '1-Min Reflex Test',
        ja: '1分『瞬発力』テスト',
        'zh-CN': '1分钟『反应力』测试',
        'zh-TW': '1分鐘『反應力』測試',
        vi: 'Test phản xạ 1 phút',
        id: 'Tes Refleks 1 Menit',
      },
      description: {
        ko: '60초 안에 단순·판단·복합 반응을 모두 측정합니다. 내 점수 이겼어?',
        en: 'Measure simple, judgment, and complex reactions in 60 seconds. Can you beat my score?',
        ja: '60秒で単純・判断・複合反応をすべて測定。俺のスコア超えられる？',
        'zh-CN': '60秒内测完简单、判断与复合反应。能赢我的分数吗？',
        'zh-TW': '60秒內測完簡單、判斷與複合反應。能贏我的分數嗎？',
        vi: 'Đo phản ứng đơn giản, phán đoán và phức hợp trong 60 giây. Thắng được điểm tao không?',
        id: 'Ukur reaksi sederhana, penilaian, dan kompleks dalam 60 detik. Bisa kalahkan skor aku?',
      },
      thumbnail: 'p3_test_1min_reaction_speed.webp',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ['순발력', '반응속도', '1분', '랭킹', '챌린지'],
        en: ['reflexes', 'reaction speed', '1 minute', 'ranking', 'challenge'],
        ja: ['瞬発力', '反応速度', '1分', 'ランキング', 'チャレンジ'],
        'zh-CN': ['反应力', '反应速度', '1分钟', '排行', '挑战'],
        'zh-TW': ['反應力', '反應速度', '1分鐘', '排行', '挑戰'],
        vi: ['phản xạ', 'tốc độ phản ứng', '1 phút', 'xếp hạng', 'thử thách'],
        id: ['refleks', 'kecepatan reaksi', '1 menit', 'peringkat', 'tantangan'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase3OneMinReactionSpeedTestClient
        locale={locale}
        slug={test.slug}
        title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
        description={
          typeof test.description === 'object'
            ? test.description[locale] || test.description.ko
            : test.description
        }
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  if (slug === 'phase3-luck-game-test') {
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-luck-game-test',
      title: {
        ko: "'확률' 게임 : 운빨 테스트",
        en: "'Probability' Game: Luck Test",
        ja: "'確率'ゲーム：運ゲーテスト",
        'zh-CN': "'概率'游戏：运气测试",
        'zh-TW': "'機率'遊戲：運氣測試",
        vi: "Game 'Xác Suất': Test Vận May",
        id: "Game 'Probabilitas': Tes Keberuntungan",
      },
      description: {
        ko: '10가지 확률 게임으로 오늘의 운빨을 0~100점으로 측정합니다. 내 점수 이겼어?',
        en: "Measure today's luck from 0–100 with 10 probability games. Can you beat my score?",
        ja: '10種類の確率ゲームで今日の運を0〜100点で測定。私の点数超えられる？',
        'zh-CN': '用10种概率游戏测量今天运气0~100分。能赢我的分数吗？',
        'zh-TW': '用10種機率遊戲測量今天運氣0~100分。能贏我的分數嗎？',
        vi: 'Đo vận may hôm nay 0–100 qua 10 trò xác suất. Thắng điểm tôi được không?',
        id: 'Ukur keberuntungan hari ini 0–100 lewat 10 game probabilitas. Bisa kalahkan skorku?',
      },
      thumbnail: 'p3_game_luck_test.webp',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ['운빨', '확률', '게임', '운', '챌린지'],
        en: ['luck', 'probability', 'game', 'fortune', 'challenge'],
        ja: ['運ゲー', '確率', 'ゲーム', '運', 'チャレンジ'],
        'zh-CN': ['运气', '概率', '游戏', '运势', '挑战'],
        'zh-TW': ['運氣', '機率', '遊戲', '運勢', '挑戰'],
        vi: ['vận may', 'xác suất', 'game', 'may mắn', 'thử thách'],
        id: ['keberuntungan', 'probabilitas', 'game', 'hoki', 'tantangan'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase3LuckGameTestClient
        locale={locale}
        slug={test.slug}
        title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
        description={
          typeof test.description === 'object'
            ? test.description[locale] || test.description.ko
            : test.description
        }
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  if (slug === 'phase3-memory-limit-challenge') {
    const { phase3MemoryLimitChallengeQuestions, phase3MemoryLimitChallengeResults } = await import('@/lib/phase3MemoryLimitChallengeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-memory-limit-challenge',
      title: {
        ko: "'기억력' 한계 챌린지",
        en: 'Memory Limit Challenge',
        ja: '「記憶力」限界チャレンジ',
        'zh-CN': '「记忆力」极限挑战',
        'zh-TW': '「記憶力」極限挑戰',
        vi: 'Thử thách Giới hạn Trí nhớ',
        id: 'Tantangan Batas Memori',
      },
      description: {
        ko: '12라운드 이미지 기억 챌린지로 단기 기억력을 0~12점으로 측정합니다. 내 뇌세포 아직 살아있음?',
        en: 'Measure your short-term memory from 0–12 with a 12-round image memory challenge. Are your brain cells still alive?',
        ja: '12ラウンドの画像記憶チャレンジで短期記憶力を0〜12点で測定。あなたの脳細胞はまだ生きている？',
        'zh-CN': '通过12轮图像记忆挑战，将短期记忆力测量为0~12分。你的脑细胞还活着吗？',
        'zh-TW': '透過12輪圖像記憶挑戰，將短期記憶力測量為0~12分。你的腦細胞還活著嗎？',
        vi: 'Đo trí nhớ ngắn hạn 0–12 qua 12 vòng thử thách ghi nhớ hình ảnh. Não bạn còn sống không?',
        id: 'Ukur memori jangka pendek 0–12 lewat 12 ronde tantangan ingat gambar. Sel otakmu masih hidup?',
      },
      thumbnail: 'p3_test_memory_limit_challenge.webp',
      type: 'game',
      category: 'brain',
      play_count: 0,
      tags: {
        ko: ['기억력', '챌린지', '뇌세포', '단기기억', '퀴즈'],
        en: ['memory', 'challenge', 'brain cells', 'short-term memory', 'quiz'],
        ja: ['記憶力', 'チャレンジ', '脳細胞', '短期記憶', 'クイズ'],
        'zh-CN': ['记忆力', '挑战', '脑细胞', '短期记忆', '测验'],
        'zh-TW': ['記憶力', '挑戰', '腦細胞', '短期記憶', '測驗'],
        vi: ['trí nhớ', 'thử thách', 'tế bào não', 'trí nhớ ngắn hạn', 'quiz'],
        id: ['memori', 'tantangan', 'sel otak', 'memori jangka pendek', 'kuis'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase3MemoryLimitChallengeTestClient
        locale={locale}
        slug={test.slug}
        title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
        description={
          typeof test.description === 'object'
            ? test.description[locale] || test.description.ko
            : test.description
        }
        questions={phase3MemoryLimitChallengeQuestions}
        results={phase3MemoryLimitChallengeResults}
        questionCount={phase3MemoryLimitChallengeQuestions.length}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  if (slug === 'phase3-spot-the-difference-challenge') {
    const { phase3SpotTheDifferenceResults, phase3SpotTheDifferenceRounds } = await import('@/lib/phase3SpotTheDifferenceChallengeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-spot-the-difference-challenge',
      title: {
        ko: "'틀린 그림' 찾기 챌린지",
        en: 'Spot the Difference Challenge',
        ja: '間違い探しチャレンジ',
        'zh-CN': '找不同挑战',
        'zh-TW': '找不同挑戰',
        vi: 'Thử thách tìm điểm khác biệt',
        id: 'Tantangan Spot the Difference',
      },
      description: {
        ko: '6라운드 틀린그림 찾기로 관찰력을 0~20점으로 측정합니다. 좌·우 그림의 큰 차이를 터치하세요. 라운드1 60초, 매 라운드 10초씩 감소.',
        en: 'Measure observation skills across 6 spot-the-difference rounds (0–20 points). Tap major differences in left/right images. Round 1: 60s, minus 10s each round.',
        ja: '6ラウンドの間違い探しで観察力を0〜20点で測定。左右の絵の大きな違いをタップ。1ラウンド目60秒、以降10秒短縮。',
        'zh-CN': '6轮找不同测试，观察力0~20分。点击左右图中明显差异。第1轮60秒，每轮减10秒。',
        'zh-TW': '6輪找不同測試，觀察力0~20分。點擊左右圖中明顯差異。第1輪60秒，每輪減10秒。',
        vi: 'Đo khả năng quan sát qua 6 vòng tìm khác biệt (0–20 điểm). Chạm các điểm khác biệt lớn giữa ảnh trái/phải. Vòng 1: 60s, giảm 10s mỗi vòng.',
        id: 'Ukur observasi lewat 6 ronde cari beda (0–20 poin). Ketuk perbedaan besar gambar kiri/kanan. Ronde 1: 60 dtk, -10 dtk tiap ronde.',
      },
      thumbnail: 'p3_game_spot_the_difference.webp',
      type: 'game',
      category: 'brain',
      play_count: 0,
      tags: {
        ko: ['틀린그림', '찾기', '관찰력', '눈썰미', '챌린지'],
        en: ['spot the difference', 'observation', 'eagle eye', 'puzzle', 'challenge'],
        ja: ['間違い探し', '観察力', '目利き', 'パズル', 'チャレンジ'],
        'zh-CN': ['找不同', '观察力', '眼力', '益智', '挑战'],
        'zh-TW': ['找不同', '觀察力', '眼力', '益智', '挑戰'],
        vi: ['tìm khác biệt', 'quan sát', 'mắt tinh', 'giải đố', 'thử thách'],
        id: ['cari beda', 'observasi', 'mata elang', 'teka-teki', 'tantangan'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase3SpotTheDifferenceChallengeTestClient
        locale={locale}
        slug={test.slug}
        title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
        description={
          typeof test.description === 'object'
            ? test.description[locale] || test.description.ko
            : test.description
        }
        rounds={phase3SpotTheDifferenceRounds}
        results={phase3SpotTheDifferenceResults}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  if (slug === 'phase3-ai-future-10years') {
    const { phase3AiFuture10YearsQuestions, phase3AiFuture10YearsResults } = await import('@/lib/phase3AiFuture10YearsData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-ai-future-10years',
      title: {
        ko: "AI가 그린 나의 '10년 후'",
        en: 'AI Paints My Life in 10 Years',
        ja: 'AIが描く私の『10年後』',
        'zh-CN': 'AI描绘我的『十年后』',
        'zh-TW': 'AI描繪我的『十年後』',
        vi: 'AI vẽ cuộc sống 10 năm sau của tôi',
        id: 'AI Menggambar Hidupku 10 Tahun Lagi',
      },
      description: {
        ko: '12가지 질문으로 AI가 그려주는 10년 후 나의 하루와 라이프스타일을 확인합니다.',
        en: 'Answer 12 questions and see the day and lifestyle AI paints for you in 10 years.',
        ja: '12の質問で、AIが描く10年後の一日とライフスタイルを確認します。',
        'zh-CN': '通过12个问题，看看AI为你描绘的十年后的一天与生活方式。',
        'zh-TW': '透過12個問題，看看AI為你描繪的十年後的一天與生活方式。',
        vi: 'Trả lời 12 câu hỏi để xem một ngày và lối sống sau 10 năm mà AI vẽ cho bạn.',
        id: 'Jawab 12 pertanyaan dan lihat hari serta gaya hidup 10 tahun lagi yang digambar AI untukmu.',
      },
      thumbnail: 'p3_test_ai_future_10years.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['10년후', '미래', '라이프스타일', 'AI분석', '개인화'],
        en: ['10 years later', 'future', 'lifestyle', 'AI analysis', 'personalized'],
        ja: ['10年後', '未来', 'ライフスタイル', 'AI分析', 'パーソナライズ'],
        'zh-CN': ['十年后', '未来', '生活方式', 'AI分析', '个性化'],
        'zh-TW': ['十年後', '未來', '生活方式', 'AI分析', '個人化'],
        vi: ['10 năm sau', 'tương lai', 'lối sống', 'phân tích AI', 'cá nhân hóa'],
        id: ['10 tahun lagi', 'masa depan', 'gaya hidup', 'analisis AI', 'personal'],
      },
    };

    return (
      <>
        <Phase3AiFuture10YearsTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3AiFuture10YearsQuestions}
          results={phase3AiFuture10YearsResults}
          questionCount={phase3AiFuture10YearsQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-fall-in-love-speed') {
    const { phase3FallInLoveSpeedQuestions, phase3FallInLoveSpeedResults } = await import('@/lib/phase3FallInLoveSpeedData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-fall-in-love-speed',
      title: {
        ko: "나의 '금사빠' 속도 측정",
        en: 'Measure My Fall-in-Love Speed',
        ja: '私の『一目惚れ』スピード測定',
        'zh-CN': '测测我的『秒速心动』',
        'zh-TW': '測測我的『秒速心動』',
        vi: "Đo tốc độ 'yêu nhanh' của tôi",
        id: "Ukur Kecepatan 'Jatuh Cinta'-ku",
      },
      description: {
        ko: '12가지 상황극으로 사랑에 빠지는 속도를 측정합니다.',
        en: 'Measure how fast you fall in love with 12 real-life scenarios.',
        ja: '12のシチュエーションで恋に落ちるスピードを測定します。',
        'zh-CN': '通过12个情景测量你坠入爱河的速度。',
        'zh-TW': '透過12個情景測量你墜入愛河的速度。',
        vi: 'Đo tốc độ yêu qua 12 tình huống thực tế.',
        id: 'Ukur seberapa cepat kamu jatuh cinta lewat 12 skenario nyata.',
      },
      thumbnail: 'p3_test_fall_in_love_speed.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['금사빠', '설렘', '연애', '첫눈에반함', '폴인러브'],
        en: ['fall in love', 'crush', 'dating', 'love at first sight', 'romance'],
        ja: ['一目惚れ', 'ときめき', '恋愛', '一目ぼれ', 'フォーリンラブ'],
        'zh-CN': ['秒速心动', '心动', '恋爱', '一见钟情', '坠入爱河'],
        'zh-TW': ['秒速心動', '心動', '戀愛', '一見鍾情', '墜入愛河'],
        vi: ['yêu nhanh', 'rung động', 'hẹn hò', 'yêu từ cái nhìn đầu', 'tình yêu'],
        id: ['jatuh cinta', 'deg-degan', 'pacaran', 'cinta pandang pertama', 'romance'],
      },
    };

    return (
      <>
        <Phase3FallInLoveSpeedTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3FallInLoveSpeedQuestions}
          results={phase3FallInLoveSpeedResults}
          questionCount={phase3FallInLoveSpeedQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-love-obsession-thermometer') {
    const { phase3LoveObsessionThermometerQuestions, phase3LoveObsessionThermometerResults } = await import('@/lib/phase3LoveObsessionThermometerData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-love-obsession-thermometer',
      title: {
        ko: "나의 '연애 집착' 온도계",
        en: 'My Dating-Obsession Thermometer',
        ja: '私の『恋愛執着』温度計',
        'zh-CN': '我的『恋爱执着』温度计',
        'zh-TW': '我的『戀愛執著』溫度計',
        vi: "Nhiệt kế 'ám ảnh tình cảm' của tôi",
        id: "Termometer 'Obsesi Cinta'-ku",
      },
      description: {
        ko: '12가지 질문으로 연애 집착 온도와 구속 지수를 측정합니다.',
        en: 'Measure your dating-obsession temperature and control index with 12 questions.',
        ja: '12の質問で恋愛執着温度と束縛指数を測定します。',
        'zh-CN': '通过12个问题测量恋爱执着温度与束缚指数。',
        'zh-TW': '透過12個問題測量戀愛執著溫度與束縛指數。',
        vi: 'Đo nhiệt độ ám ảnh tình cảm và chỉ số ràng buộc qua 12 câu hỏi.',
        id: 'Ukur suhu obsesi cinta dan indeks kontrol lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_love_obsession_thermometer.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애집착', '구속', '연락', '온도계', '자기점검'],
        en: ['dating obsession', 'control', 'texting', 'thermometer', 'self-check'],
        ja: ['恋愛執着', '束縛', '連絡', '温度計', '自己点検'],
        'zh-CN': ['恋爱执着', '束缚', '联系', '温度计', '自我检视'],
        'zh-TW': ['戀愛執著', '束縛', '聯繫', '溫度計', '自我檢視'],
        vi: ['ám ảnh tình cảm', 'ràng buộc', 'liên lạc', 'nhiệt kế', 'tự kiểm'],
        id: ['obsesi cinta', 'kontrol', 'chat', 'termometer', 'cek diri'],
      },
    };

    return (
      <>
        <Phase3LoveObsessionThermometerTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LoveObsessionThermometerQuestions}
          results={phase3LoveObsessionThermometerResults}
          questionCount={phase3LoveObsessionThermometerQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-multitasking-ability') {
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-multitasking-ability',
      title: {
        ko: "나의 '멀티태스킹' 능력치",
        en: 'My Multitasking Ability Score',
        ja: '私の『マルチタスク』能力値',
        'zh-CN': '我的『多任务』能力值',
        'zh-TW': '我的『多任務』能力值',
        vi: 'Chỉ số khả năng đa nhiệm của tôi',
        id: 'Skor Kemampuan Multitasking Saya',
      },
      description: {
        ko: '5라운드 실시간 수행으로 진짜 멀티태스킹 능력치를 측정합니다.',
        en: 'Measure your real multitasking ability across 5 live performance rounds.',
        ja: '5ラウンドのリアルタイム課題で本物のマルチタスク能力を測定します。',
        'zh-CN': '通过5轮实时任务测量你的真实多任务能力。',
        'zh-TW': '透過5輪即時任務測量你的真實多任務能力。',
        vi: 'Đo khả năng đa nhiệm thật qua 5 vòng thực hiện thời gian thực.',
        id: 'Ukur kemampuan multitasking nyata lewat 5 ronde performa langsung.',
      },
      thumbnail: 'p3_test_multitasking_ability.webp',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ['멀티태스킹', '뇌효율', '집중력', '생산성', '능력치'],
        en: ['multitasking', 'brain efficiency', 'focus', 'productivity', 'ability'],
        ja: ['マルチタスク', '脳効率', '集中力', '生産性', '能力値'],
        'zh-CN': ['多任务', '脑效率', '专注力', '生产力', '能力值'],
        'zh-TW': ['多任務', '腦效率', '專注力', '生產力', '能力值'],
        vi: ['đa nhiệm', 'hiệu suất não', 'tập trung', 'năng suất', 'khả năng'],
        id: ['multitasking', 'efisiensi otak', 'fokus', 'produktivitas', 'kemampuan'],
      },
    };

    return (
      <>
        <Phase3MultitaskingAbilityTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={(await getLatestTestSlugs(15)).includes(slug)}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-loneliness-concentration') {
    const { phase3LonelinessConcentrationQuestions, phase3LonelinessConcentrationResults } = await import('@/lib/phase3LonelinessConcentrationData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-loneliness-concentration',
      title: {
        ko: "나의 '외로움' 농도 테스트",
        en: 'My Loneliness Concentration Test',
        ja: "私の『孤独』濃度テスト",
        'zh-CN': "我的『孤独』浓度测试",
        'zh-TW': "我的『孤獨』濃度測試",
        vi: "Bài test nồng độ 'cô đơn' của tôi",
        id: "Tes Konsentrasi 'Kesepian' Saya",
      },
      description: {
        ko: '12가지 질문으로 지금 나의 외로움 농도와 연결 상태를 측정합니다.',
        en: 'Measure your loneliness concentration and connection state with 12 questions.',
        ja: '12の質問で今の孤独の濃度とつながりの状態を測ります。',
        'zh-CN': '通过12个问题测量你现在的孤独浓度与连接状态。',
        'zh-TW': '透過12個問題測量你現在的孤獨濃度與連結狀態。',
        vi: 'Đo nồng độ cô đơn và trạng thái kết nối hiện tại qua 12 câu hỏi.',
        id: 'Ukur konsentrasi kesepian dan status koneksi saat ini lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_loneliness_concentration.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['외로움', '고립감', '소통', '감정', '커뮤니티'],
        en: ['loneliness', 'isolation', 'connection', 'emotion', 'community'],
        ja: ['孤独', '孤立感', 'つながり', '感情', 'コミュニティ'],
        'zh-CN': ['孤独', '孤立感', '沟通', '情感', '社区'],
        'zh-TW': ['孤獨', '孤立感', '溝通', '情感', '社群'],
        vi: ['cô đơn', 'cô lập', 'kết nối', 'cảm xúc', 'cộng đồng'],
        id: ['kesepian', 'isolasi', 'koneksi', 'emosi', 'komunitas'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3LonelinessConcentrationTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LonelinessConcentrationQuestions}
          results={phase3LonelinessConcentrationResults}
          questionCount={phase3LonelinessConcentrationQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-self-esteem-shield-strength') {
    const { phase3SelfEsteemShieldStrengthQuestions, phase3SelfEsteemShieldStrengthResults } = await import('@/lib/phase3SelfEsteemShieldStrengthData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-self-esteem-shield-strength',
      title: {
        ko: "나의 '자존감 방패' 강도",
        en: 'My Self-Esteem Shield Strength',
        ja: "私の『自尊心シールド』強度",
        'zh-CN': "我的『自尊盾牌』强度",
        'zh-TW': "我的『自尊盾牌』強度",
        vi: "Cường độ 'lá chắn tự trọng' của tôi",
        id: "Kekuatan 'Perisai Harga Diri' Saya",
      },
      description: {
        ko: '12가지 질문으로 외부 비난으로부터 나를 지키는 자존감 방패 강도를 측정합니다.',
        en: 'Measure your self-esteem shield strength against external criticism with 12 questions.',
        ja: '12の質問で外部の非難から自分を守る自尊心シールドの強度を測ります。',
        'zh-CN': '通过12个问题测量你抵御外部批评的自尊盾牌强度。',
        'zh-TW': '透過12個問題測量你抵禦外部批評的自尊盾牌強度。',
        vi: 'Đo cường độ lá chắn tự trọng trước lời chỉ trích bên ngoài qua 12 câu hỏi.',
        id: 'Ukur kekuatan perisai harga diri terhadap kritik eksternal lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_self_esteem_shield_strength.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['자존감', '자기긍정', '방패', '멘탈', '심리'],
        en: ['self-esteem', 'self-affirmation', 'shield', 'mental', 'psychology'],
        ja: ['自尊心', '自己肯定', 'シールド', 'メンタル', '心理'],
        'zh-CN': ['自尊', '自我肯定', '盾牌', '心态', '心理'],
        'zh-TW': ['自尊', '自我肯定', '盾牌', '心態', '心理'],
        vi: ['tự trọng', 'tự khẳng định', 'lá chắn', 'tinh thần', 'tâm lý'],
        id: ['harga diri', 'afirmasi diri', 'perisai', 'mental', 'psikologi'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3SelfEsteemShieldStrengthTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SelfEsteemShieldStrengthQuestions}
          results={phase3SelfEsteemShieldStrengthResults}
          questionCount={phase3SelfEsteemShieldStrengthQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-ex-lingering-feelings') {
    const { phase3ExLingeringFeelingsQuestions, phase3ExLingeringFeelingsResults } = await import('@/lib/phase3ExLingeringFeelingsData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-ex-lingering-feelings',
      title: {
        ko: "나의 '전여친/남친' 미련 지수",
        en: 'My Ex Lingering Feelings Index',
        ja: "私の『元恋人』未練指数",
        'zh-CN': "我的『前任』留恋指数",
        'zh-TW': "我的『前任』留戀指數",
        vi: "Chỉ số 'vương vấn' người yêu cũ của tôi",
        id: "Indeks 'Rasa Kangen' Mantan Pacarku",
      },
      description: {
        ko: '12가지 질문으로 전 연인에 대한 잔류 감정과 미련 지수를 솔직하게 측정합니다.',
        en: 'Measure lingering feelings for your ex honestly with 12 questions.',
        ja: '12の質問で元恋人への残る感情と未練指数を正直に測ります。',
        'zh-CN': '通过12个问题诚实测量对前任的残留情感与留恋指数。',
        'zh-TW': '透過12個問題誠實測量對前任的殘留情感與留戀指數。',
        vi: 'Đo cảm xúc còn sót và mức vương vấn với người yêu cũ qua 12 câu hỏi.',
        id: 'Ukur sisa perasaan dan indeks rasa kangen pada mantan lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_ex_lingering_feelings.webp',
      type: 'psychology',
      category: 'love',
      play_count: 0,
      tags: {
        ko: ['미련', '전연인', '이별', '잔류감정', '익명고민'],
        en: ['lingering feelings', 'ex', 'breakup', 'residual emotion', 'anonymous'],
        ja: ['未練', '元恋人', '別れ', '残る感情', '匿名相談'],
        'zh-CN': ['留恋', '前任', '分手', '残留情感', '匿名倾诉'],
        'zh-TW': ['留戀', '前任', '分手', '殘留情感', '匿名傾訴'],
        vi: ['vương vấn', 'người yêu cũ', 'chia tay', 'cảm xúc còn sót', 'ẩn danh'],
        id: ['kangen', 'mantan', 'putus', 'sisa emosi', 'anonim'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3ExLingeringFeelingsTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3ExLingeringFeelingsQuestions}
          results={phase3ExLingeringFeelingsResults}
          questionCount={phase3ExLingeringFeelingsQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-flirting-style') {
    const { phase3FlirtingStyleQuestions, phase3FlirtingStyleResults } = await import('@/lib/phase3FlirtingStyleData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-flirting-style',
      title: {
        ko: "나의 '플러팅' 스타일",
        en: 'My Flirting Style',
        ja: "私の『フリート』スタイル",
        'zh-CN': "我的『撩人』风格",
        'zh-TW': "我的『撩人』風格",
        vi: "Phong cách 'flirting' của tôi",
        id: "Gaya 'Flirting'-ku",
      },
      description: {
        ko: '12가지 상황극으로 나의 진짜 플러팅 스타일과 유혹 필살기를 찾아드립니다.',
        en: 'Discover your true flirting style and seduction move with 12 situational questions.',
        ja: '12のシチュエーションで本当のフリートスタイルと必殺技を見つけます。',
        'zh-CN': '通过12个情境题找到你真正的撩人风格与必杀技。',
        'zh-TW': '透過12個情境題找到你真正的撩人風格與必殺技。',
        vi: 'Tìm phong cách flirting và chiêu thức quyến rũ thật sự qua 12 tình huống.',
        id: 'Temukan gaya flirting dan jurus memikatmu lewat 12 situasi.',
      },
      thumbnail: 'p3_test_flirting_style.webp',
      type: 'psychology',
      category: 'love',
      play_count: 0,
      tags: {
        ko: ['플러팅', '유혹', '연애', '썸', '필살기'],
        en: ['flirting', 'seduction', 'dating', 'crush', 'move'],
        ja: ['フリート', '誘惑', '恋愛', '曖昧', '必殺技'],
        'zh-CN': ['撩人', '诱惑', '恋爱', '暧昧', '必杀技'],
        'zh-TW': ['撩人', '誘惑', '戀愛', '曖昧', '必殺技'],
        vi: ['flirting', 'quyến rũ', 'hẹn hò', 'crush', 'chiêu thức'],
        id: ['flirting', 'godaan', 'pacaran', 'crush', 'jurus'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3FlirtingStyleTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3FlirtingStyleQuestions}
          results={phase3FlirtingStyleResults}
          questionCount={phase3FlirtingStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-eagle-eye-ultimate') {
    const { phase3EagleEyeUltimateQuestions, phase3EagleEyeUltimateResults } = await import('@/lib/phase3EagleEyeUltimateData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-eagle-eye-ultimate',
      title:       {
        ko: '눈썰미 끝판왕 찾기',
        en: 'Ultimate Eagle Eye Challenge',
        ja: '目利き究極チャレンジ',
        'zh-CN': '火眼金睛终极挑战',
        'zh-TW': '火眼金睛終極挑戰',
        vi: 'Thử thách Mắt Đại Bàng Tối Thượng',
        id: 'Tantangan Mata Elang Ultimate',
      },
      description:       {
        ko: '12가지 착시·숨은그림·차이 찾기로 나의 눈썰미 등급을 측정합니다. #눈썰미 #착시 #숨은그림 #퀴즈 #챌린지',
        en: 'Measure your eagle-eye grade with 12 illusions, hidden pictures, and spot-the-difference puzzles. #eagleeye #illusion #hiddenpicture #quiz #challenge',
        ja: '12種類の錯視・隠し絵・間違い探しで目利き等級を測定。#目利き #錯視 #隠し絵 #クイズ #チャレンジ',
        'zh-CN': '用12种错觉·找隐藏图·找不同测试你的眼力等级。#眼力 #错觉 #隐藏图 #测验 #挑战',
        'zh-TW': '用12種錯覺·找隱藏圖·找不同測試你的眼力等級。#眼力 #錯覺 #隱藏圖 #測驗 #挑戰',
        vi: 'Đo cấp mắt tinh với 12 ảo giác·tranh ẩn·tìm khác biệt. #mắttinh #ảoảnh #tranhẩn #quiz #thửthách',
        id: 'Ukur level mata elang lewat 12 ilusi·gambar tersembunyi·cari beda. #mataelang #ilusi #gambartersembunyi #kuis #tantangan',
      },
      thumbnail: 'p3_quiz_eagle_eye_ultimate.webp',
      type: 'psychology',
      category: 'brain',
      play_count: 0,
      tags: {
        ko: ['눈썰미', '착시', '숨은그림', '퀴즈', '챌린지'],
        en: ['eagle eye', 'illusion', 'hidden picture', 'quiz', 'challenge'],
        ja: ['目利き', '錯視', '隠し絵', 'クイズ', 'チャレンジ'],
        'zh-CN': ['眼力', '错觉', '隐藏图', '测验', '挑战'],
        'zh-TW': ['眼力', '錯覺', '隱藏圖', '測驗', '挑戰'],
        vi: ['mắt tinh', 'ảo giác', 'tranh ẩn', 'quiz', 'thử thách'],
        id: ['mata elang', 'ilusi', 'gambar tersembunyi', 'kuis', 'tantangan'],
      },
    };

    return (
      <>
        <Phase3EagleEyeUltimateTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3EagleEyeUltimateQuestions}
          results={phase3EagleEyeUltimateResults}
          questionCount={phase3EagleEyeUltimateQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

    if (slug === 'phase3-leadership-style') {
      const { phase3LeadershipStyleQuestions, phase3LeadershipStyleResults } = await import('@/lib/phase3LeadershipStyleData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-leadership-style',
      title: {
        ko: "나의 '리더십' 스타일",
        en: "My Leadership Style",
        ja: '私のリーダーシップスタイル',
        'zh-CN': '我的领导风格',
        'zh-TW': '我的領導風格',
        vi: 'Phong cách lãnh đạo của tôi',
        id: 'Gaya Kepemimpinanku',
      },
      description: {
        ko: '12가지 팀 프로젝트 상황에서 나의 진짜 리더십 스타일을 찾고 자소서 소재까지 확인합니다.',
        en: 'Discover your true leadership style through 12 team project scenarios and find cover letter material.',
        ja: '12のチームプロジェクト状況から本当のリーダーシップスタイルを見つけ、自己PRの素材まで確認します。',
        'zh-CN': '通过12种团队项目情境找到你真正的领导风格，并获取自我介绍素材。',
        'zh-TW': '透過12種團隊專案情境找到你真正的領導風格，並取得自我介紹素材。',
        vi: 'Khám phá phong cách lãnh đạo thật qua 12 tình huống dự án nhóm và tìm ý tưởng cho thư xin việc.',
        id: 'Temukan gaya kepemimpinanmu yang sebenarnya lewat 12 situasi proyek tim dan dapatkan bahan surat lamaran.',
      },
      thumbnail: 'p3_test_leadership_style.webp',
      type: 'psychology',
      category: 'career',
      play_count: 0,
      tags: {
        ko: ['리더십', '팀프로젝트', '자소서', '직장인', '자기이해'],
        en: ['leadership', 'team project', 'cover letter', 'workplace', 'self-discovery'],
        ja: ['リーダーシップ', 'チームプロジェクト', '自己PR', '社会人', '自己理解'],
        'zh-CN': ['领导力', '团队项目', '自我介绍', '职场', '自我了解'],
        'zh-TW': ['領導力', '團隊專案', '自我介紹', '職場', '自我了解'],
        vi: ['lãnh đạo', 'dự án nhóm', 'thư xin việc', 'nơi làm việc', 'hiểu bản thân'],
        id: ['kepemimpinan', 'proyek tim', 'surat lamaran', 'tempat kerja', 'mengenal diri'],
      },
    };

    return (
      <>
        <Phase3LeadershipStyleTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LeadershipStyleQuestions}
          results={phase3LeadershipStyleResults}
          questionCount={phase3LeadershipStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

    if (slug === 'phase3-webtoon-protagonist') {
      const { phase3WebtoonProtagonistQuestions, phase3WebtoonProtagonistResults } = await import('@/lib/phase3WebtoonProtagonistData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-webtoon-protagonist',
      title: {
        ko: '나는 어떤 웹툰 주인공?',
        en: 'What Webtoon Protagonist Am I?',
        ja: '私はどんなウェブトゥーン主人公?',
        'zh-CN': '我是哪种网漫主角?',
        'zh-TW': '我是哪種網漫主角?',
        vi: 'Tôi là nhân vật chính webtoon kiểu nào?',
        id: 'Aku Protagonis Webtoon Tipe Apa?',
      },
      description: {
        ko: '12가지 질문으로 내가 웹툰 속 주인공이 된다면 어떤 유형인지 분석하고 추천 웹툰 장르를 알려드립니다.',
        en: 'Analyze what type of webtoon protagonist you would be through 12 questions and get recommended genres.',
        ja: '12の質問でウェブトゥーンの主人公タイプを分析し、おすすめジャンルをお伝えします。',
        'zh-CN': '通过12个问题分析你成为网漫主角的类型，并推荐适合你的网漫类型。',
        'zh-TW': '透過12個問題分析你成為網漫主角的類型，並推薦適合你的網漫類型。',
        vi: 'Phân tích bạn sẽ là kiểu nhân vật chính webtoon nào qua 12 câu hỏi và gợi ý thể loại phù hợp.',
        id: 'Analisis tipe protagonis webtoon-mu lewat 12 pertanyaan dan dapatkan rekomendasi genre.',
      },
      thumbnail: 'p3_test_webtoon_protagonist.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['웹툰', '주인공', '먼치킨', '로맨스', '웹툰추천'],
        en: ['webtoon', 'protagonist', 'op mc', 'romance', 'webtoon rec'],
        ja: ['ウェブトゥーン', '主人公', '最強', 'ロマンス', 'おすすめ'],
        'zh-CN': ['网漫', '主角', '龙傲天', '浪漫', '网漫推荐'],
        'zh-TW': ['網漫', '主角', '龍傲天', '浪漫', '網漫推薦'],
        vi: ['webtoon', 'nhân vật chính', 'overpowered', 'lãng mạn', 'gợi ý webtoon'],
        id: ['webtoon', 'protagonis', 'overpowered', 'romance', 'rekomendasi webtoon'],
      },
    };

    return (
      <>
        <Phase3WebtoonProtagonistTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3WebtoonProtagonistQuestions}
          results={phase3WebtoonProtagonistResults}
          questionCount={phase3WebtoonProtagonistQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

    if (slug === 'phase3-alone-time-type') {
      const { phase3AloneTimeTypeQuestions, phase3AloneTimeTypeResults } = await import('@/lib/phase3AloneTimeTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-alone-time-type',
      title: {
        ko: "나의 '찐 혼자 시간' 유형",
        en: "My True Solo Time Type",
        ja: "私の「本当の一人時間」タイプ",
        'zh-CN': "我的「真·独处时间」类型",
        'zh-TW': "我的「真·獨處時間」類型",
        vi: "Kiểu thời gian một mình thật của tôi",
        id: "Tipe Waktu Sendiri Asli-ku",
      },
      description: {
        ko: '12가지 질문으로 아무도 없을 때의 진짜 나, 진짜 충전 방식을 분석합니다.',
        en: 'Analyze your true self and real recharge style when no one is around through 12 questions.',
        ja: '12の質問で、誰もいないときの本当の自分と本当の充電方法を分析します。',
        'zh-CN': '通过12个问题分析无人时的真实自我与真正的充电方式。',
        'zh-TW': '透過12個問題分析無人時的真實自我與真正的充電方式。',
        vi: 'Phân tích con người thật và cách nạp năng lượng thật khi không ai ở bên qua 12 câu hỏi.',
        id: 'Analisis diri asli dan cara isi ulang energi saat sendiri lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_alone_time_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['혼자시간', '인싸아웃사', '내향', 'MZ일상', '자기충전'],
        en: ['solo time', 'introvert extrovert', 'introvert', 'daily life', 'self recharge'],
        ja: ['一人時間', 'インキャアウトキャ', '内向', '日常', '充電'],
        'zh-CN': ['独处时间', '内向外向', '内向', '日常', '自我充电'],
        'zh-TW': ['獨處時間', '內向外向', '內向', '日常', '自我充電'],
        vi: ['thời gian một mình', 'hướng nội ngoại', 'hướng nội', 'đời sống', 'nạp năng lượng'],
        id: ['waktu sendiri', 'introvert ekstrovert', 'introvert', 'keseharian', 'isi ulang energi'],
      },
    };

    return (
      <>
        <Phase3AloneTimeTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3AloneTimeTypeQuestions}
          results={phase3AloneTimeTypeResults}
          questionCount={phase3AloneTimeTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

    if (slug === 'phase3-late-night-type') {
      const { phase3LateNightTypeQuestions, phase3LateNightTypeResults } = await import('@/lib/phase3LateNightTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-late-night-type',
      title: {
        ko: '나의 새벽 감성 유형',
        en: 'My Late-Night Vibe Type',
        ja: '私の夜明け前センシタイプ',
        'zh-CN': '我的凌晨感性类型',
        'zh-TW': '我的凌晨感性類型',
        vi: 'Kiểu cảm xúc đêm khuya của tôi',
        id: 'Tipe Vibe Tengah Malam-ku',
      },
      description: {
        ko: '12가지 질문으로 나의 새벽 감성 유형과 그 안에 담긴 진짜 내면 에너지를 찾아드립니다.',
        en: 'Find your late-night vibe type and the true inner energy within it through 12 questions.',
        ja: '12の質問で、あなたの夜明け前センシタイプとその中にある本当の内面エネルギーを見つけます。',
        'zh-CN': '通过12个问题，找出你的凌晨感性类型及其中的真实内在能量。',
        'zh-TW': '透過12個問題，找出你的凌晨感性類型及其中的真實內在能量。',
        vi: 'Tìm kiểu cảm xúc đêm khuya và năng lượng nội tâm thật sự qua 12 câu hỏi.',
        id: 'Temukan tipe vibe tengah malammu dan energi batin sejati di dalamnya lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_late_night_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['새벽감성', '야행성', '심야감성', '혼자시간', '새벽루틴'],
        en: ['late night vibe', 'night owl', 'midnight mood', 'solo time', 'dawn routine'],
        ja: ['夜明け前センシ', '夜型', '深夜の感性', '一人時間', '夜更かしルーティン'],
        'zh-CN': ['凌晨感性', '夜猫子', '深夜情绪', '独处时间', '凌晨routine'],
        'zh-TW': ['凌晨感性', '夜貓子', '深夜情緒', '獨處時間', '凌晨routine'],
        vi: ['cảm xúc đêm khuya', 'cú đêm', 'tâm trạng đêm', 'thời gian một mình', 'routine đêm khuya'],
        id: ['vibe tengah malam', 'night owl', 'mood midnight', 'waktu sendiri', 'rutinitas dini hari'],
      },
    };

    return (
      <>
        <Phase3LateNightTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LateNightTypeQuestions}
          results={phase3LateNightTypeResults}
          questionCount={phase3LateNightTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

    if (slug === 'phase3-grit-index') {
      const { phase3GritIndexQuestions, phase3GritIndexResults } = await import('@/lib/phase3GritIndexData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-grit-index',
      title: {
        ko: '나의 그릿(Grit) 지수 측정',
        en: 'My Grit Index Measurement',
        ja: '私のグリット指標測定',
        'zh-CN': '我的坚毅指数测量',
        'zh-TW': '我的堅毅指數測量',
        vi: 'Chỉ số Grit của tôi',
        id: 'Pengukuran Indeks Grit-ku',
      },
      description: {
        ko: '12가지 질문으로 나의 그릿 지수와 유형을 측정합니다. 끈기와 열정의 강약, 병목까지 함께 분석해드려요.',
        en: 'Measure your Grit Index and type with 12 questions. Understand the balance between perseverance and passion — including your bottleneck.',
        ja: '12の質問でグリット指標とタイプを測定します。忍耐と情熱のバランス、そしてボトルネックまで分析します。',
        'zh-CN': '通过12个问题测量你的坚毅指数与类型。了解毅力与热情的平衡，并分析你的瓶颈。',
        'zh-TW': '透過12個問題測量你的堅毅指數與類型。了解毅力與熱情的平衡，並分析你的瓶頸。',
        vi: 'Đo chỉ số Grit và kiểu của bạn qua 12 câu hỏi. Hiểu sự cân bằng giữa bền bỉ và đam mê, kèm theo “nút thắt”.',
        id: 'Ukur Indeks Grit dan tipe kamu lewat 12 pertanyaan. Pahami keseimbangan antara ketekunan dan semangat, termasuk bottleneck.',
      },
      thumbnail: 'p3_test_grit_index.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['그릿', '끈기', '열정', '자기계발', '목표달성'],
        en: ['grit', 'perseverance', 'passion', 'self-improvement', 'goal achievement'],
        ja: ['グリット', '忍耐', '情熱', '自己成長', '目標達成'],
        'zh-CN': ['坚毅', '毅力', '热情', '自我提升', '目标达成'],
        'zh-TW': ['堅毅', '毅力', '熱情', '自我提升', '目標達成'],
        vi: ['grit', 'bền bỉ', 'đam mê', 'tự cải thiện', 'đạt mục tiêu'],
        id: ['grit', 'ketekunan', 'semangat', 'pengembangan diri', 'pencapaian tujuan'],
      },
    };

      return (
        <>
          <Phase3GritIndexTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3GritIndexQuestions}
            results={phase3GritIndexResults}
            questionCount={phase3GritIndexQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-risk-tolerance') {
      const { phase3RiskToleranceQuestions, phase3RiskToleranceResults } = await import('@/lib/phase3RiskToleranceData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-risk-tolerance',
      title: {
        ko: '나의 위험 감수 성향',
        en: 'My Risk Tolerance',
        ja: '私のリスク許容度',
        'zh-CN': '我的风险承受倾向',
        'zh-TW': '我的風險承受傾向',
        vi: 'Xu hướng chấp nhận rủi ro của tôi',
        id: 'Toleransi Risiko-ku',
      },
      description: {
        ko: '12가지 일상 선택 상황으로 나의 위험 감수 수준을 정밀 측정합니다. 재정·사회·신체·커리어·불확실성 5개 영역별 분석과 투자·창업 성향까지 확인하세요.',
        en: 'Measure your risk tolerance with 12 everyday scenarios. Get analysis across 5 domains plus investment and entrepreneurship insights.',
        ja: '12の日常選択シナリオでリスク許容度を精密測定。金融・社会・身体・キャリア・不確実性の5領域分析と投資・起業傾向まで確認。',
        'zh-CN': '通过12个日常选择场景精确测量风险承受水平。含财务、社会、身体、职业、不确定性5个领域分析及投资创业倾向。',
        'zh-TW': '透過12個日常選擇場景精確測量風險承受水平。含財務、社會、身體、職業、不確定性5個領域分析及投資創業傾向。',
        vi: 'Đo mức chấp nhận rủi ro qua 12 tình huống hàng ngày. Phân tích 5 lĩnh vực và xu hướng đầu tư, khởi nghiệp.',
        id: 'Ukur toleransi risiko lewat 12 skenario sehari-hari. Analisis 5 domain plus insight investasi dan kewirausahaan.',
      },
      thumbnail: 'p3_test_risk_tolerance.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['리스크', '모험성향', '투자성향', '창업', '위험감수'],
        en: ['risk', 'adventure', 'investment style', 'entrepreneurship', 'risk tolerance'],
        ja: ['リスク', '冒険性向', '投資性向', '起業', 'リスク許容'],
        'zh-CN': ['风险', '冒险倾向', '投资倾向', '创业', '风险承受'],
        'zh-TW': ['風險', '冒險傾向', '投資傾向', '創業', '風險承受'],
        vi: ['rủi ro', 'phiêu lưu', 'đầu tư', 'khởi nghiệp', 'chấp nhận rủi ro'],
        id: ['risiko', 'petualangan', 'investasi', 'wirausaha', 'toleransi risiko'],
      },
    };

      return (
        <>
          <Phase3RiskToleranceTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3RiskToleranceQuestions}
            results={phase3RiskToleranceResults}
            questionCount={phase3RiskToleranceQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-decision-making-style') {
      const { phase3DecisionMakingStyleQuestions, phase3DecisionMakingStyleResults } = await import('@/lib/phase3DecisionMakingStyleData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-decision-making-style',
      title: {
        ko: '나의 의사결정 스타일',
        en: 'My Decision-Making Style',
        ja: '私の意思決定スタイル',
        'zh-CN': '我的决策风格',
        'zh-TW': '我的決策風格',
        vi: 'Phong cách ra quyết định của tôi',
        id: 'Gaya Pengambilan Keputusan-ku',
      },
      description: {
        ko: '12가지 질문으로 나의 의사결정 스타일과 패턴을 분석합니다. 6개 영역별 점수와 강점·약점·개선 방향까지 확인하세요.',
        en: 'Analyze your decision-making style and patterns with 12 questions. See scores across 6 domains plus strengths, weaknesses, and improvement tips.',
        ja: '12の質問で意思決定スタイルとパターンを分析。6領域スコアと強み・弱み・改善方向まで確認。',
        'zh-CN': '通过12个问题分析你的决策风格与模式。含6个领域得分及优势、弱点与改进方向。',
        'zh-TW': '透過12個問題分析你的決策風格與模式。含6個領域得分及優勢、弱點與改進方向。',
        vi: 'Phân tích phong cách và mẫu ra quyết định qua 12 câu hỏi. Xem điểm 6 lĩnh vực cùng điểm mạnh, điểm yếu và hướng cải thiện.',
        id: 'Analisis gaya dan pola pengambilan keputusan lewat 12 pertanyaan. Lihat skor 6 domain plus kekuatan, kelemahan, dan tips perbaikan.',
      },
      thumbnail: 'p3_test_decision_making_style.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['의사결정', '결정패턴', '사고유형', 'MBTI', '자기이해'],
        en: ['decision-making', 'decision pattern', 'thinking type', 'MBTI', 'self-understanding'],
        ja: ['意思決定', '決定パターン', '思考タイプ', 'MBTI', '自己理解'],
        'zh-CN': ['决策', '决策模式', '思维类型', 'MBTI', '自我理解'],
        'zh-TW': ['決策', '決策模式', '思維類型', 'MBTI', '自我理解'],
        vi: ['ra quyết định', 'mẫu quyết định', 'kiểu tư duy', 'MBTI', 'hiểu bản thân'],
        id: ['pengambilan keputusan', 'pola keputusan', 'tipe berpikir', 'MBTI', 'memahami diri'],
      },
    };

      return (
        <>
          <Phase3DecisionMakingStyleTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3DecisionMakingStyleQuestions}
            results={phase3DecisionMakingStyleResults}
            questionCount={phase3DecisionMakingStyleQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-competitive-dna') {
      const { phase3CompetitiveDnaQuestions, phase3CompetitiveDnaResults } = await import('@/lib/phase3CompetitiveDnaData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-competitive-dna',
      title: {
        ko: "나의 '경쟁심' DNA 분석",
        en: 'My Competitive DNA Analysis',
        ja: "私の'競争心'DNA分析",
        'zh-CN': "我的'竞争心'DNA分析",
        'zh-TW': "我的'競爭心'DNA分析",
        vi: 'Phân tích DNA Tinh thần cạnh tranh của tôi',
        id: 'Analisis DNA Daya Saing-ku',
      },
      description: {
        ko: '12가지 질문으로 경쟁 상황에서 나의 진짜 반응과 동기 유형을 분석합니다. 6개 영역별 점수와 강점·주의점·적합 환경까지 확인하세요.',
        en: 'Analyze your real reactions and motivation in competitive situations with 12 questions. See scores across 6 domains plus strengths, cautions, and best-fit environments.',
        ja: '12の質問で競争場面での本当の反応と動機タイプを分析。6領域スコアと強み・注意点・適合環境まで確認。',
        'zh-CN': '通过12个问题分析竞争情境中的真实反应与动机类型。含6个领域得分及优势、注意点与适合环境。',
        'zh-TW': '透過12個問題分析競爭情境中的真實反應與動機類型。含6個領域得分及優勢、注意點與適合環境。',
        vi: 'Phân tích phản ứng và động lực thật trong cạnh tranh qua 12 câu hỏi. Xem điểm 6 lĩnh vực cùng điểm mạnh, lưu ý và môi trường phù hợp.',
        id: 'Analisis reaksi dan motivasi nyata dalam kompetisi lewat 12 pertanyaan. Lihat skor 6 domain plus kekuatan, peringatan, dan lingkungan cocok.',
      },
      thumbnail: 'p3_test_competitive_dna.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['경쟁심', '승부욕', '게임', '스포츠', '자기분석'],
        en: ['competitiveness', 'winning drive', 'games', 'sports', 'self-analysis'],
        ja: ['競争心', '勝負欲', 'ゲーム', 'スポーツ', '自己分析'],
        'zh-CN': ['竞争心', '胜负欲', '游戏', '体育', '自我分析'],
        'zh-TW': ['競爭心', '勝負欲', '遊戲', '體育', '自我分析'],
        vi: ['tinh thần cạnh tranh', 'thắng thua', 'game', 'thể thao', 'tự phân tích'],
        id: ['daya saing', 'dorong menang', 'game', 'olahraga', 'analisis diri'],
      },
    };

      return (
        <>
          <Phase3CompetitiveDnaTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3CompetitiveDnaQuestions}
            results={phase3CompetitiveDnaResults}
            questionCount={phase3CompetitiveDnaQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-time-perspective') {
      const { phase3TimePerspectiveQuestions, phase3TimePerspectiveResults } = await import('@/lib/phase3TimePerspectiveData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-time-perspective',
      title: {
        ko: '나의 과거-현재-미래 시간관',
        en: 'My Past-Present-Future Time Perspective',
        ja: '私の過去・現在・未来の時間観',
        'zh-CN': '我的过去-现在-未来时间观',
        'zh-TW': '我的過去-現在-未來時間觀',
        vi: 'Quan niệm thời gian Quá khứ-Hiện tại-Tương lai của tôi',
        id: 'Perspektif Waktu Masa Lalu-Kini-Masa Depanku',
      },
      description: {
        ko: '12가지 질문으로 나는 과거·현재·미래 중 어느 시간대에 주로 머무는지 분석합니다. 6개 영역별 점수와 행복 전략까지 확인하세요.',
        en: 'Analyze which time zone you mainly live in—past, present, or future—with 12 questions. See scores across 6 domains plus happiness strategies.',
        ja: '12の質問で過去・現在・未来のどの時間帯に主にいるか分析。6領域スコアと幸福戦略まで確認。',
        'zh-CN': '通过12个问题分析你主要活在过去、现在还是未来。含6个领域得分与幸福策略。',
        'zh-TW': '透過12個問題分析你主要活在過去、現在還是未來。含6個領域得分與幸福策略。',
        vi: 'Phân tích bạn chủ yếu sống ở quá khứ, hiện tại hay tương lai qua 12 câu hỏi. Xem điểm 6 lĩnh vực và chiến lược hạnh phúc.',
        id: 'Analisis zona waktu utama—masa lalu, kini, atau depan—lewat 12 pertanyaan. Lihat skor 6 domain dan strategi kebahagiaan.',
      },
      thumbnail: 'p3_test_time_perspective.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['시간관', '심리학', '과거현재미래', '짐바르도', '자기이해'],
        en: ['time perspective', 'psychology', 'past present future', 'Zimbardo', 'self-understanding'],
        ja: ['時間観', '心理学', '過去現在未来', 'ジンバルド', '自己理解'],
        'zh-CN': ['时间观', '心理学', '过去现在未来', '津巴多', '自我理解'],
        'zh-TW': ['時間觀', '心理學', '過去現在未來', '津巴多', '自我理解'],
        vi: ['quan niệm thời gian', 'tâm lý', 'quá khứ hiện tại tương lai', 'Zimbardo', 'hiểu bản thân'],
        id: ['perspektif waktu', 'psikologi', 'masa lalu kini depan', 'Zimbardo', 'memahami diri'],
      },
    };

      return (
        <>
          <Phase3TimePerspectiveTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3TimePerspectiveQuestions}
            results={phase3TimePerspectiveResults}
            questionCount={phase3TimePerspectiveQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-optimism-index') {
      const { phase3OptimismIndexQuestions, phase3OptimismIndexResults } = await import('@/lib/phase3OptimismIndexData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-optimism-index',
      title: {
        ko: '나의 낙관주의 지수',
        en: 'My Optimism Index',
        ja: '私の楽観主義指数',
        'zh-CN': '我的乐观主义指数',
        'zh-TW': '我的樂觀主義指數',
        vi: 'Chỉ số Lạc quan của tôi',
        id: 'Indeks Optimisme-ku',
      },
      description: {
        ko: '12가지 질문으로 셀리그만 3P(영구성·보편성·개인화) 기반 낙관주의 지수와 회복 패턴을 측정합니다.',
        en: "Measure your optimism index and recovery pattern with 12 questions based on Seligman's 3P (Permanence, Pervasiveness, Personalization).",
        ja: '12の質問でセリグマン3P（永続性・普遍性・個人化）に基づく楽観主義指数と回復パターンを測定。',
        'zh-CN': '通过12个问题，基于塞利格曼3P（永久性、普遍性、个人化）测量乐观指数与恢复模式。',
        'zh-TW': '透過12個問題，基於塞利格曼3P（永久性、普遍性、個人化）測量樂觀指數與恢復模式。',
        vi: 'Đo chỉ số lạc quan và mẫu phục hồi qua 12 câu hỏi dựa trên 3P của Seligman (Vĩnh viễn, Lan rộng, Cá nhân hóa).',
        id: 'Ukur indeks optimisme dan pola pemulihan lewat 12 pertanyaan berbasis 3P Seligman (Permanen, Meresap, Personalisasi).',
      },
      thumbnail: 'p3_test_optimism_index.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['낙관주의', '긍정', '회복탄력성', '심리', '셀리그만'],
        en: ['optimism', 'positivity', 'resilience', 'psychology', 'Seligman'],
        ja: ['楽観主義', 'ポジティブ', '回復力', '心理学', 'セリグマン'],
        'zh-CN': ['乐观主义', '积极', '复原力', '心理学', '塞利格曼'],
        'zh-TW': ['樂觀主義', '積極', '復原力', '心理學', '塞利格曼'],
        vi: ['lạc quan', 'tích cực', 'phục hồi', 'tâm lý', 'Seligman'],
        id: ['optimisme', 'positif', 'resiliensi', 'psikologi', 'Seligman'],
      },
    };

      return (
        <>
          <Phase3OptimismIndexTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3OptimismIndexQuestions}
            results={phase3OptimismIndexResults}
            questionCount={phase3OptimismIndexQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-approval-seeking-level') {
      const { phase3ApprovalSeekingLevelQuestions, phase3ApprovalSeekingLevelResults } = await import('@/lib/phase3ApprovalSeekingLevelData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-approval-seeking-level',
      title: {
        ko: '나의 인정 욕구 농도',
        en: 'My Approval-Seeking Level',
        ja: '私の承認欲求の濃度',
        'zh-CN': '我的认可需求浓度',
        'zh-TW': '我的認可需求濃度',
        vi: 'Mức độ Khao khát được Công nhận của tôi',
        id: 'Tingkat Keinginan Pengakuan-ku',
      },
      description: {
        ko: '12가지 질문으로 지금 내 인정 욕구가 어느 농도에 있는지 솔직하게 측정합니다. 6개 영역별 점수와 유형별 건강한 방향 제시까지 확인하세요.',
        en: 'Measure your approval-seeking level honestly with 12 questions. See scores across 6 domains plus type-specific guidance.',
        ja: '12の質問で今の承認欲求の濃度を正直に測定。6領域のスコアとタイプ別の健康的な方向性まで確認。',
        'zh-CN': '通过12个问题诚实测量你现在的认可需求浓度。含6个领域得分与类型健康方向建议。',
        'zh-TW': '透過12個問題誠實測量你現在的認可需求濃度。含6個領域得分與類型健康方向建議。',
        vi: 'Đo mức khao khát được công nhận qua 12 câu hỏi. Xem điểm 6 lĩnh vực và hướng dẫn theo loại.',
        id: 'Ukur tingkat keinginan pengakuan lewat 12 pertanyaan. Lihat skor 6 domain dan panduan sehat per tipe.',
      },
      thumbnail: 'p3_test_approval_seeking_level.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['인정욕구', '자존감', '타인시선', '심리', '공감'],
        en: ['approval seeking', 'self-esteem', 'others gaze', 'psychology', 'empathy'],
        ja: ['承認欲求', '自尊心', '他人の視線', '心理', '共感'],
        'zh-CN': ['认可需求', '自尊', '他人目光', '心理', '共情'],
        'zh-TW': ['認可需求', '自尊', '他人目光', '心理', '共情'],
        vi: ['khao khát công nhận', 'lòng tự trọng', 'ánh mắt người khác', 'tâm lý', 'đồng cảm'],
        id: ['keinginan pengakuan', 'harga diri', 'pandangan orang lain', 'psikologi', 'empati'],
      },
    };

      return (
        <>
          <Phase3ApprovalSeekingLevelTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3ApprovalSeekingLevelQuestions}
            results={phase3ApprovalSeekingLevelResults}
            questionCount={phase3ApprovalSeekingLevelQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-eq-self-diagnosis') {
      const { phase3EqSelfDiagnosisQuestions, phase3EqSelfDiagnosisResults } = await import('@/lib/phase3EqSelfDiagnosisData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-eq-self-diagnosis',
      title: {
        ko: '나의 정서 지능(EQ) 자가진단',
        en: 'My EQ Self-Diagnosis',
        ja: '私のEQ自己診断',
        'zh-CN': '我的情商(EQ)自测',
        'zh-TW': '我的情商(EQ)自測',
        vi: 'Tự chẩn đoán EQ của tôi',
        id: 'Diagnosis Diri EQ-ku',
      },
      description: {
        ko: '12가지 질문으로 나의 EQ 수준과 5가지 요소(자기인식·자기조절·내적 동기·공감·사회성)별 강점과 약점을 분석합니다.',
        en: 'Analyze your EQ level and strengths/weaknesses across 5 elements with 12 questions.',
        ja: '12の質問でEQ水準と5要素別の強み・弱みを分析します。',
        'zh-CN': '通过12个问题分析EQ水平及5要素强弱。',
        'zh-TW': '透過12個問題分析EQ水準及5要素強弱。',
        vi: 'Phân tích mức EQ và 5 yếu tố qua 12 câu hỏi.',
        id: 'Analisis level EQ dan 5 elemen lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_eq_self_diagnosis.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['EQ', '정서지능', '감성지능', '자기인식', '공감능력'],
        en: ['EQ', 'emotional intelligence', 'self-awareness', 'empathy', 'psychology'],
        ja: ['EQ', '感情知能', '自己認識', '共感', '心理'],
        'zh-CN': ['EQ', '情商', '自我认知', '共情', '心理'],
        'zh-TW': ['EQ', '情商', '自我認知', '共感', '心理'],
        vi: ['EQ', 'trí tuệ cảm xúc', 'tự nhận thức', 'đồng cảm', 'tâm lý'],
        id: ['EQ', 'kecerdasan emosional', 'kesadaran diri', 'empati', 'psikologi'],
      },
    };

      return (
        <>
          <Phase3EqSelfDiagnosisTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3EqSelfDiagnosisQuestions}
            results={phase3EqSelfDiagnosisResults}
            questionCount={phase3EqSelfDiagnosisQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-curiosity-type') {
      const { phase3CuriosityTypeQuestions, phase3CuriosityTypeResults } = await import('@/lib/phase3CuriosityTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-curiosity-type',
      title: {
        ko: '나의 호기심 유형 진단',
        en: 'My Curiosity Type Test',
        ja: '私の好奇心タイプ診断',
        'zh-CN': '我的好奇心类型诊断',
        'zh-TW': '我的好奇心類型診斷',
        vi: 'Chẩn đoán Kiểu Tò mò của tôi',
        id: 'Diagnosis Tipe Rasa Ingin Tahu-ku',
      },
      description: {
        ko: '12가지 질문으로 나는 무엇에 끌리고 어떻게 탐구하는지 분석합니다. 6가지 호기심 유형과 탐구 방식·학습 패턴·최적 콘텐츠를 알려드립니다.',
        en: 'Analyze what draws you in and how you explore with 12 questions. Discover your curiosity type, learning pattern, and best content.',
        ja: '12の質問で何に惹かれどう探究するか分析します。',
        'zh-CN': '通过12个问题分析你被什么吸引以及如何探索。',
        'zh-TW': '透過12個問題分析你被什麼吸引以及如何探索。',
        vi: 'Phân tích điều gì thu hút bạn và cách bạn khám phá qua 12 câu hỏi.',
        id: 'Analisis apa yang menarikmu dan cara mengeksplorasi lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_curiosity_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['호기심', '지적성향', '학습유형', '탐구', '자기이해'],
        en: ['curiosity', 'learning style', 'exploration', 'self-understanding', 'psychology'],
        ja: ['好奇心', '学習タイプ', '探究', '自己理解', '心理'],
        'zh-CN': ['好奇心', '学习类型', '探索', '自我理解', '心理'],
        'zh-TW': ['好奇心', '學習類型', '探索', '自我理解', '心理'],
        vi: ['tò mò', 'kiểu học', 'khám phá', 'hiểu bản thân', 'tâm lý'],
        id: ['rasa ingin tahu', 'gaya belajar', 'eksplorasi', 'pengenalan diri', 'psikologi'],
      },
    };

      return (
        <>
          <Phase3CuriosityTypeTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3CuriosityTypeQuestions}
            results={phase3CuriosityTypeResults}
            questionCount={phase3CuriosityTypeQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-relationship-energy') {
      const { phase3RelationshipEnergyQuestions, phase3RelationshipEnergyResults } = await import('@/lib/phase3RelationshipEnergyData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-relationship-energy',
      title: {
        ko: '내가 사람관계에 쏟는 에너지',
        en: 'Energy I Invest in Relationships',
        ja: '人間関係に注ぐエネルギー',
        'zh-CN': '我在人际关系中投入的能量',
        'zh-TW': '我在人際關係中投入的能量',
        vi: 'Năng lượng tôi dành cho các mối quan hệ',
        id: 'Energi yang Kucurahkan untuk Hubungan',
      },
      description: {
        ko: '12가지 질문으로 관계에서 에너지를 어떻게 쓰고 충전하는지 분석합니다. 6가지 관계 에너지 유형과 영역별 소모·충전 패턴을 알려드립니다.',
        en: 'Analyze how you spend and recharge energy in relationships with 12 questions. Discover your relationship energy type and domain patterns.',
        ja: '12の質問で関係におけるエネルギーの使い方と充電パターンを分析します。',
        'zh-CN': '通过12个问题分析你在关系中如何消耗与补充能量。',
        'zh-TW': '透過12個問題分析你在關係中如何消耗與補充能量。',
        vi: 'Phân tích cách bạn tiêu hao và nạp năng lượng trong các mối quan hệ qua 12 câu hỏi.',
        id: 'Analisis cara kamu menghabiskan dan mengisi ulang energi dalam hubungan lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_relationship_energy.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['관계에너지', '인간관계', '내향외향', '충전방식', '피곤함'],
        en: ['relationship energy', 'social battery', 'introvert extrovert', 'recharge style', 'psychology'],
        ja: ['関係エネルギー', '人間関係', '内向外向', '充電方式', '心理'],
        'zh-CN': ['关系能量', '人际关系', '内向外向', '充电方式', '心理'],
        'zh-TW': ['關係能量', '人際關係', '內向外向', '充電方式', '心理'],
        vi: ['năng lượng quan hệ', 'mối quan hệ', 'hướng nội ngoại', 'cách nạp pin', 'tâm lý'],
        id: ['energi hubungan', 'relasi', 'introvert ekstrovert', 'cara isi ulang', 'psikologi'],
      },
    };

      return (
        <>
          <Phase3RelationshipEnergyTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3RelationshipEnergyQuestions}
            results={phase3RelationshipEnergyResults}
            questionCount={phase3RelationshipEnergyQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-family-balance-game') {
      const { phase3FamilyBalanceGameQuestions, phase3FamilyBalanceGameResults } = await import('@/lib/phase3FamilyBalanceGameData');
      const test = (await getTestBySlug(slug)) || {
        slug: 'phase3-family-balance-game',
        title: {
          ko: '밸런스 게임 — 가족 극한편',
          en: 'Balance Game — Family Extreme',
          ja: 'バランスゲーム 家族編（極限）',
          'zh-CN': '平衡游戏 · 家庭篇（极限）',
          'zh-TW': '平衡遊戲 · 家庭篇（極限）',
          vi: 'Trò cân bằng — gia đình (cực hạn)',
          id: 'Permainan seimbang — keluarga (ekstrem)',
        },
        description: {
          ko: '12라운드 극한 2지선다로 나의 가족 관계 스타일을 분석합니다. 가족 단톡방에 공유하면 선택이 달라 반응이 터집니다.',
          en: '12 rounds of extreme A/B choices reveal your family relationship style. Share in the family chat for guaranteed reactions.',
          ja: '12ラウンドの極限2択で家族関係スタイルを分析。家族グループチャットで共有すると反応が炸裂します。',
          'zh-CN': '12轮极限二选一分析你的家庭关系风格。分享到家庭群聊，选择不同反应保证炸裂。',
          'zh-TW': '12輪極限二選一分析你的家庭關係風格。分享到家庭群聊，選擇不同反應保證炸裂。',
          vi: '12 vòng chọn cực hạn phân tích kiểu quan hệ gia đình. Chia sẻ vào nhóm chat gia đình để xem phản ứng.',
          id: '12 ronde pilihan ekstrem menganalisis gaya hubungan keluargamu. Bagikan di grup keluarga untuk reaksi garanti.',
        },
        thumbnail: 'p3_game_family_balance.webp',
        type: 'psychology',
        category: 'personality',
        play_count: 0,
        tags: {
          ko: ['밸런스게임', '가족', '명절', '극한선택', '가족단톡'],
          en: ['balance game', 'family', 'holiday', 'extreme choice', 'family chat'],
          ja: ['バランスゲーム', '家族', '帰省', '極限選択', '家族グループ'],
          'zh-CN': ['平衡游戏', '家庭', '节日', '极限选择', '家庭群'],
          'zh-TW': ['平衡遊戲', '家庭', '節日', '極限選擇', '家庭群'],
          vi: ['trò cân bằng', 'gia đình', 'lễ tết', 'lựa chọn cực hạn', 'nhóm chat'],
          id: ['permainan seimbang', 'keluarga', 'liburan', 'pilihan ekstrem', 'grup keluarga'],
        },
      };

      return (
        <>
          <Phase3FamilyBalanceGameTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3FamilyBalanceGameQuestions}
            results={phase3FamilyBalanceGameResults}
            questionCount={phase3FamilyBalanceGameQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-friendship-balance-game') {
      const { phase3FriendshipBalanceGameQuestions, phase3FriendshipBalanceGameResults } = await import('@/lib/phase3FriendshipBalanceGameData');
      const test = (await getTestBySlug(slug)) || {
        slug: 'phase3-friendship-balance-game',
        title: {
          ko: '밸런스 게임 — 우정 극한편',
          en: 'Balance Game — Friendship Extreme',
          ja: 'バランスゲーム 友情編（極限）',
          'zh-CN': '平衡游戏 · 友情篇（极限）',
          'zh-TW': '平衡遊戲 · 友情篇（極限）',
          vi: 'Trò cân bằng — tình bạn (cực hạn)',
          id: 'Permainan seimbang — persahabatan (ekstrem)',
        },
        description: {
          ko: '12라운드 극한 2지선다로 나의 우정 스타일을 분석합니다. 친구에게 공유하면 선택이 달라 반응이 터집니다.',
          en: '12 rounds of extreme A/B choices reveal your friendship style. Share with friends for guaranteed reactions.',
          ja: '12ラウンドの極限2択で友情スタイルを分析。友達に共有すると反応が炸裂します。',
          'zh-CN': '12轮极限二选一分析你的友情风格。分享给朋友，选择不同反应保证炸裂。',
          'zh-TW': '12輪極限二選一分析你的友情風格。分享給朋友，選擇不同反應保證炸裂。',
          vi: '12 vòng chọn cực hạn phân tích kiểu tình bạn. Chia sẻ với bạn bè để xem phản ứng.',
          id: '12 ronde pilihan ekstrem menganalisis gaya persahabatanmu. Bagikan ke teman untuk reaksi garanti.',
        },
        thumbnail: 'p3_game_friendship_balance.webp',
        type: 'psychology',
        category: 'personality',
        play_count: 0,
        tags: {
          ko: ['밸런스게임', '우정', '의리', '친구', '극한선택'],
          en: ['balance game', 'friendship', 'loyalty', 'friends', 'extreme choice'],
          ja: ['バランスゲーム', '友情', '義理', '友達', '極限選択'],
          'zh-CN': ['平衡游戏', '友情', '义气', '朋友', '极限选择'],
          'zh-TW': ['平衡遊戲', '友情', '義氣', '朋友', '極限選擇'],
          vi: ['trò cân bằng', 'tình bạn', 'nghĩa khí', 'bạn bè', 'lựa chọn cực hạn'],
          id: ['permainan seimbang', 'persahabatan', 'loyalitas', 'teman', 'pilihan ekstrem'],
        },
      };

      return (
        <>
          <Phase3FriendshipBalanceGameTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3FriendshipBalanceGameQuestions}
            results={phase3FriendshipBalanceGameResults}
            questionCount={phase3FriendshipBalanceGameQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-desert-island-survival-kit') {
      const { phase3DesertIslandSurvivalKitQuestions, phase3DesertIslandSurvivalKitResults } = await import('@/lib/phase3DesertIslandSurvivalKitData');
      const test = (await getTestBySlug(slug)) || {
        slug: 'phase3-desert-island-survival-kit',
        title: {
          ko: '나의 무인도 생존 키트 선택',
          en: 'My Desert Island Survival Kit',
          ja: '私の無人島サバイバルキット選択',
          'zh-CN': '我的无人岛生存 kit 选择',
          'zh-TW': '我的無人島生存 kit 選擇',
          vi: 'Bộ sinh tồn đảo hoang của tôi',
          id: 'Kit Bertahan Hidup Pulau Terpencil-ku',
        },
        description: {
          ko: '5가지 극한 2지선다로 나의 생존 본능 유형을 분석합니다. 친구에게 공유하면 "무인도에서 그걸 챙긴다고?!" 반응이 터집니다.',
          en: '5 extreme A/B choices reveal your survival instinct type. Share with friends for guaranteed "You\'d pack THAT on a desert island?!" reactions.',
          ja: '5つの極限2択でサバイバル本能タイプを分析。友達に共有すると「無人島でそれ持っていくの？！」の反応が炸裂。',
          'zh-CN': '5个极限二选一分析你的生存本能类型。分享给朋友，保证出现「无人岛带这个？！」的反应。',
          'zh-TW': '5個極限二選一分析你的生存本能類型。分享給朋友，保證出現「無人島帶這個？！」的反應。',
          vi: '5 lựa chọn cực hạn phân tích kiểu bản năng sinh tồn. Chia sẻ với bạn bè để xem phản ứng "Mang cái đó lên đảo hoang?!".',
          id: '5 pilihan ekstrem menganalisis tipe insting bertahan hidup. Bagikan ke teman untuk reaksi "Bawa itu ke pulau terpencil?!".',
        },
        thumbnail: 'p3_game_deserted_island_kit.webp',
        type: 'psychology',
        category: 'personality',
        play_count: 0,
        tags: {
          ko: ['무인도', '생존', '밸런스게임', '황당', '유머'],
          en: ['desert island', 'survival', 'balance game', 'absurd', 'humor'],
          ja: ['無人島', 'サバイバル', 'バランスゲーム', '荒唐', 'ユーモア'],
          'zh-CN': ['无人岛', '生存', '平衡游戏', '荒诞', '幽默'],
          'zh-TW': ['無人島', '生存', '平衡遊戲', '荒謬', '幽默'],
          vi: ['đảo hoang', 'sinh tồn', 'trò cân bằng', 'vô lý', 'hài hước'],
          id: ['pulau terpencil', 'bertahan hidup', 'permainan seimbang', 'absurd', 'humor'],
        },
      };

      return (
        <>
          <Phase3DesertIslandSurvivalKitTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3DesertIslandSurvivalKitQuestions}
            results={phase3DesertIslandSurvivalKitResults}
            questionCount={phase3DesertIslandSurvivalKitQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-change-adaptability') {
      const { phase3ChangeAdaptabilityQuestions, phase3ChangeAdaptabilityResults } = await import('@/lib/phase3ChangeAdaptabilityData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-change-adaptability',
      title: {
        ko: '나의 변화 적응력 지수',
        en: 'My Change Adaptability Index',
        ja: '私の変化適応力指数',
        'zh-CN': '我的变化适应力指数',
        'zh-TW': '我的變化適應力指數',
        vi: 'Chỉ số Thích nghi với Thay đổi của tôi',
        id: 'Indeks Adaptasi Perubahan-ku',
      },
      description: {
        ko: '12가지 질문으로 예상치 못한 변화 앞에서 나는 어떻게 반응하는지 분석합니다. 6개 영역별 적응력 점수와 유형별 대응 팁까지 확인하세요.',
        en: 'Analyze how you react to unexpected change with 12 questions. See scores across 6 adaptability domains plus type-specific response tips.',
        ja: '12の質問で予想外の変化にどう反応するか分析。6領域の適応力スコアとタイプ別対応のヒントまで確認。',
        'zh-CN': '通过12个问题分析面对意外变化时的反应模式。含6个领域适应力得分与类型应对建议。',
        'zh-TW': '透過12個問題分析面對意外變化時的反應模式。含6個領域適應力得分與類型應對建議。',
        vi: 'Phân tích cách bạn phản ứng với thay đổi bất ngờ qua 12 câu hỏi. Xem điểm 6 lĩnh vực thích nghi và mẹo ứng phó theo loại.',
        id: 'Analisis reaksi terhadap perubahan tak terduga lewat 12 pertanyaan. Lihat skor 6 domain adaptasi dan tips respons per tipe.',
      },
      thumbnail: 'p3_test_change_adaptability.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['변화적응력', '유연성', '회복력', '자기이해', '성장'],
        en: ['change adaptability', 'flexibility', 'resilience', 'self-understanding', 'growth'],
        ja: ['変化適応力', '柔軟性', '回復力', '自己理解', '成長'],
        'zh-CN': ['变化适应力', '灵活性', '复原力', '自我理解', '成长'],
        'zh-TW': ['變化適應力', '靈活性', '復原力', '自我理解', '成長'],
        vi: ['thích nghi thay đổi', 'linh hoạt', 'phục hồi', 'hiểu bản thân', 'phát triển'],
        id: ['adaptasi perubahan', 'fleksibilitas', 'resiliensi', 'memahami diri', 'pertumbuhan'],
      },
    };

      return (
        <>
          <Phase3ChangeAdaptabilityTestClient
            locale={locale}
            slug={test.slug}
            title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
            description={
              typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
            }
            questions={phase3ChangeAdaptabilityQuestions}
            results={phase3ChangeAdaptabilityResults}
            questionCount={phase3ChangeAdaptabilityQuestions.length}
            thumbnail={test.thumbnail}
            playCount={test.play_count}
          />
        </>
      );
    }

    if (slug === 'phase3-kpop-history-master') {
      const { phase3KpopHistoryMasterQuestions, phase3KpopHistoryMasterResults } = await import('@/lib/phase3KpopHistoryMasterData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-kpop-history-master',
      title: {
        ko: 'K-팝 역사 마스터 테스트',
        en: 'K-Pop History Master Test',
        ja: 'K-POP歴史マスターテスト',
        'zh-CN': 'K-Pop历史大师测试',
        'zh-TW': 'K-Pop歷史大師測試',
        vi: 'K-Pop History Master Test',
        id: 'K-Pop History Master Test',
      },
      description: {
        ko: '12가지 문제로 나의 K-팝 역사 지식 수준을 측정합니다. 1세대부터 4세대까지 K-팝 역사 고수 등급을 확인하세요.',
        en: 'Measure your K-Pop history knowledge with 12 questions. Check your expert grade from 1st to 4th gen.',
        ja: '12問で私のK-POP歴史知識レベルを測定します。1世代から4世代までのK-POP歴史上級者等級を確認してください。',
        'zh-CN': '通过12道题测量你的K-Pop历史知识水平。确认从1代到4代的K-Pop历史高手等级。',
        'zh-TW': '透過12道題測量你的K-Pop歷史知識水平。確認從1代到4代的K-Pop歷史高手等級。',
        vi: 'Đo mức kiến thức lịch sử K-Pop của bạn qua 12 câu hỏi. Xem cấp cao thủ từ thế hệ 1 đến 4.',
        id: 'Ukur pengetahuan sejarah K-Pop-mu lewat 12 pertanyaan. Cek grade ahli dari generasi 1 sampai 4.',
      },
      thumbnail: 'p3_quiz_kpop_history_master.webp',
      type: 'knowledge',
      category: 'challenge',
      play_count: 0,
      tags: {
        ko: ['K팝', '케이팝역사', '팬덤', '아이돌', '마스터'],
        en: ['K-Pop', 'K-Pop history', 'fandom', 'idol', 'master'],
        ja: ['K-POP', 'K-POP歴史', 'ファンダム', 'アイドル', 'マスター'],
        'zh-CN': ['K-Pop', 'K-Pop历史', '粉丝', '偶像', '大师'],
        'zh-TW': ['K-Pop', 'K-Pop歷史', '粉絲', '偶像', '大師'],
        vi: ['K-Pop', 'lịch sử K-Pop', 'fandom', 'idol', 'master'],
        id: ['K-Pop', 'sejarah K-Pop', 'fandom', 'idol', 'master'],
      },
    };

    return (
      <>
        <Phase3KpopHistoryMasterTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3KpopHistoryMasterQuestions}
          results={phase3KpopHistoryMasterResults}
          questionCount={phase3KpopHistoryMasterQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

    if (slug === 'phase3-everyday-science-quiz') {
      const { phase3EverydayScienceQuizQuestions, phase3EverydayScienceQuizResults } = await import('@/lib/phase3EverydayScienceQuizData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-everyday-science-quiz',
      title: {
        ko: '생활 속 과학 상식 퀴즈',
        en: 'Everyday Science Quiz',
        ja: '生活の科学常識クイズ',
        'zh-CN': '生活中的科学常识测验',
        'zh-TW': '生活中的科學常識測驗',
        vi: 'Quiz Khoa Học Thường Ngày',
        id: 'Kuis Sains Sehari-hari',
      },
      description: {
        ko: '12가지 생활 속 과학 문제로 나의 생활 과학 상식 수준을 측정합니다. 냉장고부터 하늘까지, 어? 진짜?? 소리 나오는 과학 퀴즈!',
        en: 'Measure your everyday science knowledge with 12 questions. From refrigerators to the sky—a quiz that makes you say wow!',
        ja: '12問の生活科学問題であなたの生活科学常識レベルを測定します。冷蔵庫から空まで、え？本当？と驚く科学クイズ！',
        'zh-CN': '通过12道生活科学题测量你的科学常识水平。从冰箱到天空，让你惊呼真的吗？的科学测验！',
        'zh-TW': '透過12道生活科學題測量你的科學常識水平。從冰箱到天空，讓你驚呼真的嗎？的科學測驗！',
        vi: 'Đo mức kiến thức khoa học thường ngày qua 12 câu hỏi. Từ tủ lạnh đến bầu trời—quiz khiến bạn nói wow!',
        id: 'Ukur pengetahuan sains sehari-hari lewat 12 pertanyaan. Dari kulkas sampai langit—kuis yang bikin kamu bilang wow!',
      },
      thumbnail: 'p3_quiz_everyday_science.webp',
      type: 'knowledge',
      category: 'challenge',
      play_count: 0,
      tags: {
        ko: ['생활과학', '과학상식', '퀴즈', '신기함', '이거왜그럼'],
        en: ['everyday science', 'science quiz', 'quiz', 'fun facts', 'why'],
        ja: ['生活科学', '科学常識', 'クイズ', '不思議', 'なぜ'],
        'zh-CN': ['生活科学', '科学常识', '测验', '有趣', '为什么'],
        'zh-TW': ['生活科學', '科學常識', '測驗', '有趣', '為什麼'],
        vi: ['khoa học', 'quiz', 'đố vui', 'thú vị', 'tại sao'],
        id: ['sains', 'kuis', 'quiz', 'menarik', 'mengapa'],
      },
    };

    return (
      <>
        <Phase3EverydayScienceQuizTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3EverydayScienceQuizQuestions}
          results={phase3EverydayScienceQuizResults}
          questionCount={phase3EverydayScienceQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

    if (slug === 'phase3-fandom-style') {
      const { phase3FandomStyleQuestions, phase3FandomStyleResults } = await import('@/lib/phase3FandomStyleData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-fandom-style',
      title: {
        ko: '나의 덕질 성향 진단',
        en: 'My Fandom Style Diagnosis',
        ja: '私の推し活タイプ診断',
        'zh-CN': '我的追星倾向诊断',
        'zh-TW': '我的追星傾向診斷',
        vi: 'Chẩn đoán phong cách fan của tôi',
        id: 'Diagnosis Gaya Fandom-ku',
      },
      description: {
        ko: '12가지 질문으로 나의 진짜 덕질 성향과 가장 잘 맞는 최애 유형을 찾아드립니다.',
        en: 'Find your true fandom style and the bias type that fits you best through 12 questions.',
        ja: '12の質問で本当の推し活タイプと最も合う推しタイプを見つけます。',
        'zh-CN': '通过12个问题找到你真正的追星倾向和最匹配的本命类型。',
        'zh-TW': '透過12個問題找到你真正的追星傾向和最匹配的本命類型。',
        vi: 'Tìm phong cách fan thật và kiểu bias phù hợp nhất qua 12 câu hỏi.',
        id: 'Temukan gaya fandom sebenarnya dan tipe bias yang paling cocok lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_fandom_style.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['덕질', '팬덤', '최애', '덕후', 'K팝'],
        en: ['fandom', 'fan', 'bias', 'stan', 'K-pop'],
        ja: ['推し活', 'ファンダム', '推し', 'オタク', 'K-POP'],
        'zh-CN': ['追星', '粉丝', '本命', '铁粉', 'K-pop'],
        'zh-TW': ['追星', '粉絲', '本命', '鐵粉', 'K-pop'],
        vi: ['fan', 'fandom', 'bias', 'stan', 'K-pop'],
        id: ['fandom', 'fan', 'bias', 'stan', 'K-pop'],
      },
    };

    return (
      <>
        <Phase3FandomStyleTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3FandomStyleQuestions}
          results={phase3FandomStyleResults}
          questionCount={phase3FandomStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

    if (slug === 'phase3-creativity-potential') {
      const { phase3CreativityPotentialQuestions, phase3CreativityPotentialResults } = await import('@/lib/phase3CreativityPotentialData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-creativity-potential',
      title: {
        ko: "나의 '창의성' 잠재력",
        en: 'My Creativity Potential',
        ja: '私の「創造性」潜在力',
        'zh-CN': '我的「创造力」潜能',
        'zh-TW': '我的「創造力」潛能',
        vi: 'Tiềm năng sáng tạo của tôi',
        id: 'Potensi Kreativitasku',
      },
      description: {
        ko: '12가지 질문으로 나의 창의적 사고 패턴을 분석하고 어떤 유형의 창의성이 가장 강하게 발현되는지 찾아드립니다.',
        en: 'Analyze your creative thinking patterns through 12 questions and discover which type of creativity shines strongest in you.',
        ja: '12の質問で創造的思考パターンを分析し、どのタイプの創造性が最も強く発現するか見つけます。',
        'zh-CN': '通过12个问题分析你的创意思维模式，找出哪种创造力在你身上最强。',
        'zh-TW': '透過12個問題分析你的創意思維模式，找出哪種創造力在你身上最強。',
        vi: 'Phân tích mô hình tư duy sáng tạo qua 12 câu hỏi và tìm loại sáng tạo nào phát huy mạnh nhất ở bạn.',
        id: 'Analisis pola berpikir kreatifmu lewat 12 pertanyaan dan temukan jenis kreativitas mana yang paling kuat pada dirimu.',
      },
      thumbnail: 'p3_test_creativity_potential.webp',
      type: 'psychology',
      category: 'career',
      play_count: 0,
      tags: {
        ko: ['창의성', '아이디어', '기획', '디자인', '문제해결'],
        en: ['creativity', 'ideas', 'planning', 'design', 'problem solving'],
        ja: ['創造性', 'アイデア', '企画', 'デザイン', '問題解決'],
        'zh-CN': ['创造力', '创意', '策划', '设计', '问题解决'],
        'zh-TW': ['創造力', '創意', '企劃', '設計', '問題解決'],
        vi: ['sáng tạo', 'ý tưởng', 'lập kế hoạch', 'thiết kế', 'giải quyết vấn đề'],
        id: ['kreativitas', 'ide', 'perencanaan', 'desain', 'pemecahan masalah'],
      },
    };

    return (
      <>
        <Phase3CreativityPotentialTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3CreativityPotentialQuestions}
          results={phase3CreativityPotentialResults}
          questionCount={phase3CreativityPotentialQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-sudden-poor-defense-index') {
      const { phase3SuddenPoorDefenseIndexQuestions, phase3SuddenPoorDefenseIndexResults } = await import('@/lib/phase3SuddenPoorDefenseIndexData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-sudden-poor-defense-index',
      title: {
        ko: "나의 '벼락거지' 방어 지수",
        en: "My 'Sudden Poverty' Defense Index",
        ja: '私の「いきなり貧乏」防御指数',
        'zh-CN': '我的「霹雳穷人」防御指数',
        'zh-TW': '我的「霹靂窮人」防禦指數',
        vi: "Chỉ số phòng vệ 'Nghèo Bất Ngờ' của tôi",
        id: "Indeks Pertahanan 'Miskin Mendadak'-ku",
      },
      description: {
        ko: '12가지 질문으로 나의 경제 문해력과 자산 안정성을 진단하고 벼락거지 방어 지수를 측정합니다.',
        en: 'Diagnose your financial literacy and asset stability with 12 questions and measure your Sudden Poverty Defense Index.',
        ja: '12個の質問で自分の経済リテラシーと資産の安定性を診断し、いきなり貧乏防御指数を測定します。',
        'zh-CN': '通过12个问题诊断你的金融素养和资产稳定性，测测你的霹雳穷人防御指数。',
        'zh-TW': '透過12個問題診斷你的金融素養和資產穩定性，測測你的霹靂窮人防禦指數。',
        vi: 'Chẩn đoán khả năng hiểu biết tài chính và độ ổn định tài sản của bạn qua 12 câu hỏi, đo chỉ số phòng vệ trước tình trạng nghèo bất ngờ.',
        id: 'Diagnosis literasi finansial dan stabilitas asetmu lewat 12 pertanyaan, dan ukur indeks pertahanan miskin mendadak-mu.',
      },
      thumbnail: 'p3_test_sudden_poor_defense_index.webp',
      type: 'psychology',
      category: 'career',
      play_count: 0,
      tags: {
        ko: ['벼락거지', '재테크', '인플레이션'],
        en: ['sudden poverty', 'investing', 'inflation'],
        ja: ['いきなり貧乏', '資産形成', 'インフレ'],
        'zh-CN': ['霹雳穷人', '理财', '通货膨胀'],
        'zh-TW': ['霹靂窮人', '理財', '通貨膨脹'],
        vi: ['nghèo bất ngờ', 'đầu tư tài chính', 'lạm phát'],
        id: ['miskin mendadak', 'investasi', 'inflasi'],
      },
    };

    return (
      <>
        <Phase3SuddenPoorDefenseIndexTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SuddenPoorDefenseIndexQuestions}
          results={phase3SuddenPoorDefenseIndexResults}
          questionCount={phase3SuddenPoorDefenseIndexQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-mukbang-style-diagnosis') {
    const { phase3MukbangStyleDiagnosisQuestions, phase3MukbangStyleDiagnosisResults } = await import('@/lib/phase3MukbangStyleDiagnosisData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-mukbang-style-diagnosis',
      title: {
        ko: "나의 '먹방' 스타일 진단",
        en: "Diagnosing My 'Mukbang' Style",
        ja: '私の『食べっぷり』スタイル診断',
        'zh-CN': '诊断我的「干饭」风格',
        'zh-TW': '診斷我的「吃播」風格',
        vi: 'Chẩn đoán phong cách ăn uống của tôi',
        id: "Diagnosis Gaya 'Makan' Milikku",
      },
      description: {
        ko: '12가지 이미지 선택으로 나의 진짜 먹방 스타일을 진단합니다.',
        en: '12 image choices diagnose your true mukbang style.',
        ja: '12枚の画像選択で、あなたの本当の『食べっぷり』スタイルを診断します。',
        'zh-CN': '通过12张图片选择，诊断出你真正的干饭风格。',
        'zh-TW': '透過12張圖片選擇，診斷出你真正的吃播風格。',
        vi: 'Chọn 12 hình ảnh để chẩn đoán phong cách ăn uống thật của bạn.',
        id: 'Pilih 12 gambar untuk mendiagnosis gaya makanmu yang sesungguhnya.',
      },
      thumbnail: 'p3_test_mukbang_style_diagnosis.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['먹방', '찍먹부먹', '음식취향'],
        en: ['mukbang', 'food', 'taste'],
        ja: ['食べっぷり', 'つけダレかけダレ', '食の好み'],
        'zh-CN': ['干饭', '蘸浇之争', '饮食口味'],
        'zh-TW': ['吃播', '沾淋之爭', '飲食口味'],
        vi: ['ăn uống', 'chấm hay rưới', 'gu ẩm thực'],
        id: ['makan', 'cocol vs siram', 'selera makanan'],
      },
    };

    return (
      <>
        <Phase3MukbangStyleDiagnosisTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3MukbangStyleDiagnosisQuestions}
          results={phase3MukbangStyleDiagnosisResults}
          questionCount={phase3MukbangStyleDiagnosisQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-laziness-max-level') {
    const { phase3LazinessMaxLevelQuestions, phase3LazinessMaxLevelResults } = await import('@/lib/phase3LazinessMaxLevelData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-laziness-max-level',
      title: {
        ko: "나의 '귀차니즘' 만렙 측정",
        en: "Measuring My 'Laziness' Max Level",
        ja: '私の「めんどくさがり」満レベル測定',
        'zh-CN': '测测我的「懒惰」满级值',
        'zh-TW': '測測我的「懶惰」滿級值',
        vi: "Đo mức 'Lười biếng' tối đa của tôi",
        id: "Mengukur Level 'Kemalasan' Maksimalku",
      },
      description: {
        ko: '12가지 실제 상황극으로 나의 귀차니즘 만렙을 측정합니다.',
        en: '12 real-life scenarios measure your laziness max level.',
        ja: '12個のリアルなシチュエーション劇で、あなたの「めんどくさがり」満レベルを測定します。',
        'zh-CN': '通过12个真实场景测测你的懒惰满级值。',
        'zh-TW': '透過12個真實場景測測你的懶惰滿級值。',
        vi: 'Đo mức độ lười biếng tối đa của bạn qua 12 tình huống thực tế.',
        id: 'Ukur level kemalasan maksimalmu lewat 12 skenario nyata.',
      },
      thumbnail: 'p3_test_laziness_max_level.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['귀차니즘', '게으름', '공감'],
        en: ['laziness', 'procrastination', 'relatable'],
        ja: ['めんどくさがり', 'だらだら', '共感'],
        'zh-CN': ['懒惰', '拖延', '共鸣'],
        'zh-TW': ['懶惰', '拖延', '共鳴'],
        vi: ['lười biếng', 'trì hoãn', 'đồng cảm'],
        id: ['kemalasan', 'menunda', 'relatable'],
      },
    };

    return (
      <>
        <Phase3LazinessMaxLevelTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LazinessMaxLevelQuestions}
          results={phase3LazinessMaxLevelResults}
          questionCount={phase3LazinessMaxLevelQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-ai-era-job-survival-score') {
    const { phase3AiEraJobSurvivalScoreQuestions, phase3AiEraJobSurvivalScoreResults } = await import('@/lib/phase3AiEraJobSurvivalScoreData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-ai-era-job-survival-score',
      title: {
        ko: 'AI 시대, 내 직업 생존 점수',
        en: 'My Job Survival Score in the AI Era',
        ja: 'AI時代、私の職業生存スコア',
        'zh-CN': 'AI时代，我的职业生存分数',
        'zh-TW': 'AI時代，我的職業生存分數',
        vi: 'Điểm sinh tồn nghề nghiệp của tôi trong thời đại AI',
        id: 'Skor Kelangsungan Karierku di Era AI',
      },
      description: {
        ko: '12가지 질문으로 내 직업 역량이 AI 시대에 얼마나 경쟁력이 있는지 점수를 매겨드립니다.',
        en: '12 questions to score how competitive your job skills are in the AI era.',
        ja: '12個の質問で、自分の職業スキルがAI時代にどれくらい競争力があるか採点します。',
        'zh-CN': '通过12个问题，为你的职业能力在AI时代的竞争力打分。',
        'zh-TW': '透過12個問題，為你的職業能力在AI時代的競爭力打分。',
        vi: '12 câu hỏi để chấm điểm năng lực nghề nghiệp của bạn có cạnh tranh được trong thời đại AI hay không.',
        id: '12 pertanyaan untuk menilai seberapa kompetitif kemampuan kerjamu di era AI.',
      },
      thumbnail: 'p3_test_ai_era_job_survival_score.webp',
      type: 'psychology',
      category: 'career',
      play_count: 0,
      tags: {
        ko: ['AI', '직업', '생존'],
        en: ['AI', 'career', 'survival'],
        ja: ['AI', '職業', '生存'],
        'zh-CN': ['AI', '职业', '生存'],
        'zh-TW': ['AI', '職業', '生存'],
        vi: ['AI', 'nghề nghiệp', 'sinh tồn'],
        id: ['AI', 'karier', 'kelangsungan'],
      },
    };

    return (
      <>
        <Phase3AiEraJobSurvivalScoreTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3AiEraJobSurvivalScoreQuestions}
          results={phase3AiEraJobSurvivalScoreResults}
          questionCount={phase3AiEraJobSurvivalScoreQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-soulmate-finder') {
    const { phase3SoulmateFinderQuestions, phase3SoulmateFinderResults } = await import('@/lib/phase3SoulmateFinderData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-soulmate-finder',
      title: {
        ko: "내 영혼의 '소울메이트' 찾기",
        en: "Find My Soul's Soulmate",
        ja: '私の魂の『ソウルメイト』探し',
        'zh-CN': '寻找我灵魂的「灵魂伴侣」',
        'zh-TW': '尋找我靈魂的「靈魂伴侶」',
        vi: "Tìm 'Tri kỷ' của tâm hồn tôi",
        id: "Menemukan 'Soulmate' Jiwaku",
      },
      description: {
        ko: '12가지 질문으로 나의 소울 타입을 찾고 쌍둥이 소울·운명적 소울이 어떤 타입인지 알아봅니다.',
        en: 'Find your soul type with 12 questions and discover your twin soul and destiny soul.',
        ja: '12個の質問で自分のソウルタイプを見つけ、ツインソウルとディスティニーソウルがどんなタイプか調べます。',
        'zh-CN': '通过12个问题找到你的灵魂类型，看看你的双生灵魂和命定灵魂是什么类型。',
        'zh-TW': '透過12個問題找到你的靈魂類型，看看你的雙生靈魂和命定靈魂是什麼類型。',
        vi: 'Tìm kiểu tâm hồn của bạn qua 12 câu hỏi và khám phá tâm hồn song sinh, tâm hồn định mệnh của bạn.',
        id: 'Temukan tipe jiwamu lewat 12 pertanyaan dan cari tahu twin soul serta destiny soul-mu.',
      },
      thumbnail: 'p3_test_soulmate_finder.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['소울메이트', '영혼', '궁합'],
        en: ['soulmate', 'soul', 'compatibility'],
        ja: ['ソウルメイト', '魂', '相性'],
        'zh-CN': ['灵魂伴侣', '灵魂', '缘分'],
        'zh-TW': ['靈魂伴侶', '靈魂', '緣分'],
        vi: ['tri kỷ', 'tâm hồn', 'hợp nhau'],
        id: ['soulmate', 'jiwa', 'kecocokan'],
      },
    };

    return (
      <>
        <Phase3SoulmateFinderTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SoulmateFinderQuestions}
          results={phase3SoulmateFinderResults}
          questionCount={phase3SoulmateFinderQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-first-impression-color-scanner') {
    const { phase3FirstImpressionColorScannerQuestions, phase3FirstImpressionColorScannerResults } = await import('@/lib/phase3FirstImpressionColorScannerData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-first-impression-color-scanner',
      title: {
        ko: "나의 '첫인상' 컬러 스캐너",
        en: "My 'First Impression' Color Scanner",
        ja: '私の『第一印象』カラースキャナー',
        'zh-CN': '我的「第一印象」色彩扫描仪',
        'zh-TW': '我的「第一印象」色彩掃描儀',
        vi: "Máy quét màu 'ấn tượng đầu' của tôi",
        id: "Pemindai Warna 'Kesan Pertama'-ku",
      },
      description: {
        ko: '직관적으로 끌리는 이미지를 선택하면 남들이 나에게서 느끼는 색깔을 분석해 드립니다. 퍼스널 컬러와 연결한 나만의 컬러 정체성까지.',
        en: 'Pick images you are drawn to — we analyze the color others sense from you and connect it to your personal color identity.',
        ja: '直感で惹かれる画像を選ぶと、周りがあなたから感じる色を分析します。パーソナルカラーとつながるカラーアイデンティティまで。',
        'zh-CN': '凭直觉选择吸引你的图片，分析别人从你身上感受到的颜色，并连接到你的个人色彩身份。',
        'zh-TW': '憑直覺選擇吸引你的圖片，分析別人從你身上感受到的顏色，並連接到你的個人色彩身分。',
        vi: 'Chọn hình ảnh bạn bị thu hút theo trực giác — phân tích màu người khác cảm nhận từ bạn và kết nối personal color.',
        id: 'Pilih gambar yang menarik secara intuitif — kami analisis warna yang orang rasakan darimu dan hubungkan dengan personal color.',
      },
      thumbnail: 'p3_test_first_impression_color_scanner.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['첫인상', '컬러', '퍼스널컬러'],
        en: ['first impression', 'color', 'personal color'],
        ja: ['第一印象', 'カラー', 'パーソナルカラー'],
        'zh-CN': ['第一印象', '色彩', '个人色彩'],
        'zh-TW': ['第一印象', '色彩', '個人色彩'],
        vi: ['ấn tượng đầu', 'màu sắc', 'personal color'],
        id: ['kesan pertama', 'warna', 'personal color'],
      },
    };

    return (
      <>
        <Phase3FirstImpressionColorScannerTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3FirstImpressionColorScannerQuestions}
          results={phase3FirstImpressionColorScannerResults}
          questionCount={phase3FirstImpressionColorScannerQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-personality-color-temperature') {
    const { phase3PersonalityColorTemperatureQuestions, phase3PersonalityColorTemperatureResults } = await import('@/lib/phase3PersonalityColorTemperatureData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-personality-color-temperature',
      title: {
        ko: '내 성격의 감성 온도',
        en: 'My Personality Color Temperature',
        ja: '私の性格の感性温度',
        'zh-CN': '我性格的情感温度',
        'zh-TW': '我性格的情感溫度',
        vi: 'Nhiệt độ cảm xúc tính cách của tôi',
        id: 'Suhu Emosi Kepribadianku',
      },
      description: {
        ko: '12가지 이미지 중 더 끌리는 것을 직관적으로 선택하면 나의 감성 온도와 컬러를 분석해 드립니다. 쿨톤부터 웜톤까지 6가지 감성 온도 유형.',
        en: 'Pick the images you are drawn to among 12 choices — we analyze your emotional temperature and color from cool to warm across 6 types.',
        ja: '12枚の画像から直感で選ぶと、あなたの感性温度とカラーを分析します。クールからウォームまで6タイプ。',
        'zh-CN': '从12张图片中凭直觉选择更吸引你的，分析你的情感温度与色彩，从冷调到暖调共6种类型。',
        'zh-TW': '從12張圖片中憑直覺選擇更吸引你的，分析你的情感溫度與色彩，從冷調到暖調共6種類型。',
        vi: 'Chọn trực giác hình ảnh bạn bị thu hút trong 12 lựa chọn — phân tích nhiệt độ cảm xúc và màu sắc từ cool đến warm, 6 kiểu.',
        id: 'Pilih gambar yang menarik dari 12 pilihan secara intuitif — analisis suhu emosi dan warnamu dari cool ke warm, 6 tipe.',
      },
      thumbnail: 'p3_test_personality_color_temperature.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['감성온도', '퍼스널컬러', '쿨톤', '웜톤', '성격색깔'],
        en: ['emotion temperature', 'personal color', 'cool tone', 'warm tone', 'personality color'],
        ja: ['感性温度', 'パーソナルカラー', 'クールトーン', 'ウォームトーン', '性格カラー'],
        'zh-CN': ['情感温度', '个人色彩', '冷调', '暖调', '性格色彩'],
        'zh-TW': ['情感溫度', '個人色彩', '冷調', '暖調', '性格色彩'],
        vi: ['nhiệt độ cảm xúc', 'personal color', 'cool tone', 'warm tone', 'màu tính cách'],
        id: ['suhu emosi', 'personal color', 'cool tone', 'warm tone', 'warna kepribadian'],
      },
    };

    return (
      <>
        <Phase3PersonalityColorTemperatureTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3PersonalityColorTemperatureQuestions}
          results={phase3PersonalityColorTemperatureResults}
          questionCount={phase3PersonalityColorTemperatureQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-ghosting-rebound-potential') {
    const { phase3GhostingReboundPotentialQuestions, phase3GhostingReboundPotentialResults } = await import('@/lib/phase3GhostingReboundPotentialData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-ghosting-rebound-potential',
      title: {
        ko: "나의 '잠수/환승' 잠재력",
        en: "My 'Ghosting/Rebound' Potential",
        ja: '私の『音信不通／乗り換え』ポテンシャル',
        'zh-CN': '我的「失联/闪现」潜力',
        'zh-TW': '我的「失聯／閃現」潛力',
        vi: "Tiềm năng 'Ghosting/Rebound' của tôi",
        id: "Potensi 'Ghosting/Rebound'-ku",
      },
      description: {
        ko: '12가지 실제 상황극으로 측정하는 이별 앞 나의 비겁함 수치. 당신은 잠수형인가요, 환승형인가요?',
        en: 'Measure your breakup cowardice score with 12 real-life scenarios. Are you a ghoster or a rebounder?',
        ja: '12のリアルなシチュエーションで測る、別れの前の臆病さ。あなたは音信不通タイプ？乗り換えタイプ？',
        'zh-CN': '用12个真实情境测量分手时的懦弱指数。你是失联型还是闪现型？',
        'zh-TW': '用12個真實情境測量分手時的懦弱指數。你是失聯型還是閃現型？',
        vi: 'Đo mức độ hèn nhát trước chia tay qua 12 kịch bản thực tế. Bạn thuộc kiểu ghosting hay rebound?',
        id: 'Ukur skor keberanianmu saat putus lewat 12 skenario nyata. Kamu tipe ghosting atau rebound?',
      },
      thumbnail: 'p3_test_ghosting_rebound_potential.webp',
      type: 'psychology',
      category: 'love',
      play_count: 0,
      tags: {
        ko: ['잠수', '환승', '이별'],
        en: ['ghosting', 'rebound', 'breakup'],
        ja: ['音信不通', '乗り換え', '別れ'],
        'zh-CN': ['失联', '闪现', '分手'],
        'zh-TW': ['失聯', '閃現', '分手'],
        vi: ['ghosting', 'rebound', 'chia tay'],
        id: ['ghosting', 'rebound', 'putus'],
      },
    };

    return (
      <>
        <Phase3GhostingReboundPotentialTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3GhostingReboundPotentialQuestions}
          results={phase3GhostingReboundPotentialResults}
          questionCount={phase3GhostingReboundPotentialQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-love-villain-index') {
    const { phase3LoveVillainIndexQuestions, phase3LoveVillainIndexResults } = await import('@/lib/phase3LoveVillainIndexData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-love-villain-index',
      title: {
        ko: "나의 '연애 빌런' 지수",
        en: "My 'Love Villain' Index",
        ja: '私の『恋愛ヴィラン』指数',
        'zh-CN': '我的「恋爱反派」指数',
        'zh-TW': '我的「戀愛反派」指數',
        vi: "Chỉ số 'phản diện tình yêu' của tôi",
        id: "Indeks 'Penjahat Cinta'-ku",
      },
      description: {
        ko: '12가지 질문으로 진단하는 나의 무의식 속 연애 빌런 행동. 단톡방에 공유해서 폭로전을 펼쳐보세요.',
        en: 'Diagnose your unconscious love-villain behaviors with 12 questions. Share it in your group chat and start an exposure battle.',
        ja: '12の質問で診断する無意識の恋愛ヴィラン行動。グループトークでシェアして暴露バトルを繰り広げよう。',
        'zh-CN': '通过12个问题诊断你无意识中的恋爱反派行为。分享到群聊，来一场互相爆料大战吧。',
        'zh-TW': '透過12個問題診斷你無意識中的戀愛反派行為。分享到群組，來一場互相爆料大戰吧。',
        vi: 'Chẩn đoán hành vi phản diện tình yêu vô thức của bạn qua 12 câu hỏi. Chia sẻ vào nhóm chat và mở màn cuộc chiến bóc phốt.',
        id: 'Diagnosis perilaku penjahat cinta bawah sadarmu lewat 12 pertanyaan. Bagikan ke grup chat dan mulai perang pengakuan.',
      },
      thumbnail: 'p3_test_love_villain_index.webp',
      type: 'psychology',
      category: 'love',
      play_count: 0,
      tags: {
        ko: ['연애빌런', '연애', '자기폭로'],
        en: ['Love Villain', 'Dating', 'Self-Exposure'],
        ja: ['恋愛ヴィラン', '恋愛', '自己暴露'],
        'zh-CN': ['恋爱反派', '恋爱', '自我爆料'],
        'zh-TW': ['戀愛反派', '戀愛', '自我爆料'],
        vi: ['Phản diện tình yêu', 'Tình yêu', 'Tự bóc phốt'],
        id: ['Penjahat Cinta', 'Cinta', 'Pengakuan Diri'],
      },
    };

    return (
      <>
        <Phase3LoveVillainIndexTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LoveVillainIndexQuestions}
          results={phase3LoveVillainIndexResults}
          questionCount={phase3LoveVillainIndexQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-dopamine-self-control-index') {
    const { phase3DopamineSelfControlIndexQuestions, phase3DopamineSelfControlIndexResults } = await import('@/lib/phase3DopamineSelfControlIndexData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-dopamine-self-control-index',
      title: {
        ko: "나의 '도파민 절제력' 지수",
        en: "My 'Dopamine Self-Control' Index",
        ja: '私の『ドーパミン自制力』指数',
        'zh-CN': '我的「多巴胺自控力」指数',
        'zh-TW': '我的「多巴胺自控力」指數',
        vi: "Chỉ số 'kiềm chế dopamine' của tôi",
        id: "Indeks 'Pengendalian Dopamin'-ku",
      },
      description: {
        ko: '12가지 질문으로 측정하는 내 도파민 절제력 지수. 알고리즘에 얼마나 장악돼 있는지 솔직하게 진단해 드립니다.',
        en: 'Measure your dopamine self-control index with 12 questions. An honest diagnosis of how much the algorithm has taken over you.',
        ja: '12の質問で測る私のドーパミン自制力指数。アルゴリズムにどれだけ支配されているか正直に診断します。',
        'zh-CN': '通过12个问题测量你的多巴胺自控力指数。诚实诊断你被算法掌控的程度。',
        'zh-TW': '透過12個問題測量你的多巴胺自控力指數。誠實診斷你被演算法掌控的程度。',
        vi: 'Đo chỉ số kiềm chế dopamine của bạn qua 12 câu hỏi. Chẩn đoán thẳng thắn mức độ bạn bị thuật toán chi phối.',
        id: 'Ukur indeks pengendalian dopaminmu lewat 12 pertanyaan. Diagnosis jujur seberapa jauh kamu dikuasai algoritma.',
      },
      thumbnail: 'p3_test_dopamine_self_control_index.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['도파민', '디지털중독', '절제력'],
        en: ['Dopamine', 'Digital Addiction', 'Self-Control'],
        ja: ['ドーパミン', 'デジタル依存', '自制力'],
        'zh-CN': ['多巴胺', '数字成瘾', '自控力'],
        'zh-TW': ['多巴胺', '數位成癮', '自控力'],
        vi: ['Dopamine', 'Nghiện kỹ thuật số', 'Kiềm chế'],
        id: ['Dopamin', 'Kecanduan Digital', 'Pengendalian Diri'],
      },
    };

    return (
      <>
        <Phase3DopamineSelfControlIndexTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3DopamineSelfControlIndexQuestions}
          results={phase3DopamineSelfControlIndexResults}
          questionCount={phase3DopamineSelfControlIndexQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-gaslighting-defense-power') {
    const { phase3GaslightingDefensePowerQuestions, phase3GaslightingDefensePowerResults } = await import('@/lib/phase3GaslightingDefensePowerData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-gaslighting-defense-power',
      title: {
        ko: "나의 '가스라이팅' 방어력",
        en: 'My Gaslighting Defense Power',
        ja: '私の『ガスライティング』防御力',
        'zh-CN': '我的「煤气灯」防御力',
        'zh-TW': '我的「煤氣燈」防禦力',
        vi: "Sức phòng thủ 'Gaslighting' của tôi",
        id: "Daya Tahan 'Gaslighting'-ku",
      },
      description: {
        ko: '12가지 상황으로 알아보는 나의 심리적 방어력 레벨. 당신은 흔들리지 않는 멘탈 금강불괴인가요?',
        en: 'Discover your psychological defense level through 12 situations. Are you an unshakeable, unbreakable mind?',
        ja: '12の状況でわかる心理的防御力レベル。あなたは揺るがないメンタル金剛不壊？',
        'zh-CN': '通过12个情境了解你的心理防御力等级。你是不动摇的金刚不坏心态吗？',
        'zh-TW': '透過12個情境了解你的心理防禦力等級。你是不動搖的金剛不壞心態嗎？',
        vi: 'Khám phá cấp độ phòng thủ tâm lý qua 12 tình huống. Bạn có phải tinh thần kim cương bất hoại không lay chuyển?',
        id: 'Ketahui level pertahanan psikologismu lewat 12 situasi. Apakah mentalmu baja tak terpatahkan?',
      },
      thumbnail: 'p3_test_gaslighting_defense_power.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['가스라이팅', '멘탈', '심리'],
        en: ['Gaslighting', 'Mental', 'Psychology'],
        ja: ['ガスライティング', 'メンタル', '心理'],
        'zh-CN': ['煤气灯', '心态', '心理'],
        'zh-TW': ['煤氣燈', '心態', '心理'],
        vi: ['Gaslighting', 'Tinh thần', 'Tâm lý'],
        id: ['Gaslighting', 'Mental', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3GaslightingDefensePowerTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3GaslightingDefensePowerQuestions}
          results={phase3GaslightingDefensePowerResults}
          questionCount={phase3GaslightingDefensePowerQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-toxic-relationship-diagnosis') {
    const { phase3ToxicRelationshipDiagnosisQuestions, phase3ToxicRelationshipDiagnosisResults } = await import('@/lib/phase3ToxicRelationshipDiagnosisData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-toxic-relationship-diagnosis',
      title: {
        ko: '거리를 둬야 할 인맥 진단',
        en: 'Toxic Connections Diagnosis',
        ja: '距離を置くべき人脈診断',
        'zh-CN': '该保持距离的人脉诊断',
        'zh-TW': '該保持距離的人脈診斷',
        vi: 'Chẩn đoán mối quan hệ cần giữ khoảng cách',
        id: 'Diagnosis Relasi yang Perlu Dijauhi',
      },
      description: {
        ko: '만나고 나면 기운이 빠지는 사람이 주변에 있나요?',
        en: 'Is there someone who drains you every time you meet?',
        ja: '会うたびに元気がなくなる人が周りにいますか？',
        'zh-CN': '身边有没有一见面就让你没劲的人？',
        'zh-TW': '身邊有沒有一見面就讓你沒勁的人？',
        vi: 'Có ai quanh bạn khiến bạn kiệt sức mỗi lần gặp không?',
        id: 'Ada orang di sekitar yang membuatmu lelah setiap kali bertemu?',
      },
      thumbnail: 'p3_test_toxic_relationship_diagnosis.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['인맥', '관계', '심리'],
        en: ['Network', 'Relationships', 'Psychology'],
        ja: ['人脈', '関係', '心理'],
        'zh-CN': ['人脉', '关系', '心理'],
        'zh-TW': ['人脈', '關係', '心理'],
        vi: ['Quan hệ', 'Mối quan hệ', 'Tâm lý'],
        id: ['Lingkaran', 'Hubungan', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3ToxicRelationshipDiagnosisTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3ToxicRelationshipDiagnosisQuestions}
          results={phase3ToxicRelationshipDiagnosisResults}
          questionCount={phase3ToxicRelationshipDiagnosisQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-couple-breakup-risk') {
    const { phase3CoupleBreakupRiskQuestions, phase3CoupleBreakupRiskResults } = await import('@/lib/phase3CoupleBreakupRiskData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-couple-breakup-risk',
      title: {
        ko: '우리 헤어질 확률? 커플 위험도 테스트',
        en: 'Will We Break Up? Couple Risk Test',
        ja: '別れる確率は？カップル危険度テスト',
        'zh-CN': '我们会分手吗？情侣风险测试',
        'zh-TW': '我們會分手嗎？情侶風險測驗',
        vi: 'Chúng ta có chia tay? Test rủi ro cặp đôi',
        id: 'Peluang putus? Tes risiko pasangan',
      },
      description: {
        ko: '12문항 커플 매칭형. 파트너 A·B 각자 답한 뒤 합산 점수로 위험도·GAP을 확인합니다. #연애 #커플 #관계',
        en: '12-question couple match: Partner A & B answer separately, then see combined risk and GAP. #love #couple #relationship',
        ja: '12問のカップル型。A・Bがそれぞれ回答し、合計スコアで危険度とGAPを確認。#恋愛 #カップル #関係',
        'zh-CN': '12 题伴侣匹配：A、B 各自作答后看总分、风险与差距。#恋爱 #情侣 #关系',
        'zh-TW': '12 題伴侶配對：A、B 各自作答後看總分、風險與差距。#戀愛 #情侶 #關係',
        vi: '12 câu dạng cặp đôi: A và B trả lời riêng, xem tổng điểm, rủi ro và GAP. #yêu #cặp đôi #quan hệ',
        id: '12 pertandingan pasangan: A & B jawab terpisah, lihat total risiko & GAP. #cinta #pasangan #hubungan',
      },
      thumbnail: 'p3_test_couple_breakup_risk.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '커플', '관계'],
        en: ['Love', 'Couple', 'Relationship'],
        ja: ['恋愛', 'カップル', '関係'],
        'zh-CN': ['恋爱', '情侣', '关系'],
        'zh-TW': ['戀愛', '情侶', '關係'],
        vi: ['Yêu đương', 'Cặp đôi', 'Quan hệ'],
        id: ['Pacaran', 'Pasangan', 'Hubungan'],
      },
    };

    return (
      <>
        <Phase3CoupleBreakupRiskTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3CoupleBreakupRiskQuestions}
          results={phase3CoupleBreakupRiskResults}
          questionCount={phase3CoupleBreakupRiskQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-which-ai-are-you') {
    const { phase3WhichAiAreYouQuestions, phase3WhichAiAreYouResults } = await import('@/lib/phase3WhichAiAreYouData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-which-ai-are-you',
      title: {
        ko: '나는 어떤 AI를 닮았을까?',
        en: 'Which AI Are You Most Like?',
        ja: '私はどのAIに似ている？',
        'zh-CN': '我最像哪种 AI？',
        'zh-TW': '我最像哪種 AI？',
        vi: 'Tôi giống AI nào nhất?',
        id: 'Aku paling mirip AI yang mana?',
      },
      description: {
        ko: '12문항 4지선다로 보는 AI 성향 매칭 6유형. ChatGPT·Claude·Gemini… 나는 어떤 AI일까? #AI #성격 #트렌드 #재미',
        en: '12 multiple-choice questions — 6 AI personality matches. Which AI are you? #AI #personality #trend #fun',
        ja: '12問4択で見るAIタイプ6種。あなたはどのAIタイプ？#AI #性格 #トレンド',
        'zh-CN': '12 道四选一，六种 AI 人格匹配。你像哪种 AI？#AI #性格 #趋势',
        'zh-TW': '12 題四選一，六種 AI 人格配對。你像哪種 AI？#AI #性格 #趨勢',
        vi: '12 câu trắc nghiệm — 6 kiểu khớp tính cách AI. Bạn giống AI nào? #AI #tính cách #xu hướng',
        id: '12 pertanyaan pilihan ganda — 6 tipe cocok AI. Kamu mirip AI mana? #AI #kepribadian #tren',
      },
      thumbnail: 'p3_test_which_ai_are_you.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['AI', '성격', '트렌드', '재미'],
        en: ['AI', 'Personality', 'Trend', 'Fun'],
        ja: ['AI', '性格', 'トレンド', 'エンタメ'],
        'zh-CN': ['AI', '性格', '趋势', '趣味'],
        'zh-TW': ['AI', '性格', '趨勢', '趣味'],
        vi: ['AI', 'Tính cách', 'Xu hướng', 'Giải trí'],
        id: ['AI', 'Kepribadian', 'Tren', 'Seru'],
      },
    };

    return (
      <>
        <Phase3WhichAiAreYouTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3WhichAiAreYouQuestions}
          results={phase3WhichAiAreYouResults}
          questionCount={phase3WhichAiAreYouQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-sns-algorithm-type') {
    const { phase3SnsAlgorithmTypeQuestions, phase3SnsAlgorithmTypeResults } = await import('@/lib/phase3SnsAlgorithmTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-sns-algorithm-type',
      title: {
        ko: '나는 어떤 SNS 알고리즘 타입?',
        en: 'What Is My SNS Algorithm Type?',
        ja: '私のSNSアルゴリズムタイプは？',
        'zh-CN': '我是什么 SNS 算法类型？',
        'zh-TW': '我是哪種 SNS 演算法類型？',
        vi: 'Tôi thuộc kiểu thuật toán SNS nào?',
        id: 'Tipe algoritme SNS-ku?',
      },
      description: {
        ko: '12문항 이미지 2지선다로 보는 SNS 알고리즘 소비 패턴 6유형. #SNS #트렌드 #디지털 #성격',
        en: '12 image A/B questions — 6 feed algorithm personality types. #SNS #trend #digital #personality',
        ja: '画像12問の2択で見るSNS消費タイプ6種。#SNS #トレンド #デジタル #性格',
        'zh-CN': '12 道图片二选一，六种信息流算法人格。#社交媒体 #趋势 #数字生活 #性格',
        'zh-TW': '12 題圖片二選一，六種資訊流演算法人格。#社群 #趨勢 #數位 #性格',
        vi: '12 câu chọn ảnh A/B — 6 tính cách thuật toán feed. #SNS #xu hướng #số #tính cách',
        id: '12 pertanyaan gambar A/B — 6 tipe algoritme feed. #SNS #tren #digital #kepribadian',
      },
      thumbnail: 'p3_test_sns_algorithm_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['SNS', '트렌드', '디지털', '성격'],
        en: ['SNS', 'Trend', 'Digital', 'Personality'],
        ja: ['SNS', 'トレンド', 'デジタル', '性格'],
        'zh-CN': ['社交媒体', '趋势', '数字', '性格'],
        'zh-TW': ['社群', '趨勢', '數位', '性格'],
        vi: ['SNS', 'Xu hướng', 'Số', 'Tính cách'],
        id: ['SNS', 'Tren', 'Digital', 'Kepribadian'],
      },
    };

    return (
      <>
        <Phase3SnsAlgorithmTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SnsAlgorithmTypeQuestions}
          results={phase3SnsAlgorithmTypeResults}
          questionCount={phase3SnsAlgorithmTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-personality-color-finder') {
    const { phase3PersonalityColorFinderQuestions, phase3PersonalityColorFinderResults, phase3PersonalityColorFinderTestFallback } = await import('@/lib/phase3PersonalityColorFinderData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-personality-color-finder',
      ...phase3PersonalityColorFinderTestFallback,
      thumbnail: 'p3_test_personality_color_finder.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
    };

    return (
      <>
        <Phase3PersonalityColorFinderTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3PersonalityColorFinderQuestions}
          results={phase3PersonalityColorFinderResults}
          questionCount={phase3PersonalityColorFinderQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-personality-weather-type') {
    const { phase3PersonalityWeatherTypeQuestions, phase3PersonalityWeatherTypeResults, phase3PersonalityWeatherTypeTestFallback } = await import('@/lib/phase3PersonalityWeatherTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-personality-weather-type',
      ...phase3PersonalityWeatherTypeTestFallback,
      thumbnail: 'p3_test_personality_weather_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
    };

    return (
      <>
        <Phase3PersonalityWeatherTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3PersonalityWeatherTypeQuestions}
          results={phase3PersonalityWeatherTypeResults}
          questionCount={phase3PersonalityWeatherTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-real-reason-for-breakup') {
    const { phase3RealReasonForBreakupQuestions, phase3RealReasonForBreakupResults } = await import('@/lib/phase3RealReasonForBreakupData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-real-reason-for-breakup',
      title: {
        ko: '전 남친/여친 떠나간 진짜 이유',
        en: 'The Real Reason Your Ex Left',
        ja: '元カノ/元カレが去った本当の理由',
        'zh-CN': '前男/女友离开的真正原因',
        'zh-TW': '前男/女友離開的真正原因',
        vi: 'Lý do thật sự khiến người yêu cũ rời đi',
        id: 'Alasan sebenarnya mantanmu pergi',
      },
      description: {
        ko: '헤어진 이유를 상대방 탓으로만 돌리고 있진 않나요? 나의 연애 패턴에서 이별의 진짜 원인을 찾아드립니다.',
        en: 'Are you blaming the breakup only on your ex? We find the real breakup cause in YOUR dating patterns.',
        ja: '別れの理由を相手のせいにばかりしていませんか？あなたの恋愛パターンから、別れの本当の原因を見つけます。',
        'zh-CN': '是不是总把分手的理由全怪在对方头上？我们从你的恋爱模式中，找出分手的真正原因。',
        'zh-TW': '是不是總把分手的理由全怪在對方頭上？我們從你的戀愛模式中，找出分手的真正原因。',
        vi: 'Bạn có đang đổ hết lỗi chia tay cho người yêu cũ không? Chúng tôi tìm nguyên nhân chia tay thật sự trong kiểu yêu của bạn.',
        id: 'Apakah kamu menyalahkan putus hanya pada mantan? Kami menemukan penyebab putus yang sebenarnya di pola pacaranmu.',
      },
      thumbnail: 'p3_test_real_reason_for_breakup.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['이별', '연애', '자기반성', '심리', '공감'],
        en: ['Breakup', 'Dating', 'Self-reflection', 'Psychology', 'Empathy'],
        ja: ['別れ', '恋愛', '自己反省', '心理', '共感'],
        'zh-CN': ['分手', '恋爱', '自我反省', '心理', '共情'],
        'zh-TW': ['分手', '戀愛', '自我反省', '心理', '同理心'],
        vi: ['Chia tay', 'Hẹn hò', 'Tự phản tỉnh', 'Tâm lý', 'Đồng cảm'],
        id: ['Putus', 'Pacaran', 'Refleksi diri', 'Psikologi', 'Empati'],
      },
    };

    return (
      <>
        <Phase3RealReasonForBreakupTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3RealReasonForBreakupQuestions}
          results={phase3RealReasonForBreakupResults}
          questionCount={phase3RealReasonForBreakupQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-career-aptitude-ai-16types') {
    const { phase3CareerAptitudeAi16typesQuestions, phase3CareerAptitudeAi16typesResults } = await import('@/lib/phase3CareerAptitudeAi16typesData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-career-aptitude-ai-16types',
            title: {
              "ko": "직업 적성 AI 분석 (16가지 직군)",
              "en": "Career Aptitude AI Analysis (16 Career Types)",
              "ja": "職業適性AI分析（16職群）",
              "zh-CN": "职业适性 AI 分析（16种职群）",
              "zh-TW": "職業適性 AI 分析（16種職群）",
              "vi": "Phân tích năng lực nghề nghiệp AI (16 nhóm nghề)",
              "id": "Analisis Bakat Karier AI (16 Kelompok Karier)"
            },
            description: {
              "ko": "내가 어떤 일을 해야 오래, 잘 할 수 있을까요?",
              "en": "What work can you do well and enjoy for the long run?",
              "ja": "自分はどんな仕事なら、長く、うまく続けられる？",
              "zh-CN": "什么工作能让你做得久，也做得好？",
              "zh-TW": "什麼工作能讓你做得久，也做得好？",
              "vi": "Công việc nào bạn có thể làm lâu dài và làm thật tốt?",
              "id": "Pekerjaan seperti apa yang bisa kamu lakukan lama dan dengan baik?"
            },
            thumbnail: 'p3_test_career_aptitude_ai_16types.webp',
            type: 'psychology',
            category: 'personality',
            play_count: 0,
            tags: {
              "ko": [
                "직업",
                "적성",
                "커리어",
                "취업",
                "이직"
              ],
              "en": [
                "Career",
                "Aptitude",
                "Career quiz",
                "Job search",
                "Career change"
              ],
              "ja": [
                "職業",
                "適性",
                "キャリア",
                "就職",
                "転職"
              ],
              "zh-CN": [
                "职业",
                "适性",
                "职涯",
                "求职",
                "跳槽"
              ],
              "zh-TW": [
                "職業",
                "適性",
                "職涯",
                "求職",
                "轉職"
              ],
              "vi": [
                "Nghề nghiệp",
                "Năng lực",
                "Sự nghiệp",
                "Việc làm",
                "Chuyển việc"
              ],
              "id": [
                "Karier",
                "Bakat",
                "Pengembangan karier",
                "Pencarian kerja",
                "Ganti pekerjaan"
              ]
            },
    };

    return (
      <>
        <Phase3CareerAptitudeAi16typesTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3CareerAptitudeAi16typesQuestions}
          results={phase3CareerAptitudeAi16typesResults}
          questionCount={phase3CareerAptitudeAi16typesQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-game-love-balance-extreme') {
    const { phase3GameLoveBalanceExtremeQuestions, phase3GameLoveBalanceExtremeResults } = await import('@/lib/phase3GameLoveBalanceExtremeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-game-love-balance-extreme',
      title: {
        ko: '밸런스 게임 - 연애편 극한버전',
        en: 'Extreme Dating Balance Game',
        ja: '恋愛・極限バランスゲーム',
        'zh-CN': '恋爱极限平衡游戏',
        'zh-TW': '戀愛極限平衡遊戲',
        vi: 'Trò cân bằng tình yêu cực hạn',
        id: 'Game keseimbangan cinta ekstrem',
      },
      description: {
        ko: '10문항 이미지 2지선다 극한 연애 밸런스 — 연애관·가치관 6유형 분석. #밸런스게임 #연애 #커플 #심리',
        en: '10 brutal image A/B rounds—6 love-value types. #balance #dating #couples #psychology',
        ja: '画像10問の究極2択恋愛バランス—恋愛観6タイプ。#バランス #恋愛 #カップル #心理',
        'zh-CN': '10 道图片极限恋爱二选一—6 种恋爱价值观。#平衡 #恋爱 #情侣 #心理',
        'zh-TW': '10 題圖片極限戀愛二選一—6 種戀愛價值觀。#平衡 #戀愛 #情侶 #心理',
        vi: '10 vòng ảnh 2 lựa chọn cực hạn—6 kiểu giá trị trong yêu. #cân_bằng #yêu #cặp_đôi #tâm_lý',
        id: '10 ronde gambar A/B ekstrem—6 tipe nilai cinta. #keseimbangan #pacaran #pasangan #psikologi',
      },
      thumbnail: 'p3_game_love_balance_extreme.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['밸런스게임', '연애', '커플', '심리'],
        en: ['Balance game', 'Dating', 'Couples', 'Psychology'],
        ja: ['バランスゲーム', '恋愛', 'カップル', '心理'],
        'zh-CN': ['平衡游戏', '恋爱', '情侣', '心理'],
        'zh-TW': ['平衡遊戲', '戀愛', '情侶', '心理'],
        vi: ['Trò cân bằng', 'Hẹn hò', 'Cặp đôi', 'Tâm lý'],
        id: ['Game seimbang', 'Pacaran', 'Pasangan', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3GameLoveBalanceExtremeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3GameLoveBalanceExtremeQuestions}
          results={phase3GameLoveBalanceExtremeResults}
          questionCount={phase3GameLoveBalanceExtremeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-spending-dark-history-type') {
    const { phase3SpendingDarkHistoryTypeQuestions, phase3SpendingDarkHistoryTypeResults } = await import('@/lib/phase3SpendingDarkHistoryTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-spending-dark-history-type',
      title: {
        ko: '내 지갑을 위협하는 소비 흑역사 유형',
        en: 'Spending Dark-History Type (Wallet Threat)',
        ja: '財布を脅かす消費ブラック履歴タイプ',
        'zh-CN': '威胁钱包的消费黑历史类型',
        'zh-TW': '威脅錢包的消費黑歷史類型',
        vi: 'Kiểu “hố đen” tiêu xài đe dọa ví',
        id: 'Tipe riwayat belanja gelap yang mengancam dompet',
      },
      description: {
        ko: '12문항 4지선다로 보는 소비 흑역사 6유형 진단과 재발 방지책. #소비 #공감 #재테크',
        en: '12 questions, 4 choices — 6 spending slip-up types + prevention tips. #spending #empathy #money',
        ja: '12問4択で見る消費ブラック履歴6タイプと再発防止。#消費 #共感 #家計',
        'zh-CN': '12 道四选一，六种消费黑历史与防再犯。#消费 #共情 #理财',
        'zh-TW': '12 題四選一，六種消費黑歷史與防再犯。#消費 #共情 #理財',
        vi: '12 câu 4 lựa chọn — 6 kiểu “hố đen” chi tiêu và cách tránh lặp lại.',
        id: '12 soal 4 pilihan — 6 tipe kesalahan belanja dan pencegahan.',
      },
      thumbnail: 'p3_test_spending_dark_history_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['소비', '공감', '재테크'],
        en: ['Spending', 'Empathy', 'Money tips'],
        ja: ['消費', '共感', '家計'],
        'zh-CN': ['消费', '共情', '理财'],
        'zh-TW': ['消費', '共情', '理財'],
        vi: ['Chi tiêu', 'Đồng cảm', 'Tài chính'],
        id: ['Belanja', 'Empati', 'Keuangan'],
      },
    };

    return (
      <>
        <Phase3SpendingDarkHistoryTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SpendingDarkHistoryTypeQuestions}
          results={phase3SpendingDarkHistoryTypeResults}
          questionCount={phase3SpendingDarkHistoryTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-room-personality-analysis') {
    const { phase3RoomPersonalityAnalysisQuestions, phase3RoomPersonalityAnalysisResults } = await import('@/lib/phase3RoomPersonalityAnalysisData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-room-personality-analysis',
      title: {
        ko: '내 방이 말해주는 나의 성격',
        en: 'What Your Room Says About Your Personality',
        ja: 'あなたの部屋が語る性格',
        'zh-CN': '房间透露的你是什么性格',
        'zh-TW': '房間透露的你是什麼性格',
        vi: 'Căn phòng của bạn nói gì về tính cách?',
        id: 'Apa Kata Kamarmu tentang Kepribadianmu?',
      },
      description: {
        ko: '12문항 이미지 4지선다로 보는 성격·이상적인 방 스타일 6유형. #성격 #라이프스타일',
        en: '12 image questions — 6 personality & dream room types. #personality #lifestyle',
        ja: '画像12問4択で見る性格＆理想の部屋タイプ6種。#性格 #ライフスタイル',
        'zh-CN': '12 道图片四选一，六种性格与理想房间风格。#性格 #生活方式',
        'zh-TW': '12 題圖片四選一，六種性格與理想房間風格。#性格 #生活方式',
        vi: '12 câu chọn ảnh 4 đáp án — 6 kiểu tính cách & phòng mơ ước. #tính cách #lifestyle',
        id: '12 pertanyaan gambar 4 pilihan — 6 tipe kepribadian & gaya kamar impian. #kepribadian #gaya hidup',
      },
      thumbnail: 'p3_test_room_personality_analysis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['성격', '라이프스타일'],
        en: ['Personality', 'Lifestyle'],
        ja: ['性格', 'ライフスタイル'],
        'zh-CN': ['性格', '生活方式'],
        'zh-TW': ['性格', '生活方式'],
        vi: ['Tính cách', 'Lifestyle'],
        id: ['Kepribadian', 'Gaya hidup'],
      },
    };

    return (
      <>
        <Phase3RoomPersonalityAnalysisTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3RoomPersonalityAnalysisQuestions}
          results={phase3RoomPersonalityAnalysisResults}
          questionCount={phase3RoomPersonalityAnalysisQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-guardian-spirit-animal') {
    const { phase3GuardianSpiritAnimalQuestions, phase3GuardianSpiritAnimalResults } = await import('@/lib/phase3GuardianSpiritAnimalData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-guardian-spirit-animal',
      title: {
        ko: '나를 수호하는 신비한 영물',
        en: 'My Mystic Guardian Spirit',
        ja: '私を守る神秘の霊獣',
        'zh-CN': '守护我的神秘灵兽',
        'zh-TW': '守護我的神秘靈獸',
        vi: 'Linh thú thần bí hộ mệnh của tôi',
        id: 'Roh penjaga mistis yang melindungiku',
      },
      description: {
        ko: '12문항 이미지 2지선다로 보는 수호 영물 6유형. #영물 #운세 #신비 #수호',
        en: '12 image A/B questions — 6 guardian spirit types. #spirit #fortune #mystic',
        ja: '画像12問の2択で見る守護霊獣6タイプ。#霊獣 #運勢',
        'zh-CN': '12 道图片二选一，六种守护灵兽。#灵兽 #运势',
        'zh-TW': '12 題圖片二選一，六種守護靈獸。#靈獸 #運勢',
        vi: '12 câu chọn ảnh A/B — 6 linh thú hộ mệnh.',
        id: '12 pertanyaan gambar A/B — 6 tipe penjaga roh.',
      },
      thumbnail: 'p3_test_guardian_spirit_animal.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['영물', '운세', '신비', '수호'],
        en: ['Spirit', 'Fortune', 'Mystic', 'Guardian'],
        ja: ['霊獣', '運勢', '神秘', '守護'],
        'zh-CN': ['灵兽', '运势', '神秘', '守护'],
        'zh-TW': ['靈獸', '運勢', '神秘', '守護'],
        vi: ['Linh thú', 'Vận số', 'Huyền bí', 'Hộ mệnh'],
        id: ['Roh', 'Ramalan', 'Mistik', 'Penjaga'],
      },
    };

    return (
      <>
        <Phase3GuardianSpiritAnimalTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3GuardianSpiritAnimalQuestions}
          results={phase3GuardianSpiritAnimalResults}
          questionCount={phase3GuardianSpiritAnimalQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-ootd-style-diagnosis') {
    const { phase3OotdStyleDiagnosisQuestions, phase3OotdStyleDiagnosisResults } = await import('@/lib/phase3OotdStyleDiagnosisData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-ootd-style-diagnosis',
      title: {
        ko: '오늘 뭐 입지? OOTD 스타일 진단',
        en: 'What Should I Wear Today? OOTD Style Quiz',
        ja: '今日なに着る？OOTDスタイル診断',
        'zh-CN': '今天穿什么？OOTD 风格诊断',
        'zh-TW': '今天穿什麼？OOTD 風格診斷',
        vi: 'Hôm nay mặc gì? Trắc nghiệm phong cách OOTD',
        id: 'Mau pakai apa hari ini? Tes gaya OOTD',
      },
      description: {
        ko: '12문항 이미지 2지선다로 보는 패션 정체성 스펙트럼 6유형. #패션 #OOTD #스타일',
        en: '12 image A/B questions — 6 fashion identity types. #Fashion #OOTD #Style',
        ja: '画像12問の2択で見るファッションアイデンティティ6タイプ。#ファッション #OOTD #スタイル',
        'zh-CN': '12 道图片二选一，六种时尚身份光谱。#时尚 #OOTD #穿搭',
        'zh-TW': '12 題圖片二選一，六種時尚身份光譜。#時尚 #OOTD #穿搭',
        vi: '12 câu chọn ảnh A/B — 6 kiểu bản sắc thời trang. #Thời trang #OOTD #Phong cách',
        id: '12 pertanyaan gambar A/B — 6 spektrum identitas fashion. #Fashion #OOTD #Gaya',
      },
      thumbnail: 'p3_test_ootd_style_diagnosis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['패션', 'OOTD', '스타일'],
        en: ['Fashion', 'OOTD', 'Style'],
        ja: ['ファッション', 'OOTD', 'スタイル'],
        'zh-CN': ['时尚', 'OOTD', '风格'],
        'zh-TW': ['時尚', 'OOTD', '風格'],
        vi: ['Thời trang', 'OOTD', 'Phong cách'],
        id: ['Fashion', 'OOTD', 'Gaya'],
      },
    };

    return (
      <>
        <Phase3OotdStyleDiagnosisTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3OotdStyleDiagnosisQuestions}
          results={phase3OotdStyleDiagnosisResults}
          questionCount={phase3OotdStyleDiagnosisQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-personality-shoe-recommendation') {
    const { phase3PersonalityShoeRecommendationQuestions, phase3PersonalityShoeRecommendationResults } = await import('@/lib/phase3PersonalityShoeRecommendationData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-personality-shoe-recommendation',
      title: {
        ko: '내 성격과 어울리는 신발 추천',
        en: 'Shoes That Match Your Personality',
        ja: '性格に合う靴おすすめ',
        'zh-CN': '与你性格相配的鞋款推荐',
        'zh-TW': '與你性格相配的鞋款推薦',
        vi: 'Gợi ý giày hợp tính cách của bạn',
        id: 'Rekomendasi sepatu yang cocok dengan kepribadianmu',
      },
      description: {
        ko: '12문항 이미지 4지선다로 보는 성격별 신발 추천 6유형. #패션 #신발 #성격 #OOTD #쇼핑',
        en: '12 image questions — 6 shoe types for your personality. #fashion #shoes #personality #OOTD',
        ja: '画像12問4択で見る性格別おすすめ靴6タイプ。#ファッション #靴 #性格',
        'zh-CN': '12 道图片四选一，六种性格鞋款推荐。#时尚 #鞋 #性格',
        'zh-TW': '12 題圖片四選一，六種性格鞋款推薦。#時尚 #鞋 #性格',
        vi: '12 câu chọn ảnh — 6 kiểu giày theo tính cách. #thời trang #giày',
        id: '12 pertanyaan gambar — 6 tipe sepatu sesuai kepribadian. #fashion #sepatu',
      },
      thumbnail: 'p3_test_personality_shoe_recommendation.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['패션', '신발', '성격', 'OOTD', '쇼핑'],
        en: ['Fashion', 'Shoes', 'Personality', 'OOTD', 'Shopping'],
        ja: ['ファッション', '靴', '性格', 'OOTD', 'ショッピング'],
        'zh-CN': ['时尚', '鞋', '性格', 'OOTD', '购物'],
        'zh-TW': ['時尚', '鞋', '性格', 'OOTD', '購物'],
        vi: ['Thời trang', 'Giày', 'Tính cách', 'OOTD', 'Mua sắm'],
        id: ['Fashion', 'Sepatu', 'Kepribadian', 'OOTD', 'Belanja'],
      },
    };

    return (
      <>
        <Phase3PersonalityShoeRecommendationTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3PersonalityShoeRecommendationQuestions}
          results={phase3PersonalityShoeRecommendationResults}
          questionCount={phase3PersonalityShoeRecommendationQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-dumb-spending-diagnosis') {
    const { phase3DumbSpendingDiagnosisQuestions, phase3DumbSpendingDiagnosisResults } = await import('@/lib/phase3DumbSpendingDiagnosisData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-dumb-spending-diagnosis',
      title: {
        ko: '줄줄 새는 돈! 나의 멍청비용 진단',
        en: 'Money Leaking Away! My Dumb Spending Diagnosis',
        ja: 'どんどん漏れるお金！私のムダ遣い診断',
        'zh-CN': '钱不知不觉溜走！我的冤枉钱诊断',
        'zh-TW': '錢不知不覺溜走！我的冤枉錢診斷',
        vi: 'Tiền cứ thế trôi! Chẩn đoán lãng phí của tôi',
        id: 'Uang Merembes! Diagnosis Borosku',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 멍청비용 패턴 6유형. #재테크 #절약 #소비습관 #공감 #멍청비용',
        en: '12 text MCQs — 6 dumb spending patterns. #money #saving #habits #relatable',
        ja: 'テキスト12問4択で見るムダ遣いパターン6タイプ。#節約 #お金',
        'zh-CN': '12 道文字四选一，六种冤枉钱模式。#理财 #省钱',
        'zh-TW': '12 題文字四選一，六種冤枉錢模式。#理財 #省錢',
        vi: '12 câu chữ 4 đáp án — 6 kiểu lãng phí. #tiền #tiết kiệm',
        id: '12 soal teks 4 opsi — 6 pola boros. #uang #hemat',
      },
      thumbnail: 'p3_test_dumb_spending_diagnosis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['재테크', '절약', '소비습관', '공감', '멍청비용'],
        en: ['Money', 'Saving', 'Spending', 'Relatable', 'MZ'],
        ja: ['節約', 'お金', '共感', 'MZ'],
        'zh-CN': ['理财', '省钱', '消费', '共鸣'],
        'zh-TW': ['理財', '省錢', '消費', '共鳴'],
        vi: ['Tài chính', 'Tiết kiệm', 'Chi tiêu', 'Đồng cảm'],
        id: ['Keuangan', 'Hemat', 'Belanja', 'Relate'],
      },
    };

    return (
      <>
        <Phase3DumbSpendingDiagnosisTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3DumbSpendingDiagnosisQuestions}
          results={phase3DumbSpendingDiagnosisResults}
          questionCount={phase3DumbSpendingDiagnosisQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-zero-spending-challenge') {
    const { phase3ZeroSpendingChallengeQuestions, phase3ZeroSpendingChallengeResults } = await import('@/lib/phase3ZeroSpendingChallengeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-zero-spending-challenge',
      title: {
        ko: '무지출 챌린지 성공 가능성은?',
        en: 'Zero-Spend Challenge: Your Success Odds',
        ja: '無支出チャレンジ成功の可能性は？',
        'zh-CN': '零消费挑战成功率是多少？',
        'zh-TW': '零消費挑戰成功率是多少？',
        vi: 'Thử thách chi 0 đồng: khả năng thành công của bạn?',
        id: 'Tantangan belanja nol: peluang suksesmu?',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 무지출 챌린지 성공 확률 6구간. #챌린지 #소비습관 #재테크',
        en: '12 text MCQs — 6 success-rate bands for a zero-spend day. #challenge #spending #money',
        ja: 'テキスト12問4択で見る無支出チャレンジ成功確率6段階。#チャレンジ #節約',
        'zh-CN': '12 道文字四选一，六种零消费日成功概率区间。#挑战 #消费 #理财',
        'zh-TW': '12 題文字四選一，六種零消費日成功機率區間。#挑戰 #消費 #理財',
        vi: '12 câu chữ 4 đáp án — 6 mức xác suất chi 0 đồng. #thử thách #chi tiêu',
        id: '12 soal teks 4 opsi — 6 rentang peluang sukses belanja Rp0. #tantangan #uang',
      },
      thumbnail: 'p3_test_zero_spending_challenge_rate.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['챌린지', '소비습관', '재테크'],
        en: ['Challenge', 'Spending habits', 'Money'],
        ja: ['チャレンジ', '消費', 'お金'],
        'zh-CN': ['挑战', '消费习惯', '理财'],
        'zh-TW': ['挑戰', '消費習慣', '理財'],
        vi: ['Thử thách', 'Thói chi tiêu', 'Tài chính'],
        id: ['Tantangan', 'Kebiasaan belanja', 'Uang'],
      },
    };

    return (
      <>
        <Phase3ZeroSpendingChallengeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3ZeroSpendingChallengeQuestions}
          results={phase3ZeroSpendingChallengeResults}
          questionCount={phase3ZeroSpendingChallengeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-stress-relief-type') {
    const { phase3StressReliefTypeQuestions, phase3StressReliefTypeResults } = await import('@/lib/phase3StressReliefTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-stress-relief-type',
      title: {
        ko: '나의 스트레스 해소 유형',
        en: 'My Stress Relief Type',
        ja: '私のストレス解消タイプ',
        'zh-CN': '我的压力舒缓类型',
        'zh-TW': '我的壓力舒緩類型',
        vi: 'Kiểu xả stress của tôi',
        id: 'Tipe pelegaan stresku',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 스트레스 해소 유형 6가지와 최적 회복 루틴. #스트레스 #힐링 #회복 #루틴 #자기돌봄',
        en: '12 text MCQs — 6 stress-relief types and an optimal recovery routine. #stress #healing #selfcare',
        ja: 'テキスト12問4択で見るストレス解消タイプ6種と最適リカバリー。#ストレス #ヒーリング',
        'zh-CN': '12 道文字四选一，六种压力舒缓类型与最佳恢复流程。#压力 #疗愈 #自我照顾',
        'zh-TW': '12 題文字四選一，六種壓力舒緩類型與最佳恢復流程。#壓力 #療癒 #自我照顧',
        vi: '12 câu chữ 4 đáp án — 6 kiểu xả stress và routine phục hồi tối ưu. #stress #chămsócbảnthân',
        id: '12 soal teks 4 opsi — 6 tipe pelegaan stres & rutinitas pemulihan. #stres #perawatandiri',
      },
      thumbnail: 'p3_test_stress_relief_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['스트레스', '힐링', '회복', '루틴', '자기돌봄'],
        en: ['Stress', 'Healing', 'Recovery', 'Routine', 'Self-care'],
        ja: ['ストレス', 'ヒーリング', '回復', 'ルーティン', 'セルフケア'],
        'zh-CN': ['压力', '疗愈', '恢复', '习惯', '自我照顾'],
        'zh-TW': ['壓力', '療癒', '恢復', '習慣', '自我照顧'],
        vi: ['Stress', 'Chữa lành', 'Phục hồi', 'Thói quen', 'Chăm sóc bản thân'],
        id: ['Stres', 'Penyembuhan', 'Pemulihan', 'Rutinitas', 'Perawatan diri'],
      },
    };

    return (
      <>
        <Phase3StressReliefTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3StressReliefTypeQuestions}
          results={phase3StressReliefTypeResults}
          questionCount={phase3StressReliefTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-sleep-type-prescription') {
    const { phase3SleepTypePrescriptionQuestions, phase3SleepTypePrescriptionResults } = await import('@/lib/phase3SleepTypePrescriptionData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-sleep-type-prescription',
      title: {
        ko: '나의 수면 유형과 숙면 처방전',
        en: 'My Sleep Type & Good-Sleep Prescription',
        ja: '私の睡眠タイプと熟睡の処方箋',
        'zh-CN': '我的睡眠类型与好睡处方',
        'zh-TW': '我的睡眠類型與好睡處方',
        vi: 'Kiểu ngủ của tôi & đơn ngủ ngon',
        id: 'Tipe tidurku & resep tidur nyenyak',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 수면 유형 6가지와 숙면 처방전. #수면 #숙면 #불면 #건강 #루틴',
        en: '12 text questions (4 choices) — 6 sleep types and a good-sleep prescription. #sleep #deepsleep #insomnia #health #routine',
        ja: 'テキスト12問4択で見る睡眠タイプ6種と熟睡の処方箋。#睡眠 #熟睡 #不眠 #健康 #ルーティン',
        'zh-CN': '12 道文字四选一，六种睡眠类型与好睡处方。#睡眠 #熟睡 #失眠 #健康 #习惯',
        'zh-TW': '12 題文字四選一，六種睡眠類型與好睡處方。#睡眠 #熟睡 #失眠 #健康 #習慣',
        vi: '12 câu chữ 4 đáp án — 6 kiểu ngủ và đơn ngủ ngon. #ngủ #ngủngon #mấtngủ #suckhoe #thoiquen',
        id: '12 soal teks 4 opsi — 6 tipe tidur & resep tidur nyenyak. #tidur #tidurnyenyak #insomnia #kesehatan #rutinitas',
      },
      thumbnail: 'p3_test_sleep_type_prescription.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['수면', '숙면', '불면', '건강', '루틴'],
        en: ['Sleep', 'Good sleep', 'Insomnia', 'Health', 'Routine'],
        ja: ['睡眠', '熟睡', '不眠', '健康', 'ルーティン'],
        'zh-CN': ['睡眠', '熟睡', '失眠', '健康', '习惯'],
        'zh-TW': ['睡眠', '熟睡', '失眠', '健康', '習慣'],
        vi: ['Giấc ngủ', 'Ngủ ngon', 'Mất ngủ', 'Sức khỏe', 'Routine'],
        id: ['Tidur', 'Tidur nyenyak', 'Insomnia', 'Kesehatan', 'Rutinitas'],
      },
    };

    return (
      <>
        <Phase3SleepTypePrescriptionTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SleepTypePrescriptionQuestions}
          results={phase3SleepTypePrescriptionResults}
          questionCount={phase3SleepTypePrescriptionQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-my-hashtag-generator') {
    const { phase3MyHashtagGeneratorQuestions, phase3MyHashtagGeneratorResults } = await import('@/lib/phase3MyHashtagGeneratorData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-my-hashtag-generator',
      title: {
        ko: '나만의 해시태그 생성기',
        en: 'My Hashtag Generator',
        ja: '私だけのハッシュタグ生成',
        'zh-CN': '我的专属话题标签生成器',
        'zh-TW': '我的專屬話題標籤產生器',
        vi: 'Trình tạo hashtag của riêng tôi',
        id: 'Pembuat hashtag khas untukku',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 나를 표현하는 해시태그 6유형과 인스타 바이오 추천. #해시태그 #인스타 #SNS #성격 #자기표현',
        en: '12 text questions (4 choices) — 6 hashtag styles that express you, plus Instagram bio ideas. #hashtag #instagram #sns #personality',
        ja: 'テキスト12問4択で見る自分を表すハッシュタグ6タイプとインスタBio提案。#ハッシュタグ #インスタ',
        'zh-CN': '12 道文字四选一，六种表达你的话题标签与简介文案。#话题标签 #ins #社交',
        'zh-TW': '12 題文字四選一，六種表達你的話題標籤與簡介文案。#話題標籤 #ins #社群',
        vi: '12 câu chữ 4 đáp án — 6 kiểu hashtag thể hiện bạn và gợi ý bio Instagram.',
        id: '12 soal teks 4 opsi — 6 gaya hashtag yang mewakili kamu dan saran bio Instagram.',
      },
      thumbnail: 'p3_test_my_hashtag_generator.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['해시태그', '인스타', 'SNS', '성격', '자기표현'],
        en: ['Hashtag', 'Instagram', 'SNS', 'Personality', 'Self-expression'],
        ja: ['ハッシュタグ', 'Instagram', 'SNS', '性格', '自己表現'],
        'zh-CN': ['话题标签', 'Instagram', '社交', '性格', '自我表达'],
        'zh-TW': ['話題標籤', 'Instagram', '社群', '性格', '自我表達'],
        vi: ['hashtag', 'Instagram', 'SNS', 'tính cách', 'thể hiện bản thân'],
        id: ['hashtag', 'Instagram', 'SNS', 'kepribadian', 'ekspresi diri'],
      },
    };

    return (
      <>
        <Phase3MyHashtagGeneratorTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3MyHashtagGeneratorQuestions}
          results={phase3MyHashtagGeneratorResults}
          questionCount={phase3MyHashtagGeneratorQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-godsaeng-index-measurement') {
    const { phase3GodsaengIndexMeasurementQuestions, phase3GodsaengIndexMeasurementResults } = await import('@/lib/phase3GodsaengIndexMeasurementData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-godsaeng-index-measurement',
      title: {
        ko: '내 갓생 지수 측정',
        en: 'My Godsaeng Index',
        ja: '私の「갓생」指数測定',
        'zh-CN': '我的自律人生指数测量',
        'zh-TW': '我的自律人生指數測量',
        vi: 'Chỉ số Godsaeng của tôi',
        id: 'Indeks Godsaeng-ku',
      },
      description: {
        ko: '12문항 텍스트 4지선다로 보는 갓생 지수·레벨·맞춤 처방 6유형. #자기계발 #루틴 #챌린지 #동기부여',
        en: '12 text questions (4 choices) — 6 Godsaeng score bands with missions. #selfimprovement #routine #challenge #motivation',
        ja: 'テキスト12問4択で見る갓생指数・レベル・処方6タイプ。#自己啓発 #ルーティン',
        'zh-CN': '12 道文字四选一，六种自律指数·等级·行动处方。#自我提升 #习惯',
        'zh-TW': '12 題文字四選一，六種自律指數·等級·行動處方。#自我提升 #習慣',
        vi: '12 câu chữ 4 đáp án — 6 mức chỉ số Godsaeng và nhiệm vụ. #pháttriển #routine',
        id: '12 soal teks 4 opsi — 6 level indeks Godsaeng & misi. #pengembangan #rutinitas',
      },
      thumbnail: 'p3_test_godsaeng_index_measurement.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['자기계발', '루틴', '챌린지', '동기부여'],
        en: ['Self-improvement', 'Routine', 'Challenge', 'Motivation'],
        ja: ['自己啓発', 'ルーティン', 'チャレンジ', 'モチベーション'],
        'zh-CN': ['自我提升', '习惯', '挑战', '动力'],
        'zh-TW': ['自我提升', '習慣', '挑戰', '動力'],
        vi: ['Tự phát triển', 'Thói quen', 'Thử thách', 'Động lực'],
        id: ['Pengembangan diri', 'Rutinitas', 'Tantangan', 'Motivasi'],
      },
    };

    return (
      <>
        <Phase3GodsaengIndexMeasurementTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3GodsaengIndexMeasurementQuestions}
          results={phase3GodsaengIndexMeasurementResults}
          questionCount={phase3GodsaengIndexMeasurementQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-office-balance-game') {
    const { phase3OfficeBalanceGameQuestions, phase3OfficeBalanceGameResults } = await import('@/lib/phase3OfficeBalanceGameData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-office-balance-game',
      title: {
        ko: '밸런스 게임 - 직장생활편 (극한)',
        en: 'Balance Game — Office Life (Extreme)',
        ja: 'バランスゲーム 職場編（極限）',
        'zh-CN': '平衡游戏 · 职场篇（极限）',
        'zh-TW': '平衡遊戲 · 職場篇（極限）',
        vi: 'Trò cân bằng — đời công sở (cực hạn)',
        id: 'Permainan seimbang — kehidupan kantor (ekstrem)',
      },
      description: {
        ko: '10문항 텍스트 2지선다 직장 밸런스 6유형. #직장 #밸런스게임 #직장인 #유머 #워라밸',
        en: '10 A/B office-life dilemmas — 6 work-style types. #office #balance #humor #worklife',
        ja: 'テキスト10問2択の職場バランス6タイプ。#職場 #バランスゲーム',
        'zh-CN': '10 道文字二选一，六种职场平衡类型。#职场 #平衡游戏',
        'zh-TW': '10 題文字二選一，六種職場平衡類型。#職場 #平衡遊戲',
        vi: '10 câu chữ 2 lựa chọn — 6 kiểu cân bằng công sở. #côngsở #humor',
        id: '10 soal teks 2 pilihan — 6 tipe keseimbangan kantor. #kantor #humor',
      },
      thumbnail: 'p3_game_office_balance_extreme.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['직장', '밸런스게임', '직장인', '유머', '워라밸'],
        en: ['Office', 'Balance game', 'Work humor', 'Work-life'],
        ja: ['職場', 'バランスゲーム', 'ユーモア'],
        'zh-CN': ['职场', '平衡游戏', '幽默'],
        'zh-TW': ['職場', '平衡遊戲', '幽默'],
        vi: ['Công sở', 'Trò cân bằng', 'Hài hước'],
        id: ['Kantor', 'Permainan seimbang', 'Humor'],
      },
    };

    return (
      <>
        <Phase3OfficeBalanceGameTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3OfficeBalanceGameQuestions}
          results={phase3OfficeBalanceGameResults}
          questionCount={phase3OfficeBalanceGameQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-office-survival-type') {
    const { phase3OfficeSurvivalTypeQuestions, phase3OfficeSurvivalTypeResults } = await import('@/lib/phase3OfficeSurvivalTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-office-survival-type',
      title: {
        ko: '나의 직장 생활 생존 유형',
        en: 'My Office Survival Type',
        ja: '私の職場サバイバルタイプ',
        'zh-CN': '我的职场生存类型',
        'zh-TW': '我的職場生存類型',
        vi: 'Kiểu sống sót nơi công sở của tôi',
        id: 'Tipe bertahan hidup di kantorku',
      },
      description: {
        ko: '12문항 4지선다로 보는 직장 내 포지션·생존 전략 6유형. #직장 #회사 #공감 #생존',
        en: '12 questions, 4 choices — 6 workplace survival types. #office #work #empathy',
        ja: '12問4択で見る職場ポジション・生存戦略6タイプ。#職場 #会社',
        'zh-CN': '12 道四选一，六种职场站位与生存策略。#职场 #公司',
        'zh-TW': '12 題四選一，六種職場站位與生存策略。#職場 #公司',
        vi: '12 câu 4 lựa chọn — 6 kiểu vị trí & chiến lược sống sót.#côngsở',
        id: '12 soal 4 pilihan — 6 tipe posisi & strategi bertahan di kantor.#kantor',
      },
      thumbnail: 'p3_test_office_survival_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['직장', '회사', '공감', '생존'],
        en: ['Office', 'Work', 'Empathy', 'Survival'],
        ja: ['職場', '会社', '共感', '生存'],
        'zh-CN': ['职场', '公司', '共情', '生存'],
        'zh-TW': ['職場', '公司', '共感', '生存'],
        vi: ['Công sở', 'Công ty', 'Đồng cảm', 'Sinh tồn'],
        id: ['Kantor', 'Kerja', 'Empati', 'Bertahan'],
      },
    };

    return (
      <>
        <Phase3OfficeSurvivalTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3OfficeSurvivalTypeQuestions}
          results={phase3OfficeSurvivalTypeResults}
          questionCount={phase3OfficeSurvivalTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-real-friend-condition-analysis') {
    const { phase3RealFriendConditionAnalysisQuestions, phase3RealFriendConditionAnalysisResults } = await import('@/lib/phase3RealFriendConditionAnalysisData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-real-friend-condition-analysis',
      title: {
        ko: '나의 찐친 조건 분석',
        en: 'My Real Best Friend Criteria — Analysis',
        ja: '本当の親友条件 分析',
        'zh-CN': '我的真朋友条件分析',
        'zh-TW': '我的真朋友條件分析',
        vi: 'Phân tích tiêu chí bạn thân của tôi',
        id: 'Analisis kriteria sahabat sejatiku',
      },
      description: {
        ko: '12문항 4지선다로 보는 나의 찐친 조건·유형 6가지. #우정 #친구 #관계 #공감',
        en: '12 multiple-choice questions — 6 types for your real best friend criteria. #friendship #friends #relationships #empathy',
        ja: '12問4択で見る本当の親友条件・6タイプ。#友情 #友だち #関係 #共感',
        'zh-CN': '12 道四选一，六种真朋友条件类型。#友情 #朋友 #关系 #共情',
        'zh-TW': '12 題四選一，六種真朋友條件類型。#友情 #朋友 #關係 #共情',
        vi: '12 câu trắc nghiệm — 6 kiểu tiêu chí bạn thân đích thực. #tình bạn #bạn #quan hệ #đồng cảm',
        id: '12 pertanyaan pilihan ganda — 6 tipe kriteria sahabat sejati. #persahabatan #teman #hubungan #empati',
      },
      thumbnail: 'p3_test_real_friend_condition_analysis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['우정', '친구', '관계', '공감'],
        en: ['Friendship', 'Friends', 'Relationships', 'Empathy'],
        ja: ['友情', '友だち', '人間関係', '共感'],
        'zh-CN': ['友情', '朋友', '关系', '共情'],
        'zh-TW': ['友情', '朋友', '關係', '共感'],
        vi: ['Tình bạn', 'Bạn bè', 'Quan hệ', 'Đồng cảm'],
        id: ['Persahabatan', 'Teman', 'Hubungan', 'Empati'],
      },
    };

    return (
      <>
        <Phase3RealFriendConditionAnalysisTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3RealFriendConditionAnalysisQuestions}
          results={phase3RealFriendConditionAnalysisResults}
          questionCount={phase3RealFriendConditionAnalysisQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-tf-index-precise-measurement') {
    const { phase3TfIndexPreciseMeasurementQuestions, phase3TfIndexPreciseMeasurementResults } = await import('@/lib/phase3TfIndexPreciseMeasurementData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-tf-index-precise-measurement',
      title: {
        ko: '나의 T/F 지수 정밀 측정',
        en: 'My T/F Index — Precision Test',
        ja: '私のT/F指数 精密測定',
        'zh-CN': '我的 T/F 指数精密测量',
        'zh-TW': '我的 T/F 指數精密測量',
        vi: 'Chỉ số T/F của tôi — đo chính xác',
        id: 'Indeks T/F-ku — pengukuran presisi',
      },
      description: {
        ko: '12문항 2지선다로 보는 T/F 지수(F%·T%) 6유형. #MBTI #심리',
        en: '12 A/B questions — 6 T/F index types (F% · T%). #MBTI #psychology',
        ja: '12問2択で見るT/F指数（F%・T%）6タイプ。#MBTI #心理',
        'zh-CN': '12 道二选一，六种 T/F 指数（F%·T%）。#MBTI #心理',
        'zh-TW': '12 題二選一，六種 T/F 指數（F%·T%）。#MBTI #心理',
        vi: '12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số T/F (F% · T%). #MBTI #tâm lý',
        id: '12 pertanyaan 2 pilihan — 6 tipe indeks T/F (F% · T%). #MBTI #psikologi',
      },
      thumbnail: 'p3_test_tf_index_precise_measurement.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['MBTI', '심리'],
        en: ['MBTI', 'Psychology'],
        ja: ['MBTI', '心理'],
        'zh-CN': ['MBTI', '心理'],
        'zh-TW': ['MBTI', '心理'],
        vi: ['MBTI', 'Tâm lý'],
        id: ['MBTI', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3TfIndexPreciseMeasurementTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3TfIndexPreciseMeasurementQuestions}
          results={phase3TfIndexPreciseMeasurementResults}
          questionCount={phase3TfIndexPreciseMeasurementQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-sn-index-precise-measurement') {
    const { phase3SnIndexPreciseMeasurementQuestions, phase3SnIndexPreciseMeasurementResults } = await import('@/lib/phase3SnIndexPreciseMeasurementData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-sn-index-precise-measurement',
      title: {
        ko: '나의 S/N 지수 정밀 측정',
        en: 'My S/N Index — Precision Test',
        ja: '私のS/N指数 精密測定',
        'zh-CN': '我的 S/N 指数精密测量',
        'zh-TW': '我的 S/N 指數精密測量',
        vi: 'Chỉ số S/N của tôi — đo chính xác',
        id: 'Indeks S/N-ku — pengukuran presisi',
      },
      description: {
        ko: '12문항 2지선다로 보는 S/N 지수(N%·S%) 6유형. #MBTI #심리',
        en: '12 A/B questions — 6 S/N index types (N% · S%). #MBTI #psychology',
        ja: '12問2択で見るS/N指数（N%・S%）6タイプ。#MBTI #心理',
        'zh-CN': '12 道二选一，六种 S/N 指数（N%·S%）。#MBTI #心理',
        'zh-TW': '12 題二選一，六種 S/N 指數（N%·S%）。#MBTI #心理',
        vi: '12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số S/N (N% · S%). #MBTI #tâm lý',
        id: '12 pertanyaan 2 pilihan — 6 tipe indeks S/N (N% · S%). #MBTI #psikologi',
      },
      thumbnail: 'p3_test_sn_index_precise_measurement.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['MBTI', '심리'],
        en: ['MBTI', 'Psychology'],
        ja: ['MBTI', '心理'],
        'zh-CN': ['MBTI', '心理'],
        'zh-TW': ['MBTI', '心理'],
        vi: ['MBTI', 'Tâm lý'],
        id: ['MBTI', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3SnIndexPreciseMeasurementTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SnIndexPreciseMeasurementQuestions}
          results={phase3SnIndexPreciseMeasurementResults}
          questionCount={phase3SnIndexPreciseMeasurementQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-ei-index-precise-measurement') {
    const { phase3EiIndexPreciseMeasurementQuestions, phase3EiIndexPreciseMeasurementResults } = await import('@/lib/phase3EiIndexPreciseMeasurementData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-ei-index-precise-measurement',
      title: {
        ko: '나의 E/I 지수 정밀 측정',
        en: 'My E/I Index — Precision Test',
        ja: '私のE/I指数 精密測定',
        'zh-CN': '我的 E/I 指数精密测量',
        'zh-TW': '我的 E/I 指數精密測量',
        vi: 'Chỉ số E/I của tôi — đo chính xác',
        id: 'Indeks E/I-ku — pengukuran presisi',
      },
      description: {
        ko: '12문항 2지선다로 보는 E/I 지수(E%·I%) 6유형. #MBTI #심리',
        en: '12 A/B questions — 6 E/I index types (E% · I%). #MBTI #psychology',
        ja: '12問2択で見るE/I指数（E%・I%）6タイプ。#MBTI #心理',
        'zh-CN': '12 道二选一，六种 E/I 指数（E%·I%）。#MBTI #心理',
        'zh-TW': '12 題二選一，六種 E/I 指數（E%·I%）。#MBTI #心理',
        vi: '12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số E/I (E% · I%). #MBTI #tâm lý',
        id: '12 pertanyaan 2 pilihan — 6 tipe indeks E/I (E% · I%). #MBTI #psikologi',
      },
      thumbnail: 'p3_test_ei_index_precise_measurement.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['MBTI', '심리'],
        en: ['MBTI', 'Psychology'],
        ja: ['MBTI', '心理'],
        'zh-CN': ['MBTI', '心理'],
        'zh-TW': ['MBTI', '心理'],
        vi: ['MBTI', 'Tâm lý'],
        id: ['MBTI', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3EiIndexPreciseMeasurementTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3EiIndexPreciseMeasurementQuestions}
          results={phase3EiIndexPreciseMeasurementResults}
          questionCount={phase3EiIndexPreciseMeasurementQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-jp-index-precise-measurement') {
    const { phase3JpIndexPreciseMeasurementQuestions, phase3JpIndexPreciseMeasurementResults } = await import('@/lib/phase3JpIndexPreciseMeasurementData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-jp-index-precise-measurement',
      title: {
        ko: '나의 J/P 지수 정밀 측정',
        en: 'My J/P Index — Precision Test',
        ja: '私のJ/P指数 精密測定',
        'zh-CN': '我的 J/P 指数精密测量',
        'zh-TW': '我的 J/P 指數精密測量',
        vi: 'Chỉ số J/P của tôi — đo chính xác',
        id: 'Indeks J/P-ku — pengukuran presisi',
      },
      description: {
        ko: '12문항 2지선다로 보는 J/P 지수(P%·J%) 6유형. #MBTI #심리',
        en: '12 A/B questions — 6 J/P index types (P% · J%). #MBTI #psychology',
        ja: '12問2択で見るJ/P指数（P%・J%）6タイプ。#MBTI #心理',
        'zh-CN': '12 道二选一，六种 J/P 指数（P%·J%）。#MBTI #心理',
        'zh-TW': '12 題二選一，六種 J/P 指數（P%·J%）。#MBTI #心理',
        vi: '12 câu trắc nghiệm 2 lựa chọn — 6 kiểu chỉ số J/P (P% · J%). #MBTI #tâm lý',
        id: '12 pertanyaan 2 pilihan — 6 tipe indeks J/P (P% · J%). #MBTI #psikologi',
      },
      thumbnail: 'p3_test_jp_index_precise_measurement.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['MBTI', '심리'],
        en: ['MBTI', 'Psychology'],
        ja: ['MBTI', '心理'],
        'zh-CN': ['MBTI', '心理'],
        'zh-TW': ['MBTI', '心理'],
        vi: ['MBTI', 'Tâm lý'],
        id: ['MBTI', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3JpIndexPreciseMeasurementTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3JpIndexPreciseMeasurementQuestions}
          results={phase3JpIndexPreciseMeasurementResults}
          questionCount={phase3JpIndexPreciseMeasurementQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-elementary-math-adults-quiz') {
    const { phase3ElementaryMathAdultsQuizQuestions, phase3ElementaryMathAdultsQuizResults } = await import('@/lib/phase3ElementaryMathAdultsQuizData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-elementary-math-adults-quiz',
      title: {
        ko: '어른들 멘붕! 초등 수학 퀴즈',
        en: 'Adults Meltdown! Elementary Math Quiz',
        ja: '大人むずっ！小学生算数クイズ',
        'zh-CN': '大人崩溃！小学数学测验',
        'zh-TW': '大人崩潰！小學數學測驗',
        vi: 'Người lớn cũng trượt! Quiz toán tiểu học',
        id: 'Orang dewasa kewalahan! Kuis matematika SD',
      },
      description: {
        ko: '10문항 4지선다 초등 수학 함정 퀴즈. 연산 순서·분수·최소공배수까지. #수학 #퀴즈 #초등 #두뇌게임 #자존심',
        en: '10 multiple-choice elementary math trick questions. Order of operations, fractions, LCM, and more. #math #quiz #brain',
        ja: '算数の落とし穴10問4択。演算順序・分数・最小公倍数など。#算数 #クイズ #脳トレ',
        'zh-CN': '10 道四选一小学数学陷阱题。运算顺序、分数、最小公倍数等。#数学 #测验',
        'zh-TW': '10 題四選一小學數學陷阱題。運算順序、分數、最小公倍數等。#數學 #測驗',
        vi: '10 câu trắc nghiệm 4 đáp án — bẫy toán tiểu học. Thứ tự phép tính, phân số, BCNN… #toán #quiz',
        id: '10 soal pilihan ganda matematika SD — jebakan urutan operasi, pecahan, KPK… #matematika #quiz',
      },
      thumbnail: 'p3_quiz_elementary_math_adults.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['수학', '퀴즈', '초등', '두뇌게임', '자존심'],
        en: ['Math', 'Quiz', 'Elementary', 'Brain game', 'Pride'],
        ja: ['算数', 'クイズ', '小学生', '脳トレ', 'プライド'],
        'zh-CN': ['数学', '测验', '小学', '脑力', '自尊'],
        'zh-TW': ['數學', '測驗', '小學', '腦力', '自尊'],
        vi: ['Toán', 'Quiz', 'Tiểu học', 'Trí não', 'Tự tôn'],
        id: ['Matematika', 'Quiz', 'SD', 'Otak', 'Ego'],
      },
    };

    return (
      <>
        <Phase3ElementaryMathAdultsQuizTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3ElementaryMathAdultsQuizQuestions}
          results={phase3ElementaryMathAdultsQuizResults}
          questionCount={phase3ElementaryMathAdultsQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-emoji-movie-idiom-quiz') {
    const { phase3EmojiMovieIdiomQuizQuestions, phase3EmojiMovieIdiomQuizResults } = await import('@/lib/phase3EmojiMovieIdiomQuizData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-emoji-movie-idiom-quiz',
      title: {
        ko: '이모티콘 퀴즈 (영화 & 관용구)',
        en: 'Emoji Quiz: Movies & Korean Idioms',
        ja: '絵文字クイズ（映画＆慣用句）',
        'zh-CN': '表情符号测验（电影与成语）',
        'zh-TW': '表情符號測驗（電影與成語）',
        vi: 'Quiz emoji: phim & thành ngữ Hàn',
        id: 'Kuis emoji: film & peribahasa Korea',
      },
      description: {
        ko: '이모티콘만 보고 영화 제목·한국 관용구 맞히기 10문항 4지선다. #퀴즈 #이모티콘 #영화 #관용구 #두뇌게임',
        en: '10 emoji multiple-choice questions—movies & Korean idioms. #quiz #emoji #movies #idioms #brain',
        ja: '絵文字だけで映画タイトル・韓国慣用句10問4択。#クイズ #絵文字 #映画 #慣用句',
        'zh-CN': '10 道表情猜电影与韩国成语四选一。#测验 #表情 #电影 #成语',
        'zh-TW': '10 題表情猜電影與韓國成語四選一。#測驗 #表情 #電影 #成語',
        vi: '10 câu emoji đoán phim & thành ngữ Hàn.#quiz #emoji #phim',
        id: '10 soal emoji tebak film & peribahasa Korea.#kuis #emoji #film',
      },
      thumbnail: 'p3_quiz_emoji_movie_idiom.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['퀴즈', '이모티콘', '영화', '관용구', '두뇌게임'],
        en: ['Quiz', 'Emoji', 'Movies', 'Idioms', 'Brain game'],
        ja: ['クイズ', '絵文字', '映画', '慣用句', '脳トレ'],
        'zh-CN': ['测验', '表情', '电影', '成语', '脑力'],
        'zh-TW': ['測驗', '表情', '電影', '成語', '腦力'],
        vi: ['Quiz', 'Emoji', 'Phim', 'Thành ngữ', 'Trí não'],
        id: ['Kuis', 'Emoji', 'Film', 'Peribahasa', 'Otak'],
      },
    };

    return (
      <>
        <Phase3EmojiMovieIdiomQuizTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3EmojiMovieIdiomQuizQuestions}
          results={phase3EmojiMovieIdiomQuizResults}
          questionCount={phase3EmojiMovieIdiomQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-world-landmark-city-quiz') {
    const { phase3WorldLandmarkCityQuizQuestions, phase3WorldLandmarkCityQuizResults } = await import('@/lib/phase3WorldLandmarkCityQuizData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-world-landmark-city-quiz',
      title: {
        ko: '세계 랜드마크 보고 도시 맞추기',
        en: 'Guess the City from World Landmarks',
        ja: '世界のランドマークから都市を当てる',
        'zh-CN': '看世界地标猜城市',
        'zh-TW': '看世界地標猜城市',
        vi: 'Đoán thành phố qua biểu tượng thế giới',
        id: 'Tebak kota dari landmark dunia',
      },
      description: {
        ko: '12문항 이미지형 4지선다. 랜드마크 사진을 보고 도시를 고르세요. #퀴즈 #여행 #랜드마크 #세계지리',
        en: '12 image questions, 4 choices—pick the city for each landmark. #quiz #travel #landmark #geography',
        ja: '全12問・画像4択。ランドマークの写真から都市を選びます。#クイズ #旅行 #ランドマーク #地理',
        'zh-CN': '12 道看图选城市四选一。#测验 #旅行 #地标 #地理',
        'zh-TW': '12 題看圖選城市四選一。#測驗 #旅行 #地標 #地理',
        vi: '12 cây hình, 4 đáp án—chọn thành phố theo ảnh địa danh. #quiz #du lịch #địa lý',
        id: '12 soal gambar, 4 pilihan—tebak kota dari foto landmark. #kuis #travel #geografi',
      },
      thumbnail: 'p3_quiz_world_landmark_city_match.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['퀴즈', '여행', '랜드마크', '세계지리'],
        en: ['Quiz', 'Travel', 'Landmark', 'Geography'],
        ja: ['クイズ', '旅行', 'ランドマーク', '地理'],
        'zh-CN': ['测验', '旅行', '地标', '地理'],
        'zh-TW': ['測驗', '旅行', '地標', '地理'],
        vi: ['Quiz', 'Du lịch', 'Địa danh', 'Địa lý'],
        id: ['Kuis', 'Travel', 'Landmark', 'Geografi'],
      },
    };

    return (
      <>
        <Phase3WorldLandmarkCityQuizTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3WorldLandmarkCityQuizQuestions}
          results={phase3WorldLandmarkCityQuizResults}
          questionCount={phase3WorldLandmarkCityQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-world-greeting-challenge') {
    const { phase3WorldGreetingChallengeQuestions, phase3WorldGreetingChallengeResults } = await import('@/lib/phase3WorldGreetingChallengeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-world-greeting-challenge',
      title: {
        ko: '나라별 인사말 맞추기 챌린지',
        en: 'World Greeting Challenge',
        ja: '世界の挨拶当てチャレンジ',
        'zh-CN': '世界各国问候语挑战',
        'zh-TW': '世界各國問候語挑戰',
        vi: 'Thử thách đoán lời chào thế giới',
        id: 'Tantangan Tebak Salam Dunia',
      },
      description: {
        ko: '12가지 세계 인사말 이미지로 나라를 맞춰보세요. Bonjour부터 Talofa까지, 세계 언어 고수 등급을 확인하세요!',
        en: 'Match 12 greeting images to their countries. From Bonjour to Talofa—find your world language rank!',
        ja: '12の世界の挨拶画像で国を当てましょう。BonjourからTalofaまで、世界言語マスター等級を確認！',
        'zh-CN': '通过12道世界问候语图片猜国家。从Bonjour到Talofa，测测你的世界语言等级！',
        'zh-TW': '透過12道世界問候語圖片猜國家。從Bonjour到Talofa，測測你的世界語言等級！',
        vi: 'Đoán quốc gia qua 12 ảnh lời chào thế giới. Từ Bonjour đến Talofa—xem cấp độ ngôn ngữ của bạn!',
        id: 'Tebak negara dari 12 gambar salam dunia. Dari Bonjour ke Talofa—cek level bahasa duniamu!',
      },
      thumbnail: 'p3_quiz_world_greeting_challenge.webp',
      type: 'knowledge',
      category: 'challenge',
      play_count: 0,
      tags: {
        ko: ['세계인사말', '언어상식', '퀴즈', '다국어', '이거어느나라말'],
        en: ['world greeting', 'language quiz', 'quiz', 'multilingual', 'guess country'],
        ja: ['世界の挨拶', '言語クイズ', 'クイズ', '多言語', 'どこの国'],
        'zh-CN': ['世界问候', '语言常识', '测验', '多语言', '哪国语言'],
        'zh-TW': ['世界問候', '語言常識', '測驗', '多語言', '哪國語言'],
        vi: ['lời chào', 'ngôn ngữ', 'quiz', 'đa ngôn ngữ', 'đoán quốc gia'],
        id: ['salam dunia', 'bahasa', 'kuis', 'multibahasa', 'tebak negara'],
      },
    };

    return (
      <>
        <Phase3WorldGreetingChallengeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3WorldGreetingChallengeQuestions}
          results={phase3WorldGreetingChallengeResults}
          questionCount={phase3WorldGreetingChallengeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-world-flag-master') {
    const { phase3WorldFlagMasterQuestions, phase3WorldFlagMasterResults } = await import('@/lib/phase3WorldFlagMasterData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-world-flag-master',
      title: {
        ko: '세계 국기 고수 테스트',
        en: 'World Flag Master Test',
        ja: '世界国旗マスターテスト',
        'zh-CN': '世界国旗高手测试',
        'zh-TW': '世界國旗高手測試',
        vi: 'Bài kiểm tra chuyên gia cờ thế giới',
        id: 'Tes Master Bendera Dunia',
      },
      description: {
        ko: '12개의 국기 이미지로 나라를 맞춰보세요. 일본부터 카자흐스탄까지, 세계 국기 고수 등급을 확인하세요!',
        en: 'Match 12 flag images to their countries. From Japan to Kazakhstan—find your world flag rank!',
        ja: '12の国旗画像で国を当てましょう。日本からカザフスタンまで、世界国旗マスター等級を確認！',
        'zh-CN': '通过12道国旗图片猜国家。从日本到哈萨克斯坦，测测你的世界国旗等级！',
        'zh-TW': '透過12道國旗圖片猜國家。從日本到哈薩克，測測你的世界國旗等級！',
        vi: 'Đoán quốc gia qua 12 ảnh cờ thế giới. Từ Nhật đến Kazakhstan—xem cấp độ cờ của bạn!',
        id: 'Tebak negara dari 12 gambar bendera dunia. Dari Jepang ke Kazakhstan—cek level bendera duniamu!',
      },
      thumbnail: 'p3_quiz_world_flag_master.webp',
      type: 'knowledge',
      category: 'challenge',
      play_count: 0,
      tags: {
        ko: ['세계국기', '지리상식', '퀴즈', '국기챌린지', '도전'],
        en: ['world flag', 'geography quiz', 'quiz', 'flag challenge', 'challenge'],
        ja: ['世界国旗', '地理クイズ', 'クイズ', '国旗チャレンジ', '挑戦'],
        'zh-CN': ['世界国旗', '地理常识', '测验', '国旗挑战', '挑战'],
        'zh-TW': ['世界國旗', '地理常識', '測驗', '國旗挑戰', '挑戰'],
        vi: ['cờ thế giới', 'địa lý', 'quiz', 'thử thách cờ', 'thử thách'],
        id: ['bendera dunia', 'geografi', 'kuis', 'tantangan bendera', 'tantangan'],
      },
    };

    return (
      <>
        <Phase3WorldFlagMasterTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3WorldFlagMasterQuestions}
          results={phase3WorldFlagMasterResults}
          questionCount={phase3WorldFlagMasterQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-team-work-chemistry-test') {
    const { phase3TeamWorkChemistryQuestions, phase3TeamWorkChemistryResults } = await import('@/lib/phase3TeamWorkChemistryData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-team-work-chemistry-test',
      title: {
        ko: '우리 팀 워크 케미 테스트',
        en: 'Our Team Work Chemistry Test',
        ja: '私たちのチームワーク相性テスト',
        'zh-CN': '我们团队默契测试',
        'zh-TW': '我們團隊默契測試',
        vi: 'Bài test team chemistry của chúng ta',
        id: 'Tes chemistry kerja tim kita',
      },
      description: {
        ko: '12문항으로 나의 팀 역할 유형을 찾고, 팀원 결과를 모으면 팀 케미·시너지·주의점이 분석됩니다. #팀워크 #직장 #협업',
        en: '12 questions to find your team role type; combine teammates’ results for chemistry, synergy, and watch-outs. #teamwork #workplace #collab',
        ja: '12問でチーム役割タイプを診断。メンバー結果を集めるとケミ・シナジーが分析。#チームワーク #職場',
        'zh-CN': '12 题找到你的团队角色类型；汇总成员结果可看默契与协同。#团队 #职场 #协作',
        'zh-TW': '12 題找到你的團隊角色類型；彙整成員結果可看默契與協同。#團隊 #職場 #協作',
        vi: '12 câu tìm vai trò nhóm; gom kết quả để xem chemistry & synergy. #teamwork #công sở',
        id: '12 soal cari peran tim; kumpulkan hasil untuk chemistry & sinergi. #teamwork #kantor',
      },
      thumbnail: 'p3_test_team_work_chemistry.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['팀워크', '직장', '협업'],
        en: ['Teamwork', 'Workplace', 'Collaboration'],
        ja: ['チームワーク', '職場', '協業'],
        'zh-CN': ['团队', '职场', '协作'],
        'zh-TW': ['團隊', '職場', '協作'],
        vi: ['Teamwork', 'Công sở', 'Hợp tác'],
        id: ['Teamwork', 'Kantor', 'Kolaborasi'],
      },
    };

    return (
      <>
        <Phase3TeamWorkChemistryTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3TeamWorkChemistryQuestions}
          results={phase3TeamWorkChemistryResults}
          questionCount={phase3TeamWorkChemistryQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-tanjinjam-spending-type') {
    const { phase3TanjinjamSpendingTypeQuestions, phase3TanjinjamSpendingTypeResults } = await import('@/lib/phase3TanjinjamSpendingTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-tanjinjam-spending-type',
      title: {
        ko: '나의 탕진잼 유형은?',
        en: 'What’s My Splurge-Joy Type?',
        ja: '私の散財ジョイタイプは？',
        'zh-CN': '我的剁手快乐型是？',
        'zh-TW': '我的剁手快樂型是？',
        vi: 'Kiểu vui khi shopping của tôi?',
        id: 'Tipe bahagia belanjaku?',
      },
      description: {
        ko: '12문항 이미지 4지선다로 보는 탕진잼 소비 행복 포인트 5유형. #소비 #쇼핑 #공감',
        en: '12 image multiple-choice questions — 5 spending happiness types. #shopping #lifestyle #relatable',
        ja: '画像12問4択で見る散財ジョイ・幸福ポイント5タイプ。#買い物 #ライフスタイル #共感',
        'zh-CN': '12 道图片四选一，五种消费快乐型。#购物 #生活方式 #共鸣',
        'zh-TW': '12 題圖片四選一，五種消費快樂型。#購物 #生活方式 #共鳴',
        vi: '12 câu chọn ảnh 4 đáp án — 5 kiểu điểm hạnh phúc khi chi tiêu. #mua sắm #lối sống #đồng cảm',
        id: '12 soal pilih gambar 4 opsi — 5 tipe titik bahagia saat belanja. #belanja #gaya hidup #relate',
      },
      thumbnail: 'p3_test_tanjinjam_spending_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['소비', '쇼핑', '공감'],
        en: ['Shopping', 'Lifestyle', 'Relatable'],
        ja: ['買い物', 'ライフスタイル', '共感'],
        'zh-CN': ['购物', '生活方式', '共鸣'],
        'zh-TW': ['購物', '生活方式', '共鳴'],
        vi: ['Mua sắm', 'Lối sống', 'Đồng cảm'],
        id: ['Belanja', 'Gaya hidup', 'Relate'],
      },
    };

    return (
      <>
        <Phase3TanjinjamSpendingTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3TanjinjamSpendingTypeQuestions}
          results={phase3TanjinjamSpendingTypeResults}
          questionCount={phase3TanjinjamSpendingTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-youtube-algorithm-knows') {
    const { phase3YoutubeAlgorithmKnowsQuestions, phase3YoutubeAlgorithmKnowsResults } = await import('@/lib/phase3YoutubeAlgorithmKnowsData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-youtube-algorithm-knows',
      title: {
        ko: '나의 유튜브 알고리즘이 뭔가 알고 있다',
        en: 'My YouTube Algorithm Seems to Know Me',
        ja: '私のYouTubeアルゴリズムが何か知っている',
        'zh-CN': '我的 YouTube 算法好像知道些什么',
        'zh-TW': '我的 YouTube 演算法好像知道些什麼',
        vi: 'Thuật toán YouTube của tôi dường như biết điều gì đó',
        id: 'Algoritme YouTube-ku seolah tahu sesuatu',
      },
      description: {
        ko: '12문항 4지선다로 보는 유튜브 알고리즘이 파악한 나의 숨은 유형 6가지. #유튜브 #알고리즘 #트렌드 #자기폭로',
        en: '12 multiple-choice questions — 6 hidden types your YouTube algorithm has pegged you as. #YouTube #algorithm #trend',
        ja: '12問4択で見るYouTubeアルゴリズムが見抜いた隠れた6タイプ。#YouTube #アルゴリズム #トレンド',
        'zh-CN': '12 道四选一，六种 YouTube 算法眼中的隐藏类型。#YouTube #算法 #趋势',
        'zh-TW': '12 題四選一，六種 YouTube 演算法眼中的隱藏類型。#YouTube #演算法 #趨勢',
        vi: '12 câu — 6 kiểu ẩn mà thuật toán YouTube đoán về bạn. #YouTube #thuật toán #xu hướng',
        id: '12 pertanyaan — 6 tipe tersembunyi yang algoritme YouTube tebak tentangmu. #YouTube #algoritme #tren',
      },
      thumbnail: 'p3_test_youtube_algorithm_knows.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['유튜브', '알고리즘', '트렌드', '자기폭로'],
        en: ['YouTube', 'Algorithm', 'Trend', 'Self-reveal'],
        ja: ['YouTube', 'アルゴリズム', 'トレンド', '自己開示'],
        'zh-CN': ['YouTube', '算法', '趋势', '自我爆料'],
        'zh-TW': ['YouTube', '演算法', '趨勢', '自我爆料'],
        vi: ['YouTube', 'Thuật toán', 'Xu hướng', 'Tự vạch trần'],
        id: ['YouTube', 'Algoritme', 'Tren', 'Ungkap diri'],
      },
    };

    return (
      <>
        <Phase3YoutubeAlgorithmKnowsTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3YoutubeAlgorithmKnowsQuestions}
          results={phase3YoutubeAlgorithmKnowsResults}
          questionCount={phase3YoutubeAlgorithmKnowsQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-shortform-addiction-type') {
    const { phase3ShortformAddictionTypeQuestions, phase3ShortformAddictionTypeResults } = await import('@/lib/phase3ShortformAddictionTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-shortform-addiction-type',
      title: {
        ko: '숏폼 중독 유형 진단',
        en: 'Short-Form Addiction Type Quiz',
        ja: 'ショート動画中毒タイプ診断',
        'zh-CN': '短视频成瘾类型诊断',
        'zh-TW': '短影音成癮類型診斷',
        vi: 'Trắc nghiệm kiểu nghiện video ngắn',
        id: 'Tes Tipe Kecanduan Konten Pendek',
      },
      description: {
        ko: '12문항 2지선다로 보는 숏폼 중독 스펙트럼 6유형과 처방전. #숏폼 #릴스 #쇼츠 #중독',
        en: '12 A/B questions — 6 short-form addiction types and a prescription. #shorts #reels #tiktok #habits',
        ja: '12問の2択で見るショート動画中毒スペクトラム6タイプと処方箋。#ショート #リール #中毒',
        'zh-CN': '12 道二选一，六种短视频成瘾光谱与处方。#短视频 #Reels #成瘾',
        'zh-TW': '12 題二選一，六種短影音成癮光譜與處方。#短影音 #Reels #成癮',
        vi: '12 câu A/B — 6 mức nghiện short-form và “đơn thuốc”. #shorts #reels #thói quen',
        id: '12 pertanyaan A/B — 6 spektrum kecanduan konten pendek & resep. #shorts #reels #kebiasaan',
      },
      thumbnail: 'p3_test_shortform_addiction_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['숏폼', '릴스', '쇼츠', '중독'],
        en: ['Short-form', 'Reels', 'Shorts', 'Habits'],
        ja: ['ショート', 'リール', 'ショート動画', '習慣'],
        'zh-CN': ['短视频', 'Reels', 'Shorts', '习惯'],
        'zh-TW': ['短影音', 'Reels', 'Shorts', '習慣'],
        vi: ['Short-form', 'Reels', 'Shorts', 'Thói quen'],
        id: ['Short-form', 'Reels', 'Shorts', 'Kebiasaan'],
      },
    };

    return (
      <>
        <Phase3ShortformAddictionTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3ShortformAddictionTypeQuestions}
          results={phase3ShortformAddictionTypeResults}
          questionCount={phase3ShortformAddictionTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-spending-personality-type') {
    const { phase3SpendingPersonalityTypeQuestions, phase3SpendingPersonalityTypeResults } = await import('@/lib/phase3SpendingPersonalityTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-spending-personality-type',
      title: {
        ko: '나의 소비 성향 유형 분석',
        en: 'My Spending Personality Type',
        ja: '私の消費傾向タイプ分析',
        'zh-CN': '我的消费性格类型分析',
        'zh-TW': '我的消費性格類型分析',
        vi: 'Phân tích kiểu chi tiêu của tôi',
        id: 'Analisis Tipe Kepribadian Belanjaku',
      },
      description: {
        ko: '12문항 4지선다로 보는 소비 DNA 스펙트럼 8유형. #소비 #재테크 #심리 #공감',
        en: '12 questions, 4 choices — 8 spending DNA types. #spending #money #psychology',
        ja: '12問4択で見る消費DNAスペクトラム8タイプ。#消費 #お金 #心理',
        'zh-CN': '12 题四选一，八种消费 DNA 光谱。#消费 #理财 #心理',
        'zh-TW': '12 題四選一，八種消費 DNA 光譜。#消費 #理財 #心理',
        vi: '12 câu 4 lựa chọn — 8 kiểu DNA chi tiêu. #tiêu dùng #tài chính #tâm lý',
        id: '12 pertanyaan 4 pilihan — 8 tipe DNA belanja. #belanja #uang #psikologi',
      },
      thumbnail: 'p3_test_spending_personality_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['소비', '재테크', '심리', '공감'],
        en: ['Spending', 'Money', 'Psychology', 'Relatable'],
        ja: ['消費', 'お金', '心理', '共感'],
        'zh-CN': ['消费', '理财', '心理', '共鸣'],
        'zh-TW': ['消費', '理財', '心理', '共鳴'],
        vi: ['Chi tiêu', 'Tiền', 'Tâm lý', 'Đồng cảm'],
        id: ['Belanja', 'Uang', 'Psikologi', 'Relatable'],
      },
    };

    return (
      <>
        <Phase3SpendingPersonalityTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SpendingPersonalityTypeQuestions}
          results={phase3SpendingPersonalityTypeResults}
          questionCount={phase3SpendingPersonalityTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-yolo-fire-godlife-type') {
    const { phase3YoloFireGodlifeTypeQuestions, phase3YoloFireGodlifeTypeResults } = await import('@/lib/phase3YoloFireGodlifeTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-yolo-fire-godlife-type',
      title: {
        ko: '나는 욜로족? 파이어족? 갓생족?',
        en: 'YOLO, FIRE, or God-Life Type?',
        ja: 'YOLO？FIRE？ゴッドライフ？',
        'zh-CN': '你是 YOLO、FIRE 还是自律人生型？',
        'zh-TW': '你是 YOLO、FIRE 還是自律人生型？',
        vi: 'Bạn thuộc kiểu YOLO, FIRE hay God-life?',
        id: 'Tipe YOLO, FIRE, atau God-life?',
      },
      description: {
        ko: '12문항 2지선다로 보는 인생 재무 철학 스펙트럼 6유형. #재무 #라이프스타일 #욜로',
        en: '12 A/B questions — 6 life-money philosophy types. #money #lifestyle #yolo',
        ja: '12問2択で見る人生×お金の哲学6タイプ。#お金 #ライフスタイル',
        'zh-CN': '12 道二选一，六种人生财务观。#理财 #生活方式',
        'zh-TW': '12 題二選一，六種人生財務觀。#理財 #生活方式',
        vi: '12 câu A/B — 6 kiểu triết lý tiền & cuộc sống. #tài chính #lifestyle',
        id: '12 pertanyaan A/B — 6 filosofi uang & hidup. #keuangan #gaya hidup',
      },
      thumbnail: 'p3_test_yolo_fire_godlife_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['재무', '라이프스타일', '욜로'],
        en: ['Money', 'Lifestyle', 'YOLO'],
        ja: ['お金', 'ライフスタイル', 'YOLO'],
        'zh-CN': ['理财', '生活方式', 'YOLO'],
        'zh-TW': ['理財', '生活方式', 'YOLO'],
        vi: ['Tài chính', 'Lifestyle', 'YOLO'],
        id: ['Keuangan', 'Gaya hidup', 'YOLO'],
      },
    };

    return (
      <>
        <Phase3YoloFireGodlifeTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3YoloFireGodlifeTypeQuestions}
          results={phase3YoloFireGodlifeTypeResults}
          questionCount={phase3YoloFireGodlifeTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-love-red-flag-finder') {
    const { phase3LoveRedFlagFinderQuestions, phase3LoveRedFlagFinderResults } = await import('@/lib/phase3LoveRedFlagFinderData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-love-red-flag-finder',
      title: {
        ko: '내 연애 레드플래그 찾기',
        en: 'Find my dating red flags',
        ja: '恋愛レッドフラッグ診断',
        'zh-CN': '恋爱危险信号测验',
        'zh-TW': '戀愛危險信號測驗',
        vi: 'Tìm cờ đỏ yêu đương của tôi',
        id: 'Temukan red flag asmara',
      },
      description: {
        ko: '12문항 4지선다로 보는 연애 레드플래그 스펙트럼 6유형. #연애 #심리',
        en: '12 questions, 6 dating reaction patterns — honest mirror, not comfort. #love #psychology',
        ja: '全12問・恋愛の反応パターン6タイプ。甘い慰めはなし。#恋愛 #心理',
        'zh-CN': '12 题四选一，6 种恋爱反应模式；直白镜子，不灌鸡汤。#恋爱 #心理',
        'zh-TW': '12 題四選一，6 種戀愛反應模式；直白鏡子，不灌雞湯。#戀愛 #心理',
        vi: '12 câu trắc nghiệm, 6 kiểu phản ứng trong yêu — gương thật lòng. #tìnhyêu #tâmlý',
        id: '12 pertanyaan pilihan ganda, 6 pola reaksi asmara — cermin jujur. #asmara #psikologi',
      },
      thumbnail: 'p3_test_love_red_flag_finder.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '심리'],
        en: ['Love', 'Psychology'],
        ja: ['恋愛', '心理'],
        'zh-CN': ['恋爱', '心理'],
        'zh-TW': ['戀愛', '心理'],
        vi: ['Tình yêu', 'Tâm lý'],
        id: ['Asmara', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3LoveRedFlagFinderTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LoveRedFlagFinderQuestions}
          results={phase3LoveRedFlagFinderResults}
          questionCount={phase3LoveRedFlagFinderQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-love-green-flag-finder') {
    const { phase3LoveGreenFlagFinderQuestions, phase3LoveGreenFlagFinderResults } = await import('@/lib/phase3LoveGreenFlagFinderData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-love-green-flag-finder',
      title: {
        ko: '나의 연애 그린플래그는?',
        en: 'What’s my dating green flag?',
        ja: '私の恋愛グリーンフラッグは？',
        'zh-CN': '我的恋爱绿旗是什么？',
        'zh-TW': '我的戀愛綠旗是什麼？',
        vi: 'Cờ xanh yêu đương của tôi là gì?',
        id: 'Bendera hijau asmara saya?',
      },
      description: {
        ko: '12문항 4지선다로 보는 연애 그린플래그 스펙트럼 6유형. #연애 #심리',
        en: '12 questions, 6 dating green-flag spectrum types. #love #psychology',
        ja: '全12問・恋愛グリーンフラッグ6タイプ。#恋愛 #心理',
        'zh-CN': '12 题四选一，6 种恋爱绿旗光谱。#恋爱 #心理',
        'zh-TW': '12 題四選一，6 種戀愛綠旗光譜。#戀愛 #心理',
        vi: '12 câu trắc nghiệm, 6 kiểu quang phổ cờ xanh yêu đương. #tìnhyêu #tâmlý',
        id: '12 pertanyaan pilihan ganda, 6 spektrum green flag asmara. #asmara #psikologi',
      },
      thumbnail: 'p3_test_love_green_flag_finder.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '심리'],
        en: ['Love', 'Psychology'],
        ja: ['恋愛', '心理'],
        'zh-CN': ['恋爱', '心理'],
        'zh-TW': ['戀愛', '心理'],
        vi: ['Tình yêu', 'Tâm lý'],
        id: ['Asmara', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3LoveGreenFlagFinderTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LoveGreenFlagFinderQuestions}
          results={phase3LoveGreenFlagFinderResults}
          questionCount={phase3LoveGreenFlagFinderQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-love-behavior-type') {
    const { phase3LoveBehaviorTypeQuestions, phase3LoveBehaviorTypeResults } = await import('@/lib/phase3LoveBehaviorTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-love-behavior-type',
      title: {
        ko: '나는 연애할 때 어떤 유형?',
        en: 'What’s my dating behavior type?',
        ja: '恋愛中の私はどんなタイプ？',
        'zh-CN': '恋爱时我是哪种类型？',
        'zh-TW': '戀愛時我是哪種類型？',
        vi: 'Khi yêu mình thuộc kiểu nào?',
        id: 'Tipe perilaku asmara seperti apa?',
      },
      description: {
        ko: '12문항 2지선다로 보는 연애 행동 패턴 스펙트럼 8유형. #연애 #성격 #심리 #커플',
        en: '12 A/B questions — 8 dating behavior spectrum types. #love #personality #psychology #couple',
        ja: '12問2択で見る恋愛行動パターン8タイプ。#恋愛 #性格 #心理 #カップル',
        'zh-CN': '12 道二选一，八种恋爱行为模式。#恋爱 #性格 #心理 #情侣',
        'zh-TW': '12 題二選一，八種戀愛行為模式。#戀愛 #性格 #心理 #情侶',
        vi: '12 câu A/B — 8 kiểu quang phổ hành vi yêu. #tìnhyêu #tínhcách #tâmlý #cặpđôi',
        id: '12 pertanyaan A/B — 8 spektrum pola asmara. #asmara #kepribadian #psikologi #pasangan',
      },
      thumbnail: 'p3_test_love_behavior_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '성격', '심리', '커플'],
        en: ['Love', 'Personality', 'Psychology', 'Couple'],
        ja: ['恋愛', '性格', '心理', 'カップル'],
        'zh-CN': ['恋爱', '性格', '心理', '情侣'],
        'zh-TW': ['戀愛', '性格', '心理', '情侶'],
        vi: ['Tình yêu', 'Tính cách', 'Tâm lý', 'Cặp đôi'],
        id: ['Asmara', 'Kepribadian', 'Psikologi', 'Pasangan'],
      },
    };

    return (
      <>
        <Phase3LoveBehaviorTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LoveBehaviorTypeQuestions}
          results={phase3LoveBehaviorTypeResults}
          questionCount={phase3LoveBehaviorTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-ideal-type-dna-analysis') {
    const { phase3IdealTypeDnaAnalysisQuestions, phase3IdealTypeDnaAnalysisResults } = await import('@/lib/phase3IdealTypeDnaAnalysisData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-ideal-type-dna-analysis',
      title: {
        ko: '내가 좋아하는 사람의 유형 분석',
        en: 'Who Is My Ideal Type? Crush Pattern Analysis',
        ja: '好きになる人のタイプ分析',
        'zh-CN': '我喜欢的人类型分析',
        'zh-TW': '我喜歡的人類型分析',
        vi: 'Phân tích gu người mình thích',
        id: 'Analisis tipe orang yang kusuka',
      },
      description: {
        ko: '12문항 4지선다로 보는 이상형 DNA 스펙트럼 6유형. #연애 #이상형 #심리',
        en: '12 multiple-choice questions — 6 ideal-type DNA spectrum types. #love #crush #psychology',
        ja: '全12問4択で見る理想型DNAスペクトラム6タイプ。#恋愛 #理想型 #心理',
        'zh-CN': '12 道四选一，六种理想型 DNA 光谱。#恋爱 #理想型 #心理',
        'zh-TW': '12 題四選一，六種理想型 DNA 光譜。#戀愛 #理想型 #心理',
        vi: '12 câu trắc nghiệm — 6 kiểu quang phổ DNA người trong mơ. #tìnhyêu #gu #tâmlý',
        id: '12 pertanyaan pilihan ganda — 6 spektrum DNA tipe ideal. #asmara #ideal #psikologi',
      },
      thumbnail: 'p3_test_ideal_type_dna_analysis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '이상형', '심리'],
        en: ['Love', 'Crush', 'Psychology'],
        ja: ['恋愛', '理想型', '心理'],
        'zh-CN': ['恋爱', '理想型', '心理'],
        'zh-TW': ['戀愛', '理想型', '心理'],
        vi: ['Tình yêu', 'Gu', 'Tâm lý'],
        id: ['Asmara', 'Ideal', 'Psikologi'],
      },
    };

    return (
      <>
        <Phase3IdealTypeDnaAnalysisTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3IdealTypeDnaAnalysisQuestions}
          results={phase3IdealTypeDnaAnalysisResults}
          questionCount={phase3IdealTypeDnaAnalysisQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-love-weakness-moment') {
    const { phase3LoveWeaknessMomentQuestions, phase3LoveWeaknessMomentResults } = await import('@/lib/phase3LoveWeaknessMomentData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-love-weakness-moment',
      title: {
        ko: '연애할 때 내가 무너지는 순간',
        en: 'The Moment I Break in Dating',
        ja: '恋で私が崩れる瞬間',
        'zh-CN': '恋爱里我崩溃的瞬间',
        'zh-TW': '戀愛裡我崩潰的瞬間',
        vi: 'Khoảnh khắc tôi gục khi yêu',
        id: 'Saat aku runtuh dalam cinta',
      },
      description: {
        ko: '12문항 4지선다로 보는 연애 약점 스펙트럼 6유형. #연애 #심리 #공감',
        en: '12 multiple-choice questions — 6 dating weakness spectrum types. #love #psychology #empathy',
        ja: '全12問4択で見る恋愛の弱点スペクトラム6タイプ。#恋愛 #心理 #共感',
        'zh-CN': '12 道四选一，六种恋爱弱点光谱。#恋爱 #心理 #共鸣',
        'zh-TW': '12 題四選一，六種戀愛弱點光譜。#戀愛 #心理 #共鳴',
        vi: '12 câu trắc nghiệm — 6 kiểu quang phổ điểm yếu khi yêu. #tìnhyêu #tâmlý #đồngcảm',
        id: '12 pertanyaan pilihan ganda — 6 spektrum titik lemah asmara. #cinta #psikologi #empati',
      },
      thumbnail: 'p3_test_love_weakness_moment.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '심리', '공감'],
        en: ['Love', 'Psychology', 'Empathy'],
        ja: ['恋愛', '心理', '共感'],
        'zh-CN': ['恋爱', '心理', '共鸣'],
        'zh-TW': ['戀愛', '心理', '共鳴'],
        vi: ['Tình yêu', 'Tâm lý', 'Đồng cảm'],
        id: ['Cinta', 'Psikologi', 'Empati'],
      },
    };

    return (
      <>
        <Phase3LoveWeaknessMomentTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LoveWeaknessMomentQuestions}
          results={phase3LoveWeaknessMomentResults}
          questionCount={phase3LoveWeaknessMomentQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-solo-escape-possibility') {
    const { phase3SoloEscapePossibilityQuestions, phase3SoloEscapePossibilityResults } = await import('@/lib/phase3SoloEscapePossibilityData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-solo-escape-possibility',
      title: {
        ko: '나의 솔로 탈출 가능성 분석기',
        en: 'My Solo Escape Possibility Analyzer',
        ja: '私のソロ脱出可能性分析',
        'zh-CN': '我的脱单可能性分析',
        'zh-TW': '我的脫單可能性分析',
        vi: 'Phân tích khả năng thoát ế của tôi',
        id: 'Analisis peluang lolos dari jomblo',
      },
      description: {
        ko: '12문항 4지선다로 보는 솔로 탈출 가능성 퍼센트 6유형. #솔로 #연애 #공감',
        en: '12 multiple-choice questions — 6 solo escape possibility types. #single #dating #relatable',
        ja: '全12問4択で見るソロ脱出可能性6タイプ。#ソロ #恋愛 #共感',
        'zh-CN': '12 道四选一，六种脱单可能性。#单身 #恋爱 #共鸣',
        'zh-TW': '12 題四選一，六種脫單可能性。#單身 #戀愛 #共鳴',
        vi: '12 câu — 6 mức khả năng thoát ế. #độc thân #tình yêu #đồng cảm',
        id: '12 pertanyaan — 6 tipe peluang lolos jomblo. #jomblo #asmara #relate',
      },
      thumbnail: 'p3_test_solo_escape_possibility.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['솔로', '연애', '공감'],
        en: ['Single', 'Dating', 'Relatable'],
        ja: ['ソロ', '恋愛', '共感'],
        'zh-CN': ['单身', '恋爱', '共鸣'],
        'zh-TW': ['單身', '戀愛', '共鳴'],
        vi: ['Độc thân', 'Tình yêu', 'Đồng cảm'],
        id: ['Jomblo', 'Asmara', 'Relate'],
      },
    };

    return (
      <>
        <Phase3SoloEscapePossibilityTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SoloEscapePossibilityQuestions}
          results={phase3SoloEscapePossibilityResults}
          questionCount={phase3SoloEscapePossibilityQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-love-prescription') {
    const { phase3LovePrescriptionQuestions, phase3LovePrescriptionResults } = await import('@/lib/phase3LovePrescriptionData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-love-prescription',
      title: {
        ko: '나를 위한 연애 처방전',
        en: 'My Love Prescription',
        ja: '私のための恋愛処方箋',
        'zh-CN': '属于我的恋爱处方',
        'zh-TW': '屬於我的戀愛處方',
        vi: 'Đơn thuốc tình yêu dành cho tôi',
        id: 'Resep cinta untukku',
      },
      description: {
        ko: '12문항 4지선다로 보는 연애 고민 유형별 맞춤 처방전 6가지. #연애 #심리 #자기계발',
        en: '12 questions, 4 choices — 6 tailored love prescriptions by worry type. #love #psychology #growth',
        ja: '12問4択で見る恋愛悩みタイプ別処方箋6種。#恋愛 #心理 #自己成長',
        'zh-CN': '12 道四选一，六种恋爱烦恼对症处方。#恋爱 #心理 #自我成长',
        'zh-TW': '12 題四選一，六種戀愛煩惱對症處方。#戀愛 #心理 #自我成長',
        vi: '12 câu — 6 đơn thuốc theo kiểu lo lắng khi yêu. #tìnhyêu #tâmlý #pháttriển',
        id: '12 pertanyaan — 6 resep cinta sesuai pola. #cinta #psikologi #perkembangan',
      },
      thumbnail: 'p3_test_love_prescription.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '심리', '자기계발'],
        en: ['Love', 'Psychology', 'Growth'],
        ja: ['恋愛', '心理', '自己成長'],
        'zh-CN': ['恋爱', '心理', '自我成长'],
        'zh-TW': ['戀愛', '心理', '自我成長'],
        vi: ['Tình yêu', 'Tâm lý', 'Phát triển bản thân'],
        id: ['Cinta', 'Psikologi', 'Pengembangan diri'],
      },
    };

    return (
      <>
        <Phase3LovePrescriptionTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3LovePrescriptionQuestions}
          results={phase3LovePrescriptionResults}
          questionCount={phase3LovePrescriptionQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-skincare-routine-recommendation') {
    const { phase3SkincareRoutineRecommendationQuestions, phase3SkincareRoutineRecommendationResults } = await import('@/lib/phase3SkincareRoutineRecommendationData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-skincare-routine-recommendation',
      title: {
        ko: '내 피부타입 맞춤 스킨케어 루틴',
        en: 'Custom Skincare Routine for Your Skin Type',
        ja: '肌タイプ別スキンケアルーティン',
        'zh-CN': '根据肤质的定制护肤流程',
        'zh-TW': '依膚質訂製的保養流程',
        vi: 'Lịch skincare theo loại da của bạn',
        id: 'Rutinitas skincare sesuai tipe kulit',
      },
      description: {
        ko: '12문항 4지선다로 보는 피부타입별 맞춤 스킨케어 루틴과 핵심 성분 6유형. #피부 #뷰티',
        en: '12 multiple-choice questions — 6 skin-type routines with key ingredients. #skin #beauty',
        ja: '全12問4択で見る肌タイプ別スキンケアとキー成分6タイプ。#スキンケア #美容',
        'zh-CN': '12 道四选一，六种肤质护肤流程与核心成分。#护肤 #美妆',
        'zh-TW': '12 題四選一，六種膚質保養流程與核心成分。#保養 #美妝',
        vi: '12 câu — 6 lịch skincare và thành phần chính theo loại da. #da #làm đẹp',
        id: '12 pertanyaan — 6 rutinitas dan bahan kunci sesuai tipe kulit. #kulit #kecantikan',
      },
      thumbnail: 'p3_test_skincare_routine_recommendation.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['피부', '뷰티'],
        en: ['Skin', 'Beauty'],
        ja: ['肌', 'ビューティ'],
        'zh-CN': ['护肤', '美妆'],
        'zh-TW': ['保養', '美妝'],
        vi: ['Da', 'Làm đẹp'],
        id: ['Kulit', 'Kecantikan'],
      },
    };

    return (
      <>
        <Phase3SkincareRoutineRecommendationTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SkincareRoutineRecommendationQuestions}
          results={phase3SkincareRoutineRecommendationResults}
          questionCount={phase3SkincareRoutineRecommendationQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-adhd-tendency-checklist') {
    const { phase3AdhdTendencyChecklistQuestions, phase3AdhdTendencyChecklistResults } = await import('@/lib/phase3AdhdTendencyChecklistData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-adhd-tendency-checklist',
      title: {
        ko: '나 혹시 ADHD 성향 있어?',
        en: '나 혹시 ADHD 성향 있어?',
        ja: '나 혹시 ADHD 성향 있어?',
        'zh-CN': '나 혹시 ADHD 성향 있어?',
        'zh-TW': '나 혹시 ADHD 성향 있어?',
        vi: '나 혹시 ADHD 성향 있어?',
        id: '나 혹시 ADHD 성향 있어?',
      },
      description: {
        ko: '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        en: '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        ja: '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        'zh-CN': '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        'zh-TW': '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        vi: '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
        id: '집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해',
      },
      thumbnail: 'p3_test_adhd_tendency_checklist.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['ADHD', '성향', '자기이해'],
        en: ['ADHD', '성향', '자기이해'],
        ja: ['ADHD', '성향', '자기이해'],
        'zh-CN': ['ADHD', '성향', '자기이해'],
        'zh-TW': ['ADHD', '성향', '자기이해'],
        vi: ['ADHD', '성향', '자기이해'],
        id: ['ADHD', '성향', '자기이해'],
      },
    };

    return (
      <>
        <Phase3AdhdTendencyChecklistTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3AdhdTendencyChecklistQuestions}
          results={phase3AdhdTendencyChecklistResults}
          questionCount={phase3AdhdTendencyChecklistQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-reincarnation-job') {
    const { phase3ReincarnationJobQuestions, phase3ReincarnationJobResults } = await import('@/lib/phase3ReincarnationJobData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-reincarnation-job',
      title: {
        ko: '내가 환생한다면 어떤 직업?',
        en: 'If I Were Reborn, What Job Would I Have?',
        ja: '転生したら私はどんな職業？',
        'zh-CN': '如果转世，我会是什么职业？',
        'zh-TW': '如果轉世，我會是什麼職業？',
        vi: 'Nếu đầu thai, tôi sẽ là nghề gì?',
        id: 'Jika bereinkarnasi, pekerjaan apa aku?',
      },
      description: {
        ko: '12문항 2지선다로 보는 환생 직업·시대 6유형. #환생 #직업 #성격',
        en: 'Six reincarnation job types from 12 A/B questions. #Reincarnation #Job #Personality',
        ja: '12問2択で見る転生ジョブ・時代6タイプ。#転生 #職業 #性格',
        'zh-CN': '12 道二选一，六种转世职业与时代。#转世 #职业 #性格',
        'zh-TW': '12 題二選一，六種轉世職業與時代。#轉世 #職業 #性格',
        vi: '12 câu trắc nghiệm, 6 kiểu nghề & thời đại.#Đầu thai #Nghề #Tính cách',
        id: '12 pertanyaan pilihan ganda, 6 tipe pekerjaan & era.#Reinkarnasi #Pekerjaan #Kepribadian',
      },
      thumbnail: 'p3_test_reincarnation_job_finder.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['환생', '직업', '성격'],
        en: ['Reincarnation', 'Job', 'Personality'],
        ja: ['転生', '職業', '性格'],
        'zh-CN': ['转世', '职业', '性格'],
        'zh-TW': ['轉世', '職業', '性格'],
        vi: ['Đầu thai', 'Nghề', 'Tính cách'],
        id: ['Reinkarnasi', 'Pekerjaan', 'Kepribadian'],
      },
    };

    return (
      <>
        <Phase3ReincarnationJobTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3ReincarnationJobQuestions}
          results={phase3ReincarnationJobResults}
          questionCount={phase3ReincarnationJobQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-drama-life-character') {
    const { phase3DramaLifeCharacterQuestions, phase3DramaLifeCharacterResults } = await import('@/lib/phase3DramaLifeCharacterData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-drama-life-character',
      title: {
        ko: '드라마 속 내 인생 캐릭터',
        en: 'My Life as a Drama Character',
        ja: 'ドラマの中の私というキャラクター',
        'zh-CN': '我人生电视剧里的角色',
        'zh-TW': '我人生戲劇裡的角色',
        vi: 'Nhân vật phim trong đời tôi',
        id: 'Karakter drama dalam hidupku',
      },
      description: {
        ko: '12문항 2지선다로 보는 드라마 캐릭터 유형 6가지. #드라마 #캐릭터 #성격 #공감',
        en: '12 A/B questions — which drama character matches your life story? Six types. #drama #character #personality',
        ja: '12問2択で見る人生ドラマのキャラクター6タイプ。#ドラマ #キャラクター #性格 #共感',
        'zh-CN': '12 道二选一，六种人生剧角色类型。#电视剧 #角色 #性格 #共鸣',
        'zh-TW': '12 題二選一，六種人生劇角色類型。#戲劇 #角色 #性格 #共鳴',
        vi: '12 câu trắc nghiệm — 6 kiểu nhân vật phim giống câu chuyện đời bạn. #phim #nhân vật',
        id: '12 pertanyaan — 6 tipe karakter drama seperti kisah hidupmu. #drama #karakter',
      },
      thumbnail: 'p3_test_drama_character_type.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['드라마', '캐릭터', '성격', '공감'],
        en: ['Drama', 'Character', 'Personality', 'Empathy'],
        ja: ['ドラマ', 'キャラクター', '性格', '共感'],
        'zh-CN': ['电视剧', '角色', '性格', '共鸣'],
        'zh-TW': ['戲劇', '角色', '性格', '共鳴'],
        vi: ['Phim', 'Nhân vật', 'Tính cách', 'Đồng cảm'],
        id: ['Drama', 'Karakter', 'Kepribadian', 'Empati'],
      },
    };

    return (
      <>
        <Phase3DramaLifeCharacterTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3DramaLifeCharacterQuestions}
          results={phase3DramaLifeCharacterResults}
          questionCount={phase3DramaLifeCharacterQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-solo-drinking-type') {
    const { phase3SoloDrinkingTypeQuestions, phase3SoloDrinkingTypeResults } = await import('@/lib/phase3SoloDrinkingTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-solo-drinking-type',
      title: {
        ko: '나의 혼술 유형과 술버릇',
        en: 'My Solo Drinking Type & Habits',
        ja: '私のひとり飲みタイプと飲酒習慣',
        'zh-CN': '我的独自饮酒类型与饮酒习惯',
        'zh-TW': '我的獨自飲酒類型與飲酒習慣',
        vi: 'Kiểu uống một mình & thói quen uống của tôi',
        id: 'Tipe Minum Sendiri & Kebiasaan Minum Saya',
      },
      description: {
        ko: '직관적으로 끌리는 이미지를 선택하면 나의 혼술 DNA와 술버릇을 정확하게 분석해 드립니다.',
        en: 'Choose images that intuitively draw you in — we accurately analyze your solo drinking DNA and drinking habits.',
        ja: '直感で惹かれる画像を選ぶと、あなたのひとり飲みDNAと飲酒習慣を正確に分析します。',
        'zh-CN': '选择直觉吸引你的图片，我们将准确分析你的独自饮酒DNA和饮酒习惯。',
        'zh-TW': '選擇直覺吸引你的圖片，我們將準確分析你的獨自飲酒DNA和飲酒習慣。',
        vi: 'Chọn hình ảnh bạn thấy hấp dẫn theo trực giác — phân tích chính xác DNA uống một mình và thói quen uống của bạn.',
        id: 'Pilih gambar yang menarik secara intuitif — kami analisis DNA minum sendiri dan kebiasaan minummu dengan akurat.',
      },
      thumbnail: 'p3_test_solo_drinking_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['혼술', '술버릇', '음주', '안주', '공감'],
        en: ['Solo drinking', 'Drinking habits', 'Alcohol', 'Snacks', 'Empathy'],
        ja: ['ひとり飲み', '飲酒習慣', 'お酒', 'おつまみ', '共感'],
        'zh-CN': ['独自饮酒', '饮酒习惯', '喝酒', '下酒菜', '共鸣'],
        'zh-TW': ['獨自飲酒', '飲酒習慣', '喝酒', '下酒菜', '共鳴'],
        vi: ['Uống một mình', 'Thói quen uống', 'Rượu bia', 'Mồi nhậu', 'Đồng cảm'],
        id: ['Minum sendiri', 'Kebiasaan minum', 'Alkohol', 'Camilan', 'Empati'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3SoloDrinkingTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SoloDrinkingTypeQuestions}
          results={phase3SoloDrinkingTypeResults}
          questionCount={phase3SoloDrinkingTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-insta-feed-persona-analysis') {
    const { phase3InstaFeedPersonaAnalysisQuestions, phase3InstaFeedPersonaAnalysisResults } = await import('@/lib/phase3InstaFeedPersonaAnalysisData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-insta-feed-persona-analysis',
      title: {
        ko: '나의 인스타 피드 성향 분석',
        en: 'My Instagram Feed Persona Analysis',
        ja: '私のインスタフィード傾向分析',
        'zh-CN': '我的Instagram feed倾向分析',
        'zh-TW': '我的Instagram feed傾向分析',
        vi: 'Phân tích xu hướng feed Instagram của tôi',
        id: 'Analisis Persona Feed Instagram Saya',
      },
      description: {
        ko: '직관적으로 끌리는 이미지를 선택하면 나의 인스타그램 큐레이션 방식과 업로드 습관, 소비 패턴을 분석해 나의 인스타 페르소나를 찾아드립니다.',
        en: 'Choose images that intuitively draw you in — we analyze your Instagram curation style, upload habits, and consumption patterns to find your feed persona.',
        ja: '直感で惹かれる画像を選ぶと、Instagramのキュレーション方式・投稿習慣・消費パターンを分析し、あなたのインスタペルソナを見つけます。',
        'zh-CN': '选择直觉吸引你的图片，分析你的Instagram策展方式、发布习惯和消费模式，找出你的Instagram persona。',
        'zh-TW': '選擇直覺吸引你的圖片，分析你的Instagram策展方式、發布習慣和消費模式，找出你的Instagram persona。',
        vi: 'Chọn hình ảnh bạn thấy hấp dẫn theo trực giác — phân tích cách curate, thói quen đăng bài và mô hình tiêu thụ Instagram để tìm persona feed của bạn.',
        id: 'Pilih gambar yang menarik secara intuitif — kami analisis gaya kurasi, kebiasaan upload, dan pola konsumsi Instagram untuk menemukan persona feed Anda.',
      },
      thumbnail: 'p3_test_insta_feed_persona_analysis.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['인스타그램', '소셜미디어', '인플루언서'],
        en: ['Instagram', 'Social media', 'Influencer'],
        ja: ['Instagram', 'ソーシャルメディア', 'インフルエンサー'],
        'zh-CN': ['Instagram', '社交媒体', '网红'],
        'zh-TW': ['Instagram', '社交媒體', '網紅'],
        vi: ['Instagram', 'Mạng xã hội', 'Influencer'],
        id: ['Instagram', 'Media sosial', 'Influencer'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3InstaFeedPersonaAnalysisTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3InstaFeedPersonaAnalysisQuestions}
          results={phase3InstaFeedPersonaAnalysisResults}
          questionCount={phase3InstaFeedPersonaAnalysisQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-solo-dining-type') {
    const { phase3SoloDiningTypeQuestions, phase3SoloDiningTypeResults } = await import('@/lib/phase3SoloDiningTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-solo-dining-type',
      title: {
        ko: '나의 혼밥 유형',
        en: 'My Solo Dining Type',
        ja: '私のひとりご飯タイプ',
        'zh-CN': '我的独自用餐类型',
        'zh-TW': '我的獨自用餐類型',
        vi: 'Kiểu ăn một mình của tôi',
        id: 'Tipe Makan Sendiri Saya',
      },
      description: {
        ko: '직관적으로 끌리는 이미지를 선택하면 나의 혼밥 유형과 숨겨진 성향을 분석해 드립니다.',
        en: 'Choose images that intuitively draw you in — we analyze your solo dining type and hidden personality traits.',
        ja: '直感で惹かれる画像を選ぶと、あなたのひとりご飯タイプと隠れた性格傾向を分析します。',
        'zh-CN': '选择直觉吸引你的图片，分析你的独自用餐类型和隐藏性格倾向。',
        'zh-TW': '選擇直覺吸引你的圖片，分析你的獨自用餐類型和隱藏性格傾向。',
        vi: 'Chọn hình ảnh bạn thấy hấp dẫn theo trực giác — phân tích kiểu ăn một mình và tính cách ẩn của bạn.',
        id: 'Pilih gambar yang menarik secara intuitif — kami analisis tipe makan sendiri dan sifat tersembunyi Anda.',
      },
      thumbnail: 'p3_test_solo_dining_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['혼밥', '혼자', '식사', '성격', '공감'],
        en: ['Solo dining', 'Alone', 'Eating', 'Personality', 'Empathy'],
        ja: ['ひとりご飯', '一人', '食事', '性格', '共感'],
        'zh-CN': ['独自用餐', '一个人', '吃饭', '性格', '共鸣'],
        'zh-TW': ['獨自用餐', '一個人', '吃飯', '性格', '共鳴'],
        vi: ['Ăn một mình', 'Một mình', 'Ăn uống', 'Tính cách', 'Đồng cảm'],
        id: ['Makan sendiri', 'Sendirian', 'Makan', 'Kepribadian', 'Empati'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3SoloDiningTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SoloDiningTypeQuestions}
          results={phase3SoloDiningTypeResults}
          questionCount={phase3SoloDiningTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-exercise-persistence-type') {
    const { phase3ExercisePersistenceTypeQuestions, phase3ExercisePersistenceTypeResults } = await import('@/lib/phase3ExercisePersistenceTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-exercise-persistence-type',
      title: {
        ko: '나의 운동 지속력 유형',
        en: 'My Exercise Persistence Type',
        ja: '私の運動継続力タイプ',
        'zh-CN': '我的运动持续力类型',
        'zh-TW': '我的運動持續力類型',
        vi: 'Kiểu duy trì tập luyện của tôi',
        id: 'Tipe Konsistensi Olahraga Saya',
      },
      description: {
        ko: '12가지 질문으로 나의 운동 지속을 방해하는 진짜 장애물 유형을 찾고 맞춤 극복 전략을 드립니다.',
        en: 'Find what really blocks your exercise consistency in 12 questions and get personalized strategies to overcome it.',
        ja: '12問で運動継続を妨げる本当の障害タイプを見つけ、今すぐ使える克服戦略をお届けします。',
        'zh-CN': '用12道题找出真正阻碍你坚持运动的障碍类型，并提供量身定制的克服策略。',
        'zh-TW': '用12道題找出真正阻礙你堅持運動的障礙類型，並提供量身定制的克服策略。',
        vi: 'Tìm loại trở ngại thật sự cản trở việc duy trì tập luyện qua 12 câu hỏi và nhận chiến lược vượt qua phù hợp.',
        id: 'Temukan hambatan sebenarnya yang menghalangi konsistensi olahraga lewat 12 pertanyaan dan dapatkan strategi mengatasinya.',
      },
      thumbnail: 'p3_test_exercise_persistence_type.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['운동', '헬스', '작심삼일', '지속력', '갓생'],
        en: ['Exercise', 'Gym', 'Quit after 3 days', 'Persistence', 'Self-improvement'],
        ja: ['運動', 'ジム', '三日坊主', '継続力', '自己改善'],
        'zh-CN': ['运动', '健身', '三天打鱼', '持续力', '自律生活'],
        'zh-TW': ['運動', '健身', '三天打魚', '持續力', '自律生活'],
        vi: ['Tập luyện', 'Gym', 'Bỏ cuộc sớm', 'Kiên trì', 'Cải thiện bản thân'],
        id: ['Olahraga', 'Gym', 'Males 3 hari', 'Konsistensi', 'Self-improvement'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3ExercisePersistenceTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3ExercisePersistenceTypeQuestions}
          results={phase3ExercisePersistenceTypeResults}
          questionCount={phase3ExercisePersistenceTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-chronotype-morning-evening') {
    const { phase3ChronotypeMorningEveningQuestions, phase3ChronotypeMorningEveningResults } = await import('@/lib/phase3ChronotypeMorningEveningData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-chronotype-morning-evening',
      title: {
        ko: '나의 아침형 vs 저녁형 인간 정밀 분석',
        en: 'My Morning vs Evening Person — Precision Chronotype Analysis',
        ja: '私の朝型 vs 夜型人間 精密分析',
        'zh-CN': '我的晨型 vs 夜型人类精密分析',
        'zh-TW': '我的晨型 vs 夜型人類精密分析',
        vi: 'Phân tích chính xác kiểu người Sáng vs Tối của tôi',
        id: 'Analisis Presisi Tipe Pagi vs Malam Saya',
      },
      description: {
        ko: '12문항으로 나의 크로노타입(생체 리듬)을 정밀 분석합니다.',
        en: 'Analyze your chronotype (body clock) precisely in 12 questions.',
        ja: '12問であなたのクロノタイプ（生体リズム）を精密分析します。',
        'zh-CN': '用12道题精密分析你的昼夜节律（生物钟）。',
        'zh-TW': '用12道題精密分析你的晝夜節律（生物鐘）。',
        vi: 'Phân tích chính xác chronotype (nhịp sinh học) qua 12 câu hỏi.',
        id: 'Analisis presisi kronotipe (ritme tubuh) lewat 12 pertanyaan.',
      },
      thumbnail: 'p3_test_chronotype_morning_evening.webp',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['크로노타입', '아침형', '저녁형', '생체리듬', '수면'],
        en: ['Chronotype', 'Morning type', 'Evening type', 'Body rhythm', 'Sleep'],
        ja: ['クロノタイプ', '朝型', '夜型', '生体リズム', '睡眠'],
        'zh-CN': ['昼夜节律', '晨型', '夜型', '生物节律', '睡眠'],
        'zh-TW': ['晝夜節律', '晨型', '夜型', '生物節律', '睡眠'],
        vi: ['Chronotype', 'Kiểu sáng', 'Kiểu tối', 'Nhịp sinh học', 'Giấc ngủ'],
        id: ['Kronotipe', 'Tipe pagi', 'Tipe malam', 'Ritme tubuh', 'Tidur'],
      },
    };

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase3ChronotypeMorningEveningTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3ChronotypeMorningEveningQuestions}
          results={phase3ChronotypeMorningEveningResults}
          questionCount={phase3ChronotypeMorningEveningQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase3-dopamine-type-analysis') {
    const { phase3DopamineTypeQuestions, phase3DopamineTypeResults } = await import('@/lib/phase3DopamineTypeData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-dopamine-type-analysis',
      title: {
        ko: '날 미치게 하는! 도파민 유형',
        en: 'What Drives Your Dopamine?',
        ja: '私を夢中にさせる！ドーパミンタイプ',
        'zh-CN': '让我上瘾的！多巴胺类型',
        'zh-TW': '讓我上癮的！多巴胺類型',
        vi: 'Thứ khiến tôi phấn khích! Kiểu dopamine',
        id: 'Yang bikin aku ketagihan! Tipe dopamin',
      },
      description: {
        ko: '12문항 4지선다로 보는 도파민 충전 유형 6가지. #도파민 #성격 #공감',
        en: '12 multiple-choice questions — six dopamine recharge types. #dopamine #personality #relatable',
        ja: '12問4択で見るドーパミン充電タイプ6種。#ドーパミン #性格 #共感',
        'zh-CN': '12 道四选一，六种多巴胺充电类型。#多巴胺 #性格 #共鸣',
        'zh-TW': '12 題四選一，六種多巴胺充電類型。#多巴胺 #性格 #共鳴',
        vi: '12 câu trắc nghiệm — 6 kiểu nạp dopamine. #dopamine #tính cách #đồng cảm',
        id: '12 pertanyaan pilihan ganda — 6 tipe dopamin. #dopamin #kepribadian #relate',
      },
      thumbnail: 'p3_test_dopamine_type_analysis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['도파민', '성격', '공감'],
        en: ['Dopamine', 'Personality', 'Relatable'],
        ja: ['ドーパミン', '性格', '共感'],
        'zh-CN': ['多巴胺', '性格', '共鸣'],
        'zh-TW': ['多巴胺', '性格', '共鳴'],
        vi: ['Dopamine', 'Tính cách', 'Đồng cảm'],
        id: ['Dopamin', 'Kepribadian', 'Relate'],
      },
    };

    return (
      <>
        <Phase3DopamineTypeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3DopamineTypeQuestions}
          results={phase3DopamineTypeResults}
          questionCount={phase3DopamineTypeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-villain-dna-test') {
    const { phase3VillainDnaQuestions, phase3VillainDnaResults } = await import('@/lib/phase3VillainDnaData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-villain-dna-test',
      title: {
        ko: '내 안의 흑염룡! 빌런 재질 테스트',
        en: 'Black Flame Within! Villain DNA Test',
        ja: '内なる黒炎！悪役DNAテスト',
        'zh-CN': '内心的黑炎！反派DNA测试',
        'zh-TW': '內心的黑炎！反派DNA測驗',
        vi: 'Ngọn lửa đen trong tôi! Test DNA phản diện',
        id: 'Api Hitam di Dalam! Tes DNA Villain',
      },
      description: {
        ko: '12문항 2지선다로 보는 빌런 DNA 유형 6가지. #빌런 #성격 #웹툰 #드라마 #공감',
        en: '12 A/B questions — six villain DNA types. #villain #personality #webtoon #drama #relatable',
        ja: '12問2択で見る悪役DNAタイプ6種。#悪役 #性格 #ウェブトゥーン #ドラマ #共感',
        'zh-CN': '12 道二选一，六种反派 DNA 类型。#反派 #性格 #网漫 #电视剧 #共鸣',
        'zh-TW': '12 題二選一，六種反派 DNA 類型。#反派 #性格 #網漫 #戲劇 #共鳴',
        vi: '12 câu trắc nghiệm — 6 kiểu DNA phản diện. #phản diện #tính cách #webtoon #drama #đồng cảm',
        id: '12 pertanyaan pilihan ganda — 6 tipe DNA villain. #villain #kepribadian #webtoon #drama #relate',
      },
      thumbnail: 'p3_test_villain_dna_test.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['빌런', '성격', '웹툰', '드라마', '공감'],
        en: ['Villain', 'Personality', 'Webtoon', 'Drama', 'Relatable'],
        ja: ['悪役', '性格', 'ウェブトゥーン', 'ドラマ', '共感'],
        'zh-CN': ['反派', '性格', '网漫', '电视剧', '共鸣'],
        'zh-TW': ['反派', '性格', '網漫', '戲劇', '共鳴'],
        vi: ['Phản diện', 'Tính cách', 'Webtoon', 'Drama', 'Đồng cảm'],
        id: ['Villain', 'Kepribadian', 'Webtoon', 'Drama', 'Relate'],
      },
    };

    return (
      <>
        <Phase3VillainDnaTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3VillainDnaQuestions}
          results={phase3VillainDnaResults}
          questionCount={phase3VillainDnaQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-some-vs-relationship-timing') {
    const { phase3SomeVsRelationshipTimingQuestions, phase3SomeVsRelationshipTimingResults } = await import('@/lib/phase3SomeVsRelationshipTimingData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-some-vs-relationship-timing',
      title: {
        ko: '썸 vs 연애 결정 타이밍 진단',
        en: 'Some vs Dating: When to Make It Official',
        ja: 'サマ恋・告白タイミング診断',
        'zh-CN': '暧昧 vs 恋爱：告白时机诊断',
        'zh-TW': '曖昧 vs 戀愛：告白時機診斷',
        vi: 'Mập mờ vs yêu: thời điểm tỏ tình',
        id: 'Some vs pacaran: waktu tepat menyatakan cinta',
      },
      description: {
        ko: '12문항 4지선다로 관계 신호와 고백·정리 타이밍 처방까지. #연애 #심리 #관계',
        en: '12 multiple-choice questions — relationship signals plus timing advice. #love #psychology #relationships',
        ja: '12問4択で関係のサインと告白・整理のタイミング。#恋愛 #心理 #関係',
        'zh-CN': '12 道四选一：关系信号与告白/整理时机建议。#恋爱 #心理 #关系',
        'zh-TW': '12 題四選一：關係訊號與告白／整理時機建議。#戀愛 #心理 #關係',
        vi: '12 câu 4 lựa chọn — tín hiệu và lời khuyên thời điểm. #yêu #tâm_lý #quan_hệ',
        id: '12 soal 4 pilihan — sinyal hubungan & saran waktu. #cinta #psikologi #hubungan',
      },
      thumbnail: 'p3_test_some_vs_relationship_timing.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['연애', '심리', '관계'],
        en: ['Love', 'Psychology', 'Relationships'],
        ja: ['恋愛', '心理', '関係'],
        'zh-CN': ['恋爱', '心理', '关系'],
        'zh-TW': ['戀愛', '心理', '關係'],
        vi: ['Tình yêu', 'Tâm lý', 'Quan hệ'],
        id: ['Cinta', 'Psikologi', 'Hubungan'],
      },
    };

    return (
      <>
        <Phase3SomeVsRelationshipTimingTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3SomeVsRelationshipTimingQuestions}
          results={phase3SomeVsRelationshipTimingResults}
          questionCount={phase3SomeVsRelationshipTimingQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-hidden-sub-character') {
    const { phase3HiddenSubCharacterQuestions, phase3HiddenSubCharacterResults } = await import('@/lib/phase3HiddenSubCharacterData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-hidden-sub-character',
      title: {
        ko: '본캐 말고! 나의 부캐 찾기',
        en: 'Not Your Main Self — Find My Hidden Persona',
        ja: '本キャラじゃない！私の裏キャラ診断',
        'zh-CN': '不是本我！找出我的隐藏人设',
        'zh-TW': '不是本我！找出我的隱藏人設',
        vi: 'Không phải bản chính — Tìm persona ẩn của tôi',
        id: 'Bukan diri utama — Temukan persona tersembunyi',
      },
      description: {
        ko: '12문항 2지선다로 보는 부캐 유형 6가지. #부캐 #성격 #재미 #자기폭로 #MZ',
        en: '12 A/B questions — six hidden persona types. #persona #fun #MZ',
        ja: '12問2択で見る裏キャラ6タイプ。#裏キャラ #性格 #エンタメ',
        'zh-CN': '12 道二选一，六种隐藏人设类型。#人设 #性格 #趣味',
        'zh-TW': '12 題二選一，六種隱藏人設類型。#人設 #性格 #趣味',
        vi: '12 câu — 6 kiểu persona ẩn. #persona #tính cách #vui',
        id: '12 pertanyaan — 6 tipe persona tersembunyi. #persona #kepribadian',
      },
      thumbnail: 'p3_test_hidden_sub_character.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['부캐', '성격', '재미', '자기폭로', 'MZ'],
        en: ['Persona', 'Personality', 'Fun', 'Relatable', 'MZ'],
        ja: ['裏キャラ', '性格', 'エンタメ', '共感', 'MZ'],
        'zh-CN': ['人设', '性格', '趣味', '共鸣', 'MZ'],
        'zh-TW': ['人設', '性格', '趣味', '共鳴', 'MZ'],
        vi: ['Persona', 'Tính cách', 'Vui', 'Đồng cảm', 'MZ'],
        id: ['Persona', 'Kepribadian', 'Seru', 'Relate', 'MZ'],
      },
    };

    return (
      <>
        <Phase3HiddenSubCharacterTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3HiddenSubCharacterQuestions}
          results={phase3HiddenSubCharacterResults}
          questionCount={phase3HiddenSubCharacterQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-couple-chemistry-analysis') {
    const { phase3CoupleChemistryIndividualResults, phase3CoupleChemistryQuestions } = await import('@/lib/phase3CoupleChemistryAnalysisData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-couple-chemistry-analysis',
      title: {
        ko: '우리 커플 궁합 케미 분석',
        en: 'Our Couple Chemistry Analysis',
        ja: '私たちのカップル相性ケミ分析',
        'zh-CN': '我们的情侣合拍化学反应分析',
        'zh-TW': '我們的情侶合拍化學反應分析',
        vi: 'Phân tích chemistry cặp đôi của chúng mình',
        id: 'Analisis chemistry pasangan kita',
      },
      description: {
        ko: '각자 12문항으로 연애 스타일 6유형, 두 유형 조합으로 커플 케미 21가지. #커플 #궁합 #케미 #연애 #찰떡',
        en: '12 questions each — 6 dating styles, 21 couple chemistry combos. #Couple #Compatibility #Chemistry',
        ja: 'それぞれ12問で恋愛スタイル6タイプ、組み合わせでカップルケミ21パターン。#カップル #相性',
        'zh-CN': '各答 12 题得恋爱风格 6 型，组合看 21 种情侣化学反应。#情侣 #合拍',
        'zh-TW': '各答 12 題得戀愛風格 6 型，組合看 21 種情侶化學反應。#情侶 #合拍',
        vi: 'Mỗi người 12 câu — 6 kiểu yêu, 21 tổ hợp chemistry. #Cặp đôi #Hợp gu',
        id: 'Masing-masing 12 pertanyaan — 6 gaya pacaran, 21 kombinasi chemistry. #Pasangan',
      },
      thumbnail: 'p3_test_couple_chemistry_analysis.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['커플', '궁합', '케미', '연애', '찰떡'],
        en: ['Couple', 'Compatibility', 'Chemistry', 'Love', 'Match'],
        ja: ['カップル', '相性', 'ケミ', '恋愛', '相性抜群'],
        'zh-CN': ['情侣', '合拍', '化学反应', '恋爱', '绝配'],
        'zh-TW': ['情侶', '合拍', '化學反應', '戀愛', '絕配'],
        vi: ['Cặp đôi', 'Hợp gu', 'Chemistry', 'Tình yêu', 'Hợp cạ'],
        id: ['Pasangan', 'Cocok', 'Chemistry', 'Cinta', 'Cocok banget'],
      },
    };

    return (
      <>
        <Phase3CoupleChemistryAnalysisTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3CoupleChemistryQuestions}
          results={phase3CoupleChemistryIndividualResults}
          questionCount={phase3CoupleChemistryQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase3-personality-strength-weakness') {
    const { phase3PersonalityStrengthWeaknessQuestions, phase3PersonalityStrengthWeaknessResults } = await import('@/lib/phase3PersonalityStrengthWeaknessData');
    const test = (await getTestBySlug(slug)) || {
      slug: 'phase3-personality-strength-weakness',
      title: {
        ko: '내 성격의 장점과 단점 팩폭',
        en: 'Brutally Honest: Your Personality Strengths & Weaknesses',
        ja: '性格の長所と短所をド正論で',
        'zh-CN': '性格优缺点直球测评',
        'zh-TW': '性格優缺點直球測評',
        vi: 'Thật thà: Điểm mạnh & yếu tính cách',
        id: 'Jujur: Kelebihan & Kekurangan Kepribadianmu',
      },
      description: {
        ko: '장점·단점을 팩트로 말하는 성격 스펙트럼 6유형. 12문항 4지선다.',
        en: 'Six personality spectrum types with blunt pros and cons — 12 multiple-choice questions.',
        ja: '長所・短所をファクトで言い切る性格スペクトラム6タイプ。12問4択。',
        'zh-CN': '六种性格光谱，优缺点直说。12 道四选一。',
        'zh-TW': '六種性格光譜，優缺點直說。12 題四選一。',
        vi: '6 kiểu phổ tính cách nói thẳng ưu/nhược — 12 câu trắc nghiệm.',
        id: '6 spektrum kepribadian dengan pro/kontra blak-blakan — 12 soal pilihan ganda.',
      },
      thumbnail: 'p3_test_personality_strength_weakness.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '성격'],
        en: ['Psychology', 'Personality'],
        ja: ['心理', '性格'],
        'zh-CN': ['心理', '性格'],
        'zh-TW': ['心理', '性格'],
        vi: ['Tâm lý', 'Tính cách'],
        id: ['Psikologi', 'Kepribadian'],
      },
    };

    return (
      <>
        <Phase3PersonalityStrengthWeaknessTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={
            typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description
          }
          questions={phase3PersonalityStrengthWeaknessQuestions}
          results={phase3PersonalityStrengthWeaknessResults}
          questionCount={phase3PersonalityStrengthWeaknessQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 인싸? 아싸? 내 사회성 레벨 테스트
  if (slug === 'phase2_social_level_test') {
    const { phase2SocialLevelQuestions, phase2SocialLevelResults } = await import('@/lib/phase2_social_level_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_social_level_test',
      title: {
        ko: '인싸? 아싸? 내 사회성 레벨 테스트',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '당신의 소셜 배터리는 몇 퍼센트인가요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_043_social_level.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '성격'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2SocialLevelTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2SocialLevelQuestions}
          results={phase2SocialLevelResults}
          questionCount={phase2SocialLevelQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  if (slug === 'phase2_lie_detector_test') {
    const { phase2LieDetectorQuestions, phase2LieDetectorResults } = await import('@/lib/phase2_lie_detector_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_lie_detector_test',
      title: {
        ko: '재미로 보는 거짓말 탐지기 (당신의 사기꾼 레벨은?)',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '지금 당신의 말, 진실입니까?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_108_lie_detector.jpg',
      type: 'psychology',
      category: 'fun',
      play_count: 0,
      tags: {
        ko: ['심리', '재미'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2LieDetectorTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2LieDetectorQuestions}
          results={phase2LieDetectorResults}
          questionCount={phase2LieDetectorQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 집순이/집돌이 만렙 테스트
  if (slug === 'phase2_homebody_level_test') {
    const { phase2HomebodyLevelQuestions, phase2HomebodyLevelResults } = await import('@/lib/phase2_homebody_level_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_homebody_level_test',
      title: {
        ko: '집순이/집돌이 만렙 테스트',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '"이불 밖은 위험해!" 이 말을 얼마나 공감하시나요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_064_homebody_level.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['성격'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2HomebodyLevelTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2HomebodyLevelQuestions}
          results={phase2HomebodyLevelResults}
          questionCount={phase2HomebodyLevelQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 침대와 한 몸? 당신의 '게으름' 지수 테스트
  if (slug === 'phase2_laziness_level_test') {
    const { phase2LazinessLevelQuestions, phase2LazinessLevelResults } = await import('@/lib/phase2_laziness_level_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_laziness_level_test',
      title: {
        ko: '침대와 한 몸? 당신의 \'게으름\' 지수 테스트',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '주말에 침대 밖으로 나오는 데 걸리는 시간은?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_062_laziness_level.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    // 디버깅: badge_type 값 확인
    console.log('🔍 Phase2LazinessLevelTest PAGE:', {
      slug,
      badge_type: test.badge_type,
      badge_type_type: typeof test.badge_type,
      badgeType_prop: test.badge_type || null,
      isLatestTest,
      test_has_badge_type: 'badge_type' in test,
      test_keys: Object.keys(test).filter(k => k.includes('badge') || k.includes('Badge'))
    });

    return (
      <>
        <Phase2LazinessLevelTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2LazinessLevelQuestions}
          results={phase2LazinessLevelResults}
          questionCount={phase2LazinessLevelQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // '신의 눈' 절대색감 챌린지
  if (slug === 'phase2_color_survival_test') {
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_color_survival_test',
      title: {
        ko: "'신의 눈' 절대색감 챌린지 (타임 어택)",
        en: "'God's Eye' Absolute Color Challenge (Time Attack)",
        ja: "「神の目」絶対色感チャレンジ（タイムアタック）",
        "zh-CN": "“神之眼”绝对色感挑战（限时挑战）",
        "zh-TW": "“神之眼”絕對色感挑戰（限時挑戰）",
        vi: "Thử thách Màu sắc Tuyệt đối 'Mắt Thần' (Time Attack)",
        id: "Tantangan Warna Mutlak 'Mata Dewa' (Time Attack)"
      },
      description: {
        ko: "당신의 눈은 얼마나 오랫동안 버틸 수 있나요? 단 10초! 타임 어택 생존 게임.",
        en: "How long can your eyes survive? Only 10 seconds! Time Attack Survival Game.",
        ja: "あなたの目はどれくらい持ちこたえられますか？たった10秒！タイムアタックサバイバルゲーム。",
        "zh-CN": "你的眼睛能坚持多久？只有10秒！限时生存游戏。",
        "zh-TW": "你的眼睛能堅持多久？只有10秒！限時生存遊戲。",
        vi: "Mắt bạn có thể chịu đựng được bao lâu? Chỉ 10 giây! Trò chơi sinh tồn Time Attack.",
        id: "Seberapa lama mata Anda bisa bertahan? Hanya 10 detik! Game Survival Time Attack."
      },
      thumbnail: 'phase2_test_158_color_survival.jpg',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ["챌린지", "게임", "색감", "순발력"],
        en: ["Challenge", "Game", "Color", "Reflexes"],
        ja: ["チャレンジ", "ゲーム", "色感", "瞬発力"],
        "zh-CN": ["挑战", "游戏", "色感", "反应力"],
        "zh-TW": ["挑戰", "遊戲", "色感", "反應力"],
        vi: ["Thử thách", "Trò chơi", "Màu sắc", "Phản xạ"],
        id: ["Tantangan", "Game", "Warna", "Refleks"]
      }
    };

    const title = typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title;
    const description = typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description;

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    // 디버깅: NEW 뱃지 표시 확인
    console.log('🔍 Phase2ColorSurvivalTest PAGE:', {
      slug,
      isLatestTest,
      latestTestSlugs: latestTestSlugs.slice(0, 5), // 상위 5개만
      isInLatest15: latestTestSlugs.includes(slug)
    });

    return (
      <Phase2ColorSurvivalTestClient
        locale={locale}
        slug={test.slug}
        title={title}
        description={description}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  if (slug === 'phase2_reflex_test') {
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_reflex_test',
      title: {
        ko: "0.1초의 승부! 반응속도 테스트",
        en: "0.1 Second Showdown! Reaction Speed Test",
        ja: "0.1秒の勝負！反応速度テスト",
        "zh-CN": "0.1秒的胜负！反应速度测试",
        "zh-TW": "0.1秒的勝負！反應速度測試",
        vi: "Quyết đấu 0.1 giây! Kiểm tra tốc độ phản ứng",
        id: "Pertarungan 0,1 Detik! Tes Kecepatan Reaksi"
      },
      description: {
        ko: "당신의 뇌와 손가락은 연결되어 있나요? 반응속도 측정 시작 ⚡",
        en: "Is your brain connected to your fingers? Start Reaction Test ⚡",
        ja: "あなたの脳と指はつながっていますか？反応速度測定開始 ⚡",
        "zh-CN": "你的大脑和手指连接好了吗？开始反应速度测量 ⚡",
        "zh-TW": "你的大腦和手指連接好了嗎？開始反應速度測量 ⚡",
        "vi": "Bộ não và ngón tay của bạn có được kết nối không? Bắt đầu đo tốc độ phản ứng ⚡",
        "id": "Apakah otak dan jari Anda terhubung? Mulai Tes Kecepatan Reaksi ⚡"
      },
      thumbnail: 'phase2_test_159_reflex_test.jpg',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ["챌린지", "게임", "반응속도", "순발력"],
        en: ["Challenge", "Game", "Reaction Speed", "Reflexes"],
        ja: ["チャレンジ", "ゲーム", "反応速度", "瞬発力"],
        "zh-CN": ["挑战", "游戏", "反应速度", "爆发力"],
        "zh-TW": ["挑戰", "遊戲", "反應速度", "爆發力"],
        vi: ["Thử thách", "Trò chơi", "Tốc độ phản ứng", "Phản xạ"],
        id: ["Tantangan", "Game", "Kecepatan Reaksi", "Refleks"]
      }
    };

    const title = typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title;
    const description = typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description;

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase2ReflexTestClient
        locale={locale}
        slug={test.slug}
        title={title}
        description={description}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  // 내 귀 나이는 몇 살? (가청 주파수 테스트)
  if (slug === 'phase2_hearing_age_test') {
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_hearing_age_test',
      title: {
        ko: "내 귀 나이는 몇 살? (가청 주파수 테스트)",
        en: "How Old Are My Ears? (Audible Frequency Test)",
        ja: "私の耳年齢は何歳？（可聴周波数テスト）",
        "zh-CN": "我的耳朵几岁？（可听频率测试）",
        "zh-TW": "我的耳朵幾歲？（可聽頻率測試）",
        vi: "Tai tôi bao nhiêu tuổi? (Kiểm tra tần số nghe được)",
        id: "Berapa Umur Telinga Saya? (Tes Frekuensi Audibel)"
      },
      description: {
        ko: "당신은 '모기 벨소리'를 들을 수 있나요? 청력 나이를 측정해보세요.",
        en: "Can you hear the 'mosquito ringtone'? Measure your hearing age.",
        ja: "「蚊のベルの音」が聞こえますか？聴力年齢を測定してみてください。",
        "zh-CN": "你能听到「蚊子铃声」吗？测量你的听力年龄。",
        "zh-TW": "你能聽到「蚊子鈴聲」嗎？測量你的聽力年齡。",
        vi: "Bạn có nghe thấy 'chuông muỗi' không? Đo tuổi thính giác của bạn.",
        id: "Bisakah Anda mendengar 'ringtone nyamuk'? Ukur usia pendengaran Anda."
      },
      thumbnail: 'phase2_test_160_hearing_age.jpg',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ["챌린지", "게임"],
        en: ["Challenge", "Game"],
        ja: ["チャレンジ", "ゲーム"],
        "zh-CN": ["挑战", "游戏"],
        "zh-TW": ["挑戰", "遊戲"],
        vi: ["Thử thách", "Trò chơi"],
        id: ["Tantangan", "Game"]
      }
    };

    const title = typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title;
    const description = typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description;

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase2HearingAgeTestClient
        locale={locale}
        slug={test.slug}
        title={title}
        description={description}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  // 내 시력은 몽골인? (초간편 시력 측정) 테스트
  if (slug === 'phase2_eyesight_test') {
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_eyesight_test',
      title: {
        ko: "내 시력은 몽골인? (초간편 시력 측정)",
        en: "Am I Mongolian? (Quick Vision Test)",
        ja: "私の視力はモンゴル人？(簡単視力測定)",
        "zh-CN": "我的视力是蒙古人吗？(快速视力测试)",
        "zh-TW": "我的視力是蒙古人嗎？(快速視力測試)",
        vi: "Thị lực của tôi có phải là người Mông Cổ? (Kiểm tra thị lực nhanh)",
        id: "Apakah Penglihatan Saya Orang Mongolia? (Tes Penglihatan Cepat)"
      },
      description: {
        ko: "지금 이 글씨가 흐릿하게 보이나요? 하루 종일 스마트폰과 모니터에 시달리는 당신의 눈. 혹시 시력이 뚝뚝 떨어지고 있진 않을까요? 병원에 가지 않아도 1분 만에 확인하는 내 눈의 상태!",
        en: "Is this text blurry right now? Your eyes, exhausted by smartphones and monitors all day. Is your vision dropping rapidly? Check your eye condition in just 1 minute without visiting a hospital!",
        ja: "今、この文字がぼやけて見えますか？一日中スマートフォンとモニターに苦しめられているあなたの目。視力が急激に低下していませんか？病院に行かなくても1分で確認できる目の状態！",
        "zh-CN": "现在这些字看起来模糊吗？你整日面对手机和显示器，眼睛疲惫。视力是否在急剧下降？无需去医院，1分钟即可检查你的眼睛状况！",
        "zh-TW": "現在這些字看起來模糊嗎？你整日面對手機和顯示器，眼睛疲憊。視力是否在急劇下降？無需去醫院，1分鐘即可檢查你的眼睛狀況！",
        vi: "Bây giờ văn bản này có mờ không? Đôi mắt của bạn, kiệt sức vì điện thoại thông minh và màn hình cả ngày. Thị lực của bạn có đang giảm mạnh không? Kiểm tra tình trạng mắt chỉ trong 1 phút mà không cần đến bệnh viện!",
        id: "Apakah teks ini terlihat buram sekarang? Mata Anda, kelelahan karena smartphone dan monitor sepanjang hari. Apakah penglihatan Anda turun drastis? Periksa kondisi mata Anda hanya dalam 1 menit tanpa mengunjungi rumah sakit!"
      },
      thumbnail: 'phase2_test_161_eyesight_test.jpg',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ["챌린지", "게임"],
        en: ["Challenge", "Game"],
        ja: ["チャレンジ", "ゲーム"],
        "zh-CN": ["挑战", "游戏"],
        "zh-TW": ["挑戰", "遊戲"],
        vi: ["Thử thách", "Trò chơi"],
        id: ["Tantangan", "Game"]
      }
    };

    const title = typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title;
    const description = typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description;

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase2EyesightTestClient
        locale={locale}
        slug={test.slug}
        title={title}
        description={description}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  // 내 세상의 색깔은? (색맹/색약 정밀 테스트) 테스트
  if (slug === 'phase2_color_blind_test') {
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_color_blind_test',
      title: {
        ko: "내 세상의 색깔은? (색맹/색약 정밀 테스트)",
        en: "What Color Is My World? (Color Blindness Test)",
        ja: "私の世界の色は？(色盲・色覚異常精密テスト)",
        "zh-CN": "我的世界是什么颜色？(色盲/色弱精密测试)",
        "zh-TW": "我的世界是什麼顏色？(色盲/色弱精密測試)",
        vi: "Màu sắc thế giới của tôi là gì? (Kiểm tra mù màu/chứng rối loạn sắc giác)",
        id: "Warna Dunia Saya Apa? (Tes Buta Warna/Defisiensi Warna)"
      },
      description: {
        ko: "당신이 보는 빨간색이, 남들에게도 빨간색일까요? 우리나라 남성의 약 5.9%, 여성의 약 0.4%가 색각 이상(색맹/색약)을 가지고 있다고 합니다. 특히 경미한 색약의 경우, 성인이 될 때까지 모르고 지내는 경우도 많습니다. 혹시 남들과 다른 색의 세상을 보고 있진 않나요? 지금 바로 확인해 보세요.",
        en: "Is the red you see the same red others see? About 5.9% of men and 0.4% of women in our country have color vision deficiency (color blindness/color weakness). Especially for mild color weakness, many people live without knowing until adulthood. Are you seeing a world of different colors than others? Check now.",
        ja: "あなたが見る赤は、他の人にとっても赤ですか？我が国の男性の約5.9％、女性の約0.4％が色覚異常（色盲・色弱）を持っていると言われています。特に軽度の色弱の場合、成人になるまで気づかないことも多いです。もしかして他の人とは違う色の世界を見ていませんか？今すぐ確認してください。",
        "zh-CN": "你看到的红色，对别人来说也是红色吗？我国约5.9%的男性和0.4%的女性有色觉异常（色盲/色弱）。特别是轻度色弱，很多人直到成年都不知道。你是否看到了与别人不同颜色的世界？现在就检查一下吧。",
        "zh-TW": "你看到的紅色，對別人來說也是紅色嗎？我國約5.9%的男性和0.4%的女性有色覺異常（色盲/色弱）。特別是輕度色弱，很多人直到成年都不知道。你是否看到了與別人不同顏色的世界？現在就檢查一下吧。",
        vi: "Màu đỏ bạn nhìn thấy có giống màu đỏ mà người khác nhìn thấy không? Khoảng 5.9% nam giới và 0.4% phụ nữ ở nước ta có khiếm khuyết thị giác màu (mù màu/yếu màu). Đặc biệt đối với trường hợp yếu màu nhẹ, nhiều người sống mà không biết cho đến khi trưởng thành. Bạn có đang nhìn thấy một thế giới màu sắc khác với người khác không? Hãy kiểm tra ngay bây giờ.",
        id: "Apakah merah yang Anda lihat sama dengan merah yang dilihat orang lain? Sekitar 5.9% pria dan 0.4% wanita di negara kita memiliki defisiensi penglihatan warna (buta warna/kelemahan warna). Terutama untuk kelemahan warna ringan, banyak orang hidup tanpa menyadarinya sampai dewasa. Apakah Anda melihat dunia warna yang berbeda dari orang lain? Periksa sekarang."
      },
      thumbnail: 'phase2_test_162_color_blindness.jpg',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ["챌린지", "게임"],
        en: ["Challenge", "Game"],
        ja: ["チャレンジ", "ゲーム"],
        "zh-CN": ["挑战", "游戏"],
        "zh-TW": ["挑戰", "遊戲"],
        vi: ["Thử thách", "Trò chơi"],
        id: ["Tantangan", "Game"]
      }
    };

    const title = typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title;
    const description = typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description;

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase2ColorBlindTestClient
        locale={locale}
        slug={test.slug}
        title={title}
        description={description}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  // 도전! 나의 기억력 레벨 (순간 기억력 테스트)
  if (slug === 'phase2_memory_level_test') {
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_memory_level_test',
      title: {
        ko: '도전! 나의 기억력 레벨 (순간 기억력 테스트)',
        en: 'Challenge! My Memory Level (Instant Memory Test)',
        ja: '挑戦！私の記憶力レベル（瞬間記憶力テスト）',
        'zh-CN': '挑战！我的记忆力水平（瞬间记忆力测试）',
        'zh-TW': '挑戰！我的記憶力水準（瞬間記憶力測試）',
        vi: 'Thử thách! Mức độ Trí nhớ của Tôi (Kiểm tra Trí nhớ Tức thì)',
        id: 'Tantangan! Tingkat Ingatan Saya (Tes Ingatan Instan)'
      },
      description: {
        ko: '방금 본 번호, 기억나세요? 냉장고 문을 열었다가 \'내가 뭐 꺼내려고 했지?\' 인증번호 6자리를 보고 입력창에 쓰려는데 까먹음. 혹시 당신의 뇌세포가 점점 사라지고 있진 않나요? 인간의 평균 단기 기억 용량은 7자리(±2)라고 합니다. 당신의 뇌는 금붕어일까요, 아니면 슈퍼 컴퓨터일까요?',
        en: 'Do you remember the number you just saw? Opening the fridge and \'what was I trying to get?\' Seeing a 6-digit verification code but forgetting it when typing. Are your brain cells gradually disappearing? The average human short-term memory capacity is said to be 7 digits (±2). Is your brain a goldfish or a supercomputer?',
        ja: '今見た番号、覚えていますか？冷蔵庫の扉を開けて「何を取り出そうとしたっけ？」6桁の認証番号を見て入力画面に書こうとしたら忘れた。もしかしてあなたの脳細胞は徐々に消えていませんか？人間の平均短期記憶容量は7桁（±2）と言われています。あなたの脳は金魚でしょうか、それともスーパーコンピューターでしょうか？',
        'zh-CN': '还记得刚才看到的号码吗？打开冰箱后"我要拿什么来着？"看到6位验证码，要输入时却忘了。你的脑细胞是否在逐渐消失？人类平均短期记忆容量据说是7位（±2）。你的大脑是金鱼还是超级计算机？',
        'zh-TW': '還記得剛才看到的號碼嗎？打開冰箱後"我要拿什麼來著？"看到6位驗證碼，要輸入時卻忘了。你的腦細胞是否在逐漸消失？人類平均短期記憶容量據說是7位（±2）。你的大腦是金魚還是超級計算機？',
        vi: 'Bạn có nhớ số vừa thấy không? Mở tủ lạnh và "mình định lấy gì nhỉ?" Thấy mã xác nhận 6 chữ số nhưng quên khi gõ. Phải chăng tế bào não của bạn đang dần biến mất? Dung lượng trí nhớ ngắn hạn trung bình của con người được cho là 7 chữ số (±2). Não của bạn là cá vàng hay siêu máy tính?',
        id: 'Apakah Anda ingat nomor yang baru saja dilihat? Membuka kulkas dan "apa yang saya coba ambil?" Melihat kode verifikasi 6 digit tetapi lupa saat mengetik. Apakah sel-sel otak Anda secara bertahap menghilang? Kapasitas memori jangka pendek rata-rata manusia dikatakan 7 digit (±2). Apakah otak Anda seekor ikan mas atau superkomputer?'
      },
      thumbnail: 'phase2_test_164_memory_level.jpg',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ['챌린지', '게임', '두뇌', 'IQ'],
        en: ['Challenge', 'Game', 'Brain', 'IQ'],
        ja: ['チャレンジ', 'ゲーム', '脳', 'IQ'],
        'zh-CN': ['挑战', '游戏', '大脑', 'IQ'],
        'zh-TW': ['挑戰', '遊戲', '大腦', 'IQ'],
        vi: ['Thử thách', 'Trò chơi', 'Não', 'IQ'],
        id: ['Tantangan', 'Game', 'Otak', 'IQ']
      }
    };

    const title = typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title;
    const description = typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description;

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase2MemoryLevelTestClient
        locale={locale}
        slug={test.slug}
        title={title}
        description={description}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  // 1to25: 빛의 속도 (순발력 & 동체시력 측정)
  if (slug === 'phase2_speed_click_test') {
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_speed_click_test',
      title: {
        ko: '1to25: 빛의 속도 (순발력 & 동체시력 측정)',
        en: '1to25: Speed of Light (Reflex & Dynamic Vision Test)',
        ja: '1to25: 光の速度（反射神経＆動体視力測定）',
        'zh-CN': '1to25: 光速（反应速度与动态视力测试）',
        'zh-TW': '1to25: 光速（反應速度與動態視力測試）',
        vi: '1to25: Tốc độ ánh sáng (Kiểm tra Phản xạ & Thị lực động)',
        id: '1to25: Kecepatan Cahaya (Tes Refleks & Penglihatan Dinamis)'
      },
      description: {
        ko: '당신의 눈과 손은 얼마나 빠른가요? 눈으로는 다음 숫자를 찾고, 손으로는 현재 숫자를 누르는 \'멀티태스킹\'의 극한! 1부터 25까지, 단 하나의 숫자도 놓치지 말고 순서대로 빠르게 지워나가세요. 상위 1%는 10초의 벽을 깬다고 합니다. 과연 당신의 기록은?',
        en: 'How fast are your eyes and hands? The ultimate \'multitasking\' of finding the next number with your eyes while pressing the current number with your hands! From 1 to 25, don\'t miss a single number and quickly clear them in order. The top 1% break the 10-second barrier. What will your record be?',
        ja: 'あなたの目と手はどれくらい速いですか？目で次の数字を見つけながら、手で現在の数字を押す「マルチタスク」の極限！1から25まで、1つの数字も見逃さず順番に素早く消していってください。上位1%は10秒の壁を破ると言われています。果たしてあなたの記録は？',
        'zh-CN': '你的眼睛和手有多快？用眼睛找下一个数字，同时用手按当前数字的极限「多任务」！从1到25，不要漏掉任何一个数字，按顺序快速清除。前1%的人能突破10秒大关。你的记录会是多少？',
        'zh-TW': '你的眼睛和手有多快？用眼睛找下一個數字，同時用手按當前數字的極限「多任務」！從1到25，不要漏掉任何一個數字，按順序快速清除。前1%的人能突破10秒大關。你的記錄會是多少？',
        vi: 'Mắt và tay của bạn nhanh đến mức nào? Cực hạn của \'đa nhiệm\' khi tìm số tiếp theo bằng mắt trong khi nhấn số hiện tại bằng tay! Từ 1 đến 25, đừng bỏ sót bất kỳ số nào và nhanh chóng xóa chúng theo thứ tự. Top 1% phá vỡ rào cản 10 giây. Kỷ lục của bạn sẽ là bao nhiêu?',
        id: 'Seberapa cepat mata dan tangan Anda? Batas \'multitasking\' menemukan angka berikutnya dengan mata sambil menekan angka saat ini dengan tangan! Dari 1 hingga 25, jangan lewatkan satu angka pun dan cepat hapus secara berurutan. Top 1% memecahkan penghalang 10 detik. Berapa rekor Anda?'
      },
      thumbnail: 'phase2_test_165_speed_click.jpg',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ['챌린지', '게임', '순발력', '동체시력'],
        en: ['Challenge', 'Game', 'Reflex', 'Dynamic Vision'],
        ja: ['チャレンジ', 'ゲーム', '反射神経', '動体視力'],
        'zh-CN': ['挑战', '游戏', '反应速度', '动态视力'],
        'zh-TW': ['挑戰', '遊戲', '反應速度', '動態視力'],
        vi: ['Thử thách', 'Trò chơi', 'Phản xạ', 'Thị lực động'],
        id: ['Tantangan', 'Game', 'Refleks', 'Penglihatan Dinamis']
      }
    };

    const title = typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title;
    const description = typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description;

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase2SpeedClickTestClient
        locale={locale}
        slug={test.slug}
        title={title}
        description={description}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  // 글로벌 타자왕 (5라운드 실력 검증)
  if (slug === 'phase2_global_typing_test') {
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_global_typing_test',
      title: {
        ko: '글로벌 타자왕 (5라운드 실력 검증)',
        en: 'Global Typing Champion (5-Round Skill Test)',
        ja: 'グローバルタイピング王 (5ラウンド実力検証)',
        'zh-CN': '全球打字王（5轮实力验证）',
        'zh-TW': '全球打字王（5輪實力驗證）',
        vi: 'Vua Đánh Máy Toàn Cầu (Kiểm tra 5 Vòng)',
        id: 'Raja Mengetik Global (Tes Keterampilan 5 Ronde)'
      },
      description: {
        ko: '당신의 타자 실력, 거품인가요 진짜인가요? 한 문장만 빠르게 치는 건 누구나 할 수 있습니다. 하지만 긴 호흡으로 꾸준히 빠르기는 어렵죠. 인사말부터 속담, 명언, 문학 작품까지. 총 5단계의 문장을 모두 통과해야 합니다. 당신의 진짜 \'평균 속도\'는?',
        en: 'Your typing skills - real or fake? Anyone can type one sentence quickly. But maintaining speed over long passages is hard. From greetings to proverbs, quotes, and literature. You must pass all 5 rounds. What\'s your real \'average speed\' that even locals recognize?',
        ja: 'あなたのタイピング技術、本物ですか？一つの文を素早く打つことは誰でもできます。しかし、長い文章を一定の速度で打ち続けるのは難しいです。挨拶からことわざ、名言、文学作品まで。全5段階の文をすべて通過する必要があります。現地人も認めるあなたの本当の「平均速度」は？',
        'zh-CN': '你的打字能力，是真材实料还是虚有其表？快速打一句话谁都能做到。但保持长段落的高速却很难。从问候语到谚语、名言、文学作品。你必须通过全部5轮。连当地人都认可的你真正的「平均速度」是多少？',
        'zh-TW': '你的打字能力，是真材實料還是虛有其表？快速打一句話誰都能做到。但保持長段落的高速卻很難。從問候語到諺語、名言、文學作品。你必須通過全部5輪。連當地人都認可的你真正的「平均速度」是多少？',
        vi: 'Kỹ năng đánh máy của bạn - thật hay giả? Ai cũng có thể đánh nhanh một câu. Nhưng duy trì tốc độ trong đoạn văn dài thì khó. Từ lời chào đến tục ngữ, trích dẫn và văn học. Bạn phải vượt qua cả 5 vòng. \'Tốc độ trung bình\' thực sự của bạn mà ngay cả người địa phương cũng công nhận là bao nhiêu?',
        id: 'Keterampilan mengetik Anda - nyata atau palsu? Siapa pun bisa mengetik satu kalimat dengan cepat. Tetapi mempertahankan kecepatan dalam paragraf panjang itu sulit. Dari sapaan hingga peribahasa, kutipan, dan sastra. Anda harus melewati semua 5 putaran. Berapa \'kecepatan rata-rata\' Anda yang benar-benar bahkan diakui oleh penduduk lokal?'
      },
      thumbnail: 'phase2_test_163_global_typing_final.jpg',
      type: 'game',
      category: 'capability',
      play_count: 0,
      tags: {
        ko: ['챌린지', '게임'],
        en: ['Challenge', 'Game'],
        ja: ['チャレンジ', 'ゲーム'],
        'zh-CN': ['挑战', '游戏'],
        'zh-TW': ['挑戰', '遊戲'],
        vi: ['Thử thách', 'Trò chơi'],
        id: ['Tantangan', 'Game']
      }
    };

    const title = typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title;
    const description = typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description;

    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <Phase2GlobalTypingTestClient
        locale={locale}
        slug={test.slug}
        title={title}
        description={description}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        isLatestTest={isLatestTest}
        badgeType={test.badge_type || null}
      />
    );
  }

  // 내가 환생한다면 어떤 동물일까? 테스트
  if (slug === 'phase2_reincarnation_animal_test') {
    const { phase2ReincarnationAnimalQuestions, phase2ReincarnationAnimalResults } = await import('@/lib/phase2_reincarnation_animal_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_reincarnation_animal_test',
      title: {
        ko: '내가 환생한다면 어떤 동물일까?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '현생에 지친 당신, 다음 생은 어떤 모습일까요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_040_reincarnation_animal.jpg',
      type: 'psychology',
      category: 'healing',
      play_count: 0,
      tags: {
        ko: ['심리', '힐링'],
        en: ['Psychology', 'Healing'],
        ja: ['心理', 'ヒーリング'],
        'zh-CN': ['心理', '治愈'],
        'zh-TW': ['心理', '療癒'],
        vi: ['Tâm lý', 'Chữa lành'],
        id: ['Psikologi', 'Penyembuhan']
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2ReincarnationAnimalTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2ReincarnationAnimalQuestions}
          results={phase2ReincarnationAnimalResults}
          questionCount={phase2ReincarnationAnimalQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 내가 흑화하면? 숨겨진 본성 테스트
  if (slug === 'phase2_dark_side_test') {
    const { phase2DarkSideQuestions, phase2DarkSideResults } = await import('@/lib/phase2_dark_side_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_dark_side_test',
      title: {
        ko: '내가 흑화하면? 숨겨진 본성 테스트',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '누구나 마음속에 악마 하나쯤은 키우고 있다.',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_144_dark_side.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '성격', '재미'],
        en: ['Psychology', 'Personality', 'Fun'],
        ja: ['心理', '性格', '面白い'],
        'zh-CN': ['心理', '性格', '有趣'],
        'zh-TW': ['心理', '性格', '有趣'],
        vi: ['Tâm lý', 'Tính cách', 'Vui vẻ'],
        id: ['Psikologi', 'Kepribadian', 'Menyenangkan']
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2DarkSideTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2DarkSideQuestions}
          results={phase2DarkSideResults}
          questionCount={phase2DarkSideQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 너 T야? 로봇 감성 vs 오열 감성 판독기 테스트
  if (slug === 'phase2_are_you_T_test') {
    const { phase2AreYouTQuestions, phase2AreYouTResults } = await import('@/lib/phase2_are_you_T_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_are_you_T_test',
      title: {
        ko: '너 T야? 로봇 감성 vs 오열 감성 판독기',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '혹시... 너 T야?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_042_are_you_T.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리'],
        en: ['Psychology'],
        ja: ['心理'],
        'zh-CN': ['心理'],
        'zh-TW': ['心理'],
        vi: ['Tâm lý'],
        id: ['Psikologi']
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2AreYouTTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2AreYouTQuestions}
          results={phase2AreYouTResults}
          questionCount={phase2AreYouTQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 뇌섹남녀 도전! 세계 수도 퀴즈 테스트
  if (slug === 'phase2_capital_quiz_test') {
    const { phase2CapitalQuizQuestions, phase2CapitalQuizResults } = await import('@/lib/phase2_capital_quiz_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_capital_quiz_test',
      title: {
        ko: '뇌섹남녀 도전! 세계 수도 퀴즈',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '미국의 수도는 뉴욕? 호주는 시드니?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_082_capital_quiz.jpg',
      type: 'quiz',
      category: 'knowledge',
      play_count: 0,
      tags: {
        ko: ['재미'],
        en: [''],
        ja: [''],
        'zh-CN': [''],
        'zh-TW': [''],
        vi: [''],
        id: ['']
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2CapitalQuizTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2CapitalQuizQuestions}
          results={phase2CapitalQuizResults}
          questionCount={phase2CapitalQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 도전! 세계 IT/테크 상식 퀴즈 테스트
  if (slug === 'phase2_it_tech_quiz_test') {
    const { phase2ItTechQuizQuestions, phase2ItTechQuizResults } = await import('@/lib/phase2_it_tech_quiz_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_it_tech_quiz_test',
      title: {
        ko: '도전! 세계 IT/테크 상식 퀴즈',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '당신은 \'디지털 네이티브\'인가요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_106_it_tech_quiz.jpg',
      type: 'quiz',
      category: 'knowledge',
      play_count: 0,
      tags: {
        ko: ['지식', '상식'],
        en: [''],
        ja: [''],
        'zh-CN': [''],
        'zh-TW': [''],
        vi: [''],
        id: ['']
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2ItTechQuizTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2ItTechQuizQuestions}
          results={phase2ItTechQuizResults}
          questionCount={phase2ItTechQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 도전! 세계 문학 퀴즈 테스트
  if (slug === 'phase2_literature_quiz_test') {
    const { phase2LiteratureQuizQuestions, phase2LiteratureQuizResults } = await import('@/lib/phase2_literature_quiz_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_literature_quiz_test',
      title: {
        ko: '도전! 세계 문학 퀴즈 (당신의 교양 점수는?)',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '책장에 꽂혀있는 그 책, 읽어보셨나요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_102_literature_quiz.jpg',
      type: 'quiz',
      category: 'knowledge',
      play_count: 0,
      tags: {
        ko: ['지식', '상식'],
        en: [''],
        ja: [''],
        'zh-CN': [''],
        'zh-TW': [''],
        vi: [''],
        id: ['']
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2LiteratureQuizTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2LiteratureQuizQuestions}
          results={phase2LiteratureQuizResults}
          questionCount={phase2LiteratureQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 도전! 세계 발명품 퀴즈 테스트
  if (slug === 'phase2_invention_quiz_test') {
    const { phase2InventionQuizQuestions, phase2InventionQuizResults } = await import('@/lib/phase2_invention_quiz_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_invention_quiz_test',
      title: {
        ko: '도전! 세계 발명품 퀴즈 (누가 만들었을까?)',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '전구를 발명한 사람은 에디슨?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_103_invention_quiz.jpg',
      type: 'quiz',
      category: 'knowledge',
      play_count: 0,
      tags: {
        ko: ['지식'],
        en: [''],
        ja: [''],
        'zh-CN': [''],
        'zh-TW': [''],
        vi: [''],
        id: ['']
      }
    };

    return (
      <>
        <Phase2InventionQuizTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2InventionQuizQuestions}
          results={phase2InventionQuizResults}
          questionCount={phase2InventionQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_impulse_buying_test') {
    const { phase2ImpulseBuyingQuestions, phase2ImpulseBuyingResults } = await import('@/lib/phase2_impulse_buying_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_impulse_buying_test',
      title: {
        ko: "나의 '충동구매' 지수 (지름신 강림)",
        en: 'My "Impulse Buying" Index (Shopping Demon Descends)',
        ja: '私の「衝動買い」指数（買い物依存降臨）',
        'zh-CN': '我的「冲动购买」指数（购物狂降临）',
        'zh-TW': '我的「衝動購買」指數（購物狂降臨）',
        vi: 'Chỉ số "Mua sắm bốc đồng" của tôi (Quỷ mua sắm giáng lâm)',
        id: 'Indeks "Pembelian Impulsif" Saya (Iblis Belanja Turun)'
      },
      description: {
        ko: '어? 예쁘다. 일단 사!',
        en: 'Huh? It\'s pretty. Just buy it!',
        ja: 'あれ？きれいだ。とりあえず買う！',
        'zh-CN': '咦？好漂亮。先买了再说！',
        'zh-TW': '咦？好漂亮。先買了再說！',
        vi: 'Ồ? Đẹp quá. Cứ mua đã!',
        id: 'Hah? Cantik. Beli dulu!'
      },
      thumbnail: 'phase2_test_063_impulse_buying.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리'],
        en: ['Psychology'],
        ja: ['心理'],
        'zh-CN': ['心理'],
        'zh-TW': ['心理'],
        vi: ['Tâm lý'],
        id: ['Psikologi']
      }
    };

    return (
      <>
        <Phase2ImpulseBuyingTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2ImpulseBuyingQuestions}
          results={phase2ImpulseBuyingResults}
          questionCount={phase2ImpulseBuyingQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 도전! 세계사 퀴즈 (고대/중세편) 테스트
  if (slug === 'phase2_world_history_modern_quiz_test') {
    const { phase2WorldHistoryQuizQuestions, phase2WorldHistoryQuizResults } = await import('@/lib/phase2_world_history_quiz_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_world_history_modern_quiz_test',
      title: {
        ko: '도전! 세계사 퀴즈 (근대/현대편)',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '지금의 세상을 만든 사건들을 기억하시나요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_091_modern_history.jpg',
      type: 'quiz',
      category: 'knowledge',
      play_count: 0,
      tags: {
        ko: ['지식', '상식'],
        en: [''],
        ja: [''],
        'zh-CN': [''],
        'zh-TW': [''],
        vi: [''],
        id: ['']
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2WorldHistoryQuizTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2WorldHistoryQuizQuestions}
          results={phase2WorldHistoryQuizResults}
          questionCount={phase2WorldHistoryQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 떡상각? 내 유튜브 채널 컨셉 테스트
  if (slug === 'phase2_youtube_channel_test') {
    const { phase2YoutubeChannelQuestions, phase2YoutubeChannelResults } = await import('@/lib/phase2_youtube_channel_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_youtube_channel_test',
      title: {
        ko: '떡상각? 내 유튜브 채널 컨셉',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '내가 만약 유튜브를 시작한다면?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_053_youtube_channel.jpg',
      type: 'fun',
      category: 'self-understanding',
      play_count: 0,
      tags: {
        ko: ['재미', '자기이해'],
        en: ['', ''],
        ja: ['', ''],
        'zh-CN': ['', ''],
        'zh-TW': ['', ''],
        vi: ['', ''],
        id: ['', '']
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2YoutubeChannelTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2YoutubeChannelQuestions}
          results={phase2YoutubeChannelResults}
          questionCount={phase2YoutubeChannelQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 아직 모르는 나의 숨겨진 재능 찾기 테스트
  if (slug === 'phase2_hidden_talent_test') {
    const { phase2HiddenTalentQuestions, phase2HiddenTalentResults } = await import('@/lib/phase2_hidden_talent_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_hidden_talent_test',
      title: {
        ko: '아직 모르는 나의 숨겨진 재능 찾기',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '당신은 아직 자신의 100%를 쓰지 않았습니다.',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_055_hidden_talent.jpg',
      type: 'aptitude',
      category: 'self-understanding',
      play_count: 0,
      tags: {
        ko: ['적성'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <Phase2HiddenTalentTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2HiddenTalentQuestions}
          results={phase2HiddenTalentResults}
          questionCount={phase2HiddenTalentQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_birth_gem_flower_test') {
    const { phase2BirthGemFlowerQuestions, phase2BirthGemFlowerResults } = await import('@/lib/phase2_birth_gem_flower_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_birth_gem_flower_test',
      title: {
        ko: "나의 탄생석/탄생화 찾기",
        en: "Find My Birth Gem & Flower",
        ja: "私の誕生石/誕生花を見つける",
        'zh-CN': "寻找我的诞生石/诞生花",
        'zh-TW': "尋找我的誕生石/誕生花",
        vi: "Tìm Đá Quý & Hoa Sinh Nhật Của Tôi",
        id: "Temukan Permata & Bunga Kelahiran Saya"
      },
      description: {
        ko: '단순히 생일로만 정해진 탄생석은 재미없죠?',
        en: "Birthstones determined only by birthday are boring, right?",
        ja: "単に誕生日だけで決まる誕生石はつまらないですよね？",
        'zh-CN': "仅仅由生日决定的诞生石很无聊，对吧？",
        'zh-TW': "僅僅由生日決定的誕生石很無聊，對吧？",
        vi: "Đá quý sinh nhật chỉ được xác định bởi ngày sinh thật nhàm chán, phải không?",
        id: "Permata kelahiran yang hanya ditentukan oleh hari ulang tahun membosankan, kan?"
      },
      thumbnail: 'phase2_test_034_birth_gem_flower.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리'],
        en: ['Psychology'],
        ja: ['心理'],
        'zh-CN': ['心理'],
        'zh-TW': ['心理'],
        vi: ['Tâm lý'],
        id: ['Psikologi']
      }
    };

    return (
      <>
        <Phase2BirthGemFlowerTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2BirthGemFlowerQuestions}
          results={phase2BirthGemFlowerResults}
          questionCount={phase2BirthGemFlowerQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_core_emotion_test') {
    const { phase2CoreEmotionQuestions, phase2CoreEmotionResults } = await import('@/lib/phase2_core_emotion_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_core_emotion_test',
      title: {
        ko: "나의 '핵심 감정'은 무엇일까?",
        en: "What is My 'Core Emotion'?",
        ja: "私の「核心感情」は何だろう？",
        'zh-CN': "我的「核心情绪」是什么？",
        'zh-TW': "我的「核心情緒」是什麼？",
        vi: "Cảm Xúc Cốt Lõi Của Tôi Là Gì?",
        id: "Apa 'Emosi Inti' Saya?"
      },
      description: {
        ko: '지금 당신의 마음을 조종하는 건 누구일까요?',
        en: "Who is controlling your mind right now?",
        ja: "今あなたの心を操っているのは誰ですか？",
        'zh-CN': "现在是谁在控制你的心？",
        'zh-TW': "現在是誰在控制你的心？",
        vi: "Ai đang điều khiển tâm trí bạn ngay bây giờ?",
        id: "Siapa yang mengendalikan pikiran Anda saat ini?"
      },
      thumbnail: 'phase2_test_146_core_emotion.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '자아탐색'],
        en: ['Psychology', 'Self-Exploration'],
        ja: ['心理', '自己探求'],
        'zh-CN': ['心理', '自我探索'],
        'zh-TW': ['心理', '自我探索'],
        vi: ['Tâm lý', 'Khám phá bản thân'],
        id: ['Psikologi', 'Eksplorasi Diri']
      }
    };

    return (
      <>
        <Phase2CoreEmotionTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2CoreEmotionQuestions}
          results={phase2CoreEmotionResults}
          questionCount={phase2CoreEmotionQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_resilience_test') {
    const { phase2ResilienceQuestions, phase2ResilienceResults } = await import('@/lib/phase2_resilience_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_resilience_test',
      title: {
        ko: "나의 '회복탄력성' 지수 (멘탈 강도 진단)",
        en: "My 'Resilience' Index (Mental Strength Diagnosis)",
        ja: "私の「回復力」指数（メンタル強度診断）",
        'zh-CN': "我的「恢复力」指数（心理强度诊断）",
        'zh-TW': "我的「恢復力」指數（心理強度診斷）",
        vi: "Chỉ Số 'Khả Năng Phục Hồi' Của Tôi (Chẩn Đoán Sức Mạnh Tinh Thần)",
        id: "Indeks 'Ketahanan' Saya (Diagnosis Kekuatan Mental)"
      },
      description: {
        ko: '당신의 마음은 시련 앞에서 얼마나 단단한가요?',
        en: "How strong is your heart in the face of trials?",
        ja: "あなたの心は試練の前でどれほど強固ですか？",
        'zh-CN': "在考验面前，你的心有多坚强？",
        'zh-TW': "在考驗面前，你的心有多堅強？",
        vi: "Trái tim của bạn mạnh mẽ đến mức nào trước những thử thách?",
        id: "Seberapa kuat hati Anda di hadapan cobaan?"
      },
      thumbnail: 'phase2_test_152_resilience.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리'],
        en: ['Psychology'],
        ja: ['心理'],
        'zh-CN': ['心理'],
        'zh-TW': ['心理'],
        vi: ['Tâm lý'],
        id: ['Psikologi']
      }
    };

    return (
      <>
        <Phase2ResilienceTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2ResilienceQuestions}
          results={phase2ResilienceResults}
          questionCount={phase2ResilienceQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_dream_car_test') {
    const { phase2DreamCarQuestions, phase2DreamCarResults } = await import('@/lib/phase2_dream_car_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_dream_car_test',
      title: {
        ko: "내 드림카는? 성향별 자동차 추천",
        en: "What's My Dream Car? Car Recommendation by Personality",
        ja: "私のドリームカーは？性格別自動車おすすめ",
        'zh-CN': "我的梦想车是什么？按性格推荐汽车",
        'zh-TW': "我的夢想車是什麼？按性格推薦汽車",
        vi: "Xe mơ ước của tôi là gì? Đề xuất xe theo tính cách",
        id: "Apa Mobil Impian Saya? Rekomendasi Mobil Berdasarkan Kepribadian"
      },
      description: {
        ko: '차는 단순한 이동 수단이 아닙니다.',
        en: 'A car is not just a means of transportation.',
        ja: '車は単なる移動手段ではありません。',
        'zh-CN': '汽车不仅仅是交通工具。',
        'zh-TW': '汽車不僅僅是交通工具。',
        vi: 'Xe hơi không chỉ là phương tiện di chuyển.',
        id: 'Mobil bukan hanya sarana transportasi.'
      },
      thumbnail: 'phase2_test_037_dream_car.jpg',
      type: 'fun',
      category: 'lifestyle',
      play_count: 0,
      tags: {
        ko: ['재미'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <Phase2DreamCarTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2DreamCarQuestions}
          results={phase2DreamCarResults}
          questionCount={phase2DreamCarQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_body_signal_test') {
    const { phase2BodySignalQuestions, phase2BodySignalResults } = await import('@/lib/phase2_body_signal_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_body_signal_test',
      title: {
        ko: "내 몸이 보내는 SOS 신호! 나에게 필요한 영양제는?",
        en: "My Body's SOS Signal! What Supplements Do I Need?",
        ja: "私の体が送るSOSシグナル！私に必要なサプリメントは？",
        'zh-CN': "我身体发出的SOS信号！我需要什么营养补充剂？",
        'zh-TW': "我身體發出的SOS信號！我需要什麼營養補充劑？",
        vi: "Tín Hiệu SOS từ Cơ Thể Tôi! Tôi Cần Thực Phẩm Chức Năng Gì?",
        id: "Sinyal SOS Tubuh Saya! Suplemen Apa yang Saya Butuhkan?"
      },
      description: {
        ko: '자도 자도 피곤하고, 눈은 침침?',
        en: 'Still tired after sleeping, and eyes are blurry?',
        ja: '寝ても寝ても疲れて、目はぼやけてる？',
        'zh-CN': '睡再多也累，眼睛模糊？',
        'zh-TW': '睡再多也累，眼睛模糊？',
        vi: 'Ngủ mãi vẫn mệt, và mắt mờ?',
        id: 'Masih lelah setelah tidur, dan mata kabur?'
      },
      thumbnail: 'phase2_test_032_body_signal.jpg',
      type: 'knowledge',
      category: 'health',
      play_count: 0,
      tags: {
        ko: ['지식', '상식'],
        en: ['Knowledge', 'General Knowledge'],
        ja: ['知識', '常識'],
        'zh-CN': ['知识', '常识'],
        'zh-TW': ['知識', '常識'],
        vi: ['Kiến thức', 'Kiến thức chung'],
        id: ['Pengetahuan', 'Pengetahuan Umum']
      }
    };

    return (
      <>
        <Phase2BodySignalTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2BodySignalQuestions}
          results={phase2BodySignalResults}
          questionCount={phase2BodySignalQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_greek_god_test') {
    const { phase2GreekGodQuestions, phase2GreekGodResults } = await import('@/lib/phase2_greek_god_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_greek_god_test',
      title: {
        ko: "내 성격과 닮은 '신화 속 신' 찾기",
        en: "Find the 'Mythological God' Who Resembles My Personality",
        ja: "私の性格に似た「神話の神」を見つける",
        "zh-CN": "找到与我性格相似的'神话中的神'",
        "zh-TW": "找到與我性格相似的'神話中的神'",
        vi: "Tìm 'Vị Thần Trong Thần Thoại' Giống Tính Cách Của Tôi",
        id: "Temukan 'Dewa Mitologi' yang Mirip dengan Kepribadian Saya"
      },
      description: {
        ko: "나는 올림푸스의 지배자일까요?",
        en: "Am I the ruler of Olympus?",
        ja: "私はオリンポスの支配者でしょうか？",
        "zh-CN": "我是奥林匹斯的统治者吗？",
        "zh-TW": "我是奧林匹斯的統治者嗎？",
        vi: "Tôi có phải là người cai trị Olympus không?",
        id: "Apakah saya penguasa Olympus?"
      },
      thumbnail: 'phase2_test_039_greek_god.jpg',
      type: 'personality',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '성격'],
        en: ['Psychology', 'Personality'],
        ja: ['心理', '性格'],
        "zh-CN": ['心理', '性格'],
        "zh-TW": ['心理', '性格'],
        vi: ['Tâm lý', 'Tính cách'],
        id: ['Psikologi', 'Kepribadian']
      }
    };

    return (
      <>
        <Phase2GreekGodTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2GreekGodQuestions}
          results={phase2GreekGodResults}
          questionCount={phase2GreekGodQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_tea_therapy_test') {
    const { phase2TeaTherapyQuestions, phase2TeaTherapyResults } = await import('@/lib/phase2_tea_therapy_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_tea_therapy_test',
      title: {
        ko: "내 성격에 맞는 '힐링 티(Tea)' 찾기",
        en: "Find the 'Healing Tea(Tea)' That Suits My Personality",
        ja: "私の性格に合う「癒しのティー（Tea）」を見つける",
        "zh-CN": "找到适合我性格的'治愈茶'",
        "zh-TW": "找到適合我性格的'治癒茶'",
        vi: "Tìm 'Trà Chữa Lành' Phù Hợp Với Tính Cách Của Tôi",
        id: "Temukan 'Teh Penyembuhan' yang Cocok dengan Kepribadian Saya"
      },
      description: {
        ko: "복잡한 하루, 당신에게 필요한 쉼표는?",
        en: "A complex day, what pause do you need?",
        ja: "複雑な一日、あなたに必要な休止符は？",
        "zh-CN": "复杂的一天，你需要什么停顿？",
        "zh-TW": "複雜的一天，你需要什麼停頓？",
        vi: "Một ngày phức tạp, bạn cần khoảng dừng nào?",
        id: "Hari yang kompleks, jeda apa yang Anda butuhkan?"
      },
      thumbnail: 'phase2_test_036_tea_therapy.jpg',
      type: 'healing',
      category: 'lifestyle',
      play_count: 0,
      tags: {
        ko: ['힐링'],
        en: ['Healing'],
        ja: ['癒し'],
        "zh-CN": ['治愈'],
        "zh-TW": ['治愈'],
        vi: ['Chữa lành'],
        id: ['Penyembuhan']
      }
    };

    return (
      <>
        <Phase2TeaTherapyTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2TeaTherapyQuestions}
          results={phase2TeaTherapyResults}
          questionCount={phase2TeaTherapyQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_stress_care_test') {
    const { phase2StressCareQuestions, phase2StressCareResults } = await import('@/lib/phase2_stress_care_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_stress_care_test',
      title: {
        ko: "내 스트레스 원인 & 맞춤 처방",
        en: "My Stress Cause & Custom Prescription",
        ja: "私のストレス原因＆カスタム処方箋",
        "zh-CN": "我的压力原因和定制处方",
        "zh-TW": "我的壓力原因和定制處方",
        vi: "Nguyên Nhân Căng Thẳng & Đơn Thuốc Tùy Chỉnh Của Tôi",
        id: "Penyebab Stres & Resep Kustom Saya"
      },
      description: {
        ko: "지금 당신을 가장 힘들게 하는 건 무엇인가요?",
        en: "What is making you struggle the most right now?",
        ja: "今あなたを最も苦しめているのは何ですか？",
        "zh-CN": "现在最让你困扰的是什么？",
        "zh-TW": "現在最讓你困擾的是什麼？",
        vi: "Điều gì đang khiến bạn khó khăn nhất ngay bây giờ?",
        id: "Apa yang paling membuat Anda kesulitan sekarang?"
      },
      thumbnail: 'phase2_test_133_stress_care.jpg',
      type: 'psychology',
      category: 'healing',
      play_count: 0,
      tags: {
        ko: ['심리', '힐링'],
        en: ['Psychology', 'Healing'],
        ja: ['心理', '癒し'],
        "zh-CN": ['心理', '治愈'],
        "zh-TW": ['心理', '治愈'],
        vi: ['Tâm lý', 'Chữa lành'],
        id: ['Psikologi', 'Penyembuhan']
      }
    };

    return (
      <>
        <Phase2StressCareTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2StressCareQuestions}
          results={phase2StressCareResults}
          questionCount={phase2StressCareQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_conflict_reason_test') {
    const { phase2ConflictReasonQuestions, phase2ConflictReasonResults } = await import('@/lib/phase2_conflict_reason_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_conflict_reason_test',
      title: {
        ko: "내가 연인과 자꾸 싸우는 이유",
        en: "",
        ja: "",
        "zh-CN": "",
        "zh-TW": "",
        vi: "",
        id: ""
      },
      description: {
        ko: "사랑하는데 왜 자꾸 싸우는 걸까요?",
        en: "",
        ja: "",
        "zh-CN": "",
        "zh-TW": "",
        vi: "",
        id: ""
      },
      thumbnail: 'phase2_test_142_conflict_reason.jpg',
      type: 'dating',
      category: 'psychology',
      play_count: 0,
      tags: {
        ko: ['연애', '심리'],
        en: ['Dating', 'Psychology'],
        ja: ['恋愛', '心理'],
        "zh-CN": ['恋爱', '心理'],
        "zh-TW": ['戀愛', '心理'],
        vi: ['Hẹn hò', 'Tâm lý'],
        id: ['Kencan', 'Psikologi']
      }
    };

    return (
      <>
        <Phase2ConflictReasonTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2ConflictReasonQuestions}
          results={phase2ConflictReasonResults}
          questionCount={phase2ConflictReasonQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 내가 환생한다면 어떤 동물일까? 테스트
  if (slug === 'phase2_reincarnation_animal_test') {
    const { phase2ReincarnationAnimalQuestions, phase2ReincarnationAnimalResults } = await import('@/lib/phase2_reincarnation_animal_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_reincarnation_animal_test',
      title: {
        ko: '내가 환생한다면 어떤 동물일까?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '현생에 지친 당신, 다음 생은 어떤 모습일까요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_040_reincarnation_animal.jpg',
      type: 'psychology',
      category: 'healing',
      play_count: 0,
      tags: {
        ko: ['심리', '힐링'],
        en: ['Psychology', 'Healing'],
        ja: ['心理', 'ヒーリング'],
        'zh-CN': ['心理', '治愈'],
        'zh-TW': ['心理', '療癒'],
        vi: ['Tâm lý', 'Chữa lành'],
        id: ['Psikologi', 'Penyembuhan']
      }
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        <Phase2ReincarnationAnimalTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2ReincarnationAnimalQuestions}
          results={phase2ReincarnationAnimalResults}
          questionCount={phase2ReincarnationAnimalQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          isLatestTest={isLatestTest}
          badgeType={test.badge_type || null}
        />
      </>
    );
  }

  // 내가 흑화하면? 숨겨진 본성 테스트
  if (slug === 'phase2_dark_side_test') {
    const { phase2DarkSideQuestions, phase2DarkSideResults } = await import('@/lib/phase2_dark_side_data');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_dark_side_test',
      title: {
        ko: '내가 흑화하면? 숨겨진 본성 테스트',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '누구나 마음속에 악마 하나쯤은 키우고 있다.',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_144_dark_side.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '성격', '재미'],
        en: ['Psychology', 'Personality', 'Fun'],
        ja: ['心理', '性格', '面白い'],
        'zh-CN': ['心理', '性格', '有趣'],
        'zh-TW': ['心理', '性格', '有趣'],
        vi: ['Tâm lý', 'Tính cách', 'Vui vẻ'],
        id: ['Psikologi', 'Kepribadian', 'Menyenangkan']
      }
    };

    return (
      <>
        <Phase2DarkSideTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2DarkSideQuestions}
          results={phase2DarkSideResults}
          questionCount={phase2DarkSideQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'soul-drink-test') {
    const { soulDrinkQuestions, soulDrinkResults } = await import('@/lib/soulDrinkData');
    const test = await getTestBySlug(slug) || {
      slug: 'soul-drink-test',
      title: {
        ko: '나의 소울 드링크 찾기 (커피 & 와인)',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '당신의 영혼을 채워줄 한 잔은 무엇인가요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_035_soul_drink.jpg',
      type: 'fun',
      category: 'lifestyle',
      play_count: 0,
      tags: {
        ko: ['재미'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <SoulDrinkTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={soulDrinkQuestions}
          results={soulDrinkResults}
          questionCount={soulDrinkQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_superpower-test') {
    const { superpowerQuestions, superpowerResults } = await import('@/lib/superpowerData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_superpower-test',
      title: {
        ko: '나의 숨겨진 \'초능력\' 찾기',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '남들에게는 없는 특별한 힘이 나에게 있다면?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_041_superpower.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <SuperpowerTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={superpowerQuestions}
          results={superpowerResults}
          questionCount={superpowerQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_travel-style-test') {
    const { travelStyleQuestions, travelStyleResults } = await import('@/lib/travelStyleData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_travel-style-test',
      title: {
        ko: '나의 \'여행\' 스타일 (J vs P 진단)',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '여행은 준비하는 순간부터 시작일까요, 떠나는 순간부터 시작일까요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_157_travel_style.jpg',
      type: 'personality',
      category: 'mbti',
      play_count: 0,
      tags: {
        ko: ['성격', 'MBTI'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <TravelStyleTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={travelStyleQuestions}
          results={travelStyleResults}
          questionCount={travelStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_perfectionism-test') {
    const { phase2PerfectionismQuestions, phase2PerfectionismResults } = await import('@/lib/phase2PerfectionismData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_perfectionism-test',
      title: {
        ko: "나의 '완벽주의' 성향 테스트 (번아웃 진단)",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      description: {
        ko: "당신의 기준점은 어디인가요?",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      thumbnail: 'phase2_test_150_perfectionism.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ["자아탐색"],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <Phase2PerfectionismTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2PerfectionismQuestions}
          results={phase2PerfectionismResults}
          questionCount={phase2PerfectionismQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_friendship-style-test') {
    const { phase2FriendshipStyleQuestions, phase2FriendshipStyleResults } = await import('@/lib/phase2FriendshipStyleData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_friendship-style-test',
      title: {
        ko: "나의 '우정' 스타일 테스트",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      description: {
        ko: "당신에게 '진정한 친구'는 어떤 의미인가요?",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      thumbnail: 'phase2_test_154_friendship_style.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '자아탐색'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <Phase2FriendshipStyleTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2FriendshipStyleQuestions}
          results={phase2FriendshipStyleResults}
          questionCount={phase2FriendshipStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_relationship-cut-test') {
    const { phase2RelationshipCutQuestions, phase2RelationshipCutResults } = await import('@/lib/phase2RelationshipCutData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_relationship-cut-test',
      title: {
        ko: "나의 '인간관계' 정리 유형 (손절 스타일 테스트)",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      description: {
        ko: "당신의 인맥 리스트, 안녕하신가요?",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      thumbnail: 'phase2_test_153_relationship_cut.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '자아탐색'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <Phase2RelationshipCutTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2RelationshipCutQuestions}
          results={phase2RelationshipCutResults}
          questionCount={phase2RelationshipCutQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_self-esteem-test') {
    const { phase2SelfEsteemQuestions, phase2SelfEsteemResults } = await import('@/lib/phase2SelfEsteemData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_self-esteem-test',
      title: {
        ko: "나의 '자존감' 레벨 테스트",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      description: {
        ko: "당신은 자신의 가장 친한 친구인가요?",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      thumbnail: 'phase2_test_135_self_esteem.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '성격'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <Phase2SelfEsteemTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2SelfEsteemQuestions}
          results={phase2SelfEsteemResults}
          questionCount={phase2SelfEsteemQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_mental-age-test') {
    const { phase2MentalAgeQuestions, phase2MentalAgeResults } = await import('@/lib/phase2MentalAgeData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_mental-age-test',
      title: {
        ko: "나의 '정신 연령' 테스트",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      description: {
        ko: "당신의 속마음은 몇 살인가요? 주민등록증 나이는 숫자에 불과합니다. 나의 정신 연령 측정하기 🧠",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      thumbnail: 'phase2_test_143_mental_age.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '재미'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <Phase2MentalAgeTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2MentalAgeQuestions}
          results={phase2MentalAgeResults}
          questionCount={phase2MentalAgeQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_guilt-level-test') {
    const { phase2GuiltLevelQuestions, phase2GuiltLevelResults } = await import('@/lib/phase2GuiltLevelData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_guilt-level-test',
      title: {
        ko: "나의 '죄책감' 레벨 테스트",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      description: {
        ko: "혹시 말버릇이 '죄송합니다' 인가요? 우리는 때로 내가 잘못하지 않은 일에도 습관적으로 미안해하고, 자책하곤 합니다. 나의 죄책감 민감도 진단하기 🎒",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      thumbnail: 'phase2_test_147_guilt_level.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '자아탐색'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <Phase2GuiltLevelTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2GuiltLevelQuestions}
          results={phase2GuiltLevelResults}
          questionCount={phase2GuiltLevelQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'phase2_creativity-level-test') {
    const { phase2CreativityLevelQuestions, phase2CreativityLevelResults } = await import('@/lib/phase2CreativityLevelData');
    const test = await getTestBySlug(slug) || {
      slug: 'phase2_creativity-level-test',
      title: {
        ko: "나의 '창의력' 레벨 테스트 (뇌 말랑함 진단)",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      description: {
        ko: "당신의 뇌는 얼마나 말랑말랑한가요? 남들은 보지 못하는 것을 보는 사람, 엉뚱한 상상으로 세상을 바꾸는 사람. 우리는 그들을 '창의적인 사람'이라고 부릅니다. 나의 창의력 점수 확인하기 💡 두뇌 유연성 테스트 🧠",
        en: "",
        ja: "",
        'zh-CN': "",
        'zh-TW': "",
        vi: "",
        id: ""
      },
      thumbnail: 'phase2_test_148_creativity_level.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '자아탐색'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <Phase2CreativityLevelTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={phase2CreativityLevelQuestions}
          results={phase2CreativityLevelResults}
          questionCount={phase2CreativityLevelQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  if (slug === 'conflict-style-test') {
    const { conflictStyleQuestions, conflictStyleResults } = await import('@/lib/conflictStyleData');
    const test = await getTestBySlug(slug) || {
      slug: 'conflict-style-test',
      title: {
        ko: '나의 \'갈등 해결\' 스타일 (싸움 유형 진단)',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      description: {
        ko: '싸움, 피할 수 없다면 어떻게 하시나요?',
        en: '',
        ja: '',
        'zh-CN': '',
        'zh-TW': '',
        vi: '',
        id: ''
      },
      thumbnail: 'phase2_test_156_conflict_style.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리'],
        en: [],
        ja: [],
        'zh-CN': [],
        'zh-TW': [],
        vi: [],
        id: []
      }
    };

    return (
      <>
        <ConflictStyleTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={conflictStyleQuestions}
          results={conflictStyleResults}
          questionCount={conflictStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count || 0}
          similarTests={[]}
        />
      </>
    );
  }

  if (slug === 'conversation-style-test') {
    const { conversationStyleQuestions, conversationStyleResults } = await import('@/lib/conversationStyleData');
    const test = await getTestBySlug(slug) || {
      slug: 'conversation-style-test',
      title: {
        ko: '나의 \'대화\' 스타일 테스트 (소통 방식 진단)',
        en: 'My \'Conversation\' Style Test (Communication Method Diagnosis)',
        ja: '私の「会話」スタイルテスト（コミュニケーション方法診断）',
        'zh-CN': '我的「对话」风格测试（沟通方式诊断）',
        'zh-TW': '我的「對話」風格測試（溝通方式診斷）',
        vi: 'Bài kiểm tra Phong cách \'Trò chuyện\' của tôi (Chẩn đoán Phương thức Giao tiếp)',
        id: 'Tes Gaya \'Percakapan\' Saya (Diagnosis Metode Komunikasi)'
      },
      description: {
        ko: '당신과 대화하면 시간이 어떻게 가나요?',
        en: 'How does time pass when talking with you?',
        ja: 'あなたと話すと時間はどう過ぎますか？',
        'zh-CN': '和你聊天时，时间过得怎么样？',
        'zh-TW': '和你聊天時，時間過得怎麼樣？',
        vi: 'Thời gian trôi như thế nào khi nói chuyện với bạn?',
        id: 'Bagaimana waktu berlalu saat berbicara dengan Anda?'
      },
      thumbnail: 'phase2_test_155_conversation_style.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '인간관계', '자아탐색'],
        en: ['Psychology', 'Relationships', 'Self-discovery'],
        ja: ['心理', '人間関係', '自己探求'],
        'zh-CN': ['心理', '人际关系', '自我探索'],
        'zh-TW': ['心理', '人際關係', '自我探索'],
        vi: ['Tâm lý', 'Quan hệ', 'Khám phá bản thân'],
        id: ['Psikologi', 'Hubungan', 'Penemuan diri']
      }
    };

    return (
      <>
        <ConversationStyleTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={conversationStyleQuestions}
          results={conversationStyleResults}
          questionCount={conversationStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count || 0}
          similarTests={[]}
        />
      </>
    );
  }

  // 나의 무의식 플러팅 스타일 테스트
  if (slug === 'flirting-style-test') {
    const { flirtingStyleQuestions, flirtingStyleResults } = await import('@/lib/flirtingStyleData');
    const test = await getTestBySlug(slug) || {
      slug: 'flirting-style-test',
      title: {
        ko: '나의 무의식 플러팅 스타일 (연애 기술 진단)',
        en: 'My Unconscious Flirting Style (Dating Skill Diagnosis)',
        ja: '私の無意識フリートスタイル（恋愛スキル診断）',
        'zh-CN': '我的无意识调情风格（恋爱技能诊断）',
        'zh-TW': '我的無意識調情風格（戀愛技能診斷）',
        vi: 'Phong cách Tán tỉnh Vô thức của tôi (Chẩn đoán Kỹ năng Hẹn hò)',
        id: 'Gaya Flirting Bawah Sadar Saya (Diagnosis Keterampilan Kencan)'
      },
      description: {
        ko: '혹시... 너 지금 나 꼬시는 거야?',
        en: 'Wait... are you flirting with me?',
        ja: 'もしかして...今、私を口説いてるの？',
        'zh-CN': '等等...你现在是在撩我吗？',
        'zh-TW': '等等...你現在是在撩我嗎？',
        vi: 'Đợi đã... bạn đang tán tỉnh tôi à?',
        id: 'Tunggu... apakah kamu sedang menggoda saya?'
      },
      thumbnail: 'phase2_test_141_flirting_style.jpg',
      type: 'psychology',
      category: 'love',
      play_count: 0,
      tags: {
        ko: ['연애', '심리'],
        en: ['Romance', 'Psychology'],
        ja: ['恋愛', '心理'],
        'zh-CN': ['恋爱', '心理'],
        'zh-TW': ['戀愛', '心理'],
        vi: ['Tình yêu', 'Tâm lý'],
        id: ['Romantis', 'Psikologi']
      }
    };

    return (
      <>
        <FlirtingStyleTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={flirtingStyleQuestions}
          results={flirtingStyleResults}
          questionCount={flirtingStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count || 0}
          similarTests={[]}
        />
      </>
    );
  }

  // 나의 '리더십' 스타일 테스트
  if (slug === 'leadership-style-test') {
    const { leadershipStyleQuestions, leadershipStyleResults } = await import('@/lib/leadershipStyleData');
    const test = await getTestBySlug(slug) || {
      slug: 'leadership-style-test',
      title: {
        ko: '나의 \'리더십\' 스타일 테스트',
        en: '', // To be translated
        ja: '', // To be translated
        'zh-CN': '', // To be translated
        'zh-TW': '', // To be translated
        vi: '', // To be translated
        id: '' // To be translated
      },
      description: {
        ko: '당신은 어떤 리더인가요? 혹은 어떤 리더가 될까요?',
        en: '', // To be translated
        ja: '', // To be translated
        'zh-CN': '', // To be translated
        'zh-TW': '', // To be translated
        vi: '', // To be translated
        id: '' // To be translated
      },
      thumbnail: 'phase2_test_149_leadership_style.jpg',
      type: 'psychology',
      category: 'career',
      play_count: 0,
      tags: {
        ko: ['자아탐색', '진로'],
        en: [], // To be translated
        ja: [], // To be translated
        'zh-CN': [], // To be translated
        'zh-TW': [], // To be translated
        vi: [], // To be translated
        id: [] // To be translated
      }
    };

    return (
      <>
        <LeadershipStyleTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={leadershipStyleQuestions}
          results={leadershipStyleResults}
          questionCount={leadershipStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count || 0}
          similarTests={[]}
        />
      </>
    );
  }

  // 나는 '과거' 지향 vs '미래' 지향? (시간 관점 테스트)
  if (slug === 'time-perspective-test') {
    const { timePerspectiveQuestions, timePerspectiveResults } = await import('@/lib/timePerspectiveData');
    const test = await getTestBySlug(slug) || {
      slug: 'time-perspective-test',
      title: {
        ko: '나는 \'과거\' 지향 vs \'미래\' 지향? (시간 관점 테스트)',
        en: 'Am I \'Past\' Oriented vs \'Future\' Oriented? (Time Perspective Test)',
        ja: '私は「過去」志向 vs 「未来」志向？(時間観点テスト)',
        'zh-CN': '我是「过去」导向 vs 「未来」导向？(时间观点测试)',
        'zh-TW': '我是「過去」導向 vs 「未來」導向？(時間觀點測試)',
        vi: 'Tôi là \'Quá khứ\' hay \'Tương lai\'? (Bài kiểm tra Quan điểm Thời gian)',
        id: 'Apakah Saya Berorientasi \'Masa Lalu\' vs \'Masa Depan\'? (Tes Perspektif Waktu)'
      },
      description: {
        ko: '당신의 시선은 어디를 향해 있나요?',
        en: 'Where is your gaze directed?',
        ja: 'あなたの視線はどこに向かっていますか？',
        'zh-CN': '你的目光朝向哪里？',
        'zh-TW': '你的目光朝向哪裡？',
        vi: 'Ánh mắt của bạn đang hướng về đâu?',
        id: 'Ke mana pandangan Anda diarahkan?'
      },
      thumbnail: 'phase2_test_152_time_perspective.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리'],
        en: ['Psychology'],
        ja: ['心理'],
        'zh-CN': ['心理'],
        'zh-TW': ['心理'],
        vi: ['Tâm lý'],
        id: ['Psikologi']
      }
    };
    return (
      <>
        <TimePerspectiveTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={timePerspectiveQuestions}
          results={timePerspectiveResults}
          questionCount={timePerspectiveQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 나의 1순위 사랑의 언어는? (연애 성향 진단)
  if (slug === 'love-language-test') {
    const { loveLanguageQuestions, loveLanguageResults } = await import('@/lib/loveLanguageData');
    const test = await getTestBySlug(slug) || {
      slug: 'love-language-test',
      title: {
        ko: '나의 1순위 사랑의 언어는? (연애 성향 진단)',
        en: "What's My #1 Love Language? (Relationship Tendency Diagnosis)",
        ja: '私の1位の愛の言語は？(恋愛傾向診断)',
        'zh-CN': '我的第一爱的语言是什么？(恋爱倾向诊断)',
        'zh-TW': '我的第一愛的語言是什麼？(戀愛傾向診斷)',
        vi: 'Ngôn ngữ Tình yêu #1 của Tôi là gì? (Chẩn đoán Xu hướng Tình yêu)',
        id: 'Apa Bahasa Cinta #1 Saya? (Diagnosis Kecenderungan Hubungan)'
      },
      description: {
        ko: '당신의 사랑은 어떤 언어로 말하고 있나요?',
        en: "What language does your love speak?",
        ja: 'あなたの愛はどんな言葉で語っていますか？',
        'zh-CN': '你的爱是用什么语言表达的？',
        'zh-TW': '你的愛是用什麼語言表達的？',
        vi: 'Tình yêu của bạn nói bằng ngôn ngữ gì?',
        id: 'Bahasa apa yang digunakan cintamu?'
      },
      thumbnail: 'phase2_test_131_love_language.jpg',
      type: 'dating',
      category: 'psychology',
      play_count: 0,
      tags: {
        ko: ['연애', '심리'],
        en: ['Dating', 'Psychology'],
        ja: ['恋愛', '心理'],
        'zh-CN': ['恋爱', '心理'],
        'zh-TW': ['戀愛', '心理'],
        vi: ['Tình yêu', 'Tâm lý'],
        id: ['Kencan', 'Psikologi']
      }
    };
    return (
      <>
        <LoveLanguageTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={loveLanguageQuestions}
          results={loveLanguageResults}
          questionCount={loveLanguageQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 나를 지키는 '방어기제' 테스트
  if (slug === 'defense-mechanism-test') {
    const { defenseMechanismQuestions, defenseMechanismResults } = await import('@/lib/defenseMechanismData');
    const test = await getTestBySlug(slug) || {
      slug: 'defense-mechanism-test',
      title: {
        ko: '나를 지키는 \'방어기제\' 테스트',
        en: 'Defense Mechanism Test',
        ja: '防衛機制テスト',
        'zh-CN': '防御机制测试',
        'zh-TW': '防禦機制測試',
        vi: 'Bài kiểm tra Cơ chế Phòng vệ',
        id: 'Tes Mekanisme Pertahanan'
      },
      description: {
        ko: '힘들 때, 당신의 마음은 어떻게 반응하나요?',
        en: 'How does your mind react when things are difficult?',
        ja: '困難な時、あなたの心はどう反応しますか？',
        'zh-CN': '困难时，你的心如何反应？',
        'zh-TW': '困難時，你的心如何反應？',
        vi: 'Khi khó khăn, tâm trí bạn phản ứng như thế nào?',
        id: 'Bagaimana pikiran Anda bereaksi saat sulit?'
      },
      thumbnail: 'phase2_test_134_defense_mechanism.jpg',
      type: 'psychology',
      category: 'personality',
      play_count: 0,
      tags: {
        ko: ['심리', '성격'],
        en: ['Psychology', 'Personality'],
        ja: ['心理', '性格'],
        'zh-CN': ['心理', '性格'],
        'zh-TW': ['心理', '性格'],
        vi: ['Tâm lý', 'Tính cách'],
        id: ['Psikologi', 'Kepribadian']
      }
    };
    return (
      <>
        <DefenseMechanismTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={defenseMechanismQuestions}
          results={defenseMechanismResults}
          questionCount={defenseMechanismQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // K-POP 아이돌 데뷔? 내 포지션 찾기 테스트
  if (slug === 'kpop-debut-test') {
    const { kpopDebutQuestions, kpopDebutResults } = await import('@/lib/kpopDebutData');
    const test = await getTestBySlug(slug) || {
      slug: 'kpop-debut-test',
      title: {
        ko: 'K-POP 아이돌 데뷔? 내 포지션 찾기',
        en: 'K-POP Idol Debut? Find My Position',
        ja: 'K-POPアイドルデビュー？私のポジションを見つける',
        'zh-CN': 'K-POP偶像出道？找到我的位置',
        'zh-TW': 'K-POP偶像出道？找到我的位置',
        vi: 'K-POP Idol Debut? Tìm Vị Trí Của Tôi',
        id: 'K-POP Idol Debut? Temukan Posisi Saya'
      },
      description: {
        ko: '당신의 데뷔가 확정되었습니다!',
        en: 'Your debut has been confirmed!',
        ja: 'あなたのデビューが確定しました！',
        'zh-CN': '你的出道已确定！',
        'zh-TW': '你的出道已確定！',
        vi: 'Debut của bạn đã được xác nhận!',
        id: 'Debut Anda telah dikonfirmasi!'
      },
      thumbnail: 'phase2_test_038_kpop_debut.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['심리', '트렌드'],
        en: ['Psychology', 'Trend'],
        ja: ['心理', 'トレンド'],
        'zh-CN': ['心理', '趋势'],
        'zh-TW': ['心理', '趨勢'],
        vi: ['Tâm lý', 'Xu hướng'],
        id: ['Psikologi', 'Tren']
      }
    };

    return (
      <>
        <KpopDebutTestClient
          locale={locale}
          slug={test.slug}
          title={typeof test.title === 'object' ? test.title[locale] || test.title.ko : test.title}
          description={typeof test.description === 'object' ? test.description[locale] || test.description.ko : test.description}
          questions={kpopDebutQuestions}
          results={kpopDebutResults}
          questionCount={kpopDebutQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 나의 인생 우선순위 찾기 테스트
  if (slug === 'life-priorities') {
    const { lifePrioritiesQuestions, lifePrioritiesResults } = await import('@/lib/lifePrioritiesData');
    const test = await getTestBySlug(slug) || {
      slug: 'life-priorities',
      title: {
        ko: '나의 인생 우선순위 찾기',
        en: 'Find My Life Priorities',
        ja: '私の人生の優先順位を見つける',
        'zh-CN': '找到我的人生优先级',
        'zh-TW': '找到我的人生優先級',
        vi: 'Tìm Thứ tự Ưu tiên Cuộc sống của Tôi',
        id: 'Temukan Prioritas Hidup Saya'
      },
      description: {
        ko: '당신 인생에서 정말 중요한 것은 무엇인가요?',
        en: 'What is truly important in your life?',
        ja: 'あなたの人生で本当に重要なことは何ですか？',
        'zh-CN': '生活中真正重要的是什么？',
        'zh-TW': '生活中真正重要的是什麼？',
        vi: 'Điều gì thực sự quan trọng trong cuộc sống của bạn?',
        id: 'Apa yang benar-benar penting dalam hidup Anda?'
      },
      thumbnail: 'test_205_life_priorities.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['자기이해'],
        en: ['Self-understanding'],
        ja: ['自己理解'],
        'zh-CN': ['自我理解'],
        'zh-TW': ['自我理解'],
        vi: ['Tự hiểu'],
        id: ['Pemahaman diri']
      }
    };

    return (
      <>
        <LifePrioritiesTestClient
          locale={locale as "ko" | "en" | "ja" | "zh-CN" | "zh-TW" | "id" | "vi"}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={lifePrioritiesQuestions}
          results={lifePrioritiesResults}
          questionCount={lifePrioritiesQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 모험가 vs 신중파 테스트
  if (slug === 'adventurer-vs-cautious') {
    const { adventurerQuestions, adventurerResults } = await import('@/lib/adventurerData');
    const test = await getTestBySlug(slug) || {
      slug: 'adventurer-vs-cautious',
      title: {
        ko: '나는 모험가? vs 신중파?',
        en: 'Am I an Adventurer or Cautious?',
        ja: '私は冒険家か慎重派か？',
        'zh-CN': '我是冒险家还是谨慎派？',
        'zh-TW': '我是冒險家還是謹慎派？',
        vi: 'Tôi là Nhà Thám Hiểm hay Người Thận Trọng?',
        id: 'Apakah saya Petualang atau Hati-hati?'
      },
      description: {
        ko: '일단 해보기 vs 생각부터 하기',
        en: 'Try it vs Think first',
        ja: 'とりあえずやってみる vs 考えることから始める',
        'zh-CN': '先试试 vs 先思考',
        'zh-TW': '先試試 vs 先思考',
        vi: 'Thử đã vs Nghĩ trước',
        id: 'Coba dulu vs Pikir dulu'
      },
      thumbnail: 'test_206_adventurer_vs_cautious.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격', '선택', '라이프스타일'],
        en: ['Personality', 'Choice', 'Lifestyle'],
        ja: ['性格', '選択', 'ライフスタイル'],
        'zh-CN': ['性格', '选择', '生活方式'],
        'zh-TW': ['性格', '選擇', '生活方式'],
        vi: ['Tính cách', 'Lựa chọn', 'Lối sống'],
        id: ['Kepribadian', 'Pilihan', 'Gaya hidup']
      }
    };

    return (
      <>
        <AdventurerTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={adventurerQuestions}
          results={adventurerResults}
          questionCount={adventurerQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 소통 스타일 테스트
  if (slug === 'communication-style-test') {
    const { communicationStyleQuestions, communicationStyleResults } = await import('@/lib/communicationStyleData');
    const test = await getTestBySlug(slug) || {
      slug: 'communication-style-test',
      title: {
        ko: '당신의 소통 스타일은?',
        en: 'What is your communication style?',
        ja: 'あなたのコミュニケーションスタイルは？',
        'zh-CN': '你的沟通风格是什么？',
        'zh-TW': '你的溝通風格是什麼？',
        vi: 'Phong cách giao tiếp của bạn là gì?',
        id: 'Apa gaya komunikasi Anda?'
      },
      description: {
        ko: '직설적 vs 간접적 vs 감성적 vs 논리적',
        en: 'Direct vs Indirect vs Emotional vs Logical',
        ja: '直接的 vs 間接的 vs 感情的 vs 論理的',
        'zh-CN': '直接 vs 间接 vs 感性 vs 逻辑',
        'zh-TW': '直接 vs 間接 vs 感性 vs 邏輯',
        vi: 'Trực tiếp vs Gián tiếp vs Cảm xúc vs Logic',
        id: 'Langsung vs Tidak langsung vs Emosional vs Logis'
      },
      thumbnail: 'test_207_communication_style.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['소통', '관계', '성격'],
        en: ['Communication', 'Relationships', 'Personality'],
        ja: ['コミュニケーション', '関係', '性格'],
        'zh-CN': ['沟通', '关系', '性格'],
        'zh-TW': ['溝通', '關係', '性格'],
        vi: ['Giao tiếp', 'Mối quan hệ', 'Tính cách'],
        id: ['Komunikasi', 'Hubungan', 'Kepribadian']
      }
    };

    return (
      <>
        <CommunicationStyleTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={communicationStyleQuestions}
          results={communicationStyleResults}
          questionCount={communicationStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 솔직 vs 절제 테스트
  if (slug === 'honesty-vs-restraint-test') {
    const { honestyVsRestraintQuestions, honestyVsRestraintResults } = await import('@/lib/honestyVsRestraintData');
    const test = await getTestBySlug(slug) || {
      slug: 'honesty-vs-restraint-test',
      title: {
        ko: '난 솔직 스타일? vs 절제 스타일?',
        en: 'Am I Honest or Restrained?',
        ja: '私は正直スタイル？VS自制スタイル？',
        'zh-CN': '我是诚实风格还是节制风格？',
        'zh-TW': '我是誠實風格還是節制風格？',
        vi: 'Tôi là phong cách thành thật hay tự chế?',
        id: 'Apakah saya gaya jujur atau menahan diri?'
      },
      description: {
        ko: '감정 그대로 표현? 아니면 한 번 걸러서?',
        en: 'Express emotions as they are? Or filter first?',
        ja: '感情そのまま表現？それとも一度フィルターして？',
        'zh-CN': '如实表达情感？还是先过滤？',
        'zh-TW': '如實表達情感？還是先過濾？',
        vi: 'Thể hiện cảm xúc như vốn có? Hay lọc trước?',
        id: 'Ekspresikan emosi apa adanya? Atau filter dulu?'
      },
      thumbnail: 'test_208_honesty_vs_restraint.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['감정', '성격'],
        en: ['Emotion', 'Personality'],
        ja: ['感情', '性格'],
        'zh-CN': ['情感', '性格'],
        'zh-TW': ['情感', '性格'],
        vi: ['Cảm xúc', 'Tính cách'],
        id: ['Emosi', 'Kepribadian']
      }
    };

    return (
      <>
        <HonestyVsRestraintTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={honestyVsRestraintQuestions}
          results={honestyVsRestraintResults}
          questionCount={honestyVsRestraintQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 독립 vs 의존 테스트
  if (slug === 'independence-vs-dependence-test') {
    const { independenceQuestions, independenceResults } = await import('@/lib/independenceData');
    const test = await getTestBySlug(slug) || {
      slug: 'independence-vs-dependence-test',
      title: {
        ko: '난 독립적 스타일? vs 의존적 스타일?',
        en: 'Am I Independent or Dependent?',
        ja: '私は独立スタイル？VS依存スタイル？',
        'zh-CN': '我是独立风格还是依赖风格？',
        'zh-TW': '我是獨立風格還是依賴風格？',
        vi: 'Tôi là phong cách độc lập hay phụ thuộc?',
        id: 'Apakah saya gaya mandiri atau bergantung?'
      },
      description: {
        ko: '혼자서도 괜찮아 vs 누군가 필요해',
        en: 'Okay alone vs Need someone',
        ja: '一人でも大丈夫 vs 誰かが必要',
        'zh-CN': '独自也可以 vs 需要有人',
        'zh-TW': '獨自也可以 vs 需要有人',
        vi: 'Ổn một mình vs Cần ai đó',
        id: 'Baik-baik saja sendirian vs Perlu seseorang'
      },
      thumbnail: 'test_209_independence_vs_dependence.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격', '자기이해'],
        en: ['Personality', 'Self-understanding'],
        ja: ['性格', '自己理解'],
        'zh-CN': ['性格', '自我理解'],
        'zh-TW': ['性格', '自我理解'],
        vi: ['Tính cách', 'Tự hiểu'],
        id: ['Kepribadian', 'Pemahaman diri']
      }
    };

    return (
      <>
        <IndependenceTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={independenceQuestions}
          results={independenceResults}
          questionCount={independenceQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 의사결정 속도 테스트
  if (slug === 'decision-speed-test') {
    const { decisionSpeedQuestions, decisionSpeedResults } = await import('@/lib/decisionSpeedData');
    const test = await getTestBySlug(slug) || {
      slug: 'decision-speed-test',
      title: {
        ko: '당신의 의사결정 속도는?',
        en: 'What is your decision-making speed?',
        ja: 'あなたの意思決定の速度は？',
        'zh-CN': '你的决策速度是什么？',
        'zh-TW': '你的決策速度是什麼？',
        vi: 'Tốc độ ra quyết định của bạn là gì?',
        id: 'Berapa kecepatan pengambilan keputusan Anda?'
      },
      description: {
        ko: '즉시 결정? 천천히 고민? 당신의 결정 속도는?',
        en: 'Decide immediately? Think slowly? What is your decision speed?',
        ja: 'すぐに決める？ゆっくり悩む？あなたの決定速度は？',
        'zh-CN': '立即决定？慢慢思考？你的决策速度是什么？',
        'zh-TW': '立即決定？慢慢思考？你的決策速度是什麼？',
        vi: 'Quyết định ngay lập tức? Suy nghĩ chậm? Tốc độ quyết định của bạn là gì?',
        id: 'Putuskan segera? Berpikir perlahan? Berapa kecepatan keputusan Anda?'
      },
      thumbnail: 'test_213_decision_speed.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격'],
        en: ['Personality'],
        ja: ['性格'],
        'zh-CN': ['性格'],
        'zh-TW': ['性格'],
        vi: ['Tính cách'],
        id: ['Kepribadian']
      }
    };

    return (
      <>
        <DecisionSpeedTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={decisionSpeedQuestions}
          results={decisionSpeedResults}
          questionCount={decisionSpeedQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 승부욕 강도 테스트
  if (slug === 'competitiveness-test') {
    const { competitivenessQuestions, competitivenessResults } = await import('@/lib/competitivenessData');
    const test = await getTestBySlug(slug) || {
      slug: 'competitiveness-test',
      title: {
        ko: '나의 승부욕 강도는 몇일까?',
        en: 'How strong is my competitiveness?',
        ja: '私の勝負欲の強さは？',
        'zh-CN': '我的竞争心有多强？',
        'zh-TW': '我的競爭心有多強？',
        vi: 'Tính cạnh tranh của tôi mạnh đến mức nào?',
        id: 'Seberapa kuat kompetitif saya?'
      },
      description: {
        ko: '이기고 싶다 vs 즐기면 돼! 당신의 승부욕은?',
        en: 'Want to win vs Just enjoy! What is your competitiveness?',
        ja: '勝ちたい vs 楽しめばいい！あなたの勝負欲は？',
        'zh-CN': '想赢 vs 享受就好！你的竞争心是什么？',
        'zh-TW': '想贏 vs 享受就好！你的競爭心是什麼？',
        vi: 'Muốn thắng vs Chỉ cần tận hưởng! Tính cạnh tranh của bạn là gì?',
        id: 'Ingin menang vs Nikmati saja! Apa kompetitif Anda?'
      },
      thumbnail: 'test_215_competitiveness.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격', '자기이해'],
        en: ['Personality', 'Self-understanding'],
        ja: ['性格', '自己理解'],
        'zh-CN': ['性格', '自我理解'],
        'zh-TW': ['性格', '自我理解'],
        vi: ['Tính cách', 'Tự hiểu'],
        id: ['Kepribadian', 'Pemahaman diri']
      }
    };

    return (
      <>
        <CompetitivenessTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={competitivenessQuestions}
          results={competitivenessResults}
          questionCount={competitivenessQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 반응 스타일 테스트
  if (slug === 'reaction-style-test') {
    const { reactionStyleQuestions, reactionStyleResults } = await import('@/lib/reactionStyleData');
    const test = await getTestBySlug(slug) || {
      slug: 'reaction-style-test',
      title: {
        ko: '당신은 어떻게 반응할까요?',
        en: 'How do you react?',
        ja: 'あなたはどう反応しますか？',
        'zh-CN': '你会如何反应？',
        'zh-TW': '你會如何反应？',
        vi: 'Bạn phản ứng như thế nào?',
        id: 'Bagaimana Anda bereaksi?'
      },
      description: {
        ko: '당신의 진짜 반응은? 상황에 따른 반응 스타일을 분석해보세요!',
        en: 'What is your real reaction? Analyze your reaction style to different situations!',
        ja: 'あなたの本当の反応は？様々な状況での反応スタイルを分析してみてください！',
        'zh-CN': '你的真实反应是什么？分析你在不同情况下的反应风格！',
        'zh-TW': '你的真實反應是什麼？分析你在不同情況下的反應風格！',
        vi: 'Phản ứng thực sự của bạn là gì? Hãy phân tích phong cách phản ứng của bạn trong các tình huống khác nhau!',
        id: 'Apa reaksi asli Anda? Analisis gaya reaksi Anda dalam situasi yang berbeda!'
      },
      thumbnail: 'test_225_reaction_style.jpg',
      type: 'personality',
      category: 'psychology',
      tags: {
        ko: ['성격', '심리'],
        en: ['Personality', 'Psychology'],
        ja: ['性格', '心理'],
        'zh-CN': ['性格', '心理'],
        'zh-TW': ['性格', '心理'],
        vi: ['Tính cách', 'Tâm lý'],
        id: ['Kepribadian', 'Psikologi']
      },
      play_count: 0
    };

    return (
      <ReactionStyleTestClient
        locale={locale as Locale}
        slug={slug}
        title={test.title[locale] || test.title.ko}
        description={test.description?.[locale] || test.description?.ko || ''}
        questions={reactionStyleQuestions}
        results={reactionStyleResults}
        questionCount={reactionStyleQuestions.length}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 질투심 테스트
  if (slug === 'jealousy-test') {
    const { jealousyQuestions, jealousyResults } = await import('@/lib/jealousyData');
    const test = await getTestBySlug(slug) || {
      slug: 'jealousy-test',
      title: {
        ko: '당신은 얼마나 질투심이 많은가요?',
        en: 'How jealous are you?',
        ja: 'あなたはどのくらい嫉妬深いですか？',
        'zh-CN': '你有多嫉妒？',
        'zh-TW': '你有多嫉妒？',
        vi: 'Bạn ghen tuông đến mức nào?',
        id: 'Seberapa cemburu Anda?'
      },
      description: {
        ko: '사랑과 질투는 한 끗 차이! 당신의 질투 지수는?\n연인이 다른 이성과 대화하는 걸 보면? 과거 연애 이야기가 나오면? SNS에 이성 친구가 댓글을 달면?\n질투는 자연스러운 감정이지만, 너무 강하면 관계를 해칠 수 있습니다.\n당신의 질투심은 건강한 수준일까요? 아니면 조절이 필요할까요?\n단 3분이면 당신의 질투 수준을 알 수 있습니다!',
        en: 'Love and jealousy are just one step apart! What\'s your jealousy index?\nWhen you see your partner talking to someone of the opposite sex? When past relationship stories come up? When opposite-sex friends comment on SNS?\nJealousy is a natural emotion, but if it\'s too strong, it can harm relationships.\nIs your jealousy at a healthy level? Or does it need to be controlled?\nJust 3 minutes to know your jealousy level!',
        ja: '愛と嫉妬は紙一重！あなたの嫉妬指数は？\n恋人が異性と話しているのを見ると？過去の恋愛話が出ると？SNSに異性の友達がコメントすると？\n嫉妬は自然な感情ですが、強すぎると関係を害することがあります。\nあなたの嫉妬心は健康的なレベルですか？それともコントロールが必要ですか？\nたった3分であなたの嫉妬レベルがわかります！',
        'zh-CN': '爱与嫉妒只有一步之遥！你的嫉妒指数是多少？\n当你看到恋人与异性交谈时？当过去的恋爱故事出现时？当异性朋友在SNS上评论时？\n嫉妒是自然的情感，但如果太强烈，可能会伤害关系。\n你的嫉妒心是健康水平吗？还是需要控制？\n只需3分钟就能知道你的嫉妒水平！',
        'zh-TW': '愛與嫉妒只有一步之遙！你的嫉妒指數是多少？\n當你看到戀人與異性交談時？當過去的戀愛故事出現時？當異性朋友在SNS上評論時？\n嫉妒是自然的情感，但如果太強烈，可能會傷害關係。\n你的嫉妒心是健康水平嗎？還是需要控制？\n只需3分鐘就能知道你的嫉妒水平！',
        vi: 'Tình yêu và ghen tuông chỉ cách nhau một bước! Chỉ số ghen tuông của bạn là gì?\nKhi thấy người yêu nói chuyện với người khác giới? Khi câu chuyện tình cũ xuất hiện? Khi bạn khác giới bình luận trên SNS?\nGhen tuông là cảm xúc tự nhiên, nhưng nếu quá mạnh có thể làm tổn hại mối quan hệ.\nSự ghen tuông của bạn ở mức độ lành mạnh? Hay cần được kiểm soát?\nChỉ 3 phút để biết mức độ ghen tuông của bạn!',
        id: 'Cinta dan kecemburuan hanya terpisah satu langkah! Berapa indeks kecemburuan Anda?\nKetika melihat pasangan berbicara dengan lawan jenis? Ketika cerita hubungan masa lalu muncul? Ketika teman lawan jenis berkomentar di SNS?\nKecemburuan adalah emosi alami, tapi jika terlalu kuat bisa merusak hubungan.\nApakah kecemburuan Anda pada tingkat sehat? Atau perlu dikontrol?\nHanya 3 menit untuk mengetahui tingkat kecemburuan Anda!'
      },
      thumbnail: 'test_233_jealousy_level.jpg',
      type: 'dating',
      category: 'personality',
      tags: {
        ko: ['연애', '성격'],
        en: ['Dating', 'Personality'],
        ja: ['恋愛', '性格'],
        'zh-CN': ['恋爱', '性格'],
        'zh-TW': ['戀愛', '性格'],
        vi: ['Hẹn hò', 'Tính cách'],
        id: ['Pacaran', 'Kepribadian']
      },
      play_count: 0
    };

    return (
      <JealousyTestClient
        locale={locale as Locale}
        slug={slug}
        title={test.title[locale] || test.title.ko}
        description={test.description?.[locale] || test.description?.ko || ''}
        questions={jealousyQuestions}
        results={jealousyResults}
        questionCount={jealousyQuestions.length}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 집중력 테스트
  if (slug === 'concentration-level-test') {
    const { concentrationQuestions, concentrationResults } = await import('@/lib/concentrationData');
    const test = await getTestBySlug(slug) || {
      slug: 'concentration-level-test',
      title: {
        ko: '당신의 집중력 레벨은?',
        en: 'What is your concentration level?',
        ja: 'あなたの集中力レベルは？',
        'zh-CN': '你的专注力水平是什么？',
        'zh-TW': '你的專注力水平是什麼？',
        vi: 'Mức độ tập trung của bạn là gì?',
        id: 'Berapa level konsentrasi Anda?'
      },
      description: {
        ko: '당신의 집중력, 과연 얼마나 강력한가요?\n스마트폰 알림, 주변 소음, 끊임없는 유혹... 현대인의 집중력은 금붕어보다 짧다는 말도 있습니다.\n한 가지 일에 얼마나 오래 집중할 수 있나요? 외부 방해에 얼마나 강한가요? 몰입의 경지에 도달한 적이 있나요?\n단 3분이면 당신의 집중력 유형을 발견할 수 있습니다!',
        en: 'How powerful is your concentration?\nSmartphone notifications, ambient noise, endless temptations... Modern people\'s concentration is said to be shorter than a goldfish.\nHow long can you focus on one thing? How strong are you against external distractions? Have you ever reached a state of immersion?\nJust 3 minutes to discover your concentration type!',
        ja: 'あなたの集中力、いったいどのくらい強力ですか？\nスマートフォンの通知、周囲の騒音、絶え間ない誘惑...現代人の集中力は金魚より短いと言われています。\n一つのことにどのくらい長く集中できますか？外部の妨害にどのくらい強いですか？没入の境地に達したことはありますか？\nたった3分であなたの集中力タイプを発見できます！',
        'zh-CN': '你的专注力有多强大？\n智能手机通知、周围噪音、无尽的诱惑...现代人的专注力据说比金鱼还短。\n你能在一件事上专注多久？对外部干扰有多强？你是否达到过沉浸状态？\n只需3分钟就能发现你的专注力类型！',
        'zh-TW': '你的專注力有多強大？\n智能手機通知、周圍噪音、無盡的誘惑...現代人的專注力據說比金魚還短。\n你能在一件事上專注多久？對外部干擾有多強？你是否達到過沉浸狀態？\n只需3分鐘就能發現你的專注力類型！',
        vi: 'Sức mạnh tập trung của bạn như thế nào?\nThông báo điện thoại, tiếng ồn xung quanh, những cám dỗ bất tận... Người ta nói rằng khả năng tập trung của con người hiện đại ngắn hơn cả cá vàng.\nBạn có thể tập trung vào một việc bao lâu? Bạn mạnh mẽ đến mức nào trước những phiền nhiễu bên ngoài? Bạn đã từng đạt đến trạng thái nhập tâm chưa?\nChỉ 3 phút để khám phá loại tập trung của bạn!',
        id: 'Seberapa kuat konsentrasi Anda?\nNotifikasi smartphone, kebisingan sekitar, godaan tak berujung... Konsentrasi manusia modern dikatakan lebih pendek dari ikan mas.\nBerapa lama Anda bisa fokus pada satu hal? Seberapa kuat Anda melawan gangguan eksternal? Pernahkah Anda mencapai keadaan imersi?\nHanya 3 menit untuk menemukan tipe konsentrasi Anda!'
      },
      thumbnail: 'test_078_concentration.jpg',
      type: 'brain',
      category: 'psychology',
      tags: {
        ko: ['두뇌', '집중력'],
        en: ['Brain', 'Concentration'],
        ja: ['脳', '集中力'],
        'zh-CN': ['大脑', '专注力'],
        'zh-TW': ['大腦', '專注力'],
        vi: ['Não bộ', 'Tập trung'],
        id: ['Otak', 'Konsentrasi']
      },
      play_count: 0
    };

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      mainEntity: {
        '@type': 'Question',
        text: '집중력 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 집중력 분석'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />

        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <ConcentrationTestClient
          locale={locale as Locale}
          slug={slug}
          title={title}
          description={description}
          questions={concentrationQuestions}
          results={concentrationResults}
          questionCount={concentrationQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          similarTests={[]}
        />
      </>
    );
  }

  // MBTI 정확한 테스트
  if (slug === 'mbti-accurate-test') {
    const { mbtiAccurateQuestions, mbtiAccurateResults } = await import('@/lib/mbtiAccurateData');
    const test = await getTestBySlug(slug) || {
      slug: 'mbti-accurate-test',
      title: {
        ko: '궁극의 진짜 정확한 MBTI!',
        en: 'Ultimate Accurate MBTI!',
        ja: '究極の本当に正確なMBTI！',
        'zh-CN': '终极真正准确的MBTI！',
        'zh-TW': '終極真正準確的MBTI！',
        vi: 'MBTI chính xác tối thượng!',
        id: 'MBTI Akurat Terbaik!'
      },
      description: {
        ko: '정확한 MBTI 측정! 당신의 진짜 성격 유형은?\n\n외향형? 내향형? 감각형? 직관형? 사고형? 감정형? 판단형? 인식형?\n\n간단한 테스트가 아닌, 정확도를 높인 32개 질문으로 당신의 진짜 MBTI를 찾아드립니다.\n\n16가지 성격 유형 중 당신은 어디에 속할까요?\n\n실제 상황 기반의 질문으로 85% 이상의 정확도를 자랑합니다!\n\n소요 시간 약 15분! 솔직하게 답변해주세요 🎯',
        en: 'Accurate MBTI measurement! What is your real personality type?\n\nExtrovert? Introvert? Sensing? Intuitive? Thinking? Feeling? Judging? Perceiving?\n\nNot a simple test, but 32 questions with increased accuracy to find your real MBTI.\n\nWhich of the 16 personality types do you belong to?\n\nBased on real situations, it boasts over 85% accuracy!\n\nTakes about 15 minutes! Please answer honestly 🎯',
        ja: '正確なMBTI測定！あなたの本当の性格タイプは？\n\n外向型？内向型？感覚型？直感型？思考型？感情型？判断型？知覚型？\n\n簡単なテストではなく、精度を高めた32の質問であなたの本当のMBTIを見つけます。\n\n16の性格タイプのうち、あなたはどこに属するでしょうか？\n\n実際の状況に基づく質問で85%以上の精度を誇ります！\n\n所要時間約15分！正直に答えてください 🎯',
        'zh-CN': '准确的MBTI测量！你真正的性格类型是什么？\n\n外向？内向？感觉？直觉？思考？情感？判断？感知？\n\n不是简单的测试，而是通过32个提高准确性的问题来找到你真正的MBTI。\n\n在16种性格类型中，你属于哪一种？\n\n基于真实情况的问题，准确率超过85%！\n\n大约需要15分钟！请诚实回答 🎯',
        'zh-TW': '準確的MBTI測量！你真正的性格類型是什麼？\n\n外向？內向？感覺？直覺？思考？情感？判斷？感知？\n\n不是簡單的測試，而是通過32個提高準確性的問題來找到你真正的MBTI。\n\n在16種性格類型中，你屬於哪一種？\n\n基於真實情況的問題，準確率超過85%！\n\n大約需要15分鐘！請誠實回答 🎯',
        vi: 'Đo lường MBTI chính xác! Kiểu tính cách thực sự của bạn là gì?\n\nHướng ngoại? Hướng nội? Cảm giác? Trực giác? Suy nghĩ? Cảm xúc? Phán đoán? Nhận thức?\n\nKhông phải bài kiểm tra đơn giản, mà là 32 câu hỏi với độ chính xác cao để tìm ra MBTI thực sự của bạn.\n\nTrong 16 kiểu tính cách, bạn thuộc loại nào?\n\nDựa trên tình huống thực tế, nó tự hào có độ chính xác hơn 85%!\n\nMất khoảng 15 phút! Hãy trả lời thành thật 🎯',
        id: 'Pengukuran MBTI yang akurat! Apa tipe kepribadian asli Anda?\n\nEkstrovert? Introvert? Sensing? Intuitive? Thinking? Feeling? Judging? Perceiving?\n\nBukan tes sederhana, tetapi 32 pertanyaan dengan akurasi tinggi untuk menemukan MBTI asli Anda.\n\nDari 16 tipe kepribadian, Anda termasuk yang mana?\n\nBerdasarkan situasi nyata, ia bangga memiliki akurasi lebih dari 85%!\n\nMemakan waktu sekitar 15 menit! Jawablah dengan jujur 🎯'
      },
      thumbnail: 'test_001_mbti_accurate.jpg',
      type: 'personality',
      category: 'personality',
      tags: {
        ko: ['성격', 'MBTI', '심리'],
        en: ['Personality', 'MBTI', 'Psychology'],
        ja: ['性格', 'MBTI', '心理'],
        'zh-CN': ['性格', 'MBTI', '心理'],
        'zh-TW': ['性格', 'MBTI', '心理'],
        vi: ['Tính cách', 'MBTI', 'Tâm lý'],
        id: ['Kepribadian', 'MBTI', 'Psikologi']
      },
      play_count: 0
    };

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      image: thumbnailUrl,
      url: canonicalUrl,
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis',
        logo: {
          '@type': 'ImageObject',
          url: 'https://quizoasis-coral.vercel.app/favicon.ico'
        }
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      mainEntity: {
        '@type': 'Question',
        name: title,
        text: description,
        answerCount: mbtiAccurateQuestions.length
      }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'ko' ? '홈' :
            locale === 'en' ? 'Home' :
              locale === 'ja' ? 'ホーム' :
                locale === 'zh-CN' ? '首页' :
                  locale === 'zh-TW' ? '首頁' :
                    locale === 'vi' ? 'Trang chủ' :
                      locale === 'id' ? 'Beranda' : 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: locale === 'ko' ? '테스트' :
            locale === 'en' ? 'Tests' :
              locale === 'ja' ? 'テスト' :
                locale === 'zh-CN' ? '测试' :
                  locale === 'zh-TW' ? '測試' :
                    locale === 'vi' ? 'Kiểm tra' :
                      locale === 'id' ? 'Tes' : 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}/test`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: canonicalUrl
        }
      ]
    };

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />

        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <MBTIAccurateTestClient
          locale={locale as Locale}
          slug={slug}
          title={title}
          description={description}
          questions={mbtiAccurateQuestions}
          results={mbtiAccurateResults}
          questionCount={mbtiAccurateQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          similarTests={[]}
        />
      </>
    );
  }

  // 실제 IQ 테스트
  if (slug === 'real-iq') {
    const { realIQQuestions, realIQResults } = await import('@/lib/realIQData');
    const test = await getTestBySlug(slug) || {
      slug: 'real-iq',
      title: {
        ko: '당신의 실제 IQ는?',
        en: 'What is your real IQ?',
        ja: 'あなたの実際のIQは？',
        'zh-CN': '你的实际IQ是多少？',
        'zh-TW': '你的實際IQ是多少？',
        vi: 'IQ thực tế của bạn là bao nhiêu?',
        id: 'Berapa IQ asli Anda?'
      },
      description: {
        ko: '진짜 IQ를 측정합니다!\n\n당신의 지능 지수는 몇일까요?\n\n멘사 수준의 천재? 평균? 우수?\n\n당신의 정확한 IQ를 지금 바로 확인하세요!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n집중하세요! 신중하게 답변하세요!\n단 5분이면 당신의 실제 IQ를 알 수 있습니다!',
        en: 'Measure your real IQ!\n\nWhat is your intelligence quotient?\n\nMensa-level genius? Average? Excellent?\n\nFind out your exact IQ right now!\n\nIf you can\'t solve it, press the hint button on the quiz screen!\n(But I recommend trying without hints)\n\nFocus! Answer carefully!\nYou can find out your real IQ in just 5 minutes!',
        ja: 'あなたの実際のIQを測定します！\n\nあなたの知能指数はいくつでしょうか？\n\nメンサレベルの天才？平均？優秀？\n\nあなたの正確なIQを今すぐ確認してください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\n集中してください！慎重に答えてください！\nたった5分で、あなたの実際のIQがわかります！',
        'zh-CN': '测量你的实际IQ！\n\n你的智商是多少？\n\n门萨级别的天才？平均？优秀？\n\n现在就来找出你的确切IQ！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我建议尽量不用提示来解答）\n\n集中注意力！仔细回答！\n只需5分钟，你就能知道自己的实际IQ！',
        'zh-TW': '測量你的實際IQ！\n\n你的智商是多少？\n\n門薩級別的天才？平均？優秀？\n\n現在就來找出你的確切IQ！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我建議盡量不用提示來解答）\n\n集中注意力！仔細回答！\n只需5分鐘，你就能知道自己的實際IQ！',
        vi: 'Đo IQ thực tế của bạn!\n\nChỉ số thông minh của bạn là bao nhiêu?\n\nThiên tài cấp Mensa? Trung bình? Xuất sắc?\n\nHãy tìm hiểu IQ chính xác của bạn ngay bây giờ!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nTập trung! Trả lời cẩn thận!\nChỉ trong 5 phút, bạn có thể biết IQ thực tế của mình!',
        id: 'Ukur IQ asli Anda!\n\nBerapa indeks kecerdasan Anda?\n\nJenius level Mensa? Rata-rata? Unggul?\n\nTemukan IQ tepat Anda sekarang juga!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi saya sarankan mencoba tanpa petunjuk)\n\nFokus! Jawab dengan hati-hati!\nHanya dalam 5 menit, Anda bisa mengetahui IQ asli Anda!'
      },
      thumbnail: 'test_101_real_iq.jpg',
      type: 'quiz',
      category: 'brain',
      tags: {
        ko: ['두뇌', '퀴즈', 'IQ'],
        en: ['brain', 'quiz', 'IQ'],
        ja: ['脳', 'クイズ', 'IQ'],
        'zh-CN': ['大脑', '测验', 'IQ'],
        'zh-TW': ['大腦', '測驗', 'IQ'],
        vi: ['não bộ', 'câu đố', 'IQ'],
        id: ['otak', 'kuis', 'IQ']
      },
      question_count: 12,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <RealIQTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        questions={realIQQuestions}
        results={realIQResults}
        questionCount={test.question_count}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
      />
    );
  }

  // 초고난도 퀴즈 테스트
  if (slug === 'extreme-quiz') {
    const { extremeQuizQuestions, extremeQuizResults } = await import('@/lib/extremeQuizData');
    const test = await getTestBySlug(slug) || {
      slug: 'extreme-quiz',
      title: {
        ko: '3%만 풀 수 있는 초고난도 퀴즈',
        en: 'Extreme Difficulty Quiz Only 3% Can Solve',
        ja: '3%しか解けない超難問クイズ',
        'zh-CN': '只有3%能解决的超高难度测验',
        'zh-TW': '只有3%能解決的超高難度測驗',
        vi: 'Câu đố siêu khó chỉ 3% có thể giải được',
        id: 'Kuis Kesulitan Ekstrem Hanya 3% yang Bisa Menyelesaikan'
      },
      description: {
        ko: '당신은 상위 3%에 속할 수 있을까? 지금 도전하세요!\n\n⚠️ 경고: 이 테스트는 매우 어렵습니다 ⚠️\n\n멘사 회원도 어려워하는 초고난도 문제!\n97%의 사람들이 절반도 못 맞힙니다.\n천재들만이 도달할 수 있는 영역!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n집중하세요! 포기하지 마세요!\n친구들과 점수를 겨뤄보세요!',
        en: 'Extreme difficulty quiz that only the top 3% of humanity can solve!\n\nTests the limits of mathematics, logic, reasoning, pattern recognition... all areas.\n\nComposed of problems that 97% of people can\'t even get half right.\n\nAre you a true genius? Find out right now!\n\nIf you can\'t solve it, press the hint button on the quiz screen!\n(But we recommend trying to solve it without hints)\n\nIn just 10 minutes, you can know your true ability!',
        ja: '人類上位3%しか解けない超難問クイズ！\n\n数学、論理、推理、パターン認識...すべての領域の極限を試します。\n\n97%の人が半分も正解できない問題で構成されています。\n\nあなたは真の天才ですか？今すぐ確認してみてください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\nたった10分で、あなたの本当の実力を知ることができます！',
        'zh-CN': '只有人类前3%能解决的超高难度测验！\n\n测试数学、逻辑、推理、模式识别...所有领域的极限。\n\n由97%的人连一半都答不出的问题组成。\n\n你是真正的天才吗？现在就来确认吧！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我们建议尽量不用提示来解答）\n\n只需10分钟，你就能知道自己的真正实力！',
        'zh-TW': '只有人類前3%能解決的超高難度測驗！\n\n測試數學、邏輯、推理、模式識別...所有領域的極限。\n\n由97%的人連一半都答不出的問題組成。\n\n你是真正的天才嗎？現在就來確認吧！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我們建議盡量不用提示來解答）\n\n只需10分鐘，你就能知道自己的真正實力！',
        vi: 'Câu đố siêu khó chỉ có top 3% nhân loại mới giải được!\n\nKiểm tra giới hạn của toán học, logic, lý luận, nhận dạng mẫu... tất cả các lĩnh vực.\n\nĐược tạo thành từ những vấn đề mà 97% mọi người không thể trả lời đúng được một nửa.\n\nBạn có phải là thiên tài thực sự? Hãy tìm hiểu ngay bây giờ!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng chúng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nChỉ trong 10 phút, bạn có thể biết khả năng thực sự của mình!',
        id: 'Kuis kesulitan ekstrem yang hanya bisa diselesaikan oleh top 3% umat manusia!\n\nMenguji batas matematika, logika, penalaran, pengenalan pola... semua bidang.\n\nTerdiri dari masalah yang 97% orang bahkan tidak bisa menjawab setengahnya dengan benar.\n\nApakah Anda jenius sejati? Cari tahu sekarang juga!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi kami sarankan untuk mencoba menyelesaikan tanpa petunjuk)\n\nHanya dalam 10 menit, Anda bisa mengetahui kemampuan sejati Anda!'
      },
      thumbnail: 'test_102_extreme_quiz.jpg',
      type: 'quiz',
      category: 'brain',
      tags: {
        ko: ['두뇌', '퀴즈', 'IQ', '초고난도'],
        en: ['brain', 'quiz', 'IQ', 'extreme'],
        ja: ['脳', 'クイズ', 'IQ', '超難問'],
        'zh-CN': ['大脑', '测验', 'IQ', '超高难度'],
        'zh-TW': ['大腦', '測驗', 'IQ', '超高難度'],
        vi: ['não bộ', 'câu đố', 'IQ', 'siêu khó'],
        id: ['otak', 'kuis', 'IQ', 'ekstrem']
      },
      question_count: 12,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <ExtremeQuizTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        questions={extremeQuizQuestions}
        results={extremeQuizResults}
        questionCount={test.question_count}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
      />
    );
  }

  // 멘사 극한 도전 퀴즈 테스트
  if (slug === 'mensa-extreme') {
    const { mensaExtremeQuestions, mensaExtremeResults } = await import('@/lib/mensaExtremeData');
    const test = await getTestBySlug(slug) || {
      slug: 'mensa-extreme',
      title: {
        ko: 'IQ 148 이상만 맞히는 문제',
        en: 'Problems Only IQ 148+ Can Solve',
        ja: 'IQ 148以上のみ解ける問題',
        'zh-CN': '只有IQ 148以上才能解决的问题',
        'zh-TW': '只有IQ 148以上才能解決的問題',
        vi: 'Chỉ có IQ 148+ mới giải được',
        id: 'Hanya IQ 148+ yang bisa menyelesaikan'
      },
      description: {
        ko: '멘사 회원도 어려워하는 극한의 도전! IQ 148 이상, 인구의 상위 0.1%만이 도달하는 영역의 문제들입니다.\n\n수학, 논리, 추론, 패턴 인식... 모든 영역의 극한을 시험합니다.\n\n99.9%의 사람들이 절반도 못 맞히는 문제들로 구성되어 있습니다.\n\n당신은 진정한 천재인가요? 지금 바로 확인해보세요!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n단 12분이면 당신의 진짜 지능을 알 수 있습니다!',
        en: 'Extreme challenge that even Mensa members find difficult! IQ 148+, only the top 0.1% of the population reaches this level.\n\nTests the limits of mathematics, logic, reasoning, pattern recognition... all areas.\n\nComposed of problems that 99.9% of people can\'t even get half right.\n\nAre you a true genius? Find out right now!\n\nIf you can\'t solve it, press the hint button on the quiz screen!\n(But we recommend trying to solve it without hints)\n\nIn just 12 minutes, you can know your true intelligence!',
        ja: 'メンサ会員も困難に感じる極限の挑戦！IQ 148以上、人口の上位0.1%のみが到達する領域の問題です。\n\n数学、論理、推理、パターン認識...すべての領域の極限を試します。\n\n99.9%の人が半分も正解できない問題で構成されています。\n\nあなたは真の天才ですか？今すぐ確認してみてください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\nたった12分で、あなたの本当の知能がわかります！',
        'zh-CN': '连门萨会员都觉得困难的极限挑战！IQ 148以上，只有人口前0.1%能达到的领域的问题。\n\n测试数学、逻辑、推理、模式识别...所有领域的极限。\n\n由99.9%的人连一半都答不出的问题组成。\n\n你是真正的天才吗？现在就来确认吧！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我们建议尽量不用提示来解答）\n\n只需12分钟，你就能知道自己的真实智力！',
        'zh-TW': '連門薩會員都覺得困難的極限挑戰！IQ 148以上，只有人口前0.1%能達到的領域的問題。\n\n測試數學、邏輯、推理、模式識別...所有領域的極限。\n\n由99.9%的人連一半都答不出的問題組成。\n\n你是真正的天才嗎？現在就來確認吧！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我們建議盡量不用提示來解答）\n\n只需12分鐘，你就能知道自己的真實智力！',
        vi: 'Thử thách cực hạn mà ngay cả thành viên Mensa cũng thấy khó! IQ 148+, chỉ có 0.1% dân số đạt được mức này.\n\nKiểm tra giới hạn của toán học, logic, lý luận, nhận dạng mẫu... tất cả các lĩnh vực.\n\nĐược tạo thành từ những vấn đề mà 99.9% mọi người không thể trả lời đúng được một nửa.\n\nBạn có phải là thiên tài thực sự? Hãy tìm hiểu ngay bây giờ!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng chúng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nChỉ trong 12 phút, bạn có thể biết trí thông minh thực sự của mình!',
        id: 'Tantangan ekstrem yang bahkan anggota Mensa pun merasa sulit! IQ 148+, hanya 0.1% populasi yang mencapai level ini.\n\nMenguji batas matematika, logika, penalaran, pengenalan pola... semua bidang.\n\nTerdiri dari masalah yang 99.9% orang bahkan tidak bisa menjawab setengahnya dengan benar.\n\nApakah Anda jenius sejati? Cari tahu sekarang juga!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi kami sarankan untuk mencoba menyelesaikan tanpa petunjuk)\n\nHanya dalam 12 menit, Anda bisa mengetahui kecerdasan sejati Anda!'
      },
      thumbnail: 'test_103_mensa_extreme.jpg',
      type: 'quiz',
      category: 'brain',
      tags: {
        ko: ['두뇌', '퀴즈', 'IQ'],
        en: ['brain', 'quiz', 'IQ'],
        ja: ['脳', 'クイズ', 'IQ'],
        'zh-CN': ['大脑', '测验', 'IQ'],
        'zh-TW': ['大腦', '測驗', 'IQ'],
        vi: ['não bộ', 'câu đố', 'IQ'],
        id: ['otak', 'kuis', 'IQ']
      },
      question_count: 12,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <MensaExtremeTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        questions={mensaExtremeQuestions}
        results={mensaExtremeResults}
        questionCount={test.question_count}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
      />
    );
  }

  // 관상 보기 테스트
  if (slug === 'face-reading') {
    const test = await getTestBySlug(slug) || {
      slug: 'face-reading',
      title: {
        ko: '관상 보기',
        en: 'Face Reading',
        ja: '観相診断',
        'zh-CN': '面相测试',
        'zh-TW': '面相測試',
        vi: 'Xem tướng',
        id: 'Baca Wajah'
      },
      description: {
        ko: '당신의 얼굴에 숨겨진 운명을 읽어드립니다\n\n얼굴은 거짓말을 하지 않습니다. 이마, 눈, 코, 입, 턱... 얼굴의 각 부위는 당신의 성격과 운명을 말해줍니다.\n\n천 년 동안 이어져 온 관상학의 지혜로 당신의 운명을 분석합니다.\n\n재물운은? 연애운은? 성공운은?\n\n지금 바로 당신의 얼굴이 말하는 진실을 확인하세요!',
        en: 'Read the destiny hidden in your face\n\nFaces don\'t lie. Forehead, eyes, nose, mouth, chin... Each part of your face tells your personality and destiny.\n\nAnalyze your destiny with the wisdom of physiognomy that has been passed down for a thousand years.\n\nWealth fortune? Love fortune? Success fortune?\n\nFind out the truth your face tells right now!',
        ja: 'あなたの顔に隠された運命を読み取ります\n\n顔は嘘をつきません。額、目、鼻、口、顎...顔の各部分があなたの性格と運命を語ります。\n\n千年間続いてきた観相学の知恵であなたの運命を分析します。\n\n財運は？恋愛運は？成功運は？\n\n今すぐあなたの顔が語る真実を確認してください！',
        'zh-CN': '解读你脸上隐藏的命运\n\n脸不会说谎。额头、眼睛、鼻子、嘴巴、下巴...脸的每个部位都诉说着你的性格和命运。\n\n用千年传承的面相学智慧分析你的命运。\n\n财运如何？恋爱运如何？成功运如何？\n\n现在就来确认你的脸诉说的真相吧！',
        'zh-TW': '解讀你臉上隱藏的命運\n\n臉不會說謊。額頭、眼睛、鼻子、嘴巴、下巴...臉的每個部位都訴說著你的性格和命運。\n\n用千年傳承的面相學智慧分析你的命運。\n\n財運如何？戀愛運如何？成功運如何？\n\n現在就來確認你的臉訴說的真相吧！',
        vi: 'Đọc vận mệnh ẩn giấu trên khuôn mặt bạn\n\nKhuôn mặt không nói dối. Trán, mắt, mũi, miệng, cằm... Mỗi bộ phận trên khuôn mặt đều nói lên tính cách và vận mệnh của bạn.\n\nPhân tích vận mệnh của bạn bằng trí tuệ tướng học đã được truyền lại qua hàng nghìn năm.\n\nVận tài lộc? Vận tình duyên? Vận thành công?\n\nHãy tìm hiểu sự thật mà khuôn mặt bạn nói ngay bây giờ!',
        id: 'Baca takdir tersembunyi di wajah Anda\n\nWajah tidak berbohong. Dahi, mata, hidung, mulut, dagu... Setiap bagian wajah menceritakan kepribadian dan takdir Anda.\n\nAnalisis takdir Anda dengan kebijaksanaan fisiognomi yang telah diturunkan selama ribuan tahun.\n\nKeberuntungan kekayaan? Keberuntungan cinta? Keberuntungan sukses?\n\nTemukan kebenaran yang diceritakan wajah Anda sekarang juga!'
      },
      thumbnail: 'I_offe_ palm_reading_services.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴'],
        en: ['face'],
        ja: ['顔'],
        'zh-CN': ['面相'],
        'zh-TW': ['面相'],
        vi: ['khuôn mặt'],
        id: ['wajah']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <FaceReadingTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 얼굴로 보는 올해 나의 연애운 테스트
  if (slug === 'face-love-fortune') {
    const test = await getTestBySlug(slug) || {
      slug: 'face-love-fortune',
      title: {
        ko: '얼굴로 보는 올해 나의 연애운',
        en: 'My Love Fortune This Year by Face Reading',
        ja: '顔で見る今年の私の恋愛運',
        'zh-CN': '从面相看今年的恋爱运',
        'zh-TW': '從面相看今年的戀愛運',
        vi: 'Vận Tình Duyên Năm Nay Qua Khuôn Mặt',
        id: 'Nasib Cinta Tahun Ini Melalui Wajah'
      },
      description: {
        ko: '올해 당신에게 사랑은 찾아올까요?\n\n짝사랑? 썸? 연애? 결혼?\n당신의 얼굴에서 올해 연애운을 읽어드립니다.\n\n언제 어디서 인연을 만날까요?\n그 사람은 어떤 스타일일까요?\n주의해야 할 시기는?\n당신의 올해 연애운을 정확하게 예측합니다!',
        en: 'Will love find you this year?\n\nCrush? Flirting? Dating? Marriage?\nWe read your love fortune this year from your face.\n\nWhen and where will you meet your destiny?\nWhat style will that person be?\nWhat period should you be careful?\nWe accurately predict your love fortune this year!',
        ja: '今年あなたに愛は訪れるでしょうか？\n\n片思い？未完成？恋愛？結婚？\nあなたの顔から今年の恋愛運を読み取ります。\n\nいつどこで縁に出会うでしょうか？\nその人はどんなスタイルでしょうか？\n注意すべき時期は？\nあなたの今年の恋愛運を正確に予測します！',
        'zh-CN': '今年爱情会找到你吗？\n\n暗恋？暧昧？恋爱？结婚？\n从你的面相读取今年的恋爱运。\n\n何时何地会相遇？\n那个人会是什么风格？\n需要注意的时期是？\n准确预测你今年的恋爱运！',
        'zh-TW': '今年愛情會找到你嗎？\n\n暗戀？曖昧？戀愛？結婚？\n從你的面相讀取今年的戀愛運。\n\n何時何地會相遇？\n那個人會是什麼風格？\n需要注意的時期是？\n準確預測你今年的戀愛運！',
        vi: 'Tình yêu có tìm đến bạn trong năm nay không?\n\nTình đơn phương? Quan hệ mơ hồ? Hẹn hò? Kết hôn?\nChúng tôi đọc vận tình duyên năm nay từ khuôn mặt bạn.\n\nKhi nào và ở đâu bạn sẽ gặp định mệnh?\nNgười đó sẽ là kiểu người như thế nào?\nThời kỳ nào cần cẩn thận?\nChúng tôi dự đoán chính xác vận tình duyên năm nay của bạn!',
        id: 'Akankah cinta menemukan Anda tahun ini?\n\nCinta sepihak? Hubungan samar? Berkencan? Menikah?\nKami membaca nasib cinta tahun ini dari wajah Anda.\n\nKapan dan di mana Anda akan bertemu takdir?\nSeperti apa gaya orang itu?\nPeriode apa yang harus Anda waspadai?\nKami memprediksi dengan akurat nasib cinta Anda tahun ini!'
      },
      thumbnail: 'Face_Love_Fortune.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴', '연애'],
        en: ['face', 'love'],
        ja: ['顔', '恋愛'],
        'zh-CN': ['面相', '恋爱'],
        'zh-TW': ['面相', '戀愛'],
        vi: ['khuôn mặt', 'tình yêu'],
        id: ['wajah', 'cinta']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <FaceLoveFortuneTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 얼굴로 보는 추천 직업 테스트
  if (slug === 'face-occupations') {
    const test = await getTestBySlug(slug) || {
      slug: 'face-occupations',
      title: {
        ko: '얼굴로 보는 추천 직업',
        en: 'Recommended Occupations by Face Reading',
        ja: '顔で見る推奨職業',
        'zh-CN': '从面相看推荐职业',
        'zh-TW': '從面相看推薦職業',
        vi: 'Nghề Nghiệp Đề Xuất Qua Khuôn Mặt',
        id: 'Pekerjaan yang Direkomendasikan Melalui Wajah'
      },
      description: {
        ko: '당신의 얼굴이 말하는 천직을 찾아드립니다\n\n리더형? 크리에이터형? 분석가형?\n당신의 얼굴에서 타고난 재능을 읽어냅니다.\n\n어떤 일에 소질이 있을까요?\n성공 확률이 높은 직업은? 숨겨진 가능성은?\n당신에게 딱 맞는 직업을 추천해드립니다!',
        en: 'Find the career your face speaks of\n\nLeader Type? Creator Type? Analyst Type?\nWe read your innate talents from your face.\n\nWhat are you good at?\nWhat occupations have high success rates? What are your hidden potentials?\nWe recommend the perfect job for you!',
        ja: 'あなたの顔が語る天職を見つけます\n\nリーダー型？クリエイター型？アナリスト型？\nあなたの顔から生まれ持った才能を読み取ります。\n\nどんな仕事に才能があるでしょうか？\n成功率が高い職業は？隠れた可能性は？\nあなたにぴったりの職業を推薦します！',
        'zh-CN': '为你找到面相所展现的天职\n\n领导型？创造者型？分析型？\n我们从你的面相读取天赋才能。\n\n你适合什么工作？\n哪些职业成功率高？你有哪些隐藏潜能？\n我们为你推荐最合适的职业！',
        'zh-TW': '為你找到面相所展現的天職\n\n領導型？創造者型？分析型？\n我們從你的面相讀取天賦才能。\n\n你適合什麼工作？\n哪些職業成功率高？你有哪些隱藏潛能？\n我們為你推薦最合適的職業！',
        vi: 'Tìm công việc lý tưởng mà khuôn mặt bạn nói lên\n\nKiểu Lãnh Đạo? Kiểu Sáng Tạo? Kiểu Phân Tích?\nChúng tôi đọc tài năng bẩm sinh của bạn từ khuôn mặt.\n\nBạn giỏi những gì?\nNhững nghề nghiệp nào có tỷ lệ thành công cao? Tiềm năng ẩn giấu của bạn là gì?\nChúng tôi đề xuất công việc hoàn hảo cho bạn!',
        id: 'Temukan pekerjaan yang cocok yang wajah Anda katakan\n\nTipe Pemimpin? Tipe Kreator? Tipe Analis?\nKami membaca bakat bawaan Anda dari wajah Anda.\n\nApa yang Anda kuasai?\nPekerjaan apa yang memiliki tingkat kesuksesan tinggi? Apa potensi tersembunyi Anda?\nKami merekomendasikan pekerjaan yang sempurna untuk Anda!'
      },
      thumbnail: 'Recommended_Occupations.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴', '직업'],
        en: ['face', 'career'],
        ja: ['顔', '職業'],
        'zh-CN': ['面相', '职业'],
        'zh-TW': ['面相', '職業'],
        vi: ['khuôn mặt', 'nghề nghiệp'],
        id: ['wajah', 'karier']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <FaceOccupationsTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 얼굴로 보는 나의 진짜 심리상태 테스트
  if (slug === 'face-psych-state') {
    const test = await getTestBySlug(slug) || {
      slug: 'face-psych-state',
      title: {
        ko: '얼굴로 보는 나의 진짜 심리상태',
        en: 'Your True Psychological State by Face',
        ja: '顔でわかる本当の心理状態',
        'zh-CN': '从面相看你的真实心理状态',
        'zh-TW': '從面相看你的真實心理狀態',
        vi: 'Trạng Thái Tâm Lý Thật Sự Qua Khuôn Mặt',
        id: 'Keadaan Psikologis Sejati dari Wajah'
      },
      description: {
        ko: '"당신의 표정이 말하는 진실을 읽어드립니다"\n\n무의식중에 드러나는 표정, 눈빛, 미세한 근육의 움직임...\n얼굴은 당신의 진짜 감정을 숨기지 못합니다.\n\n지금 행복한가요? 스트레스는? 숨기고 있는 감정은?\n당신의 진짜 심리상태를 정확하게 진단해 드립니다.',
        en: '"We read the truth your expression is telling"\n\nSubtle expressions, eye gaze, and micro muscle movements...\nYour face cannot hide your true feelings.\n\nAre you happy now? Stressed? What are you hiding?\nWe assess your true psychological state with care.',
        ja: '「表情が語る真実を読み解きます」\n\n無意識に現れる表情や視線、微細な筋肉の動き…\n顔は本当の感情を隠しきれません。\n\n今、幸せですか？ストレスは？隠している感情は？\nあなたの本当の心理状態を丁寧に診断します。',
        'zh-CN': '“我们读懂你表情所诉说的真相”\n\n潜意识中流露的表情、眼神与微表情…\n面容无法完全掩盖真实情绪。\n\n此刻你快乐吗？压力如何？在隐藏什么？\n我们细致评估你的真实心理状态。',
        'zh-TW': '「我們讀懂你表情所訴說的真相」\n\n潛意識中流露的表情、眼神與微表情…\n面容無法完全隱藏真實情緒。\n\n此刻你快樂嗎？壓力如何？在隱藏什麼？\n我們細緻評估你的真實心理狀態。',
        vi: '“Chúng tôi đọc sự thật mà nét mặt bạn nói lên”\n\nBiểu cảm tinh tế, ánh mắt và chuyển động cơ nhỏ…\nKhuôn mặt không thể giấu cảm xúc thật.\n\nBạn có đang hạnh phúc? Căng thẳng? Đang che giấu điều gì?\nChúng tôi đánh giá trạng thái tâm lý thật sự của bạn.',
        id: '“Kami membaca kebenaran yang dikatakan ekspresimu”\n\nEkspresi halus, tatapan mata, dan gerak otot mikro…\nWajah tak bisa sepenuhnya menyembunyikan perasaan.\n\nApakah kamu bahagia? Stres? Menyembunyikan sesuatu?\nKami menilai keadaan psikologismu yang sesungguhnya.'
      },
      thumbnail: 'Facial_Psychological_State.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴', '심리'],
        en: ['face', 'psychology'],
        ja: ['顔', '心理'],
        'zh-CN': ['面相', '心理'],
        'zh-TW': ['面相', '心理'],
        vi: ['khuôn mặt', 'tâm lý'],
        id: ['wajah', 'psikologi']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <FacePsychStateTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // AI가 보는 솔직한 나의 얼굴 평가 테스트
  if (slug === 'honest-facial-evaluation') {
    const test = await getTestBySlug(slug) || {
      slug: 'honest-facial-evaluation',
      title: {
        ko: 'AI가 보는 솔직한 나의 얼굴 평가',
        en: 'AI\'s Honest Facial Evaluation',
        ja: 'AIが見る正直な私の顔評価',
        'zh-CN': 'AI诚实的面部评估',
        'zh-TW': 'AI誠實的面部評估',
        vi: 'Đánh Giá Khuôn Mặt Thành Thật Của AI',
        id: 'Evaluasi Wajah Jujur dari AI'
      },
      description: {
        ko: '"AI의 눈으로 본 당신의 매력 포인트는?"\n\n첫인상 점수는?\n매력적인 부분은?\n개선하면 좋을 점은?\n\nAI가 솔직하게 분석해서 평가해 드립니다.\n\n용기 내서 확인해보세요. 당신이 몰랐던 매력을 발견할 수도!',
        en: '"What are your charm points from AI\'s perspective?"\n\nFirst impression score?\nAttractive features?\nWhat to improve?\n\nAI analyzes and evaluates honestly.\n\nBe brave and check it out. You might discover charm you didn\'t know you had!',
        ja: '「AIの目から見たあなたの魅力ポイントは？」\n\n第一印象スコアは？\n魅力的な部分は？\n改善すると良い点は？\n\nAIが正直に分析して評価します。\n\n勇気を出して確認してみてください。あなたが知らなかった魅力を発見できるかもしれません！',
        'zh-CN': '“AI眼中的你的魅力点是什么？”\n\n第一印象分数？\n有魅力的部分？\n可以改进的点？\n\nAI会诚实地分析和评估。\n\n鼓起勇气确认一下吧。你可能会发现自己不知道的魅力！',
        'zh-TW': '「AI眼中的你的魅力點是什麼？」\n\n第一印象分數？\n有魅力的部分？\n可以改進的點？\n\nAI會誠實地分析和評估。\n\n鼓起勇氣確認一下吧。你可能會發現自己不知道的魅力！',
        vi: '"Điểm thu hút của bạn từ góc nhìn của AI là gì?"\n\nĐiểm ấn tượng đầu tiên?\nĐặc điểm hấp dẫn?\nĐiểm cần cải thiện?\n\nAI phân tích và đánh giá một cách thành thật.\n\nHãy mạnh dạn kiểm tra. Bạn có thể khám phá sức hút mà mình không biết!',
        id: '"Apa poin daya tarik Anda dari perspektif AI?"\n\nSkor kesan pertama?\nFitur menarik?\nApa yang perlu diperbaiki?\n\nAI menganalisis dan mengevaluasi dengan jujur.\n\nBerani dan periksa. Anda mungkin menemukan pesona yang tidak Anda ketahui!'
      },
      thumbnail: 'Honest_facial_evaluation.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴'],
        en: ['face'],
        ja: ['顔'],
        'zh-CN': ['面相'],
        'zh-TW': ['面相'],
        vi: ['khuôn mặt'],
        id: ['wajah']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <HonestFacialEvaluationTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 얼굴로 보는 올해 나의 운세 테스트
  if (slug === 'face-fortune') {
    const test = await getTestBySlug(slug) || {
      slug: 'face-fortune',
      title: {
        ko: '얼굴로 보는 올해 나의 운세',
        en: 'My Fortune This Year by Face Reading',
        ja: '顔で見る今年の私の運勢',
        'zh-CN': '从面相看今年的运势',
        'zh-TW': '從面相看今年的運勢',
        vi: 'Vận May Năm Nay Qua Khuôn Mặt',
        id: 'Nasib Tahun Ini Melalui Wajah'
      },
      description: {
        ko: '올해 당신의 운명은 어떻게 펼쳐질까요?\n\n재물운, 건강운, 연애운, 사업운, 학업운... 올해 당신에게 찾아올 모든 운을 분석합니다.\n\n어느 달이 가장 좋을까요? 조심해야 할 시기는? 기회는 언제 올까요?\n\n당신의 얼굴에서 올해 운세를 정확하게 읽어드립니다!',
        en: 'How will your destiny unfold this year?\n\nWealth fortune, health fortune, love fortune, business fortune, study fortune... We analyze all the fortunes that will come to you this year.\n\nWhich month will be the best? What period should you be careful? When will opportunities come?\n\nWe accurately read your fortune this year from your face!',
        ja: '今年あなたの運命はどのように展開するでしょうか？\n\n財運、健康運、恋愛運、事業運、学業運...今年あなたに訪れるすべての運を分析します。\n\nどの月が最も良いでしょうか？注意すべき時期は？機会はいつ来るでしょうか？\n\nあなたの顔から今年の運勢を正確に読み取ります！',
        'zh-CN': '今年你的命运将如何展开？\n\n财运、健康运、恋爱运、事业运、学业运...我们分析今年将来到你身边的所有运势。\n\n哪个月最好？需要注意的时期是？机会何时来？\n\n从你的面相准确读取今年的运势！',
        'zh-TW': '今年你的命運將如何展開？\n\n財運、健康運、戀愛運、事業運、學業運...我們分析今年將來到你身邊的所有運勢。\n\n哪個月最好？需要注意的時期是？機會何時來？\n\n從你的面相準確讀取今年的運勢！',
        vi: 'Số phận của bạn sẽ diễn ra như thế nào trong năm nay?\n\nVận tài chính, vận sức khỏe, vận tình yêu, vận kinh doanh, vận học tập... Chúng tôi phân tích tất cả các vận may sẽ đến với bạn trong năm nay.\n\nTháng nào sẽ tốt nhất? Thời kỳ nào cần cẩn thận? Khi nào cơ hội sẽ đến?\n\nChúng tôi đọc chính xác vận may năm nay từ khuôn mặt bạn!',
        id: 'Bagaimana nasib Anda akan terungkap tahun ini?\n\nKeberuntungan kekayaan, kesehatan, cinta, bisnis, studi... Kami menganalisis semua keberuntungan yang akan datang kepada Anda tahun ini.\n\nBulan mana yang paling baik? Periode apa yang harus diwaspadai? Kapan peluang akan datang?\n\nKami membaca dengan akurat nasib tahun ini dari wajah Anda!'
      },
      thumbnail: 'Face_Fortune_Telling.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴'],
        en: ['face'],
        ja: ['顔'],
        'zh-CN': ['面相'],
        'zh-TW': ['面相'],
        vi: ['khuôn mặt'],
        id: ['wajah']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <FaceFortuneTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 얼굴로 보는 나의 전생 테스트
  if (slug === 'face-reincarnation') {
    const test = await getTestBySlug(slug) || {
      slug: 'face-reincarnation',
      title: {
        ko: '얼굴로 보는 나의 전생',
        en: 'My Previous Life by Face Reading',
        ja: '顔で見る私の前世',
        'zh-CN': '从面相看我的前世',
        'zh-TW': '從面相看我的前世',
        vi: 'Tiền Kiếp Của Tôi Qua Khuôn Mặt',
        id: 'Kehidupan Masa Lalu Saya Melalui Wajah'
      },
      description: {
        ko: '당신은 전생에 누구였을까요?\n\n왕족? 전사? 예술가? 승려?\n당신의 얼굴에는 전생의 흔적이 남아있습니다.\n\n어느 시대를 살았을까요?\n어떤 삶을 살았을까요?\n왜 지금 이 모습으로 태어났을까요?\n이번 생은 몇 번째 생일까요?\n신비로운 전생 분석으로 당신의 영혼의 여정을 따라가 봅니다!',
        en: 'Who were you in your previous life?\n\nRoyalty? Warrior? Artist? Monk?\nYour face carries traces of your past life.\n\nWhich era did you live in?\nWhat kind of life did you lead?\nWhy were you born in this form?\nHow many times have you been reincarnated?\nFollow your soul\'s journey through mysterious past life analysis!',
        ja: 'あなたは前世で誰でしたか？\n\n王族？戦士？芸術家？僧侶？\nあなたの顔には前世の痕跡が残っています。\n\nどの時代を生きましたか？\nどんな人生を送りましたか？\nなぜ今この姿で生まれたのでしょうか？\n今回の人生は何回目の生ですか？\n神秘的な前世分析であなたの魂の旅を辿ります！',
        'zh-CN': '你的前世是谁？\n\n王族？战士？艺术家？僧侣？\n你的脸上留有前世的痕迹。\n\n你生活在哪个时代？\n你过着怎样的生活？\n为什么以现在的形态出生？\n这是第几世？\n通过神秘的前世分析，追溯你灵魂的旅程！',
        'zh-TW': '你的前世是誰？\n\n王族？戰士？藝術家？僧侶？\n你的臉上留有前世的痕跡。\n\n你生活在哪個時代？\n你過著怎樣的生活？\n為什麼以現在的形態出生？\n這是第幾世？\n通過神秘的前世分析，追溯你靈魂的旅程！',
        vi: 'Bạn là ai trong kiếp trước?\n\nHoàng tộc? Chiến binh? Nghệ sĩ? Tu sĩ?\nKhuôn mặt bạn mang dấu vết của kiếp trước.\n\nBạn sống ở thời đại nào?\nBạn đã sống cuộc đời như thế nào?\nTại sao bạn được sinh ra trong hình dạng này?\nĐây là kiếp thứ mấy của bạn?\nTheo dõi hành trình linh hồn của bạn qua phân tích kiếp trước thần bí!',
        id: 'Siapakah Anda dalam kehidupan sebelumnya?\n\nBangsawan? Prajurit? Seniman? Biksu?\nWajah Anda membawa jejak kehidupan masa lalu Anda.\n\nDi era mana Anda hidup?\nKehidupan seperti apa yang Anda jalani?\nMengapa Anda dilahirkan dalam bentuk ini?\nBerapa kali Anda telah bereinkarnasi?\nIkuti perjalanan jiwa Anda melalui analisis kehidupan masa lalu yang misterius!'
      },
      thumbnail: 'Face_Reincarnation.jpg',
      type: 'face',
      category: 'face',
      tags: {
        ko: ['얼굴'],
        en: ['face'],
        ja: ['顔'],
        'zh-CN': ['面相'],
        'zh-TW': ['面相'],
        vi: ['khuôn mặt'],
        id: ['wajah']
      },
      question_count: 0,
      play_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    return (
      <FaceReincarnationTestClient
        locale={locale}
        slug={test.slug}
        title={test.title[locale as keyof typeof test.title] || test.title.ko}
        description={test.description[locale as keyof typeof test.description] || test.description.ko}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]}
      />
    );
  }

  // 두뇌 퀴즈 테스트
  if (slug === 'brain-quiz-test') {
    const { brainQuizQuestions, brainQuizResults } = await import('@/lib/brainQuizData');
    const test = await getTestBySlug(slug) || {
      slug: 'brain-quiz-test',
      title: {
        ko: '당신의 두뇌를 깨워줄 두뇌 자극 퀴즈!',
        en: 'Brain Stimulating Quiz to Wake Up Your Mind!',
        ja: 'あなたの脳を覚醒させる脳刺激クイズ！',
        'zh-CN': '唤醒你大脑的脑力刺激测验！',
        'zh-TW': '喚醒你大腦的腦力刺激測驗！',
        vi: 'Câu đố kích thích não bộ để đánh thức tâm trí bạn!',
        id: 'Kuis Stimulasi Otak untuk Membangunkan Pikiran Anda!'
      },
      description: {
        ko: '당신의 두뇌, 얼마나 깨어있나요? 지금 바로 테스트!\n\n논리력? 계산력? 언어 감각? 공간 지각? 당신의 두뇌는 어떤 영역이 가장 발달했을까요?\n\n친구들과 함께 도전하고 점수를 비교해보세요!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n단 5분이면 당신의 점수와 두뇌 유형을 알 수 있습니다!',
        en: 'How awake is your brain? Test it right now!\n\nLogic? Calculation? Language sense? Spatial perception? Which area of your brain is most developed?\n\nChallenge with friends and compare scores!\n\nIf you can\'t solve it, press the hint button on the quiz screen!\n(But we recommend trying to solve it without hints)\n\nIn just 5 minutes, you can know your score and brain type!',
        ja: 'あなたの脳はどのくらい覚醒していますか？今すぐテスト！\n\n論理力？計算力？言語感覚？空間知覚？あなたの脳のどの領域が最も発達しているでしょうか？\n\n友達と一緒に挑戦してスコアを比較してみてください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\nたった5分で、あなたのスコアと脳タイプがわかります！',
        'zh-CN': '你的大脑有多清醒？现在就来测试！\n\n逻辑力？计算力？语言感觉？空间知觉？你的大脑哪个领域最发达？\n\n和朋友一起挑战，比较分数！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我们建议尽量不用提示来解答）\n\n只需5分钟，你就能知道自己的分数和大脑类型！',
        'zh-TW': '你的大腦有多清醒？現在就來測試！\n\n邏輯力？計算力？語言感覺？空間知覺？你的大腦哪個領域最發達？\n\n和朋友一起挑戰，比較分數！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我們建議盡量不用提示來解答）\n\n只需5分鐘，你就能知道自己的分數和大腦類型！',
        vi: 'Bộ não của bạn có tỉnh táo đến mức nào? Hãy kiểm tra ngay bây giờ!\n\nLogic? Tính toán? Cảm giác ngôn ngữ? Nhận thức không gian? Lĩnh vực nào của não bộ bạn phát triển nhất?\n\nThử thách cùng bạn bè và so sánh điểm số!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng chúng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nChỉ trong 5 phút, bạn có thể biết điểm số và loại não bộ của mình!',
        id: 'Seberapa sadar otak Anda? Uji sekarang juga!\n\nLogika? Perhitungan? Rasa bahasa? Persepsi spasial? Area otak mana yang paling berkembang?\n\nTantang bersama teman dan bandingkan skor!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi kami sarankan untuk mencoba menyelesaikan tanpa petunjuk)\n\nHanya dalam 5 menit, Anda bisa mengetahui skor dan tipe otak Anda!'
      },
      thumbnail: 'test_066_brain_quiz.jpg',
      type: 'quiz',
      category: 'brain',
      tags: {
        ko: ['두뇌', '퀴즈', 'IQ'],
        en: ['Brain', 'Quiz', 'IQ'],
        ja: ['脳', 'クイズ', 'IQ'],
        'zh-CN': ['大脑', '测验', 'IQ'],
        'zh-TW': ['大腦', '測驗', 'IQ'],
        vi: ['Não bộ', 'Câu đố', 'IQ'],
        id: ['Otak', 'Kuis', 'IQ']
      },
      play_count: 0
    };

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    return (
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Quiz',
              name: title,
              description: description,
              image: thumbnailUrl,
              url: canonicalUrl,
              author: {
                '@type': 'Organization',
                name: 'QuizOasis'
              },
              publisher: {
                '@type': 'Organization',
                name: 'QuizOasis',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://quizoasis-coral.vercel.app/logo.png'
                }
              },
              datePublished: '2024-01-01',
              dateModified: new Date().toISOString(),
              mainEntity: {
                '@type': 'Question',
                name: title,
                text: description
              }
            })
          }}
        />
        <BrainQuizTestClient
          locale={locale}
          slug={slug}
          title={title}
          description={description}
          questions={brainQuizQuestions}
          results={brainQuizResults}
          questionCount={brainQuizQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </div>
    );
  }

  // 찰나의 순간 의사결정 테스트
  if (slug === 'quick-decision-test') {
    const { quickDecisionQuestions, quickDecisionResults } = await import('@/lib/quickDecisionData');
    const test = await getTestBySlug(slug) || {
      slug: 'quick-decision-test',
      title: {
        ko: '찰나의 순간, 당신의 의사 결정은?',
        en: 'In a split second, what is your decision?',
        ja: '刹那の瞬間、あなたの意思決定は？',
        'zh-CN': '刹那的瞬间，你的决定是什么？',
        'zh-TW': '剎那的瞬間，你的決定是什麼？',
        vi: 'Trong khoảnh khắc, quyết định của bạn là gì?',
        id: 'Dalam sekejap, apa keputusan Anda?'
      },
      description: {
        ko: '1초의 판단이 모든 것을 바꿉니다! 당신의 순발력은?\n갑작스러운 위기 상황, 예상치 못한 선택의 순간, 빠른 결정이 필요한 찰나...\n어떤 사람은 즉시 반응하고, 어떤 사람은 신중하게 고민하며, 어떤 사람은 얼어붙습니다.\n긴급 상황에서 당신은 어떻게 반응하나요? 빠른 판단력이 필요한 순간, 당신의 선택은?\n단 3분이면 당신의 의사결정 스타일과 순발력 수준을 발견할 수 있습니다!',
        en: 'A 1-second judgment changes everything! What is your quickness?\nSudden crisis situations, unexpected moments of choice, moments when quick decisions are needed...\nSome people react immediately, some think carefully, and some freeze.\nHow do you react in emergency situations? In moments when quick judgment is needed, what is your choice?\nJust 3 minutes to discover your decision-making style and quickness level!',
        ja: '1秒の判断がすべてを変えます！あなたの瞬発力は？\n突然の危機状況、予期しない選択の瞬間、迅速な決定が必要な刹那...\nある人は即座に反応し、ある人は慎重に悩み、ある人は凍りつきます。\n緊急事態であなたはどう反応しますか？迅速な判断力が必要な瞬間、あなたの選択は？\nたった3分であなたの意思決定スタイルと瞬発力レベルを発見できます！',
        'zh-CN': '1秒的判断改变一切！你的敏捷度如何？\n突然的危机情况、意想不到的选择时刻、需要快速决定的瞬间...\n有些人立即反应，有些人仔细思考，有些人冻结。\n在紧急情况下你如何反应？在需要快速判断的时刻，你的选择是什么？\n只需3分钟就能发现你的决策风格和敏捷度水平！',
        'zh-TW': '1秒的判斷改變一切！你的敏捷度如何？\n突然的危機情況、意想不到的選擇時刻、需要快速決定的瞬間...\n有些人立即反應，有些人仔細思考，有些人凍結。\n在緊急情況下你如何反應？在需要快速判斷的時刻，你的選擇是什麼？\n只需3分鐘就能發現你的決策風格和敏捷度水平！',
        vi: 'Một phán đoán 1 giây thay đổi mọi thứ! Sự nhanh nhẹn của bạn như thế nào?\nTình huống khủng hoảng đột ngột, khoảnh khắc lựa chọn bất ngờ, khoảnh khắc cần quyết định nhanh...\nMột số người phản ứng ngay lập tức, một số người suy nghĩ cẩn thận, và một số người đóng băng.\nBạn phản ứng như thế nào trong tình huống khẩn cấp? Trong những khoảnh khắc cần phán đoán nhanh, lựa chọn của bạn là gì?\nChỉ 3 phút để khám phá phong cách ra quyết định và mức độ nhanh nhẹn của bạn!',
        id: 'Penilaian 1 detik mengubah segalanya! Seberapa cepat Anda?\nSituasi krisis tiba-tiba, momen pilihan yang tak terduga, momen ketika keputusan cepat diperlukan...\nBeberapa orang bereaksi segera, beberapa berpikir hati-hati, dan beberapa membeku.\nBagaimana Anda bereaksi dalam situasi darurat? Dalam momen ketika penilaian cepat diperlukan, apa pilihan Anda?\nHanya 3 menit untuk menemukan gaya pengambilan keputusan dan tingkat kecepatan Anda!'
      },
      thumbnail: 'test_076_quick_decision.jpg',
      type: 'brain',
      play_count: 0,
      tags: {
        ko: ['두뇌', '의사결정'],
        en: ['Brain', 'Decision Making'],
        ja: ['脳', '意思決定'],
        'zh-CN': ['大脑', '决策'],
        'zh-TW': ['大腦', '決策'],
        vi: ['Não bộ', 'Ra quyết định'],
        id: ['Otak', 'Pengambilan Keputusan']
      }
    };

    return (
      <>
        <QuickDecisionTestClient
          locale={locale as Locale}
          slug={slug}
          title={test.title[locale] || test.title.ko}
          description={test.description?.[locale] || test.description?.ko || ''}
          questions={quickDecisionQuestions}
          results={quickDecisionResults}
          questionCount={quickDecisionQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          similarTests={[]}
        />
      </>
    );
  }

  // 데이트 스타일 테스트
  if (slug === 'my-dating-style') {
    const { datingStyleQuestions, datingStyleResults } = await import('@/lib/datingStyleData');
    const test = await getTestBySlug(slug) || {
      slug: 'my-dating-style',
      title: {
        ko: '나에게 맞는 데이트 스타일은?',
        en: 'What is your dating style?',
        ja: 'あなたのデートスタイルは？',
        'zh-CN': '你的约会风格是什么？',
        'zh-TW': '你的約會風格是什麼？',
        vi: 'Phong cách hẹn hò của bạn là gì?',
        id: 'Apa gaya kencan Anda?'
      },
      description: {
        ko: '연애 상세 분석! 당신만의 데이트 스타일은? 완벽하게 준비된 데이트를 선호하나요? 즉흥적이고 자유로운 시간을 좋아하나요?',
        en: 'Detailed dating analysis! What is your dating style? Do you prefer perfectly prepared dates? Do you like spontaneous and free time?',
        ja: 'デート詳細分析！あなただけのデートスタイルは？完璧に準備されたデートを好みますか？即興的で自由な時間が好きですか？',
        'zh-CN': '详细约会分析！你的约会风格是什么？你喜欢完全准备好的约会吗？你喜欢自发自由的时间吗？',
        'zh-TW': '詳細約會分析！你的約會風格是什麼？你喜歡完全準備好的約會嗎？你喜歡自發自由的時間嗎？',
        vi: 'Phân tích chi tiết hẹn hò! Phong cách hẹn hò của bạn là gì? Bạn có thích những cuộc hẹn được chuẩn bị hoàn hảo không? Bạn có thích thời gian tự phát và tự do không?',
        id: 'Analisis kencan detail! Apa gaya kencan Anda? Apakah Anda lebih suka kencan yang disiapkan dengan sempurna? Apakah Anda suka waktu spontan dan bebas?'
      },
      thumbnail: 'test_221_dating_style.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['연애', '관계'],
        en: ['Love', 'Relationships'],
        ja: ['恋愛', '関係'],
        'zh-CN': ['恋爱', '关系'],
        'zh-TW': ['戀愛', '關係'],
        vi: ['Tình yêu', 'Mối quan hệ'],
        id: ['Cinta', 'Hubungan']
      }
    };

    return (
      <>
        <DatingStyleTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={datingStyleQuestions}
          results={datingStyleResults}
          questionCount={datingStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 계획형 vs 즉흥형 테스트
  if (slug === 'planner-vs-spontaneous-test') {
    const { plannerVsSpontaneousQuestions, plannerVsSpontaneousResults } = await import('@/lib/plannerVsSpontaneousData');
    const test = await getTestBySlug(slug) || {
      slug: 'planner-vs-spontaneous-test',
      title: {
        ko: '나는 계획형일까? vs 즉흥형일까?',
        en: 'Am I a Planner or Spontaneous?',
        ja: '私は計画型か即興型か？',
        'zh-CN': '我是计划型还是即兴型？',
        'zh-TW': '我是計劃型還是即興型？',
        vi: 'Tôi là người lập kế hoạch hay tùy hứng?',
        id: 'Apakah saya Perencana atau Spontan?'
      },
      description: {
        ko: '미리 계획? 그때그때 결정? 당신의 스타일은?',
        en: 'Plan ahead? Decide on the spot? What is your style?',
        ja: '事前に計画？その時その時で決める？あなたのスタイルは？',
        'zh-CN': '提前计划？当场决定？你的风格是什么？',
        'zh-TW': '提前計劃？當場決定？你的風格是什麼？',
        vi: 'Lên kế hoạch trước? Quyết định tại chỗ? Phong cách của bạn là gì?',
        id: 'Rencanakan sebelumnya? Putuskan di tempat? Apa gaya Anda?'
      },
      thumbnail: 'test_219_planner_vs_spontaneous.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격'],
        en: ['Personality'],
        ja: ['性格'],
        'zh-CN': ['性格'],
        'zh-TW': ['性格'],
        vi: ['Tính cách'],
        id: ['Kepribadian']
      }
    };

    return (
      <>
        <PlannerVsSpontaneousTestClient
          locale={locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={plannerVsSpontaneousQuestions}
          results={plannerVsSpontaneousResults}
          questionCount={plannerVsSpontaneousQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 반응 스타일 테스트
  if (slug === 'reaction-style-test') {
    const { reactionStyleQuestions, reactionStyleResults } = await import('@/lib/reactionStyleData');
    const test = await getTestBySlug(slug) || {
      slug: 'reaction-style-test',
      title: {
        ko: '당신은 어떻게 반응할까요?',
        en: 'How do you react?',
        ja: 'あなたはどう反応しますか？',
        'zh-CN': '你会如何反应？',
        'zh-TW': '你會如何反應？',
        vi: 'Bạn phản ứng như thế nào?',
        id: 'Bagaimana Anda bereaksi?'
      },
      description: {
        ko: '반응 스타일 분석! 당신의 진짜 반응은?',
        en: 'Reaction style analysis! What is your real reaction?',
        ja: '反応スタイル分析！あなたの本当の反応は？',
        'zh-CN': '反应风格分析！你的真实反应是什么？',
        'zh-TW': '反應風格分析！你的真實反應是什麼？',
        vi: 'Phân tích phong cách phản ứng! Phản ứng thực sự của bạn là gì?',
        id: 'Analisis gaya reaksi! Apa reaksi asli Anda?'
      },
      thumbnail: 'test_225_reaction_style.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['성격', '심리'],
        en: ['Personality', 'Psychology'],
        ja: ['性格', '心理学'],
        'zh-CN': ['性格', '心理学'],
        'zh-TW': ['性格', '心理學'],
        vi: ['Tính cách', 'Tâm lý'],
        id: ['Kepribadian', 'Psikologi']
      }
    };

    return (
      <>
        <ReactionStyleTestClient
          locale={locale as Locale}
          slug={test.slug}
          title={test.title[locale] || test.title.ko}
          description={test.description[locale] || test.description.ko}
          questions={reactionStyleQuestions}
          results={reactionStyleResults}
          questionCount={reactionStyleQuestions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
        />
      </>
    );
  }

  // 창업가 기질 테스트의 경우 Supabase에서 시도
  if (slug === 'entrepreneur-spirit-test') {
    const supabaseTest = await getTestBySlug(slug);

    // Supabase에 있으면 사용, 없으면 하드코딩 데이터 사용
    const test = supabaseTest || {
      slug: 'entrepreneur-spirit-test',
      title: {
        ko: '당신에게 숨겨진 창업가 기질은?',
        en: 'What is your hidden entrepreneurial spirit?',
        ja: 'あなたに隠された起業家気質は？',
        'zh-CN': '你隐藏的企业家精神是什么？',
        'zh-TW': '你隱藏的企業家精神是什麼？',
        vi: 'Tinh thần khởi nghiệp ẩn giấu của bạn là gì?',
        id: 'Apa semangat kewirausahaan tersembunyi Anda?'
      },
      description: {
        ko: '당신 안에 숨어있는 CEO의 DNA를 발견하세요!',
        en: 'Discover the CEO DNA hidden within you!',
        ja: 'あなたの中に隠れているCEOのDNAを発見してください！',
        'zh-CN': '发现隐藏在你体内的CEO DNA！',
        'zh-TW': '發現隱藏在你體內的CEO DNA！',
        vi: 'Khám phá DNA CEO ẩn giấu trong bạn!',
        id: 'Temukan DNA CEO yang tersembunyi dalam diri Anda!'
      },
      thumbnail: 'test_050_entrepreneur_spirit.jpg',
      type: 'dating',
      play_count: 0,
      tags: {
        ko: ['직업'],
        en: ['Career'],
        ja: ['職業'],
        'zh-CN': ['职业'],
        'zh-TW': ['職業'],
        vi: ['Nghề nghiệp'],
        id: ['Karier']
      }
    };

    const testData = getTestData(slug);
    if (!testData) {
      notFound();
    }

    const title = test.title[locale] || test.title.ko;
    const description = test.description?.[locale] || test.description?.ko || '';
    const thumbnailUrl = getThumbnailUrl(test.thumbnail);
    const canonicalUrl = `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`;

    // JSON-LD Schema 생성
    const jsonLdQuiz = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: title,
      description: description,
      url: canonicalUrl,
      image: thumbnailUrl,
      mainEntity: {
        '@type': 'Question',
        text: '창업가 기질 테스트',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '심리학 기반 창업가 기질 분석'
        }
      },
      author: {
        '@type': 'Organization',
        name: 'QuizOasis'
      },
      publisher: {
        '@type': 'Organization',
        name: 'QuizOasis'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tests',
          item: `https://quizoasis-coral.vercel.app/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };

    // 최신 테스트 여부 확인
    const latestTestSlugs = await getLatestTestSlugs(15);
    const isLatestTest = latestTestSlugs.includes(slug);

    return (
      <>
        {/* JSON-LD Schema - Quiz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
        />

        {/* JSON-LD Schema - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <EntrepreneurSpiritTestClient
          locale={locale as Locale}
          slug={slug}
          title={title}
          description={description}
          questions={testData.questions}
          results={testData.results}
          questionCount={testData.questions.length}
          thumbnail={test.thumbnail}
          playCount={test.play_count}
          similarTests={[]} // 클라이언트 사이드에서 로드
          badgeType={test.badge_type || null}
          isLatestTest={isLatestTest}
        />
      </>
    );
  }

  // Supabase에서 테스트 메타데이터만 가져오기 (빠른 로딩)
  const test = await getTestBySlug(slug);
  if (!test) {
    notFound();
  }

  // 로컬에서 테스트 데이터 가져오기
  let testData;
  if (slug === 'humor-code-test') {
    const { brainQuestions, brainResults } = await import('@/lib/brainData');
    const { careerQuestions, careerResults } = await import('@/lib/careerData');
    const { concentrationQuestions, concentrationResults } = await import('@/lib/concentrationData');
    const { conflictStyleQuestions, conflictStyleResults } = await import('@/lib/conflictStyleData');
    const { conversationStyleQuestions, conversationStyleResults } = await import('@/lib/conversationStyleData');
    const { defenseMechanismQuestions, defenseMechanismResults } = await import('@/lib/defenseMechanismData');
    const { empathyQuestions, empathyResults } = await import('@/lib/empathyData');
    const { empathyFQuestions, empathyFResults } = await import('@/lib/empathyFData');
    const { extremeQuizQuestions, extremeQuizResults } = await import('@/lib/extremeQuizData');
    const { flirtingStyleQuestions, flirtingStyleResults } = await import('@/lib/flirtingStyleData');
    const { honestyQuestions, honestyResults } = await import('@/lib/honestyData');
    const { humorCodeQuestions, humorCodeResults } = await import('@/lib/humorCodeData');
    const { investmentStyleQuestions, investmentStyleResults } = await import('@/lib/investmentStyleData');
    const { jobStrengthQuestions, jobStrengthResults } = await import('@/lib/jobStrengthData');
    const { kpopDebutQuestions, kpopDebutResults } = await import('@/lib/kpopDebutData');
    const { kpopExamQuestions, kpopExamResults } = await import('@/lib/kpopExamData');
    const { lifePrioritiesQuestions, lifePrioritiesResults } = await import('@/lib/lifePrioritiesData');
    const { loveLanguageQuestions, loveLanguageResults } = await import('@/lib/loveLanguageData');
    const { mensaExtremeQuestions, mensaExtremeResults } = await import('@/lib/mensaExtremeData');
    const { phase2FriendshipStyleQuestions, phase2FriendshipStyleResults } = await import('@/lib/phase2FriendshipStyleData');
    const { phase2GuiltLevelQuestions, phase2GuiltLevelResults } = await import('@/lib/phase2GuiltLevelData');
    const { phase2MentalAgeQuestions, phase2MentalAgeResults } = await import('@/lib/phase2MentalAgeData');
    const { phase2PerfectionismQuestions, phase2PerfectionismResults } = await import('@/lib/phase2PerfectionismData');
    const { phase2RelationshipCutQuestions, phase2RelationshipCutResults } = await import('@/lib/phase2RelationshipCutData');
    const { phase2SelfEsteemQuestions, phase2SelfEsteemResults } = await import('@/lib/phase2SelfEsteemData');
    const { phase2AreYouTQuestions, phase2AreYouTResults } = await import('@/lib/phase2_are_you_T_data');
    const { phase2CapitalQuizQuestions, phase2CapitalQuizResults } = await import('@/lib/phase2_capital_quiz_data');
    const { phase2DarkSideQuestions, phase2DarkSideResults } = await import('@/lib/phase2_dark_side_data');
    const { phase2DatingMbtiQuestions, phase2DatingMbtiResults } = await import('@/lib/phase2_dating_mbti_data');
    const { phase2FactBomberQuestions, phase2FactBomberResults } = await import('@/lib/phase2_fact_bomber_data');
    const { phase2InventionQuizQuestions, phase2InventionQuizResults } = await import('@/lib/phase2_invention_quiz_data');
    const { phase2ItTechQuizQuestions, phase2ItTechQuizResults } = await import('@/lib/phase2_it_tech_quiz_data');
    const { phase2LiteratureQuizQuestions, phase2LiteratureQuizResults } = await import('@/lib/phase2_literature_quiz_data');
    const { phase2ReincarnationAnimalQuestions, phase2ReincarnationAnimalResults } = await import('@/lib/phase2_reincarnation_animal_data');
    const { phase3CareerAptitudeAi16typesQuestions, phase3CareerAptitudeAi16typesResults } = await import('@/lib/phase3CareerAptitudeAi16typesData');
    const { phase3RealReasonForBreakupQuestions, phase3RealReasonForBreakupResults } = await import('@/lib/phase3RealReasonForBreakupData');
    const { soulDrinkQuestions, soulDrinkResults } = await import('@/lib/soulDrinkData');
    const { stressReliefQuestions, stressReliefResults } = await import('@/lib/stressReliefData');
    const { superpowerQuestions, superpowerResults } = await import('@/lib/superpowerData');
    const { timeEfficiencyQuestions, timeEfficiencyResults } = await import('@/lib/timeEfficiencyData');
    const { timePerspectiveQuestions, timePerspectiveResults } = await import('@/lib/timePerspectiveData');
    const { travelStyleQuestions, travelStyleResults } = await import('@/lib/travelStyleData');
    const { trustQuestions, trustResults } = await import('@/lib/trustData');
    const { workValuesQuestions, workValuesResults } = await import('@/lib/workValuesData');
    testData = {
      questions: humorCodeQuestions,
      results: humorCodeResults
    };
  } else if (slug === 'trustworthiness-test') {
    const { trustQuestions, trustResults } = await import('@/lib/trustData');
    testData = {
      questions: trustQuestions,
      results: trustResults
    };
  } else if (slug === 'kpop-debut-test') {
    const { kpopDebutQuestions, kpopDebutResults } = await import('@/lib/kpopDebutData');
    testData = {
      questions: kpopDebutQuestions,
      results: kpopDebutResults
    };
  } else if (slug === 'kpop-exam-test') {
    const { kpopExamQuestions, kpopExamResults } = await import('@/lib/kpopExamData');
    testData = {
      questions: kpopExamQuestions,
      results: kpopExamResults
    };
  } else if (slug === 'empathy-f-test') {
    const { empathyFQuestions, empathyFResults } = await import('@/lib/empathyFData');
    testData = {
      questions: empathyFQuestions,
      results: empathyFResults
    };
  } else if (slug === 'phase3-real-reason-for-breakup') {
    const { phase3RealReasonForBreakupQuestions, phase3RealReasonForBreakupResults } = await import('@/lib/phase3RealReasonForBreakupData');
    testData = {
      questions: phase3RealReasonForBreakupQuestions,
      results: phase3RealReasonForBreakupResults,
    };
  } else if (slug === 'phase3-career-aptitude-ai-16types') {
    const { phase3CareerAptitudeAi16typesQuestions, phase3CareerAptitudeAi16typesResults } = await import('@/lib/phase3CareerAptitudeAi16typesData');
    testData = {
      questions: phase3CareerAptitudeAi16typesQuestions,
      results: phase3CareerAptitudeAi16typesResults,
    };
  } else if (slug === 'phase2_fact_bomber_test') {
    const { phase2FactBomberQuestions, phase2FactBomberResults } = await import('@/lib/phase2_fact_bomber_data');
    testData = {
      questions: phase2FactBomberQuestions,
      results: phase2FactBomberResults
    };
  } else if (slug === 'phase2_dating_mbti_test') {
    const { phase2DatingMbtiQuestions, phase2DatingMbtiResults } = await import('@/lib/phase2_dating_mbti_data');
    testData = {
      questions: phase2DatingMbtiQuestions,
      results: phase2DatingMbtiResults
    };
  } else if (slug === 'soul-drink-test') {
    const { soulDrinkQuestions, soulDrinkResults } = await import('@/lib/soulDrinkData');
    testData = {
      questions: soulDrinkQuestions,
      results: soulDrinkResults
    };
  } else if (slug === 'phase2_superpower-test') {
    const { superpowerQuestions, superpowerResults } = await import('@/lib/superpowerData');
    testData = {
      questions: superpowerQuestions,
      results: superpowerResults
    };
  } else if (slug === 'phase2_travel-style-test') {
    const { travelStyleQuestions, travelStyleResults } = await import('@/lib/travelStyleData');
    testData = {
      questions: travelStyleQuestions,
      results: travelStyleResults
    };
  } else if (slug === 'phase2_perfectionism-test') {
    const { phase2PerfectionismQuestions, phase2PerfectionismResults } = await import('@/lib/phase2PerfectionismData');
    testData = {
      questions: phase2PerfectionismQuestions,
      results: phase2PerfectionismResults
    };
  } else if (slug === 'phase2_friendship-style-test') {
    const { phase2FriendshipStyleQuestions, phase2FriendshipStyleResults } = await import('@/lib/phase2FriendshipStyleData');
    testData = {
      questions: phase2FriendshipStyleQuestions,
      results: phase2FriendshipStyleResults
    };
  } else if (slug === 'phase2_relationship-cut-test') {
    const { phase2RelationshipCutQuestions, phase2RelationshipCutResults } = await import('@/lib/phase2RelationshipCutData');
    testData = {
      questions: phase2RelationshipCutQuestions,
      results: phase2RelationshipCutResults
    };
  } else if (slug === 'phase2_self-esteem-test') {
    const { phase2SelfEsteemQuestions, phase2SelfEsteemResults } = await import('@/lib/phase2SelfEsteemData');
    testData = {
      questions: phase2SelfEsteemQuestions,
      results: phase2SelfEsteemResults
    };
  } else if (slug === 'phase2_mental-age-test') {
    const { phase2MentalAgeQuestions, phase2MentalAgeResults } = await import('@/lib/phase2MentalAgeData');
    testData = {
      questions: phase2MentalAgeQuestions,
      results: phase2MentalAgeResults
    };
  } else if (slug === 'phase2_guilt-level-test') {
    const { phase2GuiltLevelQuestions, phase2GuiltLevelResults } = await import('@/lib/phase2GuiltLevelData');
    testData = {
      questions: phase2GuiltLevelQuestions,
      results: phase2GuiltLevelResults
    };
  } else if (slug === 'phase2_reincarnation_animal_test') {
    const { phase2ReincarnationAnimalQuestions, phase2ReincarnationAnimalResults } = await import('@/lib/phase2_reincarnation_animal_data');
    testData = {
      questions: phase2ReincarnationAnimalQuestions,
      results: phase2ReincarnationAnimalResults
    };
  } else if (slug === 'phase2_dark_side_test') {
    const { phase2DarkSideQuestions, phase2DarkSideResults } = await import('@/lib/phase2_dark_side_data');
    testData = {
      questions: phase2DarkSideQuestions,
      results: phase2DarkSideResults
    };
  } else if (slug === 'phase2_are_you_T_test') {
    const { phase2AreYouTQuestions, phase2AreYouTResults } = await import('@/lib/phase2_are_you_T_data');
    testData = {
      questions: phase2AreYouTQuestions,
      results: phase2AreYouTResults
    };
  } else if (slug === 'phase2_capital_quiz_test') {
    const { phase2CapitalQuizQuestions, phase2CapitalQuizResults } = await import('@/lib/phase2_capital_quiz_data');
    testData = {
      questions: phase2CapitalQuizQuestions,
      results: phase2CapitalQuizResults
    };
  } else if (slug === 'phase2_it_tech_quiz_test') {
    const { phase2ItTechQuizQuestions, phase2ItTechQuizResults } = await import('@/lib/phase2_it_tech_quiz_data');
    testData = {
      questions: phase2ItTechQuizQuestions,
      results: phase2ItTechQuizResults
    };
  } else if (slug === 'phase2_literature_quiz_test') {
    const { phase2LiteratureQuizQuestions, phase2LiteratureQuizResults } = await import('@/lib/phase2_literature_quiz_data');
    testData = {
      questions: phase2LiteratureQuizQuestions,
      results: phase2LiteratureQuizResults
    };
  } else if (slug === 'phase2_invention_quiz_test') {
    const { phase2InventionQuizQuestions, phase2InventionQuizResults } = await import('@/lib/phase2_invention_quiz_data');
    testData = {
      questions: phase2InventionQuizQuestions,
      results: phase2InventionQuizResults
    };
  } else if (slug === 'conflict-style-test') {
    const { conflictStyleQuestions, conflictStyleResults } = await import('@/lib/conflictStyleData');
    testData = {
      questions: conflictStyleQuestions,
      results: conflictStyleResults
    };
  } else if (slug === 'conversation-style-test') {
    const { conversationStyleQuestions, conversationStyleResults } = await import('@/lib/conversationStyleData');
    testData = {
      questions: conversationStyleQuestions,
      results: conversationStyleResults
    };
  } else if (slug === 'flirting-style-test') {
    const { flirtingStyleQuestions, flirtingStyleResults } = await import('@/lib/flirtingStyleData');
    testData = {
      questions: flirtingStyleQuestions,
      results: flirtingStyleResults
    };
  } else if (slug === 'time-perspective-test') {
    const { timePerspectiveQuestions, timePerspectiveResults } = await import('@/lib/timePerspectiveData');
    testData = {
      questions: timePerspectiveQuestions,
      results: timePerspectiveResults
    };
  } else if (slug === 'love-language-test') {
    const { loveLanguageQuestions, loveLanguageResults } = await import('@/lib/loveLanguageData');
    testData = {
      questions: loveLanguageQuestions,
      results: loveLanguageResults
    };
  } else if (slug === 'defense-mechanism-test') {
    const { defenseMechanismQuestions, defenseMechanismResults } = await import('@/lib/defenseMechanismData');
    testData = {
      questions: defenseMechanismQuestions,
      results: defenseMechanismResults
    };
  } else if (slug === 'life-priorities-test') {
    const { lifePrioritiesQuestions, lifePrioritiesResults } = await import('@/lib/lifePrioritiesData');
    testData = {
      questions: lifePrioritiesQuestions,
      results: lifePrioritiesResults
    };
  } else if (slug === 'empathy-level-test') {
    const { empathyQuestions, empathyResults } = await import('@/lib/empathyData');
    testData = {
      questions: empathyQuestions,
      results: empathyResults
    };
  } else if (slug === 'honesty-vs-consideration-test') {
    const { honestyQuestions, honestyResults } = await import('@/lib/honestyData');
    testData = {
      questions: honestyQuestions,
      results: honestyResults
    };
  } else if (slug === 'future-career-match-test') {
    const { careerQuestions, careerResults } = await import('@/lib/careerData');
    testData = {
      questions: careerQuestions,
      results: careerResults
    };
  } else if (slug === 'job-strength-test') {
    const { jobStrengthQuestions, jobStrengthResults } = await import('@/lib/jobStrengthData');
    testData = {
      questions: jobStrengthQuestions,
      results: jobStrengthResults
    };
  } else if (slug === 'work-values-test') {
    const { workValuesQuestions, workValuesResults } = await import('@/lib/workValuesData');
    testData = {
      questions: workValuesQuestions,
      results: workValuesResults
    };
  } else if (slug === 'stress-relief-test') {
    const { stressReliefQuestions, stressReliefResults } = await import('@/lib/stressReliefData');
    testData = {
      questions: stressReliefQuestions,
      results: stressReliefResults
    };
  } else if (slug === 'investment-style-test') {
    const { investmentStyleQuestions, investmentStyleResults } = await import('@/lib/investmentStyleData');
    testData = {
      questions: investmentStyleQuestions,
      results: investmentStyleResults
    };
  } else if (slug === 'time-efficiency-test') {
    const { timeEfficiencyQuestions, timeEfficiencyResults } = await import('@/lib/timeEfficiencyData');
    testData = {
      questions: timeEfficiencyQuestions,
      results: timeEfficiencyResults
    };
  } else if (slug === 'left-right-brain-test') {
    const { brainQuestions, brainResults } = await import('@/lib/brainData');
    testData = {
      questions: brainQuestions,
      results: brainResults
    };
  } else if (slug === 'concentration-level-test') {
    const { concentrationQuestions, concentrationResults } = await import('@/lib/concentrationData');
    testData = {
      questions: concentrationQuestions,
      results: concentrationResults
    };
  } else if (slug === 'extreme-quiz') {
    const { extremeQuizQuestions, extremeQuizResults } = await import('@/lib/extremeQuizData');
    testData = {
      questions: extremeQuizQuestions,
      results: extremeQuizResults
    };
  } else if (slug === 'mensa-extreme') {
    const { mensaExtremeQuestions, mensaExtremeResults } = await import('@/lib/mensaExtremeData');
    testData = {
      questions: mensaExtremeQuestions,
      results: mensaExtremeResults
    };
  } else {
    testData = getTestData(slug);
  }

  if (!testData) {
    notFound();
  }

  const title = test.title[locale] || test.title.ko || '';
  const description = test.description?.[locale] || test.description?.ko || '';
  const thumbnailUrl = getThumbnailUrl(test.thumbnail);

  // JSON-LD Schema for SEO - Quiz
  const jsonLdQuiz = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: title,
    description: description,
    image: thumbnailUrl,
    url: `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'QuizOasis',
      url: 'https://quizoasis-coral.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'QuizOasis',
      logo: {
        '@type': 'ImageObject',
        url: 'https://quizoasis-coral.vercel.app/logo.png',
      },
    },
    inLanguage: locale,
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/PlayAction',
      userInteractionCount: test.play_count || 0,
    },
    numberOfQuestions: testData.questions.length,
    educationalLevel: 'General',
    typicalAgeRange: '13-99',
    keywords: typeof test.tags === 'object' && !Array.isArray(test.tags)
      ? (test.tags[locale] || test.tags.ko || []).join(', ')
      : Array.isArray(test.tags) ? test.tags.join(', ') : '',
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://quizoasis-coral.vercel.app/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: test.category || 'Tests',
        item: `https://quizoasis-coral.vercel.app/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
      },
    ],
  };

  // 테스트 타입에 따라 다른 클라이언트 컴포넌트 렌더링
  let TestClient;

  if (slug === 'leadership-style-test') {
    TestClient = LeadershipTestClient;
  } else if (slug === 'obsession-test') {
    TestClient = ObsessionTestClient;
  } else if (slug === 'left-right-brain-test') {
    TestClient = BrainTestClient;
  } else if (slug === 'time-efficiency-test') {
    TestClient = TimeEfficiencyTestClient;
  } else if (test.type === 'stress') {
    TestClient = StressTestClient;
  } else if (test.type === 'dating') {
    if (slug === 'catch-lover-signals') TestClient = SignalTestClient;
    else if (slug === 'attachment-style-test') TestClient = AttachmentTestClient;
    else if (slug === 'friend-test') TestClient = FriendTestClient;
    else if (slug === 'conflict-response-test') TestClient = ConflictTestClient;
    else if (slug === 'love-flavor-test') TestClient = LoveFlavorTestClient;
    else if (slug === 'ideal-type-test') TestClient = IdealTypeTestClient;
    else if (slug === 'crush-success-test') TestClient = CrushTestClient;
    else if (slug === 'flirting-master-vs-beginner') TestClient = FlirtingTestClient;
    else if (slug === 'ideal-spouse-type') TestClient = SpouseTestClient;
    else if (slug === 'love-obstacles') TestClient = LoveObstaclesTestClient;
    else if (slug === 'jealousy-level-test') TestClient = JealousyTestClient;
    else if (slug === 'humor-code-test') TestClient = HumorCodeTestClient;
    else if (slug === 'trustworthiness-test') TestClient = TrustTestClient;
    else if (slug === 'kpop-debut-test') TestClient = KpopDebutTestClient;
    else if (slug === 'kpop-exam-test') TestClient = KpopExamTestClient;
    else if (slug === 'empathy-f-test') TestClient = EmpathyFTestClient;
    else if (slug === 'phase3-real-reason-for-breakup') TestClient = Phase3RealReasonForBreakupTestClient;
    else if (slug === 'phase3-career-aptitude-ai-16types') TestClient = Phase3CareerAptitudeAi16typesTestClient;
    else if (slug === 'phase2_fact_bomber_test') TestClient = Phase2FactBomberTestClient;
    else if (slug === 'phase2_dating_mbti_test') TestClient = Phase2DatingMbtiTestClient;
    else if (slug === 'phase2_perfectionism-test') TestClient = Phase2PerfectionismTestClient;
    else if (slug === 'phase2_friendship-style-test') TestClient = Phase2FriendshipStyleTestClient;
    else if (slug === 'phase2_relationship-cut-test') TestClient = Phase2RelationshipCutTestClient;
    else if (slug === 'phase2_self-esteem-test') TestClient = Phase2SelfEsteemTestClient;
    else if (slug === 'phase2_mental-age-test') TestClient = Phase2MentalAgeTestClient;
    else if (slug === 'phase2_reincarnation_animal_test') TestClient = Phase2ReincarnationAnimalTestClient;
    else if (slug === 'phase2_dark_side_test') TestClient = Phase2DarkSideTestClient;
    else if (slug === 'phase2_are_you_T_test') TestClient = Phase2AreYouTTestClient;
    else if (slug === 'phase2_capital_quiz_test') TestClient = Phase2CapitalQuizTestClient;
    else if (slug === 'phase2_it_tech_quiz_test') TestClient = Phase2ItTechQuizTestClient;
    else if (slug === 'phase2_literature_quiz_test') TestClient = Phase2LiteratureQuizTestClient;
    else if (slug === 'phase2_invention_quiz_test') TestClient = Phase2InventionQuizTestClient;
    else if (slug === 'phase2_world_history_modern_quiz_test') TestClient = Phase2WorldHistoryQuizTestClient;
    else if (slug === 'phase2_youtube_channel_test') TestClient = Phase2YoutubeChannelTestClient;
    else if (slug === 'phase2_hidden_talent_test') TestClient = Phase2HiddenTalentTestClient;
    else if (slug === 'phase2_social_level_test') TestClient = Phase2SocialLevelTestClient;
    else if (slug === 'phase2_lie_detector_test') TestClient = Phase2LieDetectorTestClient;
    else if (slug === 'phase2_homebody_level_test') TestClient = Phase2HomebodyLevelTestClient;
    else if (slug === 'phase2_laziness_level_test') TestClient = Phase2LazinessLevelTestClient;
    else if (slug === 'soul-drink-test') TestClient = SoulDrinkTestClient;
    else if (slug === 'phase2_superpower-test') TestClient = SuperpowerTestClient;
    else if (slug === 'phase2_travel-style-test') TestClient = TravelStyleTestClient;
    else if (slug === 'conflict-style-test') TestClient = ConflictStyleTestClient;
    else if (slug === 'conversation-style-test') TestClient = ConversationStyleTestClient;
    else if (slug === 'flirting-style-test') TestClient = FlirtingStyleTestClient;
    else if (slug === 'leadership-style-test') TestClient = LeadershipStyleTestClient;
    else if (slug === 'time-perspective-test') TestClient = TimePerspectiveTestClient;
    else if (slug === 'love-language-test') TestClient = LoveLanguageTestClient;
    else if (slug === 'defense-mechanism-test') TestClient = DefenseMechanismTestClient;
    else if (slug === 'life-priorities-test') TestClient = LifePrioritiesTestClient;
    else if (slug === 'empathy-level-test') TestClient = EmpathyTestClient;
    else if (slug === 'honesty-vs-consideration-test') TestClient = HonestyTestClient;
    else if (slug === 'my-dating-style') TestClient = DatingStyleTestClient;
    else if (slug === 'reaction-style-test') TestClient = ReactionStyleTestClient;
    else if (slug === 'future-career-match-test') TestClient = CareerTestClient;
    else if (slug === 'job-strength-test') TestClient = JobStrengthTestClient;
    else if (slug === 'work-values-test') TestClient = WorkValuesTestClient;
    else if (slug === 'stress-relief-test') TestClient = StressReliefTestClient;
    else if (slug === 'entrepreneur-spirit-test') TestClient = EntrepreneurSpiritTestClient;
    else TestClient = DatingTestClient;
  } else if (test.type === 'career') {
    if (slug === 'future-career-match-test') TestClient = CareerTestClient;
    else if (slug === 'job-strength-test') TestClient = JobStrengthTestClient;
    else if (slug === 'work-values-test') TestClient = WorkValuesTestClient;
    else if (slug === 'stress-relief-test') TestClient = StressReliefTestClient;
    else if (slug === 'investment-style-test') TestClient = InvestmentStyleTestClient;
    else if (slug === 'entrepreneur-spirit-test') TestClient = EntrepreneurSpiritTestClient;
    else TestClient = CareerTestClient;
  } else if (test.type === 'brain') {
    if (slug === 'left-right-brain-test') TestClient = BrainTestClient;
    else if (slug === 'concentration-level-test') TestClient = ConcentrationTestClient;
    else TestClient = BrainTestClient;
  } else {
    TestClient = MBTITestClient;
  }

  // 최신 테스트 여부 확인
  const latestTestSlugs = await getLatestTestSlugs(15);
  const isLatestTest = latestTestSlugs.includes(slug);

  // 디버깅을 위한 콘솔 로그
  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 Test routing debug:', {
      slug,
      testType: test.type,
      testClient: TestClient.name,
      isLatestTest,
      isInLatestList: latestTestSlugs.includes(slug),
      latestTestSlugs: latestTestSlugs, // 전체 목록
      currentSlugPosition: latestTestSlugs.indexOf(slug) + 1 || 'Not found',
      badge_type: test.badge_type,
      badgeType_prop: test.badge_type || null
    });
  }

  return (
    <>
      {/* JSON-LD Schema - Quiz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
      />

      {/* JSON-LD Schema - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <TestClient
        locale={locale as Locale}
        slug={slug}
        title={title}
        description={description}
        questions={testData.questions}
        results={testData.results}
        questionCount={testData.questions.length}
        thumbnail={test.thumbnail}
        playCount={test.play_count}
        similarTests={[]} // 클라이언트 사이드에서 로드
        badgeType={test.badge_type || null}
        isLatestTest={isLatestTest}
      />
    </>
  );
}
    