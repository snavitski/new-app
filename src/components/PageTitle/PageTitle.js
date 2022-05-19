import styles from './PageTitle.module.scss';

const PageTitle = props => {
	return (
		<h2 clasName={styles.title}>{props.children}</h2>
	);
};

export default PageTitle;