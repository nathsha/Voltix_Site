import { Request, Response } from "express";
import { verifyAccessToken } from "../Auth/auth";
import TestimonialModel from "../models/testimonialsModel";

export const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await TestimonialModel.find();
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getTestimonialById = [verifyAccessToken, async (req: Request, res: Response) => {
  try {
    const testimonialId = req.params.id;
    const testimonial = await TestimonialModel.findById(testimonialId);

    if (testimonial) {
      res.status(200).json(testimonial);
    } else {
      res.status(404).json({ error: "Testimonial not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
},];

export const createTestimonial = [
  verifyAccessToken,
  async (req: Request, res: Response) => {
    try {
      const testimonialData = req.body;
      const createdTestimonial = await TestimonialModel.create(testimonialData);
      res.status(201).json(createdTestimonial);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
];
export const updateTestimonial = [
  verifyAccessToken,
  async (req: Request, res: Response) => {
    try {
      const testimonialId = req.params.id;
      const testimonialData = req.body;
      const updatedTestimonial = await TestimonialModel.findByIdAndUpdate(
        testimonialId,
        testimonialData,
        { new: true }
      );

      if (updatedTestimonial) {
        res.status(200).json(updatedTestimonial);
      } else {
        res.status(404).json({ error: "Testimonial not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
];

export const deleteTestimonial = [
  verifyAccessToken,
  async (req: Request, res: Response) => {
    try {
      const testimonialId = req.params.id;
      const deletedTestimonial = await TestimonialModel.findByIdAndDelete(testimonialId);

      if (deletedTestimonial) {
        res.status(200).send('Deleted successfully');
      } else {
        res.status(404).json({ error: "Testimonial not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
];