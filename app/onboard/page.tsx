import OnboardForm from '@/components/OnboardForm';

export default function OnboardPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side: Image and Text */}
      <div className="md:w-1/2 w-full bg-cover bg-center" style={{ backgroundImage: "url('/home/bg3.jpg')" }}>
        <div className="p-12 text-white backdrop-brightness-50 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Join Artistly</h1>
          <p className="text-lg">
            Showcase your talent to the world and connect with the right opportunities.
          </p>
        </div>
      </div>

      {/* Right Side: Onboarding Form */}
      <div className="md:w-1/2 w-full p-6 flex items-center justify-center bg-slate-950">
        <OnboardForm />
      </div>
    </div>
  );
}
