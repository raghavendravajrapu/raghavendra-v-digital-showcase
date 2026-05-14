
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Anyone (incl. anonymous visitors) can submit a message
CREATE POLICY "Anyone can submit contact messages"
ON public.contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 100
  AND length(email) BETWEEN 3 AND 255
  AND length(message) BETWEEN 1 AND 2000
);
