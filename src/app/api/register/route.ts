import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { department, property_type, min_bedrooms, max_bedrooms, min_price, max_price, locations, features, name, email, phone } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from('registrations')
    .insert({
      department,
      property_type,
      min_bedrooms,
      max_bedrooms,
      min_price,
      max_price,
      locations,
      features,
      name,
      email,
      phone,
      active: true,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
