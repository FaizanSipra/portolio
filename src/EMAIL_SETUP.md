# Email Setup Instructions

## Setting up Contact Form Email Notifications

Your portfolio contact form is configured to use **Web3Forms**, a completely FREE service that sends form submissions directly to your email. No account limits!

### Step 1: Get Your Free Access Key (Takes 30 seconds!)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Scroll down to "Get Started for Free"
3. Enter your email: **faizansipra4545@gmail.com**
4. Click "Get Access Key"
5. Check your email and copy the Access Key (looks like: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`)

### Step 2: Add Access Key to Your Code (30 seconds!)

1. Open `/components/Contact.tsx`
2. Find this line (around line 24):
   ```typescript
   const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

**Example:**
```typescript
const ACCESS_KEY = "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6";
```

### Step 3: Test Your Form

1. Fill out and submit the contact form on your portfolio
2. Check your email (faizansipra4545@gmail.com) for the message
3. Done! ✅

### Why Web3Forms?

✅ **Completely FREE** - No account needed, no limits
✅ **Instant Setup** - Just add your access key
✅ **Spam Protection** - Built-in bot filtering
✅ **No Dashboard** - All submissions go straight to your email
✅ **Works Forever** - No trial periods or expiration

### Features Included

- Sender's name, email, subject, and message
- Reply-to automatically set to sender's email
- Simple spam filtering
- Instant email delivery

### Troubleshooting

**Form not working?**
- Make sure you've replaced `YOUR_ACCESS_KEY_HERE` with your actual access key
- Check browser console for any error messages
- Verify the access key has no extra spaces

**Not receiving emails?**
- Check your spam/junk folder
- Verify you used the correct email when getting the access key
- Make sure the access key is valid (check your email from Web3Forms)

---

**Your Contact Details:**
- Email: faizansipra4545@gmail.com
- Phone/WhatsApp: +92 307 4069622

The WhatsApp button is already configured and working! It appears at the bottom-left corner of every page.
