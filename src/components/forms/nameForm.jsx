import React, {useState} from 'react';

function NameForm() {
    const [name, setName] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('This form was submited: ' + name);
    };
    const handleChange = (event) => {
        const n = event.target.value;
        setName(n);
    };
    const [selectValue, setSelectValue] = useState('apple');
    const handleChangeSelect = (event) => {
        const v = event.target.vaule;
        setSelectValue(v);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Name: 
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <select value={selectValue} onChange={handleChangeSelect}>
                <option value="coconut">Coconut</option>
                <option value="banana">Banana</option>
                <option value="apple">Apple</option>
            </select>
            <input type="submit" value="submit" />
        </form>
    );
}

export default NameForm;
