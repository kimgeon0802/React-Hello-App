import React, {useState} from 'react';

//Function 형태의 컴포넌트
const MyComponentFunc = ({name,children}) => {
    //useState() Hook 사용
    const [value, setValue] = useState(0);
    
    return (
        <div>
            <h2>함수 형태의 컴포넌트</h2>
            <h3>Hello!! {name}</h3>
            {children}
            <button>증가</button>
            <button>감소</button>
        </div>
    );
};

export default MyComponentFunc;