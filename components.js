// Reusable UI Components for UH CLOTH

const Components = {
    // Product Card Component
    productCard(product) {
        const discount = product.salePrice
            ? Math.round(((product.price - product.salePrice) / product.price) * 100)
            : 0;

        const isInWishlist = window.wishlist?.includes(product.id) || false;

        return `
      <div class="card product-card" data-product-id="${product.id}">
        ${product.onSale ? `<span class="product-badge sale">-${discount}%</span>` : ''}
        ${product.isNew ? `<span class="product-badge new">NEW</span>` : ''}
        
        <button class="product-wishlist ${isInWishlist ? 'active' : ''}" 
                onclick="toggleWishlist('${product.id}')" 
                aria-label="Add to wishlist">
          <span>${isInWishlist ? '❤️' : '🤍'}</span>
        </button>
        
        <div class="card-img-wrapper" onclick="navigateTo('product/${product.id}')">
          <img src="${product.image}" alt="${product.name}" class="card-img">
        </div>
        
        <div class="card-body">
          <div class="product-rating">
            <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
            <span>(${product.reviews})</span>
          </div>
          
          <h3 class="card-title">${product.name}</h3>
          <p class="card-text" style="font-size: 0.9rem; color: var(--color-grey-dark);">${product.urdu}</p>
          
          <div class="card-footer">
            <div class="product-price ${product.salePrice ? 'sale' : ''}">
              <span class="current">Rs. ${product.salePrice || product.price}</span>
              ${product.salePrice ? `<span class="original">Rs. ${product.price}</span>` : ''}
            </div>
            
            <button class="btn btn-sm btn-primary" onclick="addToCart('${product.id}')">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    },

    // Category Card Component
    categoryCard(category, imageUrl) {
        return `
      <div class="category-card" onclick="navigateTo('shop?category=${category.id}')">
        <img src="${imageUrl}" alt="${category.name}" class="category-card-bg">
        <div class="category-card-content">
          <h3 class="category-card-title">${category.icon} ${category.name}</h3>
          <p style="opacity: 0.9;">${category.urdu}</p>
        </div>
      </div>
    `;
    },

    // Review Card Component
    reviewCard(review) {
        return `
      <div class="card">
        <div class="card-body">
          <div class="product-rating" style="margin-bottom: var(--space-3);">
            <span class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
          </div>
          
          <p class="card-text">"${review.text}"</p>
          <p class="card-text" style="font-size: 0.9rem; color: var(--color-grey-dark); direction: rtl;">"${review.textUrdu}"</p>
          
          <div style="margin-top: var(--space-4); padding-top: var(--space-4); border-top: 1px solid var(--color-grey);">
            <p style="font-weight: 600; margin-bottom: var(--space-1);">${review.name} <span style="opacity: 0.7;">/ ${review.nameUrdu}</span></p>
            <p style="font-size: var(--text-sm); color: var(--color-grey-dark);">Purchased: ${review.product}</p>
          </div>
        </div>
      </div>
    `;
    },

    // Cart Item Component
    cartItem(item) {
        const product = products.find(p => p.id === item.productId);
        if (!product) return '';

        const price = product.salePrice || product.price;
        const subtotal = price * item.quantity;

        return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img">
        
        <div class="cart-item-details">
          <h4 class="cart-item-title">${product.name}</h4>
          <p class="cart-item-meta">
            ${item.color ? `Color: ${item.color}` : ''} 
            ${item.size ? `| Size: ${item.size}` : ''}
          </p>
          
          <div class="cart-item-actions">
            <div class="quantity-control">
              <button class="quantity-btn" onclick="updateCartQuantity('${item.productId}', ${item.quantity - 1})">−</button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="quantity-btn" onclick="updateCartQuantity('${item.productId}', ${item.quantity + 1})">+</button>
            </div>
            
            <div>
              <p style="font-weight: 700; font-size: var(--text-lg);">Rs. ${subtotal}</p>
            </div>
          </div>
        </div>
        
        <button onclick="removeFromCart('${item.productId}')" 
                style="color: var(--color-error); font-size: var(--text-xl);"
                aria-label="Remove item">
          ×
        </button>
      </div>
    `;
    },

    // Filter Section Component
    filterSection() {
        return `
      <div class="filters">
        <h3 style="margin-bottom: var(--space-6);">Filters / فلٹرز</h3>
        
        <div class="filter-group">
          <h4 class="filter-title">Category / زمرہ</h4>
          <div class="filter-options" id="category-filters">
            ${categories.map(cat => `
              <button class="filter-option" data-filter="category" data-value="${cat.id}">
                ${cat.icon} ${cat.name}
              </button>
            `).join('')}
          </div>
        </div>
        
        <div class="filter-group">
          <h4 class="filter-title">Type / قسم</h4>
          <div class="filter-options" id="type-filters">
            ${Object.entries(subcategories).map(([key, sub]) => `
              <button class="filter-option" data-filter="subcategory" data-value="${key}">
                ${sub.name}
              </button>
            `).join('')}
          </div>
        </div>
        
        <div class="filter-group">
          <h4 class="filter-title">Price Range / قیمت</h4>
          <div class="price-range-slider">
            <input type="range" id="price-min" min="0" max="15000" value="0" step="500" 
                   style="width: 100%;" oninput="updatePriceFilter()">
            <input type="range" id="price-max" min="0" max="15000" value="15000" step="500" 
                   style="width: 100%;" oninput="updatePriceFilter()">
            <div class="price-range-values">
              <span>Rs. <span id="price-min-value">0</span></span>
              <span>Rs. <span id="price-max-value">15000</span></span>
            </div>
          </div>
        </div>
        
        <div class="filter-group">
          <h4 class="filter-title">Size / سائز</h4>
          <div class="filter-options" id="size-filters">
            <button class="filter-option" data-filter="size" data-value="S">S</button>
            <button class="filter-option" data-filter="size" data-value="M">M</button>
            <button class="filter-option" data-filter="size" data-value="L">L</button>
            <button class="filter-option" data-filter="size" data-value="XL">XL</button>
            <button class="filter-option" data-filter="size" data-value="XXL">XXL</button>
          </div>
        </div>
        
        <button class="btn btn-outline" style="width: 100%; margin-top: var(--space-4);" onclick="clearFilters()">
          Clear Filters / صاف کریں
        </button>
      </div>
    `;
    },

    // Size Guide Modal Component
    sizeGuideModal() {
        return `
      <div class="modal-overlay" id="size-guide-modal">
        <div class="modal">
          <div class="modal-header">
            <h3 class="modal-title">Size Guide / سائز گائیڈ</h3>
            <button class="modal-close" onclick="closeSizeGuide()">×</button>
          </div>
          
          <div class="modal-body">
            <h4>Women's Sizes / خواتین کے سائز</h4>
            <table style="width: 100%; margin-bottom: var(--space-6); border-collapse: collapse;">
              <thead>
                <tr style="background: var(--color-grey-light);">
                  <th style="padding: var(--space-3); text-align: left;">Size</th>
                  <th style="padding: var(--space-3); text-align: left;">Bust</th>
                  <th style="padding: var(--space-3); text-align: left;">Waist</th>
                  <th style="padding: var(--space-3); text-align: left;">Hip</th>
                  <th style="padding: var(--space-3); text-align: left;">Length</th>
                </tr>
              </thead>
              <tbody>
                ${Object.entries(sizeCharts.women).map(([size, measurements]) => `
                  <tr style="border-bottom: 1px solid var(--color-grey);">
                    <td style="padding: var(--space-3); font-weight: 600;">${size}</td>
                    <td style="padding: var(--space-3);">${measurements.bust}</td>
                    <td style="padding: var(--space-3);">${measurements.waist}</td>
                    <td style="padding: var(--space-3);">${measurements.hip}</td>
                    <td style="padding: var(--space-3);">${measurements.length}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            
            <h4>Men's Sizes / /h4>
            <table style="width: 100%; margin-bottom: var(--space-6); border-collapse: collapse;">
              <thead>
                <tr style="background: var(--color-grey-light);">
                  <th style="padding: var(--space-3); text-align: left;">Size</th>
                  <th style="padding: var(--space-3); text-align: left;">Chest</th>
                  <th style="padding: var(--space-3); text-align: left;">Waist</th>
                  <th style="padding: var(--space-3); text-align: left;">Shoulder</th>
                  <th style="padding: var(--space-3); text-align: left;">Length</th>
                </tr>
              </thead>
              <tbody>
                ${Object.entries(sizeCharts.men).map(([size, measurements]) => `
                  <tr style="border-bottom: 1px solid var(--color-grey);">
                    <td style="padding: var(--space-3); font-weight: 600;">${size}</td>
                    <td style="padding: var(--space-3);">${measurements.chest}</td>
                    <td style="padding: var(--space-3);">${measurements.waist}</td>
                    <td style="padding: var(--space-3);">${measurements.shoulder}</td>
                    <td style="padding: var(--space-3);">${measurements.length}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            
            <h4>Girls Sizes / لڑکیوں کے سائز</h4>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background: var(--color-grey-light);">
                  <th style="padding: var(--space-3); text-align: left;">Age</th>
                  <th style="padding: var(--space-3); text-align: left;">Chest</th>
                  <th style="padding: var(--space-3); text-align: left;">Waist</th>
                  <th style="padding: var(--space-3); text-align: left;">Length</th>
                </tr>
              </thead>
              <tbody>
                ${Object.entries(sizeCharts.girls).map(([age, measurements]) => `
                  <tr style="border-bottom: 1px solid var(--color-grey);">
                    <td style="padding: var(--space-3); font-weight: 600;">${age}</td>
                    <td style="padding: var(--space-3);">${measurements.chest}</td>
                    <td style="padding: var(--space-3);">${measurements.waist}</td>
                    <td style="padding: var(--space-3);">${measurements.length}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
    },

    // Shopping Cart Drawer Component
    cartDrawer() {
        const cartItems = window.cart || [];
        const total = cartItems.reduce((sum, item) => {
            const product = products.find(p => p.id === item.productId);
            const price = product?.salePrice || product?.price || 0;
            return sum + (price * item.quantity);
        }, 0);

        return `
      <div class="cart-drawer" id="cart-drawer">
        <div class="cart-header">
          <h3>Shopping Cart / ٹوکری</h3>
          <button class="modal-close" onclick="toggleCart()">×</button>
        </div>
        
        <div class="cart-items" id="cart-items-list">
          ${cartItems.length === 0 ? `
            <div class="empty-cart">
              <p style="font-size: var(--text-4xl); margin-bottom: var(--space-4);">🛍️</p>
              <p style="font-size: var(--text-lg);">Your cart is empty</p>
              <p style="font-size: var(--text-lg); direction: rtl;">آپ کی ٹوکری خالی ہے</p>
            </div>
          ` : cartItems.map(item => this.cartItem(item)).join('')}
        </div>
        
        ${cartItems.length > 0 ? `
          <div class="cart-footer">
            <div class="cart-total">
              <span>Total:</span>
              <span>Rs. ${total}</span>
            </div>
            <button class="btn btn-primary" style="width: 100%; margin-bottom: var(--space-3);" onclick="navigateTo('checkout')">
              Proceed to Checkout
            </button>
            <button class="btn btn-outline" style="width: 100%;" onclick="toggleCart()">
              Continue Shopping
            </button>
          </div>
        ` : ''}
      </div>
    `;
    },

    // WhatsApp Button Component
    whatsappButton() {
        return `
      <a href="https://wa.me/${siteData.contact.whatsapp}" 
         target="_blank"
         class="whatsapp-float"
         style="position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: #25D366; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: var(--shadow-lg); z-index: 1000; transition: var(--transition-base);"
         onmouseover="this.style.transform='scale(1.1)'"
         onmouseout="this.style.transform='scale(1)'">
        💬
      </a>
    `;
    }
};
