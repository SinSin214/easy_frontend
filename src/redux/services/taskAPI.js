import axios from 'axios'

export function getListTask(userId) {
    return axios({
        method: 'post',
        url: '/task/get-list-task',
        data: userId
    })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            throw (err);
        })
};

export function createTask() {
    let temp = JSON.parse(localStorage.getItem('token')).userId;
    let data = {
        name: "Task test",
        describe: "abc",
        userId: temp,
        importance: 2,
        date: new Date()
    }
    return axios({
        method: 'post',
        url: '/task/create-task',
        data: data
    })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            throw (err);
        })
};