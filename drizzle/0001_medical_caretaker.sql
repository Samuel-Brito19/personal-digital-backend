ALTER TABLE "exerciseModule" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (sequence name "exerciseModule_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1);--> statement-breakpoint
ALTER TABLE "client" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "exercise" ADD COLUMN "link" text NOT NULL;--> statement-breakpoint
ALTER TABLE "exerciseModule" DROP COLUMN "link";--> statement-breakpoint
ALTER TABLE "exerciseWorkout" DROP COLUMN "link";