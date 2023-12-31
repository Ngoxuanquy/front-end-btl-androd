import React from 'react';
import { API_KEY, URL_KEY } from '@env';

const Call_Post_Api = (body, token, id, link_url) => {
    const url = 'http://192.168.0.104:3056/v1/api';


    if (body === null) {
        body = {}; // Gán giá trị mặc định là một đối tượng rỗng {}
    } else {
        body = body;
    }

    if (token === null || id === null) {
        token === null || id === null;
    } else {
        (token = token), (id = id);
    }

    return fetch(url + link_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
            'x-client-id': id,
            authorization: token,
        },
        body: JSON.stringify(body),
    })
        .then((data) => data.json())
        .then((data) => {
            return data;
        });
};

export { Call_Post_Api };
