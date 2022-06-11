import { useState } from "react";

const App = () => {
	type expensesType = {
		date: number;
		use: string;
		amount: number;
		month: number;
	};
	const [expenses, setExpenses] = useState<expensesType[]>([]);
	const [newExpense, setNewExpense] = useState({ date: 1, use: "", amount: 0 });
	const [displayingMonth, setDisplayingMonth] = useState(1);

	const moveToPrevMonth = () => {
		setDisplayingMonth(displayingMonth - 1);
	};
	const moveToNextMonth = () => {
		setDisplayingMonth(displayingMonth + 1);
	};

	const handleChangeNewExpenseDate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewExpense({ ...newExpense, date: Number(e.target.value) });
	};
	const handleChangeNewExpenseUse = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewExpense({ ...newExpense, use: e.target.value });
	};
	const handleChangeNewExpenseAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewExpense({ ...newExpense, amount: Number(e.target.value) });
	};

	const handleClickSave = () => {
		setExpenses([...expenses, { ...newExpense, month: displayingMonth }]);
		setNewExpense({ date: 1, use: "", amount: 0 });
	};
	const isNewExpenseInvalid = newExpense.date <= 0 || newExpense.date > 31 || newExpense.use === "" || newExpense.amount <= 0;

	return (
		<main>
			<section>
				<h1>{displayingMonth}月</h1>
				<div>
					<button type="button" onClick={moveToPrevMonth}>
						前の月へ
					</button>
					<button type="button" onClick={moveToNextMonth}>
						次の月へ
					</button>
				</div>
				{expenses.length > 0 && (
					<ul>
						{expenses
							.filter((e) => e.month === displayingMonth)
							.map((expense) => {
								const { date, use, amount } = expense;

								return (
									<li key={`${date}-${use}-${amount}`}>
										{date}日 {use} {amount}円
									</li>
								);
							})}
					</ul>
				)}
			</section>
			<section>
				<h2>支出を追加</h2>
				<dl>
					<dt>日付</dt>
					<dd>
						<input type="number" placeholder="10" value={newExpense.date} onChange={handleChangeNewExpenseDate} />
					</dd>
					<dt>用途</dt>
					<dd>
						<input type="text" placeholder="用途を入力" value={newExpense.use} onChange={handleChangeNewExpenseUse} />
					</dd>
					<dt>金額</dt>
					<dd>
						<input type="number" placeholder="金額を入力" value={newExpense.amount} onChange={handleChangeNewExpenseAmount} />
					</dd>
				</dl>
				<div>
					<button type="button" disabled={isNewExpenseInvalid} onClick={handleClickSave}>
						保存
					</button>
				</div>
			</section>
		</main>
	);
};

export default App;
