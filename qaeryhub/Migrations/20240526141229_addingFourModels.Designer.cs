﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using qaeryhub.Data;

#nullable disable

namespace qaeryhub.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20240526141229_addingFourModels")]
    partial class addingFourModels
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.30")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("qaeryhub.Models.Audits", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("PerformanceCategoryId")
                        .HasColumnType("integer");

                    b.Property<string>("TitleAudit")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Weight")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("PerformanceCategoryId");

                    b.ToTable("AuditsPerformances");
                });

            modelBuilder.Entity("qaeryhub.Models.GeneralPerformance", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("AverageValue")
                        .HasColumnType("integer");

                    b.Property<string>("FormFactor")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("GeneralValue")
                        .HasColumnType("integer");

                    b.Property<string>("SiteUrl")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("TimeTesting")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("GeneralPerformances");
                });

            modelBuilder.Entity("qaeryhub.Models.PerformanceCategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("CurentValue")
                        .HasColumnType("integer");

                    b.Property<int>("GeneralPerformanceId")
                        .HasColumnType("integer");

                    b.Property<string>("NamePerformanceCategory")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("GeneralPerformanceId");

                    b.ToTable("PerformanceInfos");
                });

            modelBuilder.Entity("qaeryhub.Models.Audits", b =>
                {
                    b.HasOne("qaeryhub.Models.PerformanceCategory", "performanceCategory")
                        .WithMany()
                        .HasForeignKey("PerformanceCategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("performanceCategory");
                });

            modelBuilder.Entity("qaeryhub.Models.PerformanceCategory", b =>
                {
                    b.HasOne("qaeryhub.Models.GeneralPerformance", "generalPerformance")
                        .WithMany()
                        .HasForeignKey("GeneralPerformanceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("generalPerformance");
                });
#pragma warning restore 612, 618
        }
    }
}