CREATE TABLE public.demo_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 255),
  product text NOT NULL DEFAULT 'Not sure yet' CHECK (char_length(product) <= 100),
  preferred_at timestamptz NOT NULL,
  page_path text CHECK (char_length(page_path) <= 300),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'confirmed', 'done', 'cancelled')),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.demo_bookings TO service_role;

ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;

CREATE INDEX demo_bookings_created_at_idx ON public.demo_bookings (created_at DESC);