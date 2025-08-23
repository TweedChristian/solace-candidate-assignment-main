CREATE TABLE "advocate_specialties" (
	"advocate_id" integer NOT NULL,
	"specialty_id" integer NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "advocate_specialties_advocate_id_specialty_id_pk" PRIMARY KEY("advocate_id","specialty_id")
);
--> statement-breakpoint
CREATE TABLE "advocates" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"city" text NOT NULL,
	"degree" text NOT NULL,
	"years_of_experience" integer NOT NULL,
	"phone_number" bigint NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "specialties" (
	"id" serial PRIMARY KEY NOT NULL,
	"specialty_title" text NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
ALTER TABLE "advocate_specialties" ADD CONSTRAINT "advocate_specialties_advocate_id_advocates_id_fk" FOREIGN KEY ("advocate_id") REFERENCES "public"."advocates"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "advocate_specialties" ADD CONSTRAINT "advocate_specialties_specialty_id_specialties_id_fk" FOREIGN KEY ("specialty_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE cascade;