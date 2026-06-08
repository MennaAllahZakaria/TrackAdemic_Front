import {
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

import {
  getContacts,
  getContactById,
  resolveContact,
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

import ResolveContactModal
from "../components/contacts/ResolveContactModal";

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

const [resolveModal, setResolveModal] =
  useState({
    open: false,
    contactId: null,
  });

const [adminReply, setAdminReply] =
  useState("");

const [resolveLoading, setResolveLoading] =
  useState(false);

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
            res.analytics.total || 0,
          pending:
            res.analytics.pending || 0,
          resolved:
            res.analytics.resolved || 0,
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
  const handleResolve = (id) => {

    setResolveModal({
      open: true,
      contactId: id,
    });

  };

const confirmResolve =
  async () => {

    if (!adminReply.trim()) {
      return toast.error("Admin reply is required");
    }

    try {

      setResolveLoading(true);

      await resolveContact(
        resolveModal.contactId,
        {
          adminReply,
        }
      );

      await fetchContacts();

      setResolveModal({
        open: false,
        contactId: null,
      });

      setAdminReply("");
      toast.success("Contact resolved successfully!");

    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Failed to resolve contact");
    } finally {

      setResolveLoading(false);

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

      <ResolveContactModal
        open={resolveModal.open}
        adminReply={adminReply}
        setAdminReply={setAdminReply}
        loading={resolveLoading}
        onConfirm={confirmResolve}
        onClose={() => {

          setResolveModal({
            open: false,
            contactId: null,
          });

          setAdminReply("");

        }}
      />

    </div>
  );
}

export default ContactsPage;
