import React, {useState} from 'react';

//Function 형태의 컴포넌트
const MyComponentFunc = ({name,children}) => {
    //useState() Hook 사용
    const [value, setValue] = useState(0);
    
    const [inputs, setInputs] = useState({
        username: '',
        message: ''
    });
    
    return (
        <div>
            <h2>함수 형태의 컴포넌트</h2>
            <h3>Hello!! {name}</h3>
            {children}
            <p>상태변수 value = {value}</p>
            <button onClick={() => setValue(value + 1)}>증가</button>
            <button onClick={() => setValue(value - 1)}>감소</button>
        </div>
    );
};

export default MyComponentFunc;