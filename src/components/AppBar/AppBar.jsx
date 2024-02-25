// import { StatusFilter } from '../StatusFilter/StatusFilter';
// import { TaskCounter } from '../TaskCounter/TaskCounter';
import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.css';

// export default function AppBar() {
//   return (
//     <header className={css.wrapper}>
//       <section className={css.section}>
//         <h2 className={css.title}>Tasks</h2>
//         <TaskCounter />
//       </section>
//       <section className={css.section}>
//         <h2 className={css.title}>Filter by status</h2>
//         <StatusFilter />
//       </section>
//     </header>
//   );
// }

export default function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}
