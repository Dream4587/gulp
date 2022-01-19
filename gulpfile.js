// Основной модуль
import gulp from 'gulp';
//Импорт путей
import { path } from './gulp/config/path.js';
//Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js'

// Передаем значение в глобальную переменную

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

//Ипорт задач
import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'

//Наблюдать за изменениями файлов
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, watcher)

//Выполнение сценария по умолчанию
gulp.task('default', dev);