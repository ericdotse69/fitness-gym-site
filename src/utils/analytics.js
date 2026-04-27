// Analytics tracking service for X Avis Body
// This module provides event tracking and page tracking capabilities

export const trackPageView = (pageName) => {
  if (window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      'page_path': pageName,
      'page_title': pageName,
    });
  }
  console.log(`Analytics: Page view tracked - ${pageName}`);
};

export const trackEvent = (eventName, eventData = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
  console.log(`Analytics: Event tracked - ${eventName}`, eventData);
};

// Specific tracking events for X Avis Body
export const trackingEvents = {
  // User engagement
  joinNowClicked: () => trackEvent('join_now_clicked'),
  contactFormSubmitted: () => trackEvent('contact_form_submitted'),
  newsletterSignup: () => trackEvent('newsletter_signup'),
  classBooked: (className) => trackEvent('class_booked', { class_name: className }),
  
  // Navigation
  programsViewed: () => trackEvent('programs_viewed'),
  classesViewed: () => trackEvent('classes_viewed'),
  trainersViewed: () => trackEvent('trainers_viewed'),
  pricingViewed: () => trackEvent('pricing_viewed'),
  blogViewed: () => trackEvent('blog_viewed'),
  
  // Conversions
  membershipPurchase: (planName, price) => trackEvent('membership_purchase', {
    plan_name: planName,
    price: price,
  }),
  
  // User behavior
  formFieldFocused: (fieldName) => trackEvent('form_field_focused', { field_name: fieldName }),
  videoWatched: (videoName, duration) => trackEvent('video_watched', {
    video_name: videoName,
    duration: duration,
  }),
  
  // Search & Filtering
  blogSearched: (searchTerm) => trackEvent('blog_searched', { search_term: searchTerm }),
  classFiltered: (filterType, filterValue) => trackEvent('class_filtered', {
    filter_type: filterType,
    filter_value: filterValue,
  }),
  
  // Error tracking
  formSubmissionFailed: (formName, error) => trackEvent('form_submission_failed', {
    form_name: formName,
    error: error,
  }),
};

export default trackingEvents;
