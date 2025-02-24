CREATE TABLE "client" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "client_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"age" integer NOT NULL,
	"height" integer NOT NULL,
	"weight" integer NOT NULL,
	"user_id" integer,
	"personal_id" integer,
	"workout_id" integer,
	"group_id" integer
);
--> statement-breakpoint
CREATE TABLE "exerciseModule" (
	"id" integer PRIMARY KEY NOT NULL,
	"sets" integer NOT NULL,
	"duration" integer,
	"repetitions" integer,
	"weight" integer,
	"model_id" integer,
	"exercise_id" integer,
	"done" boolean,
	"link" text NOT NULL,
	CONSTRAINT "only_one" CHECK (("exerciseModule"."duration" IS NOT NULL AND "exerciseModule"."repetitions" IS NULL) OR
           ("exerciseModule"."repetitions" IS NOT NULL AND "exerciseModule"."duration" IS NULL))
);
--> statement-breakpoint
CREATE TABLE "exerciseWorkout" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "exerciseWorkout_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"sets" integer NOT NULL,
	"duration" integer,
	"repetitions" integer,
	"weight" integer,
	"model_id" integer,
	"exercise_id" integer,
	"done" boolean,
	"link" text NOT NULL,
	CONSTRAINT "only_one" CHECK ("exerciseWorkout"."duration" IS NOT NULL AND "exerciseWorkout"."repetitions" IS NULL OR
            "exerciseWorkout"."repetitions" IS NOT NULL AND "exerciseWorkout"."duration" IS NULL)
);
--> statement-breakpoint
CREATE TABLE "exercise" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "exercise_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "groups" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "groups_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "models" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "models_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"personalId" integer
);
--> statement-breakpoint
CREATE TABLE "personal" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "personal_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"description" text NOT NULL,
	"instagram_link" text NOT NULL,
	"whatsapp_link" text NOT NULL,
	"cref" varchar(20),
	"model_id" integer,
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "user_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"phone_number" text NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "workouts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "workouts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"personalId" integer,
	"clientId" integer,
	"model_id" integer DEFAULT null
);
--> statement-breakpoint
ALTER TABLE "client" ADD CONSTRAINT "client_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "client" ADD CONSTRAINT "client_personal_id_personal_id_fk" FOREIGN KEY ("personal_id") REFERENCES "public"."personal"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "client" ADD CONSTRAINT "client_workout_id_workouts_id_fk" FOREIGN KEY ("workout_id") REFERENCES "public"."workouts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "client" ADD CONSTRAINT "client_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exerciseModule" ADD CONSTRAINT "exerciseModule_model_id_models_id_fk" FOREIGN KEY ("model_id") REFERENCES "public"."models"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exerciseModule" ADD CONSTRAINT "exerciseModule_exercise_id_exercise_id_fk" FOREIGN KEY ("exercise_id") REFERENCES "public"."exercise"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exerciseWorkout" ADD CONSTRAINT "exerciseWorkout_model_id_workouts_id_fk" FOREIGN KEY ("model_id") REFERENCES "public"."workouts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exerciseWorkout" ADD CONSTRAINT "exerciseWorkout_exercise_id_exercise_id_fk" FOREIGN KEY ("exercise_id") REFERENCES "public"."exercise"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "models" ADD CONSTRAINT "models_personalId_personal_id_fk" FOREIGN KEY ("personalId") REFERENCES "public"."personal"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personal" ADD CONSTRAINT "personal_model_id_models_id_fk" FOREIGN KEY ("model_id") REFERENCES "public"."models"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personal" ADD CONSTRAINT "personal_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_personalId_personal_id_fk" FOREIGN KEY ("personalId") REFERENCES "public"."personal"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_clientId_client_id_fk" FOREIGN KEY ("clientId") REFERENCES "public"."client"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_model_id_models_id_fk" FOREIGN KEY ("model_id") REFERENCES "public"."models"("id") ON DELETE set null ON UPDATE no action;