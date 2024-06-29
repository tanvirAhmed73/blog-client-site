"use client"
const error = ({error}) => {
    return (
        <div>
            <p>An Error Occupaied</p>
            <p>{error.message}</p>
        </div>
    );
};

export default error;