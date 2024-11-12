import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../auth';


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [isLogin, setisLogin] = useState(true);
    const navegator = useNavigate();

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsRegistering(true);

    //     await loginUser(email, password);
    //     setIsRegistering(false);
    //     navegator("/");
    // }

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsRegistering(true);

        try {
            await loginUser(email, password);
            setIsRegistering(false);
            navegator("/");
        } catch (error) {
            console.error("Error during login:", error);
            setIsRegistering(false);
            setisLogin(false);
        }
    };

    return (
        <>
        {/*
            This example requires updating your template:

            ```
            <html class="h-full bg-white">
            <body class="h-full">
            ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Login
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
                onSubmit={onSubmit}
                action="#" method="POST" className="space-y-6"
            >
                <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email
                </label>
                <div className="mt-2">
                    <input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Senha
                    </label>
                    <div className="text-sm">
                        <Link
                            to="/signup"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Criar Usuário
                        </Link>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
                </div>


                <div>
                {!isLogin &&
                <span className="block text-sm/6 font-medium text-gray-900">
                    Email ou senha invalido
                </span>
                }

                <button
                    disabled={isRegistering}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {isRegistering ? "Acessando..." : "Acessar"}
                </button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}

export { SignIn }