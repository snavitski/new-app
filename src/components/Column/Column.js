import styles from "./Column.module.scss";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import CardForm from "../CardForm/CardForm";

const Column = props => {
	const cards = useSelector(state =>
		state.cards.filter(card => card.columnId === props.id)
	);
	return (
		<article className={styles.column}>
			<h2 className={styles.title}>
				<span className={styles.icon + " fa fa-" + props.icon} />
				{props.title}
			</h2>
			<ul className={styles.cards}>
				{cards.map(card => (
					<Card key={card.id} title={card.title} id={card.id} />
				))}
			</ul>
			<CardForm columnId={props.id} />
		</article>
	);
};

export default Column;
