// =====================================================================
//  data.js — данные приложения «Зарядка»
//  Здесь: библиотека упражнений, готовые комплексы и функции-помощники.
//  Этот файл подключается в index.html ДО основного кода.
// =====================================================================

/*
  УПРАЖНЕНИЕ — поля:
    id          — уникальный код (латиницей, без пробелов)
    name        — название, которое видит пользователь
    description — короткая подсказка, как выполнять
    duration    — сколько секунд длится упражнение
    rest        — сколько секунд отдыха ПОСЛЕ упражнения
    type        — 'time'  — делаем, пока идёт таймер;
                  'reps'  — делаем указанное число повторов,
                            таймер даёт на это duration секунд
    reps        — число повторов (только для type: 'reps', иначе null)
    video_url   — ссылка на видео (появится позже, пока пусто)
    voice_text  — текст для голосовой подсказки (позже, пока пусто)
*/
const EXERCISES = [
  // --- Суставная разминка ---
  { id: 'neck',         name: 'Наклоны головы',      description: 'Медленно наклоняйте голову вперёд-назад и к плечам. Без рывков.',                 duration: 30, rest: 10, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'shoulders',    name: 'Вращения плечами',    description: 'Руки опущены. Крутите плечами вперёд, затем назад.',                             duration: 30, rest: 10, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'arms',         name: 'Круги руками',        description: 'Прямые руки в стороны, большие круги вперёд и назад.',                           duration: 30, rest: 10, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'torso_twist',  name: 'Повороты корпуса',    description: 'Ноги на ширине плеч, таз на месте. Поворачивайте корпус влево-вправо.',          duration: 30, rest: 10, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'side_bends',   name: 'Наклоны в стороны',   description: 'Рука скользит по бедру вниз, другая — над головой. Чередуйте стороны.',          duration: 30, rest: 10, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'hips',         name: 'Вращения тазом',      description: 'Руки на поясе, плавные круги тазом в обе стороны.',                              duration: 30, rest: 10, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'knees',        name: 'Вращения коленями',   description: 'Ноги вместе, ладони на коленях. Круги в одну и другую сторону.',                 duration: 30, rest: 10, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'ankles',       name: 'Вращения стопами',    description: 'Стоя на одной ноге (можно держаться за опору), крутите стопой. Смените ногу.',   duration: 30, rest: 10, type: 'time', reps: null, video_url: '', voice_text: '' },

  // --- Силовые и кардио ---
  { id: 'squats',        name: 'Приседания',          description: 'Пятки на полу, спина прямая, колени смотрят туда же, куда носки.',             duration: 40, rest: 15, type: 'reps', reps: 15,   video_url: '', voice_text: '' },
  { id: 'lunges',        name: 'Выпады',              description: 'Шаг вперёд, опуститесь до угла 90° в коленях. Чередуйте ноги.',                duration: 40, rest: 15, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'pushups',       name: 'Отжимания',           description: 'Тело прямое. Если тяжело — отжимайтесь с колен.',                              duration: 40, rest: 15, type: 'reps', reps: 10,   video_url: '', voice_text: '' },
  { id: 'plank',         name: 'Планка',              description: 'Упор на предплечья, тело — прямая линия, живот подтянут.',                     duration: 30, rest: 15, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'jumping_jacks', name: 'Прыжки «звёздочка»',  description: 'Прыжком ноги в стороны и руки вверх, затем обратно.',                          duration: 30, rest: 15, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'high_knees',    name: 'Бег на месте',        description: 'Высоко поднимайте колени, помогайте руками.',                                  duration: 30, rest: 15, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'glute_bridge',  name: 'Ягодичный мостик',    description: 'Лёжа на спине, стопы на полу. Поднимайте таз вверх и опускайте.',              duration: 40, rest: 15, type: 'reps', reps: 15,   video_url: '', voice_text: '' },

  // --- Растяжка ---
  { id: 'cat_cow',      name: '«Кошка-корова»',      description: 'На четвереньках: прогните спину вниз, затем выгните вверх. Медленно.',          duration: 30, rest: 10, type: 'time', reps: null, video_url: '', voice_text: '' },
  { id: 'forward_fold', name: 'Наклон вперёд',       description: 'Ноги прямые или чуть согнуты, тянитесь руками к полу. Дышите спокойно.',        duration: 30, rest: 10, type: 'time', reps: null, video_url: '', voice_text: '' },
];

/*
  ПРОГРАММА (комплекс) — поля:
    id        — уникальный код
    name      — название
    exercises — список id упражнений по порядку
    rounds    — сколько раз повторить весь список (кругов)
    builtIn   — true у готовых комплексов (их нельзя удалить);
                у своих программ будет false
*/
const BUILT_IN_PROGRAMS = [
  {
    id: 'quick',
    name: 'Быстрая утренняя',
    exercises: ['neck', 'shoulders', 'arms', 'torso_twist', 'squats', 'jumping_jacks', 'forward_fold'],
    rounds: 1,
    builtIn: true,
  },
  {
    id: 'joints',
    name: 'Суставная разминка',
    exercises: ['neck', 'shoulders', 'arms', 'torso_twist', 'side_bends', 'hips', 'knees', 'ankles'],
    rounds: 1,
    builtIn: true,
  },
  {
    id: 'energy',
    name: 'Бодрая',
    exercises: ['jumping_jacks', 'squats', 'pushups', 'lunges', 'plank', 'high_knees', 'glute_bridge'],
    rounds: 2,
    builtIn: true,
  },
  {
    id: 'stretch',
    name: 'Мягкая растяжка',
    exercises: ['neck', 'side_bends', 'cat_cow', 'glute_bridge', 'forward_fold'],
    rounds: 1,
    builtIn: true,
  },
];

// ---------------------------------------------------------------------
//  Функции-помощники
// ---------------------------------------------------------------------

// Найти упражнение по id. Если такого нет — вернёт undefined.
function getExercise(id) {
  return EXERCISES.find(ex => ex.id === id);
}

// Получить полный список упражнений программы (объекты, а не id).
// Неизвестные id просто пропускаются, чтобы ничего не сломалось.
function getProgramExercises(program) {
  return program.exercises.map(getExercise).filter(Boolean);
}

// Общая длительность программы в секундах:
// все упражнения + отдых между ними, умножить на число кругов.
// Отдых после самого последнего упражнения не считаем.
function programDuration(program) {
  const list = getProgramExercises(program);
  if (list.length === 0) return 0;
  const oneRound = list.reduce((sum, ex) => sum + ex.duration + ex.rest, 0);
  const lastRest = list[list.length - 1].rest;
  return oneRound * program.rounds - lastRest;
}

// Красиво показать время: 95 → «1 мин 35 с», 40 → «40 с».
function formatDuration(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  if (min === 0) return sec + ' с';
  if (sec === 0) return min + ' мин';
  return min + ' мин ' + sec + ' с';
}
