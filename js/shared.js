function injectSharedComponents() {
  const headerHTML = `
    <header class="bg-white/90 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a href="index.html" class="flex items-center gap-2">
              <div class="w-8 h-8 bg-navy rounded-sm flex items-center justify-center">
                <span class="text-teal font-heading font-bold text-xl">FQ</span>
              </div>
              <span class="font-heading font-bold text-2xl text-navy tracking-tight">Financial Quest</span>
            </a>
          </div>
          
          <!-- Navigation -->
          <nav class="hidden md:block">
            <ul class="flex space-x-8">
              <li><a href="financial.html" class="text-charcoal hover:text-teal font-medium transition-colors">Financial Planning</a></li>
              <li><a href="investments.html" class="text-charcoal hover:text-teal font-medium transition-colors">Investment Planning</a></li>
              <li><a href="retirement.html" class="text-charcoal hover:text-teal font-medium transition-colors">Retirement Planning</a></li>
              <li><a href="taxes.html" class="text-charcoal hover:text-teal font-medium transition-colors">Tax Planning</a></li>
              <li><a href="estate.html" class="text-charcoal hover:text-teal font-medium transition-colors">Estate Planning</a></li>
            </ul>
          </nav>

          <!-- CTA -->
          <div class="hidden md:flex">
            <a href="#leads" onclick="openLeadModal('Strategy Session')" class="bg-teal hover:bg-teal/90 text-white px-6 py-2.5 rounded shadow-lg transform transition hover:-translate-y-0.5 font-medium">
              Book a Strategy Session
            </a>
          </div>
        </div>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="bg-navy text-white mt-24 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-8 h-8 bg-teal rounded-sm flex items-center justify-center">
                <span class="text-navy font-heading font-bold text-xl">FQ</span>
              </div>
              <span class="font-heading font-bold text-2xl text-white tracking-tight">Financial Quest</span>
            </div>
            <p class="text-gray-400 text-sm">Empowering your financial future through holistic planning and strategic investing.</p>
          </div>
          <div>
            <h4 class="font-heading text-lg mb-4 text-teal">Services</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="financial.html" class="hover:text-white transition-colors">Wealth Management</a></li>
              <li><a href="investments.html" class="hover:text-white transition-colors">Investment Trajectory</a></li>
              <li><a href="retirement.html" class="hover:text-white transition-colors">Retirement Bridges</a></li>
              <li><a href="taxes.html" class="hover:text-white transition-colors">Tax Efficiency</a></li>
              <li><a href="estate.html" class="hover:text-white transition-colors">Legacy Continuity</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-heading text-lg mb-4 text-teal">Company</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-heading text-lg mb-4 text-teal">Legal</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Form ADV</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; ${new Date().getFullYear()} Financial Quest. All rights reserved. Not affiliated with AssetMark.</p>
        </div>
      </div>
    </footer>
  `;

  const leadModalHTML = `
    <!-- Modal Backdrop -->
    <div id="leadModal" class="fixed inset-0 z-[100] hidden flex-col items-center justify-center">
      <div class="fixed inset-0 bg-navy/80 backdrop-blur-sm transition-opacity" onclick="closeLeadModal()"></div>
      
      <!-- Modal Content -->
      <div class="bg-white rounded-xl shadow-2xl z-10 w-full max-w-lg mx-4 overflow-hidden transform transition-all shadow-teal/20">
        <div class="bg-navy p-6 text-center border-b border-navy/10 relative">
          <button onclick="closeLeadModal()" class="absolute top-4 right-4 text-white hover:text-teal transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <div class="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>
          <h2 class="text-2xl font-heading text-white font-bold" id="modalTitle">Unlock Your Full Report</h2>
          <p class="text-teal mt-2 text-sm">Where should we send your personalized PDF and analysis?</p>
        </div>
        <div class="p-8">
          <form id="leadForm" onsubmit="handleLeadSubmit(event)" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-charcoal mb-1">First Name</label>
                <input type="text" id="lf-first" required class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors" />
              </div>
              <div>
                <label class="block text-sm font-medium text-charcoal mb-1">Last Name</label>
                <input type="text" id="lf-last" required class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-charcoal mb-1">Email Address</label>
              <input type="email" id="lf-email" required class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors" />
            </div>

            <div>
              <label class="block text-sm font-medium text-charcoal mb-1">What challenges are you most focused on right now?</label>
              <textarea id="lf-interest" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors" placeholder="e.g., Retiring in 5 years, tax minimization..."></textarea>
            </div>
            
            <button type="submit" class="w-full bg-teal hover:bg-teal/90 text-white font-medium py-3 px-4 rounded shadow-lg transition-all mt-6 text-lg inline-flex items-center justify-center gap-2">
              <span>Unlock Report Now</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <p class="text-xs text-center text-gray-500 mt-4">By unlocking, you agree to our privacy policy. We protect your data.</p>
          </form>
          
          <div id="leadSuccess" class="hidden text-center py-8">
            <div class="w-16 h-16 bg-green-100 text-green-500 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-navy mb-2">Success!</h3>
            <p class="text-charcoal mb-6">Your full report is being generated and will be sent to your email shortly.</p>
            <button onclick="closeLeadModalFlow()" class="bg-navy hover:bg-navy/90 text-white px-6 py-2 rounded transition-colors">
              View In-Browser Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  document.body.insertAdjacentHTML('beforeend', leadModalHTML);
}

// Global Modal State Tracking
let currentToolContext = "";
let currentToolCallback = null;

function openLeadModal(contextTitle, callback = null) {
  const modal = document.getElementById('leadModal');
  const title = document.getElementById('modalTitle');
  const form = document.getElementById('leadForm');
  const success = document.getElementById('leadSuccess');
  
  if(contextTitle) title.textContent = "Unlock Your " + contextTitle + " Report";
  
  // reset form view
  form.reset();
  form.classList.remove('hidden');
  success.classList.add('hidden');
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  
  currentToolContext = contextTitle;
  currentToolCallback = callback;
}

function closeLeadModal() {
  const modal = document.getElementById('leadModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function closeLeadModalFlow() {
  closeLeadModal();
  if(currentToolCallback) {
    currentToolCallback(); // execute the logic to show the "Full" report behind the scenes
    currentToolCallback = null;
  }
}

function handleLeadSubmit(e) {
  e.preventDefault();
  // Simulate API call
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="animate-pulse">Processing...</span>';
  btn.disabled = true;
  
  setTimeout(() => {
    document.getElementById('leadForm').classList.add('hidden');
    document.getElementById('leadSuccess').classList.remove('hidden');
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    injectSharedComponents();
});
