// Demo data
const demoUserId = '12345';
let permitsList = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadPermits();
  loadExpiringPermits();
});

// Show/Hide Tabs
function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab
  document.getElementById(tabName).classList.add('active');
  event.target.classList.add('active');

  // Reload data when switching tabs
  if (tabName === 'dashboard') {
    loadPermits();
  } else if (tabName === 'expiring') {
    loadExpiringPermits();
  }
}

// Load all permits
function loadPermits() {
  const permitsList = document.getElementById('permits-list');
  permitsList.innerHTML = '<p class="loading">Loading permits...</p>';

  // Simulate API call with demo data
  setTimeout(() => {
    const demoPermits = [
      {
        id: 1,
        permitName: 'Building Permit - Store A',
        permitType: 'Building Permit',
        issueDate: '2023-01-15',
        expiryDate: '2025-01-15',
        status: 'Active',
        daysUntilExpiry: 134,
        notificationSent: false
      },
      {
        id: 2,
        permitName: 'Business License',
        permitType: 'Business License',
        issueDate: '2022-06-20',
        expiryDate: '2024-12-20',
        status: 'Expiring Soon',
        daysUntilExpiry: 107,
        notificationSent: false
      },
      {
        id: 3,
        permitName: 'Health Certificate',
        permitType: 'Health Certificate',
        issueDate: '2023-03-10',
        expiryDate: '2024-09-10',
        status: 'Expired',
        daysUntilExpiry: -26,
        notificationSent: true
      },
      {
        id: 4,
        permitName: 'Professional License - Manager',
        permitType: 'Professional License',
        issueDate: '2021-05-01',
        expiryDate: '2025-05-01',
        status: 'Active',
        daysUntilExpiry: 238,
        notificationSent: false
      }
    ];

    if (demoPermits.length === 0) {
      permitsList.innerHTML = `
        <div class="empty-state">
          <p>No permits yet. Add your first permit to get started!</p>
        </div>
      `;
      return;
    }

    permitsList.innerHTML = demoPermits.map(permit => `
      <div class="permit-card">
        <h3>${permit.permitName}</h3>
        <span class="type">${permit.permitType}</span>
        <div class="status ${permit.status.toLowerCase().replace(' ', '-')}">
          ${permit.status}
        </div>
        <p><strong>Issue Date:</strong> ${new Date(permit.issueDate).toDateString()}</p>
        <p class="expiry-date"><strong>Expiry Date:</strong> ${new Date(permit.expiryDate).toDateString()}</p>
        <div class="days-remaining">
          ${permit.daysUntilExpiry > 0 ? `${permit.daysUntilExpiry} days remaining` : `Expired ${Math.abs(permit.daysUntilExpiry)} days ago`}
        </div>
        <p><strong>Notification:</strong> ${permit.notificationSent ? '✅ Sent' : '❌ Not Sent'}</p>
        <button class="btn-delete" onclick="deletePermit(${permit.id})">Delete</button>
      </div>
    `).join('');
  }, 500);
}

// Load expiring permits
function loadExpiringPermits() {
  const expiringList = document.getElementById('expiring-list');
  expiringList.innerHTML = '<p class="loading">Loading...</p>';

  setTimeout(() => {
    const expiringPermits = [
      {
        id: 2,
        permitName: 'Business License',
        permitType: 'Business License',
        expiryDate: '2024-12-20',
        status: 'Expiring Soon',
        daysUntilExpiry: 107,
        priority: 'Medium'
      },
      {
        id: 3,
        permitName: 'Health Certificate',
        permitType: 'Health Certificate',
        expiryDate: '2024-09-10',
        status: 'Expired',
        daysUntilExpiry: -26,
        priority: 'High'
      }
    ];

    if (expiringPermits.length === 0) {
      expiringList.innerHTML = `
        <div class="empty-state">
          <p>✅ Great! No permits expiring soon.</p>
        </div>
      `;
      return;
    }

    expiringList.innerHTML = expiringPermits.map(permit => `
      <div class="permit-card">
        <h3>${permit.permitName}</h3>
        <span class="type">${permit.permitType}</span>
        <div class="status ${permit.status.toLowerCase().replace(' ', '-')}">
          ${permit.status}
        </div>
        <p class="expiry-date"><strong>Expiry Date:</strong> ${new Date(permit.expiryDate).toDateString()}</p>
        <div class="days-remaining">
          ${permit.daysUntilExpiry > 0 ? `⚠️ ${permit.daysUntilExpiry} days left` : `❌ Expired ${Math.abs(permit.daysUntilExpiry)} days ago`}
        </div>
        <p><strong>Priority:</strong> <span style="color: ${permit.priority === 'High' ? '#dc3545' : '#ffc107'}; font-weight: bold;">${permit.priority}</span></p>
        <button class="btn-delete" onclick="deletePermit(${permit.id})">Delete</button>
      </div>
    `).join('');
  }, 500);
}

// Handle Add Permit Form
function handleAddPermit(event) {
  event.preventDefault();

  const permitName = document.getElementById('permitName').value;
  const permitType = document.getElementById('permitType').value;
  const issueDate = document.getElementById('issueDate').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const notes = document.getElementById('notes').value;

  if (!permitName || !permitType || !issueDate || !expiryDate) {
    alert('Please fill in all required fields');
    return;
  }

  // Simulate API call
  console.log('Permit added:', {
    permitName,
    permitType,
    issueDate,
    expiryDate,
    notes
  });

  alert(`✅ Permit "${permitName}" added successfully!`);
  document.getElementById('permit-form').reset();
  showTab('dashboard');
  loadPermits();
}

// Delete Permit
function deletePermit(id) {
  if (confirm('Are you sure you want to delete this permit?')) {
    alert('✅ Permit deleted successfully!');
    loadPermits();
    loadExpiringPermits();
  }
}
