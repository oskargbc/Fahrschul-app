import React from 'react';
import { Redirect } from 'react-router-dom';
import appleQr from '../assets/QR_itunes.png';
import googleQr from '../assets/QR_googleplay.png';
import { LockClosedIcon } from '@heroicons/react/solid'
import Logo from '../assets/logo_360.png'
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class LoginPage extends React.Component {
    constructor(props, setToken) {
        super(props);
        this.state = {
            password: "",
            email: "",
            res: "",
            login: false,
            name: "",
        }
        this.handleClick = this.handleClick.bind(this);
        localStorage.setItem("login", this.state.login)
    }

    handleClick() {
        axios.post("/login", {"username": this.state.email, "password": this.state.password})
            .then(res => {
                cookies.set("user", res.data["name"])
                this.setState({login: res.data["status_login"]})
            })
        localStorage.setItem("login", this.state.login)
    }

    render() {
        if (!this.state.login) {
            return (
                <div
                    className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-white py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img
                                className="mx-auto h-24 w-auto"
                                src={Logo}
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                oder{' '}
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Registrieren
                                </a>
                            </p>
                        </div>
                        <form className="mt-8 space-y-6">
                            <input type="hidden" name="remember" defaultValue=""/>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Benutzername
                                    </label>
                                    <input
                                        id="email-address"
                                        name="username"
                                        type="email"
                                        autoComplete="email"
                                        value={this.state.email}
                                        onChange={(e) => this.setState({email: e.target.value})}
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        value={this.state.password}
                                        onChange={(e) => this.setState({password: e.target.value})}
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">


                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Password vergessen?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    onClick={(e) => {
                                        this.handleClick();
                                        e.preventDefault()
                                    }}
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
              </span>
                                    Einloggen
                                </button>
                            </div>
                        </form>
                        <div className="flex flex-row justify-center gap-24">
                            <img src={appleQr} alt=""/>
                            <img src={googleQr} alt=""/>
                        </div>
                    </div>
                </div>
            )
        } else {
            localStorage.setItem("loggedin", "true")
            return <Redirect to="/home" />
        }
    }
}

