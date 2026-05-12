import {
  useEffect,
  useState,
} from "react";

import {
  getContacts,
  getContactById,
} from "../services/adminService";

import ContactsHero
from "../components/contacts/ContactsHero";

import ContactsStats
from "../components/contacts/ContactsStats";

import ContactsTable
from "../components/contacts/ContactsTable";

import ContactsPagination
from "../components/contacts/ContactsPagination";

import ContactsLoader
from "../components/contacts/ContactsLoader";

function ContactsPage() {
  const [loading, setLoading] =
    useState(true);

  const [contacts, setContacts] =
    useState([]);

  const [pagination, setPagination] =
    useState(null);

  const [stats, setStats] =
    useState(null);

  const [filters, setFilters] =
    useState({
      page: 1,
      limit: 10,
    });

  // ================= FETCH =================
  const fetchContacts =
    async () => {
      try {

        setLoading(true);

        const res =
          await getContacts(filters);

        setContacts(
          res.data || []
        );

        setPagination(
          res.pagination
        );

        setStats({
          total:
            res.total || 0,
          pending:
            res.pending || 0,
          resolved:
            res.resolved || 0,
        });

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }
    };

  useEffect(() => {
    fetchContacts();
  }, [filters]);

  // ================= RESOLVE =================
  const handleResolve =
    async (id) => {
      try {

        await getContactById(id);

        fetchContacts();

      } catch (err) {

        console.log(err);

      }
    };

  if (loading) {
    return <ContactsLoader />;
  }

  return (
    <div
      className="
        space-y-8
      "
    >

      <ContactsHero />

      <ContactsStats
        stats={stats}
      />

      <ContactsTable
        contacts={contacts}
        handleResolve={
          handleResolve
        }
      />

      <ContactsPagination
        filters={filters}
        setFilters={setFilters}
        pagination={pagination}
      />

    </div>
  );
}

export default ContactsPage;