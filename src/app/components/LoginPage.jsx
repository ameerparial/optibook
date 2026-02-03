import { useState } from "react";
import { Eye, User, Shield, Stethoscope } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function LoginPage({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const roles = [
    {
      type: "patient",
      title: "Patient",
      description: "Book appointments and manage your eye health",
      icon: User,
      color: "bg-blue-500",
    },
    {
      type: "optometrist",
      title: "Optometrist",
      description: "Manage appointments and patient care",
      icon: Stethoscope,
      color: "bg-teal-500",
    },
    {
      type: "admin",
      title: "Admin",
      description: "System administration and oversight",
      icon: Shield,
      color: "bg-purple-500",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (selectedRole) {
      onLogin(selectedRole);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              OptiBook
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Professional Eye Care Appointment Management
          </p>
        </div>

        {!selectedRole ? (
          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Card
                  key={role.type}
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-300"
                  onClick={() => setSelectedRole(role.type)}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${role.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{role.title}</CardTitle>
                    <CardDescription className="text-base">
                      {role.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Sign in as {role.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <Button
                variant="ghost"
                className="w-fit mb-2"
                onClick={() => setSelectedRole(null)}
              >
                ← Back
              </Button>
              <CardTitle className="text-2xl">
                Sign in as {roles.find((r) => r.type === selectedRole)?.title}
              </CardTitle>
              <CardDescription>
                Enter your credentials to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
                {/* <div className="text-center text-sm text-gray-500">
                  Demo mode - use any credentials
                </div> */}
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
