﻿export const getAllMonkeys =  async () => {
    const req = await fetch("http://localhost:3000/monkey", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const getMonkeyById =  async (id) => {
    const req = await fetch(`http://localhost:3000/monkey/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const createMonkey =  async (formData) => {
    const req = await fetch(`http://localhost:3000/monkey`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const updateMonkey =  async (id, formData) => {
    const req = await fetch(`http://localhost:3000/monkey/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const deleteMonkey =  async (id) => {
    const req = await fetch(`http://localhost:3000/monkey/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}