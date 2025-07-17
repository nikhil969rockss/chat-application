import Background from "@/assets/login2.png";
import Victory from "@/assets/victory.svg";
import { useState } from "react";

//ui components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth = () => {
    const initialFormData = {
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {};

    const handleSignup = async () => {};

    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center ">
            <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
                <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center">
                            <h1 className="text-5xl md:text-6xl font-bold">
                                Welcome
                            </h1>
                            <img
                                src={Victory}
                                alt="victory-icon"
                                className="h-[100px]"
                            />
                        </div>
                        <p className="font-medium text-center">
                            Fill in the details to get started with the best
                            chat app!
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <Tabs className="w-3/4 ">
                            <TabsList className="w-full bg-transparent rounded-none">
                                <TabsTrigger
                                    value="login"
                                    className="data-[state=active]:bg-transparent text-black text-opacity-90 rounded-none border-b-2 w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 cursor-pointer "
                                >
                                    Login
                                </TabsTrigger>
                                <TabsTrigger
                                    value="signup"
                                    className="data-[state=active]:bg-transparent text-black text-opacity-90 rounded-none border-b-2 w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 cursor-pointer "
                                >
                                    Signup
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent
                                className="flex flex-col gap-5 mt-10"
                                value="login"
                            >
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    value={formData.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    className="rounded-full p-6"
                                />
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    value={formData.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    className="rounded-full p-6"
                                />
                                <Button
                                    className="rounded-full p-6"
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                            </TabsContent>
                            <TabsContent
                                className="flex flex-col gap-5 mt-10"
                                value="signup"
                            >
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    value={formData.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    className="rounded-full p-6"
                                />
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    value={formData.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    className="rounded-full p-6"
                                />
                                <Input
                                    placeholder="Confirm Password"
                                    type="password"
                                    value={formData.confirmPassword}
                                    name="confirmPassword"
                                    onChange={handleInputChange}
                                    className="rounded-full p-6"
                                />
                                <Button
                                    className="rounded-full p-6"
                                    onClick={handleSignup}
                                >
                                    Signup
                                </Button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className="hidden xl:flex justify-center items-center">
                    <img src={Background} alt="background-image" />
                </div>
            </div>
        </div>
    );
};
export default Auth;
