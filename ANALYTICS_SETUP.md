# Analytics Setup Guide for X Avis Body

## Overview
This guide explains how to set up Google Analytics (GA4) for your X Avis Body website to track user behavior, engagement, and conversions.

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create new property named "X Avis Body"
4. Set up the data stream for your web domain
5. Get your **Measurement ID** (format: G-XXXXXXXXXX)

## Step 2: Add GA4 Script to index.html

Add this to the `<head>` section of `public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_MEASUREMENT_ID', {
    'page_path': window.location.pathname,
  });
</script>
```

Replace `YOUR_MEASUREMENT_ID` with your actual GA4 Measurement ID.

## Step 3: Verify Installation

1. After adding the script, rebuild: `npm run build`
2. Deploy to production
3. Wait 24-48 hours for data to appear
4. Check Google Analytics dashboard for data flow

## Step 4: Key Events to Track

The following events are pre-configured in `/src/utils/analytics.js`:

### User Engagement
- `join_now_clicked` - CTA button clicks
- `contact_form_submitted` - Contact form submissions
- `newsletter_signup` - Newsletter signup completions
- `class_booked` - Class bookings from calendar

### Navigation Events
- `programs_viewed` - Programs page visits
- `classes_viewed` - Classes page visits
- `trainers_viewed` - Trainers page visits
- `pricing_viewed` - Pricing page visits
- `blog_viewed` - Blog page visits

### Conversion Events
- `membership_purchase` - New memberships (track plan name and price)

### User Behavior
- `form_field_focused` - Form field interactions
- `video_watched` - Video engagement
- `blog_searched` - Blog search usage
- `class_filtered` - Class filtering usage

### Error Tracking
- `form_submission_failed` - Failed form submissions

## Step 5: Integrate Analytics in Components

### Example: Tracking Contact Form Submission

```jsx
import { trackingEvents } from '../utils/analytics'

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    // Your form submission logic
    trackingEvents.contactFormSubmitted()
  } catch (error) {
    trackingEvents.formSubmissionFailed('contact', error.message)
  }
}
```

### Example: Tracking Navigation

```jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../utils/analytics'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    trackPageView(pathname)
  }, [pathname])

  return null
}
```

## Step 6: Monitor Conversions

### In Google Analytics Dashboard:
1. Navigate to "Events" tab
2. View all tracked events and their counts
3. Set up "Conversion" goals for key events:
   - `contact_form_submitted` (Lead)
   - `membership_purchase` (Conversion)
   - `newsletter_signup` (Engagement)

### Create Conversion Goals:
1. Admin > Conversions > New conversion event
2. Select the event you want to track
3. Mark as "Conversion"

## Step 7: Create Useful Reports

### Reports to Set Up:

#### 1. Membership Sales Funnel
- Users who visited pricing
- Users who visited contact
- Users who submitted forms

#### 2. Engagement Metrics
- Blog views and search usage
- Class booking frequency
- Newsletter signups

#### 3. Traffic Sources
- Organic (Google search)
- Direct (typed URL)
- Referral (from other sites)

#### 4. User Journey
- Entry page
- Common paths through site
- Exit pages

## Step 8: Advanced Tracking

### User Properties (Optional)
Track which membership tier users are interested in:

```javascript
gtag('set', {
  'user_properties': {
    'membership_tier': 'hybrid_method',
    'user_interest': 'strength_training'
  }
});
```

### Custom Events with Parameters

```javascript
import { trackEvent } from '../utils/analytics'

trackEvent('class_booked', {
  class_name: 'Powerlifting 101',
  trainer_name: 'Kwaku Osei',
  program_type: 'Iron Strength',
  spots_available: 4,
});
```

## Step 9: Privacy Compliance

⚠️ **Important**: Ensure GDPR and privacy compliance:
1. Add analytics disclosure in Cookie Policy
2. Implement opt-in/opt-out (optional but recommended)
3. Review Google Analytics terms

Update `/src/pages/CookiePolicy.jsx` to mention analytics.

## Step 10: Monthly Review Checklist

- [ ] Check overall site traffic trends
- [ ] Review top pages and user flows
- [ ] Analyze conversion rate (forms submitted)
- [ ] Monitor bounce rate (single-page visits)
- [ ] Check mobile vs desktop traffic split
- [ ] Review top traffic sources
- [ ] Analyze membership inquiry to signup ratio

## Useful Dashboards

Create these custom dashboards in GA4:

1. **Sales Dashboard**: Track contact form submissions and membership interest
2. **Content Dashboard**: Blog views, search terms, engagement
3. **Mobile Dashboard**: Mobile-specific metrics and performance
4. **Traffic Dashboard**: Source analysis and user acquisition

## Support & Resources

- [Google Analytics Help Center](https://support.google.com/analytics/)
- [GA4 Event Documentation](https://support.google.com/analytics/answer/9234069)
- [GA4 Setup for React](https://www.google.com/analytics/web/)

## Troubleshooting

**Events not showing up?**
- Wait 24-48 hours after first setup
- Check browser console for errors
- Verify Measurement ID is correct
- Check that gtag() is available globally

**Real-time data not updating?**
- Hard refresh the page (Ctrl+Shift+R)
- Check that you're on the correct property
- Ensure no ad blockers are preventing GA

