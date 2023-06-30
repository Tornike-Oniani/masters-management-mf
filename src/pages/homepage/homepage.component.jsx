import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Routes, Route } from 'react-router-dom';

import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component';
import Organizations from '../../components/organizations/organizations.component';
import OrganizationView from '../../components/organization-view/organization-view.component';
import PermissionsView from '../../components/permissions-view/permissions-view.component';

const Homepage = () => {
  const { title, crumbs } = useSelector((state) => state.header);

  return (
    // Gray background
    <div className="w-full min-h-screen max-h-full bg-cst-gray-800">
      <div className=" w-full lg:w-11/12 xl:w-4/5 m-auto">
        {/* Header with title, breadcrumbs, search, add */}
        <div className="flex justify-between py-8">
          {/* Title & breadcrumbs */}
          <div className="">
            <h3 className="font-bold text-2xl text-cst-text-gray-800 mb-2">
              {title}
            </h3>
            <Breadcrumbs crumbs={crumbs} />
          </div>
        </div>
        <div className="">
          <Routes>
            <Route path="/" element={<Organizations />} />
            <Route path="/:organizationId/*" element={<OrganizationView />} />
            <Route
              path="/:organizationId/applications/:applicationId"
              element={<PermissionsView />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
