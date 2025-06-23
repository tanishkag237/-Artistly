'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker', 'Other'];
const languages = ['Hindi', 'English', 'Punjabi', 'Bengali', 'Other'];
const feeRanges = [
  '₹10,000 - ₹30,000',
  '₹20,000 - ₹50,000',
  '₹30,000 - ₹60,000',
  '₹50,000 - ₹1,00,000',
  'Negotiable',
];

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  bio: Yup.string().required('Bio is required'),
  category: Yup.array().of(Yup.string().required()).min(1, 'Select at least one category').required(),
  languages: Yup.array().of(Yup.string()).min(1, 'Select at least one language').required(),
  feeRange: Yup.string().required('Fee range is required'),
  location: Yup.string().required('Location is required'),
  otherCategory: Yup.string().when('category', {
    is: (val: string[]) => val?.includes('Other'),
    then: (schema) => schema.required('Please specify the other category'),
    otherwise: (schema) => schema.optional(),
  }),
  otherLanguage: Yup.string().when('languages', {
    is: (val: string) => val === 'Other',
    then: (schema) => schema.required('Please specify the other language'),
    otherwise: (schema) => schema.optional(),
  }),
  image: Yup.mixed<FileList>().test('required', 'Image is required', (value) => value && value.length > 0).optional(),
});

export type FormValues = Yup.InferType<typeof schema>;

export default function OnboardForm() {
    const [submitted, setSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      name: '',
      bio: '',
      category: [],
      languages: [],
      feeRange: '',
      location: '',
      otherCategory: '',
      otherLanguage: '',
      image: undefined as any,
    },
  });

  const selectedCategories = watch('category');
  const selectedLanguage = watch('languages');


  const onSubmit = (data: FormValues) => {
    try {
      const previous = JSON.parse(localStorage.getItem('artistSubmissions') || '[]');
      const updated = [...previous, data];
      localStorage.setItem('artistSubmissions', JSON.stringify(updated));
      console.log('📦 New artist submission:', data);
      setSubmitted(true);
      setSubmissionStatus('success');
      reset();
    } catch (error) {
      console.error('❌ Submission error:', error);
      setSubmissionStatus('error');
    }

    setTimeout(() => {
      setSubmitted(false);
      setSubmissionStatus(null);
    }, 3000); // Reset submitted state after 3 seconds
  };




  return (
    <Card className="bg-white w-full max-w-2xl  shadow-lg">
      <CardContent className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-center">Onboard as Artist</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register('name')} />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" {...register('bio')} />
            {errors.bio && <p className="text-sm text-red-500">{errors.bio.message}</p>}
          </div>

          <div>
            <Label className="mb-1">Category</Label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <Label key={cat} className="flex items-center gap-2">
                      <Checkbox
                        checked={field.value?.includes(cat)}
                        onCheckedChange={(checked: boolean) => {
                          const updated = checked
                            ? [...(field.value || []), cat]
                            : field.value.filter((v: string) => v !== cat);
                          field.onChange(updated);
                        }}
                      />
                      {cat}
                    </Label>
                  ))}
                </div>
              )}
            />
            {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}

            {selectedCategories?.includes('Other') && (
              <div className="mt-2">
                <Label htmlFor="otherCategory">Specify Other Category</Label>
                <Input id="otherCategory" {...register('otherCategory')} />
                {errors.otherCategory && <p className="text-sm text-red-500">{errors.otherCategory.message}</p>}
              </div>
            )}
          </div>

          <div>
  <Label className="mb-1">Languages Spoken</Label>
  <Controller
    name="languages"
    control={control}
    render={({ field }) => (
      <div className="grid grid-cols-2 gap-2">
        {languages.map((lang) => (
          <Label key={lang} className="flex items-center gap-2">
            <Checkbox
              checked={field.value?.includes(lang)}
              onCheckedChange={(checked: boolean) => {
                const updated = checked
                  ? [...(field.value || []), lang]
                  :field.value?.filter((v: string | undefined): v is string => v !== undefined && v !== 'Other')
                field.onChange(updated);
              }}
            />
            {lang}
          </Label>
        ))}
      </div>
    )}
  />
  {errors.languages && <p className="text-sm text-red-500">{errors.languages.message}</p>}

  {selectedLanguage?.includes('Other') && (
    <div className="mt-2">
      <Label htmlFor="otherLanguage">Specify Other Language</Label>
      <Input id="otherLanguage" {...register('otherLanguage')} />
      {errors.otherLanguage && <p className="text-sm text-red-500">{errors.otherLanguage.message}</p>}
    </div>
  )}
</div>

          <div>
            <Label>Fee Range</Label>
            <Controller
              name="feeRange"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Fee Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {feeRanges.map((fee) => (
                      <SelectItem key={fee} value={fee}>
                        {fee}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.feeRange && <p className="text-sm text-red-500">{errors.feeRange.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register('location')} />
            {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Upload Image</Label>
            <Input id="image" type="file" accept="image/*" {...register('image')} />
            {errors.image && <p className="text-sm text-red-500">{errors.image.message}</p>}
          </div>

          <Button type="submit" className="w-full">Submit</Button>
          {submitted && <p className="text-green-500 text-center">Artist submitted successfully!</p>}
        </form>
      </CardContent>
    </Card>
  );
}
