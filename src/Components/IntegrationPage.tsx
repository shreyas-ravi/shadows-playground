import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import r0 from '../assets/r0.png';
import r1 from '../assets/r1.png';
import r2 from '../assets/r2.png';

const IntegrationPage = () => {
const navigate = useNavigate();
  const { name } = useParams();
  console.log(name);
  const [tenantId, setTenantId] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Configure Microsoft Teams API Integration for Shadows</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-inside">
            <li>A Microsoft Azure account</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Create a New Azure Application</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Visit the Azure Portal at <a href="https://portal.azure.com" className="text-blue-600 underline">portal.azure.com</a> and sign in with your Microsoft account.</li>
            <li>Create a New Resource
              <ul className="list-disc ml-8 space-y-1">
                <li>In the left-hand navigation pane, click on "Azure Active Directory." Then, click on "App registrations" and select "New registration."</li>
              </ul>
            </li>
            <li>Register Your Application
              <ul className="list-disc ml-8 space-y-1">
                <li>Fill in the required details:
                  <ul className="list-disc ml-8 space-y-1">
                    <li><strong>Name:</strong> Enter a name for your application. This name should be reflective of your app, Shadows, to keep track of its purpose.</li>
                    <li><strong>Redirect URI:</strong> Set the type to "Web" and enter the redirect URI where you want the token response to be sent.</li>
                  </ul>
                </li>
                <li>Click "Register" to create the application.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="flex justify-center items-center">
          <img src={r0} alt="Azure AD - New Registration" className="w-full rounded-lg"/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Configure API Permissions</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Navigate to API Permissions
              <ul className="list-disc ml-8 space-y-1">
                <li>In your application's registration page, go to the "API permissions" section.</li>
              </ul>
            </li>
            <li>Add Permissions
              <ul className="list-disc ml-8 space-y-1">
                <li>Click "Add a permission" and choose "Microsoft Graph."</li>
              </ul>
            </li>
            <li>Select Permissions
              <ul className="list-disc ml-8 space-y-1">
                <li>Choose "Delegated permissions."</li>
                <li>Search for and select `User.ReadWrite.All` and any other necessary permissions for your application. These permissions will allow Shadows to read and write user data, crucial for analyzing meeting data.</li>
                <li>Click "Add permissions."</li>
              </ul>
            </li>
            <li>Grant Admin Consent
              <ul className="list-disc ml-8 space-y-1">
                <li>After adding the permissions, click "Grant admin consent for [Your Tenant Name]" to enable the permissions.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="flex justify-center items-center">
          <img src={r1} alt="API Permissions" className="w-full rounded-lg"/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Obtain Client Credentials</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Navigate to Certificates & Secrets
              <ul className="list-disc ml-8 space-y-1">
                <li>In your application’s registration page, go to "Certificates & secrets."</li>
              </ul>
            </li>
            <li>Create a New Client Secret
              <ul className="list-disc ml-8 space-y-1">
                <li>Click "New client secret," add a description, and choose an expiry period. Click "Add."</li>
              </ul>
            </li>
            <li>Copy the Client Secret
              <ul className="list-disc ml-8 space-y-1">
                <li>After the client secret is created, copy its value immediately as it will be hidden later. You will need this to authenticate your API requests for Shadows.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="flex justify-center items-center">
          <img src={r2} alt="Certificates & Secrets" className="w-full rounded-lg"/>
        </div>
      </div>

      <section className="mb-8">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Enter API Keys</h2>
          <p>Use the form below to enter your API keys. These keys will allow Shadows to access the necessary data from Microsoft Teams.</p>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Tenant ID</label>
              <input
                type="text"
                value={tenantId}
                onChange={(e) => setTenantId(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Client ID</label>
              <input
                type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Client Secret</label>
              <input
                type="text"
                value={clientSecret}
                onChange={(e) => setClientSecret(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-2 px-4 w-[30%] bg-blue-500 text-white rounded-md hover:bg-blue-400"
                onClick={() => navigate("/createshadow/formstep2")}
              >
                Enter API Keys
              </button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p>By following these steps, you have successfully set up an API integration with Microsoft Teams for Shadows. This will allow Shadows to ingest and analyze data about your meetings, providing valuable insights.</p>
        </div>
      </section>
    </div>
  );
};

export default IntegrationPage;
