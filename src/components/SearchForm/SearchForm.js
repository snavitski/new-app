import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateSearchString } from "../../redux/searchStringReducer";
import { useEffect } from "react";

const SearchForm = () => {
	const [searchString, setSearchString] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(updateSearchString({ searchString }));
		setSearchString("");
	};

	useEffect(() => {
		dispatch(updateSearchString({ searchString: "" }));
	}, []);

	return (
		<form className={styles.searchForm} onSubmit={handleSubmit}>
			<TextInput
				value={searchString}
				onChange={e => setSearchString(e.target.value)}
				placeholder='Search...'
			/>
			<Button>
				<span className='fa fa-search' />
			</Button>
		</form>
	);
};
export default SearchForm;
