import styles from './Table.module.css';
import TableItem from './TableItem';
import renameCategories from '../../utils/renameCategories';


const Table = ({ totalConsumption, totalIncome, arrStatistic }) => {
  return (
    <div className={styles.table}>
      {arrStatistic.length > 0 ? (
        <>
          <p className={styles.header_table}>
            <span>Категория</span>
            <span>Сумма</span>
          </p>
          <ul className={styles.table_list}>
            {arrStatistic.map(({ color, category, amount }) => (
              <TableItem
                color={color}
                category={renameCategories(category)}
                amount={amount}
                key={color}
              />
            ))}
          </ul>
          <p className={styles.final_statistic}>
            <span className={styles.statistic_name}>Расходы:</span>
            <span className={styles.statistic_consumption}>
              {totalConsumption}
            </span>
          </p>
          <p className={styles.final_statistic}>
            <span className={styles.statistic_name}>Доходы:</span>
            <span className={styles.statistic_income}>{totalIncome}</span>
          </p>
        </>
      ) : (
        <p>
          Для выбраного периода нет данных. Выберете пожалуйста другой период.
        </p>
      )}
    </div>
  );
};
export default Table;
