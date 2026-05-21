// =========================
// NORMALIZE TEXT
// =========================
export const normalize = (
  str = ""
) => {

  return str
    ?.trim()
    ?.toLowerCase();

};

// =========================
// CHECK TOPIC COMPLETION
// =========================
export const isTopicCompleted = (
  completedTopics = [],
  topic = ""
) => {

  return completedTopics.some(
    (t) =>
      normalize(t) ===
      normalize(topic)
  );

};

// =========================
// EXTRACT ALL TOPICS
// =========================
export const extractAllTopics = (
  phases = []
) => {

  return phases.flatMap(
    (phase) =>

      phase.courses?.flatMap(
        (course) =>
          course.topics || []
      ) || []

  );

};

// =========================
// CALCULATE OVERALL PROGRESS
// =========================
export const calculateProgress = (
  completedTopics = [],
  phases = []
) => {

  const allTopics =
    extractAllTopics(phases);

  const totalTopics =
    allTopics.length || 1;

  const percentage =
    (
      completedTopics.length /
      totalTopics
    ) * 100;

  return Number(
    percentage.toFixed(0)
  );

};

// =========================
// GET CURRENT PHASE
// =========================
export const getCurrentPhase = (
  phases = [],
  completedTopics = []
) => {

  let accumulated = 0;

  for (
    let i = 0;
    i < phases.length;
    i++
  ) {

    const phase =
      phases[i];

    const phaseTopics =
      extractAllTopics([phase]);

    accumulated +=
      phaseTopics.length;

    if (
      completedTopics.length <=
      accumulated
    ) {

      return i;

    }
  }

  return 0;

};

// =========================
// CHECK IF PHASE COMPLETED
// =========================
export const isPhaseCompleted = (
  phase,
  completedTopics = []
) => {

  const phaseTopics =
    extractAllTopics([phase]);

  return phaseTopics.every(
    (topic) =>

      isTopicCompleted(
        completedTopics,
        topic
      )

  );

};

// =========================
// CHECK IF ASSESSMENT
// UNLOCKED
// =========================
export const isAssessmentUnlocked = (
  overallProgress = 0
) => {

  return Number(
    overallProgress
  ) >= 100;

};

// =========================
// SAFE DEFAULT PROGRESS
// =========================
export const getSafeProgress = (
  progress = {}
) => {

  return {

    overallProgress: 0,

    totalHoursStudied: 0,

    completedTopics: [],

    strongTopics: [],

    weakTopics: [],

    hoursThisWeek: 0,

    ...(progress || {}),

  };

};
