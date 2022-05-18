import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateSearch } from "../../redux/store";

const SearchForm = () => {
	const dispatch = useDispatch();
	const [searchString, setSearchString] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(updateSearch({ searchString }));
		setSearchString("");
	};
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
