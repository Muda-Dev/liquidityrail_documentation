// @ts-check

/**
 * Sidebar configuration for Docusaurus.
 * This file is auto-generated by scripts/generateSidebar.js
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting started",
      items: [
        {
          type: "doc",
          id: "overview",
          label: "Overview"
        },
        {
          type:  "doc",
          id:    "environmental-setup",
          label: "Environmental Setup"
        },
        {
          type:  "doc",
          id:    "configurations",
          label: "Configuration"
        },
        {
          type:  "doc",
          id:    "getting-started",
          label: "Quickstart"
        }
      ]
    },
    {
      type: "category",
      label: "Provider",
      items: [
        {
          type: "doc",
          id: "register-as-provider",
          label: "Becoming a Provider"
        },
        {
          type: "doc",
          id: "provider-authentication",
          label: "Authentication"
        }
      ]
    },
    {
      type: "category",
      label: "Clients",
      items: [
        {
          type: "doc",
          id: "client-registration",
          label: "Registration"
        },
        {
          type: "doc",
          id: "client-authentication",
          label: "Authentication"
        }
      ]
    },
    {
      type: "category",
      label: "Guides",
      items: [
        {
          type: "category",
          label: "Payments",
          items: [

            {
              type: "doc",
              id: "make-quote",
              label: "Make Quote"
            },
            {
              type: "doc",
              id: "get-rate",
              label: "Get Rate"
            },
            {
              type: "doc",
              id: "get-payout-transaction",
              label: "Get Payout Transaction"
            },
            {
              type: "doc",
              id: "cancel-quote",
              label: "Cancel Quote"
            },
            {
              type: "doc",
              id: "get-providers",
              label: "Get Providers"
            },
            {
              type: "doc",
              id: "add-payment-method",
              label: "Add Payment Method"
            }            
          ]
        }


        
      ]
    }
  ]
};

export default sidebars;
