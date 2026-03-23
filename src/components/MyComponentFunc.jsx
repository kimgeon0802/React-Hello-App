import React from 'react';

//Function 형태의 컴포넌트
const MyComponentFunc = ({name}) => {
    return (
        <div>
            <h2>함수 형태의 컴포넌트</h2>
            <h3>Hello!! {name}</h3>
        </div>
    );
};

export default MyComponentFunc;