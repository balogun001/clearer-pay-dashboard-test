import { Nigeria, UnitedState, UnitedKingdom } from 'src/assets/images';

export const merchants = [
  { id: 1, name: 'Adisa Deboye' },
  { id: 2, name: 'Adisa Deboye' },
  { id: 3, name: 'Adisa Deboye' },
  { id: 4, name: 'Adisa Deboye' },
  { id: 5, name: 'Adisa Deboye' },
];

export const exchangeRates = [
  {
    id: 1,
    from: { code: 'NGN', amount: 'N1640', flag: Nigeria },
    to: { code: 'USD', amount: '$2', flag: UnitedState },
  },
  {
    id: 2,
    from: { code: 'EUR', amount: '€3', flag: UnitedKingdom },
    to: { code: 'NGN', amount: 'N3000', flag: Nigeria },
  },
  {
    id: 3,
    from: { code: 'GBP', amount: '£2', flag: UnitedKingdom },
    to: { code: 'USD', amount: '$2.5', flag: UnitedState },
  },
  {
    id: 4,
    from: { code: 'NGN', amount: 'N1640', flag: Nigeria },
    to: { code: 'USD', amount: '$2', flag: UnitedState },
  },
  {
    id: 5,
    from: { code: 'EUR', amount: '€3', flag: UnitedKingdom },
    to: { code: 'NGN', amount: 'N3000', flag: Nigeria },
  },
  {
    id: 6,
    from: { code: 'GBP', amount: '£2', flag: UnitedKingdom },
    to: { code: 'USD', amount: '$2.5', flag: UnitedState },
  },
  {
    id: 7,
    from: { code: 'NGN', amount: 'N1640', flag: Nigeria },
    to: { code: 'USD', amount: '$2', flag: UnitedState },
  },
  {
    id: 8,
    from: { code: 'EUR', amount: '€3', flag: UnitedKingdom },
    to: { code: 'NGN', amount: 'N3000', flag: Nigeria },
  },
  {
    id: 9,
    from: { code: 'GBP', amount: '£2', flag: UnitedKingdom },
    to: { code: 'USD', amount: '$2.5', flag: UnitedState },
  },
  {
    id: 10,
    from: { code: 'NGN', amount: 'N1640', flag: Nigeria },
    to: { code: 'USD', amount: '$2', flag: UnitedState },
  },
  {
    id: 11,
    from: { code: 'EUR', amount: '€3', flag: UnitedKingdom },
    to: { code: 'NGN', amount: 'N3000', flag: Nigeria },
  },
  {
    id: 12,
    from: { code: 'EUR', amount: '€3', flag: UnitedKingdom },
    to: { code: 'NGN', amount: 'N3000', flag: Nigeria },
  },
  {
    id: 13,
    from: { code: 'GBP', amount: '£2', flag: UnitedKingdom },
    to: { code: 'USD', amount: '$2.5', flag: UnitedState },
  },
  {
    id: 14,
    from: { code: 'NGN', amount: 'N1640', flag: Nigeria },
    to: { code: 'USD', amount: '$2', flag: UnitedState },
  },
  {
    id: 15,
    from: { code: 'EUR', amount: '€3', flag: UnitedKingdom },
    to: { code: 'NGN', amount: 'N3000', flag: Nigeria },
  },
  {
    id: 16,
    from: { code: 'GBP', amount: '£2', flag: UnitedKingdom },
    to: { code: 'USD', amount: '$2.5', flag: UnitedState },
  },
  {
    id: 17,
    from: { code: 'NGN', amount: 'N1640', flag: Nigeria },
    to: { code: 'USD', amount: '$2', flag: UnitedState },
  },
  {
    id: 18,
    from: { code: 'EUR', amount: '€3', flag: UnitedKingdom },
    to: { code: 'NGN', amount: 'N3000', flag: Nigeria },
  },
  {
    id: 19,
    from: { code: 'GBP', amount: '£2', flag: UnitedKingdom },
    to: { code: 'USD', amount: '$2.5', flag: UnitedState },
  },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2000, min: 1400 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1000 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1000, min: 839 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 839, min: 0 },
    items: 1,
  },
};

export const transactions = [
  {
    id: 1,
    type: 'sent',
    currency: 'GBP',
    recipient: 'John Doe',
    time: 'Today, 13:30',
    amount: '-₦1,000,000',
    amountClass: 'text-red-500',
  },
  {
    id: 2,
    type: 'exchanged',
    from: 'GBP',
    to: 'NGN',
    recipient: 'John Doe',
    time: 'Today, 13:30',
    amountSent: '-£1,000',
    amountReceived: '+₦200,000',
    amountSentClass: 'text-red-500',
    amountReceivedClass: 'text-green-500',
  },
  {
    id: 3,
    type: 'received',
    currency: 'GBP',
    from: 'NGN',
    recipient: 'John Doe',
    time: 'Today, 13:30',
    amount: '+₦200,000',
    amountClass: 'text-green-500',
  },
  {
    id: 4,
    type: 'withdraw',
    currency: 'GBP',
    recipient: 'John Doe',
    time: 'Today, 13:30',
    amount: '+₦200,000',
    amountClass: 'text-green-500',
  },
];
