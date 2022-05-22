import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

const All_Fetch_compare = () => {
    // fetch +++++++++++++++++++++++++++++++++
    const url = `http://localhost:5000/tools`;
    //------------------- Get from DB
    const [count, setCount] = useState(0)
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const url = `https://sleepy-ridge-87663.herokuapp.com/task/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [count]);
    //------------------- Post in DB
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const url = `https://sleepy-ridge-87663.herokuapp.com/task/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(addResult => {
                handleSubmit(addResult)
                reset()
                // setCount(count+1) // we need to discus with this
                setCount(addResult);
                // console.log('Success:', addResult);
                // window.location.reload()
            })
    };

    //------------------- Delete from DB & UI
    const handelForDeleteTask = id => {
        const confirmDelete = window.confirm('Are you Sure to Delete the task');
        if (confirmDelete) {
            const url = `https://sleepy-ridge-87663.herokuapp.com/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    const remainingTask = tasks.filter(task => task._id !== id)
                    setTasks(remainingTask)
                })
        }
    }

    // fetch +++++++++++++++++++++++++++++++++


    // const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    // )
    const { isLoading2, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
        )
    )




    return (
        <div>

        </div>
    );
};

export default All_Fetch_compare;