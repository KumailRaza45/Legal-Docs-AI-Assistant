import React from "react";
import { Flex } from "antd";
import {
  InvitationTableHeader,
  InvitationTableTabs,
} from "shared/components/Organisms";

const ManageUsers: React.FC = () => {
  return (
    <Flex
      style={{ width: "100%", minHeight: "100vh" }}
      gap={"middle"}
      align="start"
      vertical
    >
      {/*  Header */}
      <InvitationTableHeader />
      {/* Table Tabs */}
      <InvitationTableTabs />
    </Flex>
  );
};
export default ManageUsers;
