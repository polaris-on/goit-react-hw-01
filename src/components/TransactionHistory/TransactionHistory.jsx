import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <h2 className="block-title">Завдання 3 - Історія транзакцій</h2>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
