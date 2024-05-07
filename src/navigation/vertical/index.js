const navigation = () => {
  return [
    // {
    //   title: 'Dashboards',
    //   icon: 'mdi:home-outline',
    //   path: '/dashboards/crm',
    //   badgeColor: 'error'
    //   // children: [
    //   //   {
    //   //     title: 'CRM',
    //   //     path: '/dashboards/crm'
    //   //   },
    //   //   {
    //   //     title: 'Analytics',
    //   //     path: '/dashboards/analytics'
    //   //   },
    //   //   {
    //   //     title: 'eCommerce',
    //   //     path: '/dashboards/ecommerce'
    //   //   }
    //   // ]
    // },

    // {
    //   title: 'Email',
    //   icon: 'mdi:email-outline',
    //   path: '/apps/email'
    // },
    // {
    //   title: 'Chat',
    //   icon: 'mdi:message-outline',
    //   path: '/apps/chat'
    // },
    // {
    //   title: 'Calendar',
    //   icon: 'mdi:calendar-blank-outline',
    //   path: '/apps/calendar'
    // },
    {
      title: 'Roles & Right',
      icon: 'mdi:file-document-outline',
      path: '/apps/user/list'
      // children: [
      //   {
      //     title: 'Roles Right',
      //     path: '/apps/user/list'
      //   }
      // ]
    },
    {
      title: 'System Admin',
      icon: 'mdi:account-outline',
      children: [
        {
          title: 'Company Info',
          path: '/systemadmin/companyinfo'
        },
        {
          title: 'Bank Info',
          path: '/bank-info'
        }
      ]
    },
    {
      title: 'Department',
      icon: 'mdi:shield-outline',
      children: [
        {
          title: 'Department Name',
          path: '/departments'
        },
        {
          title: 'Designation',
          path: '/designation'
        }
      ]
    },
    {
      title: 'Employee Management',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Company Profile',
          path: '/comapny-profile'
        }
      ]
    },
    {
      title: 'Team Management',
      icon: 'mdi:file-document-outline',
      path: '/team-management'
    },
    {
      title: 'Projects',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Project',
          path: '/project'
        }
      ]
    },
    {
      title: 'Enquiry Bucket',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Quotation Type',
          path: '/quotation-type'
        },
        {
          title: 'Visit Type',
          path: '/visit-type'
        },
        {
          title: 'Communication Type',
          path: '/communication-type'
        },
        {
          title: 'Source Type',
          path: '/source-type'
        },
        {
          title: 'Enquiry Type',
          path: '/enquiry-type'
        },
        {
          title: 'Lead Enquiry Stage',
          path: '/lead-enquiry-stage'
        },
        {
          title: 'Lead Enquiry Status',
          path: '/lead-enquiry-status'
        },
        {
          title: 'Lead Activity Status',
          path: '/lead-activity-status'
        },
        {
          title: 'Customer Form',
          path: '/customer-form'
        },
        {
          title: "Buyer's Persona",
          path: '/buyers-persona'
        },
        {
          title: 'Enquiry Table',
          path: '/enquiry-table'
        },
        {
          title: 'Dead Table',
          path: '/dead-table'
        }
      ]
    },
    {
      title: 'FollowUp',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Pre Sales Enquiry',
          path: '/pre-sales-enquiry'
        },
        {
          title: 'Quotation',
          path: '/quotation'
        },
        {
          title: 'Visit',
          path: '/visit'
        }
      ]
    },
    {
      title: 'Incentive',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Product Incentive',
          path: '/product-incentive'
        },
        {
          title: 'Performance',
          path: '/performance'
        },
        {
          title: 'Visit',
          path: '/visit'
        }
      ]
    },
    {
      title: 'Sales',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Payment Receipt',
          path: '/payment-receipt'
        },
        {
          title: 'Payment Schedule',
          path: '/payment-schedule'
        },
        {
          title: 'Collection',
          path: '/collection'
        },
        {
          title: 'Demand Letter',
          path: '/demand-letter'
        }
      ]
    },
    {
      title: 'Stock',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Project Wise Stock',
          path: '/project-wise-stock'
        },
        {
          title: 'Product Wise Stock',
          path: '/product-wise-stock'
        }
      ]
    }
  ]
}

export default navigation
