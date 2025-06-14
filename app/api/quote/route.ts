
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      phone, 
      address, 
      city, 
      postalCode,
      service,
      description,
      propertyType,
      estimatedSize,
      urgency,
      images
    } = body

    // Validate required fields
    if (!name || !email || !phone || !address || !city || !service || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const serviceQuote = await prisma.serviceQuote.create({
      data: {
        name,
        email,
        phone,
        address,
        city,
        postalCode: postalCode || null,
        service,
        description,
        propertyType: propertyType || null,
        estimatedSize: estimatedSize || null,
        urgency: urgency || 'standard',
        images: images || [],
        status: 'pending'
      }
    })

    return NextResponse.json(
      { 
        message: 'Quote request saved successfully',
        id: serviceQuote.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving quote request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
